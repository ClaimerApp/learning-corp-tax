import { useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import type { CompLine } from '../../data/week3'
import { ledger } from '../../lib/format'
import { AnimatedNumber } from '../ui/AnimatedNumber'

/** A live corporation-tax computation: toggle each adjustment, watch it settle. */
export function TaxComputationBuilder({
  title,
  subtitle,
  pbt,
  rate,
  lines,
  filed,
}: {
  title: string
  subtitle: string
  pbt: number
  rate: number
  lines: CompLine[]
  filed: { ttp: number; ct: number }
}) {
  const [on, setOn] = useState<Set<string>>(new Set())

  const toggle = (id: string) =>
    setOn((prev) => {
      const next = new Set(prev)
      next.has(id) ? next.delete(id) : next.add(id)
      return next
    })

  const active = useMemo(() => lines.filter((l) => on.has(l.id)), [lines, on])

  const addbacks = active.filter((l) => l.kind === 'addback')
  const allowances = active.filter((l) => l.kind === 'allowance')

  const addbackTotal = addbacks.reduce((s, l) => s + l.amount, 0)
  const allowanceTotal = allowances.reduce((s, l) => s + l.amount, 0)
  const subtotal = pbt + addbackTotal
  const ttp = subtotal - allowanceTotal
  const ct = Math.round(ttp * rate)

  const matches = on.size === lines.length

  return (
    <div className="not-prose my-8 overflow-hidden rounded-2xl border border-line bg-paper-raised shadow-card">
      <div className="border-b border-line bg-paper-sunk px-5 py-3">
        <p className="font-mono text-xs font-600 uppercase tracking-[0.14em] text-salmon-deep">
          {title}
        </p>
        <p className="mt-1 text-sm text-ink-soft">{subtitle}</p>
      </div>

      {/* live KPIs */}
      <div className="grid gap-px bg-line sm:grid-cols-2">
        <Kpi label="Tax-adjusted profit (TTP)">
          <AnimatedNumber value={ttp} className="text-lg font-600 text-ink" />
        </Kpi>
        <Kpi label="Corporation tax payable">
          <AnimatedNumber value={ct} className="text-lg font-600 text-ink" />
        </Kpi>
      </div>

      {/* adjustment toggles */}
      <div className="border-t border-line p-5">
        <p className="mb-3 text-xs font-600 uppercase tracking-wider text-ink-faint">
          Apply each adjustment - toggle on or off
        </p>
        <div className="flex flex-col gap-2">
          {lines.map((l) => {
            const isOn = on.has(l.id)
            return (
              <button
                key={l.id}
                onClick={() => toggle(l.id)}
                className={`group flex items-start gap-3 rounded-xl border px-4 py-3 text-left transition ${
                  isOn
                    ? 'border-salmon/50 bg-salmon-tint/40'
                    : 'border-line bg-paper hover:border-ink-faint'
                }`}
              >
                <span
                  className={`mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-md border transition ${
                    isOn ? 'border-salmon bg-salmon text-white' : 'border-line bg-paper-raised'
                  }`}
                >
                  {isOn && (
                    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12l4 4L19 7" />
                    </svg>
                  )}
                </span>
                <span>
                  <span className="block text-sm font-600 text-ink">{l.label}</span>
                  <span className="mt-0.5 block text-xs leading-snug text-ink-soft">
                    {l.note}
                  </span>
                </span>
              </button>
            )
          })}
        </div>
      </div>

      {/* the stacked computation */}
      <div className="border-t border-line bg-[#fcf8f0] px-5 py-4">
        <table className="w-full font-mono text-[0.86rem]">
          <tbody>
            <CompRow label="Profit before tax (per accounts)" value={pbt} />

            <AnimatePresence initial={false}>
              {addbacks.length > 0 && (
                <SectionLabel key="addhdr" text="Add: disallowable expenses" />
              )}
              {addbacks.map((l) => (
                <CompRow key={l.id} indent label={stripAmount(l.label)} value={l.amount} sign="+" />
              ))}
            </AnimatePresence>

            <AnimatePresence initial={false}>
              {addbacks.length > 0 && (
                <CompRow key="subtotal" label="Subtotal" value={subtotal} rule emphasise />
              )}
            </AnimatePresence>

            <AnimatePresence initial={false}>
              {allowances.length > 0 && (
                <SectionLabel key="allhdr" text="Less: capital allowances" />
              )}
              {allowances.map((l) => (
                <CompRow
                  key={l.id}
                  indent
                  label={stripAmount(l.label)}
                  value={l.amount}
                  sign="-"
                />
              ))}
            </AnimatePresence>

            <CompRow label="Tax-adjusted trading profit (TTP)" value={ttp} rule emphasise />
            <CompRow label={`Corporation tax at ${(rate * 100).toFixed(0)}%`} value={ct} sign="@" />
          </tbody>
        </table>

        <AnimatePresence>
          {matches && (
            <motion.div
              initial={{ opacity: 0, y: 8, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="mt-4 flex items-center gap-2.5 rounded-xl bg-sage-tint px-4 py-3 text-sage-deep"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5 flex-none" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12l4 4L19 7" />
              </svg>
              <span className="text-sm font-600">
                Matches Acorn's filed computation: TTP {ledger(filed.ttp)}, CT {ledger(filed.ct)}.
              </span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

/** Drop a trailing "£633" etc from a toggle label for the clean computation row. */
function stripAmount(label: string): string {
  return label.replace(/\s*\(?£[\d,]+\)?\s*$/, '').trim()
}

function SectionLabel({ text }: { text: string }) {
  return (
    <motion.tr
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <td colSpan={2} className="pt-2.5 pb-1 text-[0.66rem] uppercase tracking-wider text-ink-faint">
        {text}
      </td>
    </motion.tr>
  )
}

function CompRow({
  label,
  value,
  sign,
  indent = false,
  rule = false,
  emphasise = false,
}: {
  label: string
  value: number
  sign?: '+' | '-' | '@'
  indent?: boolean
  rule?: boolean
  emphasise?: boolean
}) {
  const prefix = sign === '-' ? '(' : ''
  const suffix = sign === '-' ? ')' : ''
  return (
    <motion.tr
      initial={{ opacity: 0, backgroundColor: 'rgba(232,116,91,0.18)' }}
      animate={{ opacity: 1, backgroundColor: 'rgba(0,0,0,0)' }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className={rule ? 'border-t border-ink/40' : ''}
    >
      <td
        className={`py-1.5 ${indent ? 'pl-5' : ''} ${
          emphasise ? 'font-700 text-ink' : 'text-ink-soft'
        }`}
      >
        {label}
      </td>
      <td
        className={`tnum py-1.5 text-right ${emphasise ? 'font-700 text-ink' : 'text-ink'}`}
      >
        {prefix}
        {ledger(value)}
        {suffix}
      </td>
    </motion.tr>
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
