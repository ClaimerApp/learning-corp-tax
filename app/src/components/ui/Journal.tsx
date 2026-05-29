import { ledger } from '../../lib/format'

export interface JournalLine {
  account: string
  debit?: number
  credit?: number
}

/** A double-entry journal, set like a ledger extract. */
export function Journal({
  caption,
  lines,
  narrative,
}: {
  caption?: string
  lines: JournalLine[]
  narrative?: string
}) {
  return (
    <figure className="my-6 overflow-hidden rounded-xl border border-line bg-[#fcf8f0] shadow-card">
      {caption && (
        <figcaption className="border-b border-line bg-paper-sunk px-4 py-2 font-mono text-[0.72rem] uppercase tracking-[0.1em] text-ink-soft">
          {caption}
        </figcaption>
      )}
      <table className="w-full font-mono text-[0.86rem]">
        <thead>
          <tr className="text-[0.66rem] uppercase tracking-wider text-ink-faint">
            <th className="px-4 py-2 text-left font-500">Account</th>
            <th className="px-4 py-2 text-right font-500">Dr</th>
            <th className="px-4 py-2 text-right font-500">Cr</th>
          </tr>
        </thead>
        <tbody>
          {lines.map((l, i) => {
            const isCredit = l.credit != null
            return (
              <tr key={i} className="border-t border-line/60">
                <td
                  className={`px-4 py-2 ${isCredit ? 'pl-9 text-ink-soft' : 'text-ink'}`}
                >
                  {l.account}
                </td>
                <td className="tnum px-4 py-2 text-right text-ink">
                  {l.debit != null ? ledger(l.debit) : ''}
                </td>
                <td className="tnum px-4 py-2 text-right text-ink">
                  {l.credit != null ? ledger(l.credit) : ''}
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
      {narrative && (
        <p className="border-t border-line/60 px-4 py-2 text-[0.8rem] italic text-ink-faint">
          {narrative}
        </p>
      )}
    </figure>
  )
}
