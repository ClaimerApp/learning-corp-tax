import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import {
  s455,
  s455Rates,
  dlaBalance,
  beneficialLoanThreshold,
  s455RepayBy,
} from '../../data/week5'
import { AnimatedNumber } from '../ui/AnimatedNumber'

const MAX = 20000
const STEP = 100

/** Director's loan and the s.455 charge: slide the balance, switch the rate. */
export function S455Calculator() {
  const [balance, setBalance] = useState(dlaBalance)
  const [recent, setRecent] = useState(true)

  const rateInfo = recent ? s455Rates.current : s455Rates.prior
  const charge = Math.round(s455(balance, rateInfo.rate))
  const beneficial = balance > beneficialLoanThreshold

  return (
    <div className="not-prose my-8 overflow-hidden rounded-2xl border border-line bg-paper-raised shadow-card">
      <div className="border-b border-line bg-paper-sunk px-5 py-3">
        <p className="font-mono text-xs font-600 uppercase tracking-[0.14em] text-salmon-deep">
          Director's loan and s.455
        </p>
        <p className="mt-1 text-sm text-ink-soft">
          An overdrawn loan unrepaid by {s455RepayBy} triggers s.455.
        </p>
      </div>

      <div className="grid gap-px bg-line sm:grid-cols-2">
        <Kpi label="DLA overdrawn at year-end">
          <AnimatedNumber value={balance} className="text-lg font-600 text-ink" />
        </Kpi>
        <Kpi label="s.455 charge">
          <AnimatedNumber value={charge} className="text-lg font-600 text-ink" />
        </Kpi>
      </div>

      {/* slider */}
      <div className="border-t border-line px-5 pt-5 pb-4">
        <div className="mb-2 flex items-center justify-between">
          <span className="text-xs font-600 uppercase tracking-wider text-ink-faint">
            Drag the overdrawn balance
          </span>
          <span className="tnum font-mono text-xs text-ink-soft">£0 - £20,000</span>
        </div>
        <input
          type="range"
          min={0}
          max={MAX}
          step={STEP}
          value={balance}
          onChange={(e) => setBalance(Number(e.target.value))}
          className="w-full accent-salmon"
          aria-label="Overdrawn director's loan balance"
        />

        {/* rate toggle */}
        <div className="mt-4 flex flex-col gap-2 sm:flex-row">
          <RatePill active={recent} onClick={() => setRecent(true)} label={s455Rates.current.label} />
          <RatePill active={!recent} onClick={() => setRecent(false)} label={s455Rates.prior.label} />
        </div>
      </div>

      {/* beneficial-loan flag */}
      <AnimatePresence>
        {beneficial && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-t border-line bg-salmon-tint/50"
          >
            <p className="px-5 py-3 text-[0.82rem] font-600 text-salmon-deep">
              Over £10,000 - a beneficial loan. A benefit-in-kind can arise on the director
              personally at HMRC's official rate.
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="border-t border-line bg-[#fcf8f0] px-5 py-3">
        <p className="text-[0.82rem] leading-relaxed text-ink-soft">
          s.455 is reclaimable when the loan is repaid, but the refund is delayed. For
          Acorn's £4,200 at 35.75%, the charge is{' '}
          <strong className="font-700 text-ink">£1,502</strong>, reported on the CT600A.
        </p>
      </div>
    </div>
  )
}

function RatePill({
  active,
  onClick,
  label,
}: {
  active: boolean
  onClick: () => void
  label: string
}) {
  return (
    <button
      onClick={onClick}
      className={`flex-1 rounded-xl border px-3 py-2 text-left text-xs font-600 transition ${
        active
          ? 'border-salmon bg-salmon-tint/60 text-ink'
          : 'border-line bg-paper text-ink-soft hover:border-ink-faint'
      }`}
    >
      {label}
    </button>
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
