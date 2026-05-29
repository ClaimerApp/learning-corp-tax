import { Link } from 'react-router-dom'
import { weeks } from '../../data/course'
import { useProgress } from '../../lib/progress'

export function WeekNav({ slug }: { slug: string }) {
  const { isDone, toggle } = useProgress()
  const idx = weeks.findIndex((w) => w.slug === slug)
  const prev = weeks[idx - 1]
  const next = weeks[idx + 1]
  const done = isDone(slug)

  return (
    <div className="mx-auto max-w-2xl px-5 py-12 sm:px-0">
      <button
        onClick={() => toggle(slug)}
        className={`mb-8 flex w-full items-center justify-center gap-2.5 rounded-2xl px-5 py-4 text-base font-600 transition ${
          done
            ? 'bg-sage text-white shadow-lift'
            : 'border border-line bg-paper-raised text-ink shadow-card hover:border-ink-faint'
        }`}
      >
        <span
          className={`flex h-6 w-6 items-center justify-center rounded-full border ${
            done ? 'border-white/60 bg-white/20' : 'border-line'
          }`}
        >
          {done && (
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12l4 4L19 7" />
            </svg>
          )}
        </span>
        {done ? 'Week complete — nice work' : 'Mark this week complete'}
      </button>

      <div className="flex items-stretch justify-between gap-3">
        {prev ? (
          <Link
            to={`/${prev.slug}`}
            className="group flex flex-1 flex-col rounded-xl border border-line bg-paper-raised px-4 py-3 transition hover:border-ink-faint"
          >
            <span className="text-xs text-ink-faint">← Previous</span>
            <span className="mt-0.5 font-600 text-ink">{prev.kicker}</span>
          </Link>
        ) : (
          <span className="flex-1" />
        )}
        {next ? (
          <Link
            to={`/${next.slug}`}
            className="group flex flex-1 flex-col items-end rounded-xl border border-line bg-paper-raised px-4 py-3 text-right transition hover:border-ink-faint"
          >
            <span className="text-xs text-ink-faint">Next →</span>
            <span className="mt-0.5 font-600 text-ink">{next.kicker}</span>
          </Link>
        ) : (
          <span className="flex-1" />
        )}
      </div>
    </div>
  )
}
