import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { issues } from '../../data/week5'
import type { Issue, Severity } from '../../data/week5'
import { ledger } from '../../lib/format'

const sevStyle: Record<Severity, { label: string; chip: string }> = {
  recode: { label: 'Recode', chip: 'bg-salmon-tint text-salmon-deep' },
  reclassify: { label: 'Reclassify', chip: 'bg-gold-tint text-[#6e5320]' },
  journal: { label: 'Journal', chip: 'bg-sage-tint text-sage-deep' },
  reconcile: { label: 'Reconcile', chip: 'bg-paper-sunk text-ink-soft' },
}

/** Open Sarah's books with an accountant's eye: find each issue, reveal the fix. */
export function XeroHealthCheck() {
  const [reviewed, setReviewed] = useState<Set<string>>(new Set())

  const markReviewed = (id: string) =>
    setReviewed((prev) => {
      if (prev.has(id)) return prev
      const next = new Set(prev)
      next.add(id)
      return next
    })

  const done = reviewed.size
  const pct = Math.round((done / issues.length) * 100)

  return (
    <div className="not-prose my-8 overflow-hidden rounded-2xl border border-line bg-paper-raised shadow-card">
      <div className="border-b border-line bg-paper-sunk px-5 py-3">
        <div className="flex items-center justify-between">
          <div>
            <p className="font-mono text-xs font-600 uppercase tracking-[0.14em] text-salmon-deep">
              Xero file health check · Acorn Studio Ltd
            </p>
            <p className="mt-1 text-sm text-ink-soft">
              Diagnose each finding before trusting the figures.
            </p>
          </div>
          <p className="tnum font-mono text-sm font-600 text-ink">
            {done} / {issues.length} reviewed
          </p>
        </div>
        <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-line">
          <motion.div
            className="h-full bg-sage"
            animate={{ width: `${pct}%` }}
            transition={{ type: 'spring', stiffness: 120, damping: 24 }}
          />
        </div>
      </div>

      <div className="grid gap-px bg-line sm:grid-cols-2">
        {issues.map((issue) => (
          <IssueCard
            key={issue.id}
            issue={issue}
            onReveal={() => markReviewed(issue.id)}
          />
        ))}
      </div>

      <AnimatePresence>
        {done === issues.length && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-t border-line bg-sage-tint/50"
          >
            <p className="px-5 py-4 text-sm font-600 text-sage-deep">
              Every finding diagnosed. The books can be trusted - now prepare the accounts.
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

function IssueCard({
  issue,
  onReveal,
}: {
  issue: Issue
  onReveal: () => void
}) {
  const [open, setOpen] = useState(false)
  const sev = sevStyle[issue.severity]

  const toggle = () => {
    setOpen((o) => !o)
    onReveal()
  }

  return (
    <div className="bg-paper-raised p-5">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-sm font-700 text-ink">{issue.title}</p>
          <p className="mt-1 text-[0.82rem] leading-snug text-ink-soft">{issue.symptom}</p>
        </div>
        <span
          className={`flex-none rounded-full px-2 py-0.5 text-[0.6rem] font-700 uppercase tracking-wide ${sev.chip}`}
        >
          {sev.label}
        </span>
      </div>

      {!open ? (
        <button
          onClick={toggle}
          className="mt-3 rounded-full bg-ink px-3.5 py-1.5 text-xs font-600 text-paper transition-transform hover:scale-[1.03] active:scale-95"
        >
          Diagnose
        </button>
      ) : (
        <button
          onClick={() => setOpen(false)}
          className="mt-3 text-xs font-600 text-ink-faint underline-offset-2 hover:underline"
        >
          Hide
        </button>
      )}

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="mt-3 space-y-2 rounded-xl border border-line bg-[#fcf8f0] p-3.5">
              <p className="text-[0.82rem] leading-relaxed text-ink-soft">
                <span className="font-700 text-ink">Why it matters. </span>
                {issue.why}
              </p>
              <p className="text-[0.82rem] leading-relaxed text-ink-soft">
                <span className="font-700 text-ink">The fix. </span>
                {issue.fix}
              </p>
              {issue.journal && (
                <table className="mt-1 w-full font-mono text-[0.76rem]">
                  <tbody>
                    {issue.journal.map((l, i) => {
                      const isCredit = l.credit != null
                      return (
                        <tr key={i} className="border-t border-line/60">
                          <td className={`py-1 ${isCredit ? 'pl-6 text-ink-soft' : 'text-ink'}`}>
                            {l.account}
                          </td>
                          <td className="tnum py-1 text-right text-ink">
                            {l.debit != null ? ledger(l.debit) : ''}
                          </td>
                          <td className="tnum py-1 text-right text-ink">
                            {l.credit != null ? ledger(l.credit) : ''}
                          </td>
                        </tr>
                      )
                    })}
                  </tbody>
                </table>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
