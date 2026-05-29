import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { rndGates } from '../../data/week5'

type Answer = boolean | undefined

/** The three CIRD gates: all must be yes to qualify. Acorn's plugin fails them. */
export function RnDTest() {
  const [answers, setAnswers] = useState<Answer[]>(() =>
    Array(rndGates.length).fill(undefined),
  )

  const set = (i: number, v: boolean) =>
    setAnswers((prev) => prev.map((p, idx) => (idx === i ? v : p)))

  const allAnswered = answers.every((a) => a !== undefined)
  const qualifies = allAnswered && answers.every((a) => a === true)

  return (
    <div className="not-prose my-8 overflow-hidden rounded-2xl border border-line bg-paper-raised shadow-card">
      <div className="border-b border-line bg-paper-sunk px-5 py-3">
        <p className="font-mono text-xs font-600 uppercase tracking-[0.14em] text-salmon-deep">
          Does the Figma plugin qualify for R&amp;D relief?
        </p>
        <p className="mt-1 text-sm text-ink-soft">
          All three gates must be yes. Answer honestly for Acorn.
        </p>
      </div>

      <div className="divide-y divide-line/60">
        {rndGates.map((gate, i) => {
          const a = answers[i]
          const correctlyNo = a === false
          return (
            <div key={gate.id} className="px-5 py-4">
              <div className="flex items-start gap-3">
                <span className="tnum mt-0.5 font-mono text-xs font-700 text-salmon-deep">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div className="flex-1">
                  <p className="text-[0.95rem] font-600 text-ink">{gate.question}</p>
                  <div className="mt-2.5 flex gap-2">
                    <Choice active={a === true} onClick={() => set(i, true)}>
                      Yes
                    </Choice>
                    <Choice active={a === false} onClick={() => set(i, false)}>
                      No
                    </Choice>
                  </div>
                  <AnimatePresence>
                    {a !== undefined && (
                      <motion.p
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className={`mt-2.5 overflow-hidden text-[0.82rem] leading-relaxed ${
                          correctlyNo ? 'text-ink-soft' : 'text-salmon-deep'
                        }`}
                      >
                        {correctlyNo
                          ? gate.detail
                          : 'For Acorn, the honest answer is no. ' + gate.detail}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      <AnimatePresence>
        {allAnswered && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className={`overflow-hidden border-t border-line ${
              qualifies ? 'bg-sage-tint/60' : 'bg-salmon-tint/50'
            }`}
          >
            <p
              className={`px-5 py-4 text-sm font-600 ${
                qualifies ? 'text-sage-deep' : 'text-salmon-deep'
              }`}
            >
              {qualifies
                ? 'All three gates pass - this may qualify. Document it carefully and claim.'
                : 'Not qualifying R&D. The £8,000 is a normal business cost. Internal tooling rarely qualifies, and HMRC actively compliance-checks small claims.'}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

function Choice({
  active,
  onClick,
  children,
}: {
  active: boolean
  onClick: () => void
  children: React.ReactNode
}) {
  return (
    <button
      onClick={onClick}
      className={`rounded-full px-4 py-1.5 text-sm font-600 ring-1 transition ${
        active
          ? 'bg-ink text-paper ring-ink'
          : 'bg-paper text-ink-soft ring-line hover:ring-ink-faint'
      }`}
    >
      {children}
    </button>
  )
}
