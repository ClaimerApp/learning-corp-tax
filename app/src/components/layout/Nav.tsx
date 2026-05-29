import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'
import { weeks } from '../../data/course'

export function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-line/80 bg-paper/85 backdrop-blur-md'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3.5 sm:px-8">
        <Link to="/" className="group flex items-center gap-2.5">
          <Mark />
          <span className="display text-[1.35rem] font-600 leading-none tracking-tight text-ink">
            The Ledger
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {weeks.map((w) => (
            <NavLink
              key={w.slug}
              to={`/${w.slug}`}
              className={({ isActive }) =>
                `relative rounded-full px-3 py-1.5 text-sm font-500 transition-colors ${
                  isActive
                    ? 'text-ink'
                    : w.available
                      ? 'text-ink-soft hover:text-ink'
                      : 'text-ink-faint'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <span className="tnum mr-1 text-xs text-salmon-deep">
                    {String(w.n).padStart(2, '0')}
                  </span>
                  {isActive && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 -z-10 rounded-full bg-paper-raised shadow-card ring-1 ring-line"
                      transition={{ type: 'spring', stiffness: 420, damping: 34 }}
                    />
                  )}
                </>
              )}
            </NavLink>
          ))}
          <NavLink
            to="/glossary"
            className={({ isActive }) =>
              `ml-1 rounded-full px-3 py-1.5 text-sm font-500 transition-colors ${
                isActive ? 'text-ink' : 'text-ink-soft hover:text-ink'
              }`
            }
          >
            Glossary
          </NavLink>
        </nav>

        <button
          className="flex h-9 w-9 items-center justify-center rounded-full ring-1 ring-line md:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-label="Menu"
        >
          <div className="space-y-1">
            <span className="block h-0.5 w-4 bg-ink" />
            <span className="block h-0.5 w-4 bg-ink" />
            <span className="block h-0.5 w-4 bg-ink" />
          </div>
        </button>
      </div>

      {open && (
        <div className="border-t border-line bg-paper-raised px-5 py-3 md:hidden">
          {weeks.map((w) => (
            <NavLink
              key={w.slug}
              to={`/${w.slug}`}
              onClick={() => setOpen(false)}
              className="flex items-center gap-2 py-2 text-sm text-ink-soft"
            >
              <span className="tnum text-xs text-salmon-deep">
                {String(w.n).padStart(2, '0')}
              </span>
              {w.kicker}
            </NavLink>
          ))}
          <NavLink
            to="/glossary"
            onClick={() => setOpen(false)}
            className="block py-2 text-sm text-ink-soft"
          >
            Glossary
          </NavLink>
        </div>
      )}
    </header>
  )
}

function Mark() {
  return (
    <span className="relative flex h-8 w-8 items-center justify-center">
      <svg viewBox="0 0 32 32" className="h-8 w-8">
        <circle cx="16" cy="16" r="15" fill="#1C1B19" />
        {/* a small acorn / ledger tick */}
        <path
          d="M16 8.5c-3.4 0-6 2.2-6 5 0 1.9 1.2 3.4 3 4.2v3.1c0 1.7 1.3 2.9 3 2.9s3-1.2 3-2.9v-3.1c1.8-.8 3-2.3 3-4.2 0-2.8-2.6-5-6-5Z"
          fill="#E8745B"
        />
        <path d="M12.5 12.2h7" stroke="#1C1B19" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    </span>
  )
}
