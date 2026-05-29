import { useCallback, useEffect, useState } from 'react'

const KEY = 'acorn-course-progress-v1'

interface Progress {
  completed: string[] // week slugs marked done
}

function read(): Progress {
  try {
    const raw = localStorage.getItem(KEY)
    if (!raw) return { completed: [] }
    const parsed = JSON.parse(raw) as Progress
    return { completed: Array.isArray(parsed.completed) ? parsed.completed : [] }
  } catch {
    return { completed: [] }
  }
}

/** Lightweight localStorage-backed progress, shared across components. */
export function useProgress() {
  const [completed, setCompleted] = useState<string[]>(() => read().completed)

  useEffect(() => {
    const onStorage = () => setCompleted(read().completed)
    window.addEventListener('storage', onStorage)
    return () => window.removeEventListener('storage', onStorage)
  }, [])

  const persist = useCallback((next: string[]) => {
    setCompleted(next)
    try {
      localStorage.setItem(KEY, JSON.stringify({ completed: next }))
    } catch {
      /* ignore quota / private mode */
    }
  }, [])

  const toggle = useCallback(
    (slug: string) => {
      const next = completed.includes(slug)
        ? completed.filter((s) => s !== slug)
        : [...completed, slug]
      persist(next)
    },
    [completed, persist],
  )

  const isDone = useCallback((slug: string) => completed.includes(slug), [completed])

  return { completed, toggle, isDone }
}
