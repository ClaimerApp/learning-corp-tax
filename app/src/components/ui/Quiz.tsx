import { useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import type { ReactNode } from 'react'

export interface QuizQ {
  q: ReactNode
  a: ReactNode
}

type Verdict = 'right' | 'wrong' | undefined

export function Quiz({ questions }: { questions: QuizQ[] }) {
  const [verdicts, setVerdicts] = useState<Verdict[]>(
    () => Array(questions.length).fill(undefined),
  )

  const { answered, right } = useMemo(() => {
    const answered = verdicts.filter(Boolean).length
    const right = verdicts.filter((v) => v === 'right').length
    return { answered, right }
  }, [verdicts])

  const setVerdict = (i: number, v: Verdict) =>
    setVerdicts((prev) => prev.map((p, idx) => (idx === i ? v : p)))

  const done = answered === questions.length

  return (
    <div className="not-prose">
      <div className="mb-6 flex items-center justify-between">
        <p className="font-mono text-xs font-600 uppercase tracking-[0.14em] text-salmon-deep">
          Mini quiz · {questions.length} questions
        </p>
        <p className="tnum font-mono text-sm text-ink-soft">
          {right}/{questions.length} self-marked
        </p>
      </div>

      <div className="space-y-4">
        {questions.map((item, i) => (
          <QuizCard
            key={i}
            n={i + 1}
            item={item}
            verdict={verdicts[i]}
            onVerdict={(v) => setVerdict(i, v)}
          />
        ))}
      </div>

      <AnimatePresence>
        {done && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-6 rounded-2xl border border-line bg-paper-raised p-5 text-center shadow-card"
          >
            <p className="display text-2xl text-ink">
              {right === questions.length
                ? 'Spotless. The books balance.'
                : right >= questions.length - 1
                  ? 'Strong. One to revisit.'
                  : 'Worth another read — then come back.'}
            </p>
            <p className="mt-1 text-sm text-ink-soft">
              You marked {right} of {questions.length} correct.
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

function QuizCard({
  n,
  item,
  verdict,
  onVerdict,
}: {
  n: number
  item: QuizQ
  verdict: Verdict
  onVerdict: (v: Verdict) => void
}) {
  const [open, setOpen] = useState(false)
  return (
    <div className="overflow-hidden rounded-2xl border border-line bg-paper-raised shadow-card">
      <div className="flex gap-4 p-5">
        <span className="tnum display text-2xl font-700 text-salmon/70">
          {String(n).padStart(2, '0')}
        </span>
        <div className="flex-1">
          <div className="text-[0.98rem] leading-relaxed text-ink [&_code]:rounded [&_code]:bg-paper-sunk [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:font-mono [&_code]:text-[0.85em]">
            {item.q}
          </div>

          {!open && (
            <button
              onClick={() => setOpen(true)}
              className="mt-4 rounded-full bg-ink px-4 py-1.5 text-sm font-600 text-paper transition-transform hover:scale-[1.03] active:scale-95"
            >
              Reveal answer
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
                <div className="mt-4 rounded-xl border border-line bg-[#fcf8f0] p-4 text-[0.92rem] leading-relaxed text-ink-soft [&_strong]:font-700 [&_strong]:text-ink">
                  {item.a}
                </div>
                <div className="mt-3 flex items-center gap-2">
                  <span className="mr-1 text-xs text-ink-faint">How did you do?</span>
                  <Mark
                    active={verdict === 'right'}
                    tone="right"
                    onClick={() => onVerdict('right')}
                  >
                    Got it
                  </Mark>
                  <Mark
                    active={verdict === 'wrong'}
                    tone="wrong"
                    onClick={() => onVerdict('wrong')}
                  >
                    Not quite
                  </Mark>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}

function Mark({
  active,
  tone,
  onClick,
  children,
}: {
  active: boolean
  tone: 'right' | 'wrong'
  onClick: () => void
  children: ReactNode
}) {
  const on =
    tone === 'right'
      ? 'bg-sage text-white ring-sage'
      : 'bg-salmon text-white ring-salmon'
  const off = 'bg-paper text-ink-soft ring-line hover:ring-ink-faint'
  return (
    <button
      onClick={onClick}
      className={`rounded-full px-3 py-1 text-xs font-600 ring-1 transition ${
        active ? on : off
      }`}
    >
      {children}
    </button>
  )
}
