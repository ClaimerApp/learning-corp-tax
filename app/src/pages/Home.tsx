import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Page } from '../components/ui/Page'
import { Reveal } from '../components/ui/Reveal'
import { weeks } from '../data/course'
import { company } from '../data/acorn'
import { useProgress } from '../lib/progress'

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
}
const rise = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}

const outcomes = [
  'Read a trial balance and explain every line',
  'Produce a P&L and balance sheet that reconcile',
  'Post accruals, prepayments and depreciation',
  'Prepare FRS 105 micro-entity accounts',
  'Walk accounting profit to taxable profit',
  'Calculate corporation tax and marginal relief',
  'Map a trial balance to the CT600 boxes',
  'File with HMRC and Companies House',
]

export function Home() {
  const { isDone } = useProgress()
  return (
    <Page>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-ledger-lines opacity-[0.35]" />
        <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-salmon/10 blur-3xl" />
        <div className="relative mx-auto max-w-6xl px-5 pb-16 pt-16 sm:px-8 sm:pb-24 sm:pt-24">
          <motion.div variants={stagger} initial="hidden" animate="show" className="max-w-3xl">
            <motion.p
              variants={rise}
              className="mb-6 flex items-center gap-3 font-mono text-xs font-600 uppercase tracking-[0.2em] text-salmon-deep"
            >
              <span className="h-px w-8 bg-salmon" />
              A five-week course · UK limited companies
            </motion.p>

            <motion.h1
              variants={rise}
              className="display text-[3.4rem] font-700 leading-[0.98] tracking-tight text-ink sm:text-[5.2rem]"
            >
              Corporation tax,{' '}
              <span className="relative inline-block italic text-salmon">
                decoded
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  viewBox="0 0 200 12"
                  fill="none"
                  preserveAspectRatio="none"
                >
                  <motion.path
                    d="M2 8c40-6 120-6 196 1"
                    stroke="#E8745B"
                    strokeWidth="3"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1, delay: 0.8, ease: 'easeInOut' }}
                  />
                </svg>
              </span>
              .
            </motion.h1>

            <motion.p
              variants={rise}
              className="mt-7 max-w-xl text-lg leading-relaxed text-ink-soft sm:text-xl"
            >
              Stop nodding through accountant meetings. In five weeks, learn to read
              your own books, turn them into accounts, and file your own corporation
              tax — by following one small company, line by line.
            </motion.p>

            <motion.div variants={rise} className="mt-9 flex flex-wrap items-center gap-3">
              <Link
                to="/week-01"
                className="group inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-base font-600 text-paper shadow-lift transition-transform hover:scale-[1.03] active:scale-95"
              >
                Begin Week 1
                <span className="transition-transform group-hover:translate-x-0.5">→</span>
              </Link>
              <a
                href="#meet"
                className="inline-flex items-center gap-2 rounded-full border border-line bg-paper-raised px-6 py-3 text-base font-600 text-ink transition hover:border-ink-faint"
              >
                Meet the company
              </a>
            </motion.div>
          </motion.div>

          {/* floating equation motif */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="mt-16 flex flex-wrap items-center gap-3 font-mono text-sm text-ink-soft sm:text-base"
          >
            <Chip>Assets</Chip>
            <span className="text-ink-faint">=</span>
            <Chip>Liabilities</Chip>
            <span className="text-ink-faint">+</span>
            <Chip>Equity</Chip>
            <span className="ml-2 text-ink-faint">— and it always balances.</span>
          </motion.div>
        </div>
      </section>

      {/* MEET ACORN */}
      <section id="meet" className="scroll-mt-20 border-y border-line bg-paper-raised">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 sm:px-8 md:grid-cols-[1.1fr_1fr] md:items-center">
          <Reveal>
            <p className="font-mono text-xs font-600 uppercase tracking-[0.16em] text-salmon-deep">
              The company you'll follow
            </p>
            <h2 className="display mt-3 text-4xl font-700 leading-tight text-ink">
              Meet {company.name}
            </h2>
            <p className="mt-4 max-w-md text-lg leading-relaxed text-ink-soft">
              Every journal, every number and every form in this course belongs to
              one fictional company. Real understanding sticks better when it's
              attached to a particular set of books. You'll know Sarah and Acorn
              very well by the end.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="rounded-2xl border border-line bg-[#fcf8f0] p-6 shadow-card">
              <dl className="grid grid-cols-2 gap-x-6 gap-y-4 text-sm">
                <Fact k="Director" v={company.director} />
                <Fact k="Trade" v={company.trade} />
                <Fact k="Incorporated" v={company.incorporated} />
                <Fact k="Year-end" v={company.ard} />
                <Fact k="Books" v={`Xero · ${company.bank}`} />
                <Fact k="Turnover" v="£74,800" />
              </dl>
              <div className="mt-5 border-t border-line pt-4">
                <p className="font-mono text-xs text-ink-faint">
                  CRN {company.crn} · UTR {company.utr} · {company.office}
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* THE FIVE WEEKS */}
      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
        <Reveal>
          <div className="mb-10 flex items-end justify-between gap-4">
            <div>
              <p className="font-mono text-xs font-600 uppercase tracking-[0.16em] text-salmon-deep">
                The syllabus
              </p>
              <h2 className="display mt-2 text-4xl font-700 text-ink">Five weeks</h2>
            </div>
            <p className="hidden max-w-xs text-sm text-ink-soft sm:block">
              ~90 minutes each. Read it, watch the worked examples move, take the quiz.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {weeks.map((w, i) => (
            <Reveal key={w.slug} delay={i * 0.05}>
              <WeekCard week={w} done={isDone(w.slug)} />
            </Reveal>
          ))}
          <Reveal delay={weeks.length * 0.05}>
            <Link
              to="/glossary"
              className="flex h-full min-h-[11rem] flex-col justify-between rounded-2xl border border-dashed border-line-strong bg-paper-raised/60 p-5 transition hover:border-ink-faint hover:bg-paper-raised"
            >
              <span className="font-mono text-xs uppercase tracking-wider text-ink-faint">
                Reference
              </span>
              <span>
                <span className="display block text-2xl font-600 text-ink">The Glossary</span>
                <span className="mt-1 block text-sm text-ink-soft">
                  Every term in plain English. Hover any bold word as you read.
                </span>
              </span>
            </Link>
          </Reveal>
        </div>
      </section>

      {/* OUTCOMES */}
      <section className="border-t border-line bg-paper-raised">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
          <Reveal>
            <h2 className="display max-w-2xl text-3xl font-700 leading-tight text-ink sm:text-4xl">
              By the end, you'll be the kind of director who can read their own
              accounts — and spot a mistake before it costs money.
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-x-10 gap-y-3 sm:grid-cols-2">
            {outcomes.map((o, i) => (
              <Reveal key={o} delay={i * 0.04}>
                <div className="flex items-center gap-3 border-b border-line py-3">
                  <span className="tnum font-mono text-xs text-salmon-deep">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="text-ink">{o}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </Page>
  )
}

function WeekCard({ week, done }: { week: (typeof weeks)[number]; done: boolean }) {
  const inner = (
    <div
      className={`group relative flex h-full min-h-[11rem] flex-col justify-between overflow-hidden rounded-2xl border p-5 shadow-card transition ${
        week.available
          ? 'border-line bg-[#fcf8f0] hover:-translate-y-0.5 hover:shadow-lift'
          : 'border-line bg-paper-raised/60'
      }`}
    >
      <div className="flex items-start justify-between">
        <span className="tnum display text-5xl font-900 leading-none text-salmon/80">
          {String(week.n).padStart(2, '0')}
        </span>
        {done ? (
          <span className="rounded-full bg-sage-tint px-2.5 py-1 text-[0.65rem] font-700 uppercase tracking-wide text-sage-deep">
            Done
          </span>
        ) : !week.available ? (
          <span className="rounded-full bg-paper-sunk px-2.5 py-1 text-[0.65rem] font-700 uppercase tracking-wide text-ink-faint">
            Soon
          </span>
        ) : null}
      </div>
      <div>
        <p className="font-mono text-[0.66rem] uppercase tracking-[0.12em] text-ink-faint">
          {week.kicker}
        </p>
        <h3 className="display mt-1 text-xl font-600 leading-snug text-ink">{week.title}</h3>
        {week.available && (
          <span className="mt-3 inline-flex items-center gap-1 text-sm font-600 text-salmon-deep">
            Open
            <span className="transition-transform group-hover:translate-x-0.5">→</span>
          </span>
        )}
      </div>
    </div>
  )

  return week.available ? (
    <Link to={`/${week.slug}`} className="block h-full">
      {inner}
    </Link>
  ) : (
    <div className="h-full cursor-not-allowed">{inner}</div>
  )
}

function Fact({ k, v }: { k: string; v: string }) {
  return (
    <div>
      <dt className="text-[0.66rem] font-600 uppercase tracking-wider text-ink-faint">{k}</dt>
      <dd className="mt-0.5 font-600 text-ink">{v}</dd>
    </div>
  )
}

function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-lg border border-line bg-paper-raised px-3 py-1.5 font-600 text-ink shadow-sm">
      {children}
    </span>
  )
}
