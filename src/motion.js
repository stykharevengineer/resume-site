import { useEffect, useRef, useState } from 'react'

export const reduceMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches

export const finePointer = () => window.matchMedia('(pointer: fine)').matches

// Becomes true once the element scrolls into view (and stays true)
export function useInView() {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (reduceMotion() || !('IntersectionObserver' in window)) {
      setInView(true)
      return
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          io.disconnect()
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return [ref, inView]
}

// Tilts an element towards the cursor. Returns pointer handlers to spread on it
export function useTilt({ x = 6, y = 5, lift = 0, glow = false } = {}) {
  const ref = useRef(null)
  if (typeof window !== 'undefined' && (reduceMotion() || !finePointer())) return [ref, {}]

  const onPointerMove = (e) => {
    const el = ref.current
    const r = el.getBoundingClientRect()
    const px = e.clientX - r.left
    const py = e.clientY - r.top
    if (glow) {
      el.style.setProperty('--x', px + 'px')
      el.style.setProperty('--y', py + 'px')
    }
    el.style.transform =
      `perspective(${lift ? 900 : 1000}px) rotateX(${(py / r.height - 0.5) * -y}deg) ` +
      `rotateY(${(px / r.width - 0.5) * x}deg)` +
      (lift ? ` translateY(-${lift}px)` : '')
  }
  const onPointerLeave = () => {
    ref.current.style.transform = ''
  }
  return [ref, { onPointerMove, onPointerLeave }]
}

// Buttons drift slightly towards the cursor
export function magnetic() {
  if (reduceMotion() || !finePointer()) return {}
  return {
    onPointerMove: (e) => {
      const b = e.currentTarget
      const r = b.getBoundingClientRect()
      b.style.transform = `translate(${(e.clientX - r.left - r.width / 2) * 0.18}px,${
        (e.clientY - r.top - r.height / 2) * 0.3
      }px)`
    },
    onPointerLeave: (e) => {
      e.currentTarget.style.transform = ''
    },
  }
}
