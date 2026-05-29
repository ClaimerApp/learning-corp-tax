import { useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import type { Family } from '../../data/acorn'
import { ledger } from '../../lib/format'
import { AnimatedNumber } from '../ui/AnimatedNumber'

export interface SimAccount {
  code: string
  name: string
  family: Family
  /** signed opening balance: debit positive, credit negative */
  opening: number
}

export interface SimPosting {
  code: string
  name?: string
  family?: Family
  debit?: number
  credit?: number
}

export interface SimJournal {
  id: string
  label: string
  narrative: string
  postings: SimPosting[]
}

const FAMILY_ORDER: Family[] = ['asset', 'liability', 'equity', 'income', 'expense']

export function TrialBalanceSimulator({
  title,
  subtitle,
  opening,
  journals,
  showProfit = true,
  showNetAssets = true,
  profitLabel = 'Profit for the year',
}: {
  title: string
  subtitle: string
  opening: SimAccount[]
  journals: SimJournal[]
  showProfit?: boolean
  showNetAssets?: boolean
  profitLabel?: string
}) {
  const [posted, setPosted] = useState<Set<string>>(new Set())
  const [expanded, setExpanded] = useState(false)

  // the full set of accounts that can ever appear, in a stable order
  const accounts = useMemo(() => {
    const map = new Map<string, { code: string; name: string; family: Family }>()
    for (const a of opening) map.set(a.code, { code: a.code, name: a.name, family: a.family })
    for (const j of journals)
      for (const p of j.postings)
        if (!map.has(p.code) && p.name && p.family)
          map.set(p.code, { code: p.code, name: p.name, family: p.family })
    return [...map.values()].sort(
      (a, b) =>
        FAMILY_ORDER.indexOf(a.family) - FAMILY_ORDER.indexOf(b.family) ||
        a.code.localeCompare(b.code),
    )
  }, [opening, journals])

  const { balances, touched } = useMemo(() => {
    const balances = new Map<string, number>()
    const touched = new Set<string>()
    for (const a of opening) balances.set(a.code, a.opening)
    for (const j of journals) {
      if (!posted.has(j.id)) continue
      for (const p of j.postings) {
        const delta = (p.debit ?? 0) - (p.credit ?? 0)
        balances.set(p.code, (balances.get(p.code) ?? 0) + delta)
        touched.add(p.code)
      }
    }
    return { balances, touched }
  }, [opening, journals, posted])

  const drTotal = sumIf(balances, (b) => (b > 0 ? b : 0))
  const crTotal = sumIf(balances, (b) => (b < 0 ? -b : 0))

  const profit = useMemo(() => {
    let income = 0
    let expense = 0
    for (const a of accounts) {
      const b = balances.get(a.code) ?? 0
      if (a.family === 'income') income += -b
      if (a.family === 'expense') expense += b
    }
    return income - expense
  }, [accounts, balances])

  const netAssets = useMemo(() => {
    let assets = 0
    let liab = 0
    for (const a of accounts) {
      const b = balances.get(a.code) ?? 0
      if (a.family === 'asset') assets += b
      if (a.family === 'liability') liab += -b
    }
    return assets - liab
  }, [accounts, balances])

  const toggle = (id: string) =>
    setPosted((prev) => {
      const next = new Set(prev)
      next.has(id) ? next.delete(id) : next.add(id)
      return next
    })

  const visible = accounts.filter((a) => (balances.get(a.code) ?? 0) !== 0)
  const balanced = Math.round(drTotal) === Math.round(crTotal)

  return (
    <div className="not-prose my-8 overflow-hidden rounded-2xl border border-line bg-paper-raised shadow-card">
      <div className="border-b border-line bg-paper-sunk px-5 py-3">
        <p className="font-mono text-xs font-600 uppercase tracking-[0.14em] text-salmon-deep">
          {title}
        </p>
        <p className="mt-1 text-sm text-ink-soft">{subtitle}</p>
      </div>

      {/* live KPIs */}
      <div className="grid gap-px bg-line sm:grid-cols-3">
        <Kpi label="Trial balance">
          <div className="flex items-baseline gap-2">
            <span className="tnum font-mono text-lg font-600 text-ink">
              {ledger(Math.round(drTotal))}
            </span>
            <span
              className={`rounded-full px-2 py-0.5 text-[0.65rem] font-700 ${
                balanced ? 'bg-sage-tint text-sage-deep' : 'bg-salmon-tint text-salmon-deep'
              }`}
            >
              {balanced ? 'Dr = Cr ✓' : 'out of balance'}
            </span>
          </div>
        </Kpi>
        {showProfit && (
          <Kpi label={profitLabel}>
            <AnimatedNumber value={profit} className="text-lg font-600 text-ink" />
          </Kpi>
        )}
        {showNetAssets && (
          <Kpi label="Net assets">
            <AnimatedNumber value={netAssets} className="text-lg font-600 text-ink" />
          </Kpi>
        )}
      </div>

      {/* journal toggles */}
      <div className="border-t border-line p-5">
        <p className="mb-3 text-xs font-600 uppercase tracking-wider text-ink-faint">
          Post a journal — toggle on or off
        </p>
        <div className="flex flex-col gap-2">
          {journals.map((j) => {
            const on = posted.has(j.id)
            return (
              <button
                key={j.id}
                onClick={() => toggle(j.id)}
                className={`group flex items-start gap-3 rounded-xl border px-4 py-3 text-left transition ${
                  on
                    ? 'border-salmon/50 bg-salmon-tint/40'
                    : 'border-line bg-paper hover:border-ink-faint'
                }`}
              >
                <span
                  className={`mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-md border transition ${
                    on ? 'border-salmon bg-salmon text-white' : 'border-line bg-paper-raised'
                  }`}
                >
                  {on && (
                    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12l4 4L19 7" />
                    </svg>
                  )}
                </span>
                <span>
                  <span className="block text-sm font-600 text-ink">{j.label}</span>
                  <span className="mt-0.5 block text-xs leading-snug text-ink-soft">
                    {j.narrative}
                  </span>
                </span>
              </button>
            )
          })}
        </div>
      </div>

      {/* the live trial balance */}
      <div className="border-t border-line">
        <button
          onClick={() => setExpanded((e) => !e)}
          className="flex w-full items-center justify-between px-5 py-3 text-left"
        >
          <span className="font-mono text-xs font-600 uppercase tracking-wider text-ink-soft">
            {expanded ? 'Hide' : 'Show'} the live trial balance · {visible.length} accounts
          </span>
          <motion.span animate={{ rotate: expanded ? 180 : 0 }} className="text-ink-faint">
            ▾
          </motion.span>
        </button>
        <AnimatePresence initial={false}>
          {expanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden"
            >
              <table className="w-full font-mono text-[0.82rem]">
                <thead className="text-[0.62rem] uppercase tracking-wider text-ink-faint">
                  <tr className="border-y border-line bg-paper-sunk">
                    <th className="px-5 py-2 text-left font-500">Account</th>
                    <th className="px-3 py-2 text-right font-500">Dr</th>
                    <th className="px-5 py-2 text-right font-500">Cr</th>
                  </tr>
                </thead>
                <tbody>
                  <AnimatePresence initial={false}>
                    {visible.map((a) => {
                      const b = balances.get(a.code) ?? 0
                      return (
                        <motion.tr
                          key={a.code}
                          initial={{ opacity: 0, backgroundColor: 'rgba(232,116,91,0.18)' }}
                          animate={{ opacity: 1, backgroundColor: 'rgba(0,0,0,0)' }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.5 }}
                          className={`border-b border-line/50 ${
                            touched.has(a.code) ? 'font-600' : ''
                          }`}
                        >
                          <td className="px-5 py-1.5 text-ink">
                            <span className="mr-2 text-[0.62rem] text-ink-faint">{a.code}</span>
                            {a.name}
                            <span className="ml-2 text-[0.6rem] uppercase text-ink-faint">
                              {a.family}
                            </span>
                          </td>
                          <td className="tnum px-3 py-1.5 text-right text-ink">
                            {b > 0 ? ledger(b) : ''}
                          </td>
                          <td className="tnum px-5 py-1.5 text-right text-ink">
                            {b < 0 ? ledger(-b) : ''}
                          </td>
                        </motion.tr>
                      )
                    })}
                  </AnimatePresence>
                </tbody>
                <tfoot>
                  <tr className="border-t-2 border-ink bg-paper-sunk font-700">
                    <td className="px-5 py-2 text-ink">Totals</td>
                    <td className="tnum px-3 py-2 text-right text-ink">{ledger(Math.round(drTotal))}</td>
                    <td className="tnum px-5 py-2 text-right text-ink">{ledger(Math.round(crTotal))}</td>
                  </tr>
                </tfoot>
              </table>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

function Kpi({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="bg-paper-raised px-5 py-4">
      <p className="mb-1 text-[0.65rem] font-600 uppercase tracking-wider text-ink-faint">
        {label}
      </p>
      {children}
    </div>
  )
}

function sumIf(map: Map<string, number>, fn: (b: number) => number): number {
  let t = 0
  for (const b of map.values()) t += fn(b)
  return t
}
