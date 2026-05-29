import { useState } from 'react'
import { motion } from 'framer-motion'
import { bandFor, bandLimits, ctPayable, effectiveRate } from '../../data/week3'
import { AnimatedNumber } from '../ui/AnimatedNumber'

const MAX = 300000
const STEP = 1000
const { lower, upper } = bandLimits

const BANDS: Record<
  ReturnType<typeof bandFor>,
  { label: string; chip: string }
> = {
  small: { label: 'Small profits rate - 19%', chip: 'bg-sage-tint text-sage-deep' },
  marginal: { label: 'Marginal relief band', chip: 'bg-gold-tint text-[#6e5320]' },
  main: { label: 'Main rate - 25%', chip: 'bg-salmon-tint text-salmon-deep' },
}

/** Drag TTP and watch corporation tax, the effective rate, and the band move. */
export function MarginalReliefExplorer({
  title,
  subtitle,
}: {
  title: string
  subtitle: string
}) {
  const [ttp, setTtp] = useState(150000)

  const ct = Math.round(ctPayable(ttp))
  const rate = effectiveRate(ttp)
  const band = bandFor(ttp)
  const marker = (ttp / MAX) * 100

  // segment widths along the 0..MAX axis
  const smallPct = (lower / MAX) * 100
  const marginalPct = ((upper - lower) / MAX) * 100
  const mainPct = ((MAX - upper) / MAX) * 100

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
        <Kpi label="Taxable total profits">
          <AnimatedNumber value={ttp} className="text-lg font-600 text-ink" />
        </Kpi>
        <Kpi label="Corporation tax payable">
          <AnimatedNumber value={ct} className="text-lg font-600 text-ink" />
        </Kpi>
        <Kpi label="Effective rate">
          <span className="tnum font-mono text-lg font-600 text-ink">
            {rate.toFixed(1)}%
          </span>
        </Kpi>
      </div>

      {/* slider */}
      <div className="border-t border-line px-5 pt-5 pb-2">
        <div className="mb-2 flex items-center justify-between">
          <span className="text-xs font-600 uppercase tracking-wider text-ink-faint">
            Drag to set TTP
          </span>
          <span
            className={`rounded-full px-2.5 py-1 text-[0.66rem] font-700 ${BANDS[band].chip}`}
          >
            {BANDS[band].label}
          </span>
        </div>
        <input
          type="range"
          min={0}
          max={MAX}
          step={STEP}
          value={ttp}
          onChange={(e) => setTtp(Number(e.target.value))}
          className="w-full accent-salmon"
          aria-label="Taxable total profits"
        />
      </div>

      {/* band bar */}
      <div className="px-5 pb-5 pt-2">
        <div className="relative h-9 w-full overflow-hidden rounded-lg border border-line">
          <div className="flex h-full w-full">
            <Segment width={smallPct} className="bg-sage-tint" label="19%" />
            <Segment width={marginalPct} className="bg-gold-tint" label="marginal" />
            <Segment width={mainPct} className="bg-salmon-tint" label="25%" />
          </div>
          <motion.div
            className="absolute top-0 h-full w-0.5 bg-ink"
            animate={{ left: `${marker}%` }}
            transition={{ type: 'spring', stiffness: 120, damping: 24, mass: 0.6 }}
          >
            <span className="absolute -top-0.5 left-1/2 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-ink" />
          </motion.div>
        </div>
        <div className="mt-1.5 flex justify-between font-mono text-[0.62rem] text-ink-faint">
          <span>£0</span>
          <span>£50k</span>
          <span>£250k</span>
          <span>£300k</span>
        </div>
      </div>

      <div className="border-t border-line bg-[#fcf8f0] px-5 py-3">
        <p className="text-[0.82rem] leading-relaxed text-ink-soft">
          Inside the band every extra £1 of profit is taxed at an effective marginal rate of{' '}
          <strong className="font-700 text-ink">26.5%</strong>: 25% headline plus the 1.5p of
          marginal relief you lose on each pound.
        </p>
      </div>
    </div>
  )
}

function Segment({
  width,
  className,
  label,
}: {
  width: number
  className: string
  label: string
}) {
  return (
    <div
      className={`flex items-center justify-center ${className}`}
      style={{ width: `${width}%` }}
    >
      <span className="font-mono text-[0.6rem] uppercase tracking-wider text-ink-soft">
        {label}
      </span>
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
