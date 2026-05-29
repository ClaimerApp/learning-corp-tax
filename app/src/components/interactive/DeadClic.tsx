import { useState } from 'react'
import { motion, LayoutGroup } from 'framer-motion'

interface Tile {
  id: string
  label: string
  side: 'debit' | 'credit'
  hint: string
}

const TILES: Tile[] = [
  { id: 'drawings', label: 'Drawings / Dividends', side: 'debit', hint: 'Taking value out — DEA' },
  { id: 'expenses', label: 'Expenses', side: 'debit', hint: 'Costs of trading — DEA' },
  { id: 'assets', label: 'Assets', side: 'debit', hint: 'What you own — DEA' },
  { id: 'liabilities', label: 'Liabilities', side: 'credit', hint: 'What you owe — CLIC' },
  { id: 'income', label: 'Income', side: 'credit', hint: 'What you earn — CLIC' },
  { id: 'capital', label: 'Capital / Equity', side: 'credit', hint: "Owner's stake — CLIC" },
]

export function DeadClic() {
  // each tile: 'pool' | 'debit' | 'credit'
  const [placed, setPlaced] = useState<Record<string, 'pool' | 'debit' | 'credit'>>(
    () => Object.fromEntries(TILES.map((t) => [t.id, 'pool'])),
  )
  const [peeked, setPeeked] = useState<string | null>(null)

  const place = (t: Tile) => setPlaced((p) => ({ ...p, [t.id]: t.side }))
  const reset = () => setPlaced(Object.fromEntries(TILES.map((t) => [t.id, 'pool'])))

  const pool = TILES.filter((t) => placed[t.id] === 'pool')
  const debit = TILES.filter((t) => placed[t.id] === 'debit')
  const credit = TILES.filter((t) => placed[t.id] === 'credit')
  const allPlaced = pool.length === 0

  return (
    <div className="not-prose my-8 rounded-2xl border border-line bg-paper-raised p-5 shadow-card sm:p-6">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <p className="font-mono text-xs font-600 uppercase tracking-[0.14em] text-salmon-deep">
            DEAD CLIC · which side grows?
          </p>
          <p className="mt-1 text-sm text-ink-soft">
            Click each family to send it to the column it{' '}
            <em>increases</em> on.
          </p>
        </div>
        {allPlaced && (
          <button
            onClick={reset}
            className="rounded-full border border-line px-3 py-1.5 text-xs font-600 text-ink-soft hover:text-ink"
          >
            Reset
          </button>
        )}
      </div>

      <LayoutGroup>
        {/* pool */}
        <div className="mb-4 flex min-h-[3rem] flex-wrap gap-2">
          {pool.map((t) => (
            <motion.button
              layoutId={t.id}
              key={t.id}
              onClick={() => place(t)}
              onMouseEnter={() => setPeeked(t.id)}
              onMouseLeave={() => setPeeked(null)}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.96 }}
              className="rounded-xl border border-line bg-paper px-3.5 py-2 text-sm font-600 text-ink shadow-sm"
            >
              {t.label}
            </motion.button>
          ))}
          {pool.length === 0 && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-sm font-600 text-sage-deep"
            >
              That's the whole rule. DEA on the left, CLIC on the right.
            </motion.p>
          )}
        </div>

        <div className="grid grid-cols-2 gap-3">
          <Column title="Goes up with a DEBIT" mnemonic="D E A" tone="sage" tiles={debit} peeked={peeked} />
          <Column title="Goes up with a CREDIT" mnemonic="C L I C" tone="salmon" tiles={credit} peeked={peeked} />
        </div>
      </LayoutGroup>
    </div>
  )
}

function Column({
  title,
  mnemonic,
  tone,
  tiles,
  peeked,
}: {
  title: string
  mnemonic: string
  tone: 'sage' | 'salmon'
  tiles: Tile[]
  peeked: string | null
}) {
  const ring = tone === 'sage' ? 'ring-sage/30' : 'ring-salmon/30'
  const head = tone === 'sage' ? 'text-sage-deep' : 'text-salmon-deep'
  const bg = tone === 'sage' ? 'bg-sage-tint/50' : 'bg-salmon-tint/40'
  return (
    <div className={`min-h-[8rem] rounded-xl ${bg} p-3 ring-1 ${ring}`}>
      <div className="mb-2 flex items-baseline justify-between">
        <span className={`text-[0.7rem] font-700 uppercase tracking-[0.1em] ${head}`}>
          {title}
        </span>
        <span className={`font-mono text-xs font-600 tracking-[0.3em] ${head}`}>
          {mnemonic}
        </span>
      </div>
      <div className="flex flex-col gap-2">
        {tiles.map((t) => (
          <motion.div
            layoutId={t.id}
            key={t.id}
            className="rounded-lg border border-line bg-paper-raised px-3 py-2 text-sm font-600 text-ink shadow-sm"
          >
            {t.label}
            {peeked === t.id && (
              <span className="ml-1 text-xs font-400 text-ink-faint">· {t.hint}</span>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  )
}
