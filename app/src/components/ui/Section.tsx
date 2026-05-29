import type { ReactNode } from 'react'
import { Reveal } from './Reveal'

export function Section({
  id,
  index,
  title,
  children,
}: {
  id?: string
  index?: number
  title: string
  children: ReactNode
}) {
  return (
    <section id={id} className="scroll-mt-24 py-10">
      <Reveal>
        <h2 className="mb-5 flex items-baseline gap-3">
          {index !== undefined && (
            <span className="tnum font-mono text-sm font-500 text-salmon-deep">
              {String(index).padStart(2, '0')}
            </span>
          )}
          <span className="display text-[1.9rem] font-600 leading-tight text-ink">
            {title}
          </span>
        </h2>
      </Reveal>
      <div className="prose-ledger">{children}</div>
    </section>
  )
}

export function Lede({ children }: { children: ReactNode }) {
  return (
    <p className="display mb-8 text-[1.35rem] font-400 leading-snug text-ink/90">
      {children}
    </p>
  )
}

/** Pull-quote / big idea, broadsheet style. */
export function Aside({ children }: { children: ReactNode }) {
  return (
    <Reveal>
      <p className="display my-9 border-l-2 border-salmon pl-5 text-[1.45rem] font-400 italic leading-snug text-ink">
        {children}
      </p>
    </Reveal>
  )
}
