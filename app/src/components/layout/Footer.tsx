import { Link } from 'react-router-dom'

export function Footer() {
  return (
    <footer className="relative mt-24 border-t border-line bg-paper-raised">
      <div className="mx-auto max-w-6xl px-5 py-12 sm:px-8">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-md">
            <p className="display text-2xl text-ink">The Ledger</p>
            <p className="mt-2 text-sm leading-relaxed text-ink-soft">
              A five-week course in UK corporation tax and accounts for the
              founder who wants to actually understand their own books.
              Educational, not advice.
            </p>
          </div>
          <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-ink-soft">
            <Link className="hover:text-ink" to="/week-01">Week 1</Link>
            <Link className="hover:text-ink" to="/week-02">Week 2</Link>
            <Link className="hover:text-ink" to="/glossary">Glossary</Link>
          </nav>
        </div>
        <div className="mt-10 border-t border-line pt-5 text-xs text-ink-faint">
          <p>
            Worked figures belong to the fictional Acorn Studio Ltd. Rates current
            as of 28 May 2026. Always sanity-check the position on GOV.UK or with
            an accountant before relying on anything here for a real filing.
          </p>
        </div>
      </div>
    </footer>
  )
}
