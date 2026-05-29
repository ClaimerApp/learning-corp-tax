import { motion } from 'framer-motion'
import { timeline } from '../../data/week4'

/** Acorn's deadline runway from period end to the CT600 filing date. */
export function FilingTimeline() {
  return (
    <div className="not-prose my-8 overflow-hidden rounded-2xl border border-line bg-paper-raised shadow-card">
      <div className="border-b border-line bg-paper-sunk px-5 py-3">
        <p className="font-mono text-xs font-600 uppercase tracking-[0.14em] text-salmon-deep">
          The deadline runway · Acorn Studio Ltd
        </p>
        <p className="mt-1 text-sm text-ink-soft">
          Year ended 31 March 2026. Note the tax falls due before the return does.
        </p>
      </div>

      {/* Desktop: horizontal runway */}
      <div className="hidden px-5 py-10 md:block">
        <div className="relative">
          <div className="absolute left-0 right-0 top-1/2 h-px -translate-y-1/2 bg-line-strong" />
          <motion.div
            className="absolute left-0 top-1/2 h-0.5 -translate-y-1/2 bg-salmon"
            initial={{ width: 0 }}
            whileInView={{ width: '100%' }}
            viewport={{ once: true }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          />
          <div className="relative flex justify-between">
            {timeline.map((m, i) => (
              <motion.div
                key={m.id}
                className="flex w-40 flex-col items-center text-center"
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.18, duration: 0.5 }}
                style={{
                  position: 'absolute',
                  left: `${m.t * 100}%`,
                  transform: 'translateX(-50%)',
                }}
              >
                <span
                  className={`mb-3 flex h-4 w-4 items-center justify-center rounded-full ring-4 ${
                    m.emphasise
                      ? 'bg-salmon ring-salmon-tint'
                      : 'bg-ink ring-paper-sunk'
                  }`}
                />
                <span className="tnum font-mono text-xs font-700 text-ink">{m.date}</span>
                <span className="mt-1 text-[0.8rem] leading-snug text-ink-soft">
                  {m.obligation}
                </span>
                <span
                  className={`mt-0.5 text-[0.68rem] ${
                    m.emphasise ? 'font-600 text-salmon-deep' : 'text-ink-faint'
                  }`}
                >
                  {m.who}
                </span>
              </motion.div>
            ))}
          </div>
          {/* spacer to give the absolute markers height */}
          <div className="h-28" />
        </div>
      </div>

      {/* Mobile: vertical list */}
      <div className="md:hidden">
        {timeline.map((m, i) => (
          <motion.div
            key={m.id}
            className="flex gap-4 border-b border-line/60 px-5 py-4 last:border-0"
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.4 }}
          >
            <span
              className={`mt-1 flex h-3.5 w-3.5 flex-none rounded-full ring-4 ${
                m.emphasise ? 'bg-salmon ring-salmon-tint' : 'bg-ink ring-paper-sunk'
              }`}
            />
            <div>
              <p className="tnum font-mono text-xs font-700 text-ink">{m.date}</p>
              <p className="text-[0.9rem] text-ink-soft">{m.obligation}</p>
              <p
                className={`text-[0.72rem] ${
                  m.emphasise ? 'font-600 text-salmon-deep' : 'text-ink-faint'
                }`}
              >
                {m.who}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
