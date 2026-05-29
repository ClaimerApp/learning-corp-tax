import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { Page } from '../components/ui/Page'
import { glossary } from '../data/glossary'

export function GlossaryPage() {
  const [q, setQ] = useState('')

  const filtered = useMemo(() => {
    const needle = q.trim().toLowerCase()
    if (!needle) return glossary
    return glossary.filter(
      (e) =>
        e.term.toLowerCase().includes(needle) ||
        e.long.toLowerCase().includes(needle),
    )
  }, [q])

  const letters = useMemo(
    () => [...new Set(filtered.map((e) => e.letter))].sort(),
    [filtered],
  )

  return (
    <Page>
      <div className="mx-auto max-w-3xl px-5 pb-10 pt-14 sm:px-8">
        <p className="font-mono text-xs font-600 uppercase tracking-[0.16em] text-salmon-deep">
          Reference
        </p>
        <h1 className="display mt-3 text-5xl font-700 tracking-tight text-ink">The Glossary</h1>
        <p className="mt-4 max-w-xl text-lg text-ink-soft">
          Every term the course uses, in plain English. {glossary.length} entries.
        </p>

        <div className="sticky top-16 z-20 mt-8 bg-paper/90 py-2 backdrop-blur">
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search terms or definitions…"
            className="w-full rounded-xl border border-line bg-paper-raised px-4 py-3 text-ink shadow-card outline-none ring-salmon/40 transition placeholder:text-ink-faint focus:ring-2"
          />
        </div>
      </div>

      <div className="mx-auto max-w-3xl px-5 pb-24 sm:px-8">
        {filtered.length === 0 && (
          <p className="py-12 text-center text-ink-soft">No terms match “{q}”.</p>
        )}
        {letters.map((letter) => (
          <section key={letter} className="mb-8">
            <h2 className="display sticky top-32 mb-3 text-2xl font-700 text-salmon/80">
              {letter}
            </h2>
            <div className="space-y-3">
              {filtered
                .filter((e) => e.letter === letter)
                .map((e) => (
                  <motion.div
                    key={e.slug}
                    id={e.slug}
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-40px' }}
                    transition={{ duration: 0.35 }}
                    className="scroll-mt-36 rounded-2xl border border-line bg-paper-raised p-5 shadow-card"
                  >
                    <h3 className="font-700 text-ink">{e.term}</h3>
                    <p className="mt-1.5 text-[0.95rem] leading-relaxed text-ink-soft">
                      {e.long}
                    </p>
                  </motion.div>
                ))}
            </div>
          </section>
        ))}
      </div>
    </Page>
  )
}
