import { useEffect } from 'react'
import { useSpring, useTransform, motion } from 'framer-motion'

/** Springy count-up for money figures. */
export function AnimatedNumber({
  value,
  prefix = '£',
  className,
}: {
  value: number
  prefix?: string
  className?: string
}) {
  const spring = useSpring(value, { stiffness: 120, damping: 24, mass: 0.6 })
  const text = useTransform(spring, (v) =>
    prefix + Math.round(v).toLocaleString('en-GB'),
  )

  useEffect(() => {
    spring.set(value)
  }, [value, spring])

  return <motion.span className={`tnum ${className ?? ''}`}>{text}</motion.span>
}
