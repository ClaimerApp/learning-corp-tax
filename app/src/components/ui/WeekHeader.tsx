import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import type { WeekMeta } from '../../data/course'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07, delayChildren: 0.05 } },
}
const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

function jumpTo(id: string) {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export function WeekHeader({ week, next }: { week: WeekMeta; next?: WeekMeta }) {
  return (
    <header className="relative overflow-hidden border-b border-line">
      {/* faint ledger ruling in the header backdrop */}
      <div className="pointer-events-none absolute inset-0 bg-ledger-lines opacity-40" />
      <div className="relative mx-auto max-w-2xl px-5 pb-12 pt-14 sm:px-0">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.div variants={item} className="mb-5 flex items-center gap-3">
            <span className="tnum display text-[3.2rem] font-900 leading-none text-salmon">
              {String(week.n).padStart(2, '0')}
            </span>
            <span className="text-sm font-600 uppercase tracking-[0.18em] text-ink-soft">
              {week.kicker}
            </span>
          </motion.div>

          <motion.h1
            variants={item}
            className="display max-w-xl text-[2.6rem] font-700 leading-[1.05] tracking-tight text-ink sm:text-[3.1rem]"
          >
            {week.title}
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-5 max-w-xl text-lg leading-relaxed text-ink-soft"
          >
            {week.blurb}
          </motion.p>

          <motion.div variants={item} className="mt-6 flex flex-wrap items-center gap-3 text-sm">
            <Pill>~{week.minutes} min read</Pill>
            <Pill>Acorn Studio Ltd · FY26</Pill>
          </motion.div>

          {week.objectives.length > 0 && (
            <motion.div
              variants={item}
              className="mt-9 rounded-2xl border border-line bg-paper-raised p-6 shadow-card"
            >
              <p className="mb-4 flex items-center gap-2 font-mono text-xs font-600 uppercase tracking-[0.14em] text-salmon-deep">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-salmon" />
                What you'll know by the end
              </p>
              <ul className="grid gap-1 sm:grid-cols-1">
                {week.objectives.map((o, i) => {
                  const anchor = week.objectiveAnchors?.[i]
                  const inner = (
                    <>
                      <span className="tnum mt-0.5 font-mono text-xs text-ink-faint">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <span>{o}</span>
                    </>
                  )
                  if (!anchor) {
                    return (
                      <li
                        key={i}
                        className="flex gap-3 py-1 text-[0.97rem] leading-snug text-ink"
                      >
                        {inner}
                      </li>
                    )
                  }
                  return (
                    <li key={i}>
                      <button
                        type="button"
                        onClick={() => jumpTo(anchor)}
                        className="group flex w-full items-start gap-3 rounded-lg px-2 py-1 text-left text-[0.97rem] leading-snug text-ink transition hover:bg-paper-sunk"
                      >
                        {inner}
                        <span className="ml-auto self-center text-ink-faint opacity-0 transition group-hover:translate-x-0.5 group-hover:text-salmon-deep group-hover:opacity-100">
                          →
                        </span>
                      </button>
                    </li>
                  )
                })}
              </ul>
            </motion.div>
          )}

          {next && (
            <motion.div variants={item} className="mt-6 text-sm text-ink-faint">
              Up next:{' '}
              <Link
                to={`/${next.slug}`}
                className="font-600 text-salmon-deep underline-offset-2 hover:underline"
              >
                {next.kicker}
              </Link>
            </motion.div>
          )}
        </motion.div>
      </div>
    </header>
  )
}

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-line bg-paper px-3 py-1 font-500 text-ink-soft">
      {children}
    </span>
  )
}
