import { trialBalance, sumColumn } from '../../data/acorn'
import { ledger } from '../../lib/format'

const familyDot: Record<string, string> = {
  asset: 'bg-sage',
  liability: 'bg-salmon',
  equity: 'bg-gold',
  income: 'bg-sage-deep',
  expense: 'bg-salmon-deep',
}

/** Acorn Studio Ltd's master trial balance at 31 March 2026, set as a ledger. */
export function LedgerTable() {
  const dr = sumColumn(trialBalance, 'debit')
  const cr = sumColumn(trialBalance, 'credit')

  return (
    <figure className="not-prose my-8 overflow-hidden rounded-2xl border border-line bg-[#fcf8f0] shadow-card">
      <figcaption className="flex items-center justify-between border-b border-line bg-paper-sunk px-5 py-3">
        <span className="font-mono text-xs font-600 uppercase tracking-[0.12em] text-ink-soft">
          Acorn Studio Ltd · Trial balance
        </span>
        <span className="font-mono text-xs text-ink-faint">at 31 March 2026</span>
      </figcaption>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[34rem] font-mono text-[0.82rem]">
          <thead className="text-[0.62rem] uppercase tracking-wider text-ink-faint">
            <tr className="border-b border-line">
              <th className="px-5 py-2 text-left font-500">Account</th>
              <th className="px-3 py-2 text-right font-500">Debit</th>
              <th className="px-5 py-2 text-right font-500">Credit</th>
            </tr>
          </thead>
          <tbody>
            {trialBalance.map((l) => (
              <tr key={l.code} className="group border-b border-line/50 hover:bg-paper-sunk/60">
                <td className="px-5 py-1.5">
                  <span className="flex items-center gap-2.5">
                    <span
                      className={`h-1.5 w-1.5 flex-none rounded-full ${familyDot[l.family]}`}
                      title={l.family}
                    />
                    <span className="text-[0.6rem] text-ink-faint">{l.code}</span>
                    <span className="text-ink">{l.name}</span>
                  </span>
                  {l.note && (
                    <span className="ml-7 block text-[0.68rem] italic text-ink-faint opacity-0 transition group-hover:opacity-100">
                      {l.note}
                    </span>
                  )}
                </td>
                <td className="tnum px-3 py-1.5 text-right text-ink">
                  {l.debit != null ? ledger(l.debit) : ''}
                </td>
                <td className="tnum px-5 py-1.5 text-right text-ink">
                  {l.credit != null ? ledger(l.credit) : ''}
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr className="border-t-2 border-ink bg-paper-sunk font-700">
              <td className="px-5 py-2.5 text-ink">Totals</td>
              <td className="tnum px-3 py-2.5 text-right text-ink">{ledger(dr)}</td>
              <td className="tnum px-5 py-2.5 text-right text-ink">{ledger(cr)}</td>
            </tr>
          </tfoot>
        </table>
      </div>
      <p className="border-t border-line bg-paper-raised px-5 py-2.5 text-center text-[0.78rem] text-sage-deep">
        Debits equal credits at {ledger(dr)}. The trial balance balances. Hover any row for a note.
      </p>
    </figure>
  )
}
