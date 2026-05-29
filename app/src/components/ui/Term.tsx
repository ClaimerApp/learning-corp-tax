import { useId, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import type { ReactNode } from 'react'
import { glossaryBySlug } from '../../data/glossary'

/**
 * Inline glossary term. Wrap a bold term in <Term slug="aia">AIA</Term> to give
 * it a dotted underline and a hover/focus definition card.
 */
export function Term({
  slug,
  children,
}: {
  slug: string
  children: ReactNode
}) {
  const [open, setOpen] = useState(false)
  const id = useId()
  const timer = useRef<number | undefined>(undefined)
  const entry = glossaryBySlug[slug]

  const show = () => {
    window.clearTimeout(timer.current)
    setOpen(true)
  }
  const hide = () => {
    timer.current = window.setTimeout(() => setOpen(false), 80)
  }

  if (!entry) return <strong className="font-700">{children}</strong>

  return (
    <span
      className="relative inline-block"
      onMouseEnter={show}
      onMouseLeave={hide}
    >
      <button
        type="button"
        aria-describedby={open ? id : undefined}
        onFocus={show}
        onBlur={hide}
        className="cursor-help font-700 text-ink underline decoration-salmon/70 decoration-dotted decoration-2 underline-offset-4 transition-colors hover:text-salmon-deep focus:outline-none focus-visible:text-salmon-deep"
      >
        {children}
      </button>
      <AnimatePresence>
        {open && (
          <motion.span
            id={id}
            role="tooltip"
            initial={{ opacity: 0, y: 6, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 4, scale: 0.98 }}
            transition={{ duration: 0.16, ease: 'easeOut' }}
            className="absolute bottom-full left-1/2 z-40 mb-2 w-64 -translate-x-1/2 rounded-xl border border-line bg-paper-raised p-3.5 text-left shadow-lift"
          >
            <span className="mb-1 block font-mono text-[0.66rem] uppercase tracking-[0.12em] text-salmon-deep">
              {entry.term}
            </span>
            <span className="block text-[0.82rem] font-400 leading-snug text-ink-soft">
              {entry.short}
            </span>
            <span className="absolute left-1/2 top-full h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rotate-45 border-b border-r border-line bg-paper-raised" />
          </motion.span>
        )}
      </AnimatePresence>
    </span>
  )
}
