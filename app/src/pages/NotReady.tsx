import { Link } from 'react-router-dom'
import { Page } from '../components/ui/Page'
import { weekBySlug } from '../data/course'

export function NotReady({ slug }: { slug: string }) {
  const week = weekBySlug[slug]
  return (
    <Page>
      <div className="mx-auto flex min-h-[60vh] max-w-2xl flex-col items-center justify-center px-5 text-center">
        <span className="tnum display text-7xl font-900 text-salmon/70">
          {String(week.n).padStart(2, '0')}
        </span>
        <p className="mt-3 font-mono text-xs font-600 uppercase tracking-[0.16em] text-ink-faint">
          {week.kicker}
        </p>
        <h1 className="display mt-3 text-4xl font-700 leading-tight text-ink">{week.title}</h1>
        <p className="mt-4 max-w-md text-ink-soft">{week.blurb}</p>
        <p className="mt-6 rounded-full bg-paper-raised px-4 py-2 text-sm font-600 text-ink-soft ring-1 ring-line">
          In production — this module is being built next.
        </p>
        <Link
          to="/"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-sm font-600 text-paper transition-transform hover:scale-[1.03]"
        >
          ← Back to the syllabus
        </Link>
      </div>
    </Page>
  )
}
