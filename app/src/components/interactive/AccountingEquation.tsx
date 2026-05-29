import { useState } from 'react'
import { motion } from 'framer-motion'
import { AnimatedNumber } from '../ui/AnimatedNumber'

interface Step {
  label: string
  dAssets: number
  dLiab: number
  dEquity: number
  note: string
}

const STEPS: Step[] = [
  { label: 'Start', dAssets: 0, dLiab: 0, dEquity: 0, note: 'An empty company. Nothing owned, nothing owed.' },
  { label: 'Sarah buys £100 of shares', dAssets: 100, dLiab: 0, dEquity: 100, note: 'Cash in (asset ↑) paid for by the owner (equity ↑).' },
  { label: 'Client pays a £1,200 invoice', dAssets: 1200, dLiab: 0, dEquity: 1200, note: 'Cash in (asset ↑); the profit belongs to the owner (equity ↑).' },
  { label: 'Pay £300 rent', dAssets: -300, dLiab: 0, dEquity: -300, note: 'Cash out (asset ↓); a cost reduces the owner’s stake (equity ↓).' },
  { label: 'Subcontractor invoices £500', dAssets: 0, dLiab: 500, dEquity: -500, note: 'A bill owed (liability ↑); the cost reduces equity. No cash moved yet — that’s accruals.' },
]

export function AccountingEquation() {
  const [i, setI] = useState(0)

  const assets = STEPS.slice(0, i + 1).reduce((t, s) => t + s.dAssets, 0)
  const liab = STEPS.slice(0, i + 1).reduce((t, s) => t + s.dLiab, 0)
  const equity = STEPS.slice(0, i + 1).reduce((t, s) => t + s.dEquity, 0)
  const right = liab + equity
  const max = Math.max(assets, right, 1)

  return (
    <div className="not-prose my-8 overflow-hidden rounded-2xl border border-line bg-paper-raised shadow-card">
      <div className="border-b border-line bg-paper-sunk px-5 py-3">
        <p className="font-mono text-xs font-600 uppercase tracking-[0.14em] text-salmon-deep">
          Assets = Liabilities + Equity
        </p>
        <p className="mt-1 text-sm text-ink-soft">
          Step through Acorn's first transactions. The two sides never drift apart.
        </p>
      </div>

      <div className="p-5 sm:p-6">
        {/* the two pans of the scale */}
        <div className="grid items-end gap-4 sm:grid-cols-[1fr_auto_1fr]">
          <Bar
            label="Assets"
            total={assets}
            segments={[{ value: assets, color: '#5E7A5B' }]}
            max={max}
          />
          <div className="hidden pb-6 text-center sm:block">
            <span className="display text-3xl text-ink-faint">=</span>
          </div>
          <Bar
            label="Liabilities + Equity"
            total={right}
            segments={[
              { value: liab, color: '#E8745B' },
              { value: equity, color: '#B0863C' },
            ]}
            max={max}
          />
        </div>

        <div className="mt-5 flex items-center justify-center gap-2">
          <Dot color="#5E7A5B" label="Assets" />
          <Dot color="#E8745B" label="Liabilities" />
          <Dot color="#B0863C" label="Equity" />
        </div>

        {/* balanced check */}
        <motion.div
          key={`${assets}-${right}`}
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="mx-auto mt-5 w-fit rounded-full bg-sage-tint px-4 py-1.5 text-sm font-700 text-sage-deep"
        >
          In balance: {assets.toLocaleString('en-GB')} = {right.toLocaleString('en-GB')} ✓
        </motion.div>

        <p className="mt-5 min-h-[2.5rem] text-center text-[0.95rem] leading-snug text-ink-soft">
          <span className="font-600 text-ink">{STEPS[i].label}.</span>{' '}
          {STEPS[i].note}
        </p>

        <div className="mt-4 flex items-center justify-center gap-3">
          <button
            onClick={() => setI((n) => Math.max(0, n - 1))}
            disabled={i === 0}
            className="rounded-full border border-line px-4 py-1.5 text-sm font-600 text-ink-soft transition enabled:hover:text-ink disabled:opacity-40"
          >
            Back
          </button>
          <span className="tnum font-mono text-xs text-ink-faint">
            {i + 1} / {STEPS.length}
          </span>
          {i < STEPS.length - 1 ? (
            <button
              onClick={() => setI((n) => Math.min(STEPS.length - 1, n + 1))}
              className="rounded-full bg-ink px-4 py-1.5 text-sm font-600 text-paper transition-transform hover:scale-[1.03] active:scale-95"
            >
              Next transaction
            </button>
          ) : (
            <button
              onClick={() => setI(0)}
              className="rounded-full bg-salmon px-4 py-1.5 text-sm font-600 text-white transition-transform hover:scale-[1.03] active:scale-95"
            >
              Replay
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

function Bar({
  label,
  total,
  segments,
  max,
}: {
  label: string
  total: number
  segments: { value: number; color: string }[]
  max: number
}) {
  return (
    <div>
      <div className="mb-2 flex items-baseline justify-between">
        <span className="text-xs font-700 uppercase tracking-wider text-ink-soft">
          {label}
        </span>
        <AnimatedNumber value={total} className="font-mono text-sm font-600 text-ink" />
      </div>
      <div className="flex h-10 w-full overflow-hidden rounded-lg bg-paper-sunk ring-1 ring-line">
        {segments.map((s, idx) => (
          <motion.div
            key={idx}
            animate={{ width: `${(s.value / max) * 100}%` }}
            transition={{ type: 'spring', stiffness: 140, damping: 22 }}
            style={{ backgroundColor: s.color }}
            className="h-full"
          />
        ))}
      </div>
    </div>
  )
}

function Dot({ color, label }: { color: string; label: string }) {
  return (
    <span className="flex items-center gap-1.5 text-xs text-ink-soft">
      <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: color }} />
      {label}
    </span>
  )
}
