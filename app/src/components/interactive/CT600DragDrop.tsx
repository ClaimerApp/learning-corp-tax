import { useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { matchPairs } from '../../data/week4'
import type { MatchPair } from '../../data/week4'

/**
 * Map the figures to the CT600.
 * Click a figure chip to select it, then click a box to drop it.
 * Correct matches lock with a sage success state; wrong drops shake in salmon.
 * Fully click/tap driven - no native HTML5 drag.
 */
export function CT600DragDrop() {
  const [selected, setSelected] = useState<string | null>(null)
  /** box number -> figure id that has been correctly placed. */
  const [placed, setPlaced] = useState<Record<number, string>>({})
  /** box number that just rejected a wrong drop, for the shake animation. */
  const [wrongBox, setWrongBox] = useState<number | null>(null)

  const placedIds = useMemo(() => new Set(Object.values(placed)), [placed])
  const allDone = Object.keys(placed).length === matchPairs.length

  function drop(box: number) {
    if (selected === null) return
    if (placed[box] !== undefined) return
    const pair = matchPairs.find((p) => p.id === selected)
    if (!pair) return
    if (pair.box === box) {
      setPlaced((prev) => ({ ...prev, [box]: pair.id }))
      setSelected(null)
    } else {
      setWrongBox(box)
      window.setTimeout(() => setWrongBox(null), 500)
    }
  }

  function reset() {
    setPlaced({})
    setSelected(null)
    setWrongBox(null)
  }

  return (
    <div className="not-prose my-8 overflow-hidden rounded-2xl border border-line bg-paper-raised shadow-card">
      <div className="flex items-center justify-between border-b border-line bg-paper-sunk px-5 py-3">
        <div>
          <p className="font-mono text-xs font-600 uppercase tracking-[0.14em] text-salmon-deep">
            Map the figures to the CT600
          </p>
          <p className="mt-1 text-sm text-ink-soft">
            Pick a figure, then tap its correct box.
          </p>
        </div>
        <button
          onClick={reset}
          className="rounded-full border border-line bg-paper px-3 py-1 text-xs font-600 text-ink-soft transition hover:border-ink-faint"
        >
          Reset
        </button>
      </div>

      <div className="grid gap-px bg-line md:grid-cols-2">
        {/* Figure chips */}
        <div className="bg-paper-raised p-5">
          <p className="mb-3 text-[0.65rem] font-600 uppercase tracking-wider text-ink-faint">
            Source figures
          </p>
          <div className="flex flex-col gap-2">
            {matchPairs.map((pair) => {
              const done = placedIds.has(pair.id)
              const active = selected === pair.id
              return (
                <button
                  key={pair.id}
                  disabled={done}
                  onClick={() => setSelected(active ? null : pair.id)}
                  className={`flex items-center justify-between rounded-xl border px-4 py-3 text-left transition ${
                    done
                      ? 'cursor-default border-sage/50 bg-sage-tint/40 opacity-60'
                      : active
                        ? 'border-salmon bg-salmon-tint/60 shadow-card'
                        : 'border-line bg-paper hover:border-ink-faint'
                  }`}
                >
                  <span>
                    <span className="block text-sm font-600 text-ink">{pair.figure}</span>
                    <span className="tnum font-mono text-xs text-ink-soft">{pair.value}</span>
                  </span>
                  {done && <CheckMark />}
                </button>
              )
            })}
          </div>
        </div>

        {/* Target boxes */}
        <div className="bg-paper-raised p-5">
          <p className="mb-3 text-[0.65rem] font-600 uppercase tracking-wider text-ink-faint">
            CT600 boxes
          </p>
          <div className="flex flex-col gap-2">
            {matchPairs.map((pair) => (
              <BoxTarget
                key={pair.box}
                pair={pair}
                filledBy={placed[pair.box]}
                isWrong={wrongBox === pair.box}
                armed={selected !== null && placed[pair.box] === undefined}
                onDrop={() => drop(pair.box)}
              />
            ))}
          </div>
        </div>
      </div>

      <AnimatePresence>
        {allDone && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-line bg-sage-tint/50"
          >
            <div className="flex items-center gap-3 px-5 py-4">
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', stiffness: 260, damping: 16 }}
                className="flex h-7 w-7 flex-none items-center justify-center rounded-full bg-sage text-white"
              >
                <CheckMark />
              </motion.span>
              <p className="text-sm font-600 text-sage-deep">
                CT600 complete. Every figure sits in its box - ready to submit.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

function BoxTarget({
  pair,
  filledBy,
  isWrong,
  armed,
  onDrop,
}: {
  pair: MatchPair
  filledBy: string | undefined
  isWrong: boolean
  armed: boolean
  onDrop: () => void
}) {
  const filled = filledBy !== undefined
  return (
    <motion.button
      disabled={filled}
      onClick={onDrop}
      animate={isWrong ? { x: [0, -7, 7, -5, 5, 0] } : { x: 0 }}
      transition={{ duration: 0.45 }}
      className={`flex items-center justify-between rounded-xl border px-4 py-3 text-left transition ${
        filled
          ? 'cursor-default border-sage/50 bg-sage-tint/40'
          : isWrong
            ? 'border-salmon bg-salmon-tint/70'
            : armed
              ? 'border-dashed border-salmon/70 bg-paper hover:bg-salmon-tint/30'
              : 'border-dashed border-line bg-paper'
      }`}
    >
      <span>
        <span className="tnum mr-2 font-mono text-xs font-600 text-salmon-deep">
          Box {pair.box}
        </span>
        <span className="text-sm text-ink-soft">{pair.boxLabel}</span>
      </span>
      <span className="ml-3 flex-none">
        {filled ? (
          <span className="tnum font-mono text-sm font-700 text-sage-deep">{pair.value}</span>
        ) : (
          <span className="font-mono text-[0.65rem] uppercase tracking-wider text-ink-faint">
            empty
          </span>
        )}
      </span>
    </motion.button>
  )
}

function CheckMark() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4 text-current"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12l4 4L19 7" />
    </svg>
  )
}
