import type { ReactNode } from 'react'

type Kind = 'tip' | 'warning' | 'example' | 'note'

const styles: Record<
  Kind,
  { label: string; ring: string; bar: string; chip: string; icon: ReactNode }
> = {
  tip: {
    label: 'Tip',
    ring: 'ring-sage/40',
    bar: 'bg-sage',
    chip: 'bg-sage-tint text-sage-deep',
    icon: <PathIcon d="M9 12l2 2 4-4" />,
  },
  warning: {
    label: 'Watch out',
    ring: 'ring-salmon/45',
    bar: 'bg-salmon',
    chip: 'bg-salmon-tint text-salmon-deep',
    icon: <PathIcon d="M12 8v5M12 16.5v.5" />,
  },
  example: {
    label: 'Worked example',
    ring: 'ring-gold/45',
    bar: 'bg-gold',
    chip: 'bg-gold-tint text-[#6e5320]',
    icon: <PathIcon d="M8 6h8M8 10h8M8 14h5" />,
  },
  note: {
    label: 'Note',
    ring: 'ring-line',
    bar: 'bg-ink-faint',
    chip: 'bg-paper-sunk text-ink-soft',
    icon: <PathIcon d="M12 8v.5M12 11v5" />,
  },
}

export function Callout({
  kind = 'note',
  title,
  children,
}: {
  kind?: Kind
  title?: string
  children: ReactNode
}) {
  const s = styles[kind]
  return (
    <div
      className={`relative my-7 overflow-hidden rounded-2xl bg-paper-raised pl-5 pr-5 py-4 shadow-card ring-1 ${s.ring}`}
    >
      <span className={`absolute inset-y-0 left-0 w-1 ${s.bar}`} />
      <div className="mb-1.5 flex items-center gap-2">
        <span
          className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[0.66rem] font-700 uppercase tracking-[0.1em] ${s.chip}`}
        >
          {s.icon}
          {s.label}
        </span>
        {title && (
          <span className="font-600 text-ink">{title}</span>
        )}
      </div>
      <div className="text-[0.97rem] leading-relaxed text-ink-soft [&_strong]:font-700 [&_strong]:text-ink">
        {children}
      </div>
    </div>
  )
}

function PathIcon({ d }: { d: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-3.5 w-3.5"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d={d} />
    </svg>
  )
}
