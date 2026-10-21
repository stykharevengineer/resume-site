import { useEffect, useRef } from 'react'
import { reduceMotion, finePointer } from '../motion.js'

function hex(h) {
  h = h.replace('#', '')
  if (h.length === 3) h = h.split('').map((c) => c + c).join('')
  const n = parseInt(h, 16)
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255]
}

// Grid, glowing blobs, grain, and a field of dots that ripple and move away from the cursor
export default function Background() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const root = document.documentElement
    const reduce = reduceMotion()
    const cv = canvasRef.current
    const cx = cv.getContext('2d')
    const dpr = Math.min(2, window.devicePixelRatio || 1)
    let W, H, gap, dots = [], raf = 0
    const mouse = { x: -9999, y: -9999, tx: -9999, ty: -9999 }

    const readColors = () => {
      const cs = getComputedStyle(root)
      return { acid: hex(cs.getPropertyValue('--acid').trim()), line: hex(cs.getPropertyValue('--ink-3').trim()) }
    }
    let C = readColors()
    const themeObserver = new MutationObserver(() => { C = readColors() })
    themeObserver.observe(root, { attributes: true, attributeFilter: ['data-theme'] })

    const size = () => {
      W = window.innerWidth
      H = window.innerHeight
      cv.width = W * dpr
      cv.height = H * dpr
      cx.setTransform(dpr, 0, 0, dpr, 0, 0)
      gap = W < 600 ? 30 : 26
      dots = []
      for (let y = gap / 2; y < H + gap; y += gap) for (let x = gap / 2; x < W + gap; x += gap) dots.push([x, y])
    }

    const onMove = (e) => {
      mouse.tx = e.clientX
      mouse.ty = e.clientY
      if (!reduce && finePointer()) {
        root.style.setProperty('--mx', e.clientX + 'px')
        root.style.setProperty('--my', e.clientY + 'px')
      }
    }
    const onLeave = () => { mouse.tx = mouse.ty = -9999 }

    const draw = (t = 0) => {
      mouse.x += (mouse.tx - mouse.x) * 0.12
      mouse.y += (mouse.ty - mouse.y) * 0.12
      if (mouse.tx < -9000) mouse.x = mouse.y = -9999
      cx.clearRect(0, 0, W, H)
      const a = C.acid, l = C.line, T = t / 1000
      const wx = W * (0.5 + 0.35 * Math.sin(T * 0.13))
      const wy = H * (0.35 + 0.25 * Math.cos(T * 0.17))
      for (let i = 0; i < dots.length; i++) {
        const x = dots[i][0], y = dots[i][1]
        const dw = Math.hypot(x - wx, y - wy)
        const wave = Math.max(0, Math.sin(dw / 46 - T * 1.6)) * Math.max(0, 1 - dw / (Math.max(W, H) * 0.75))
        const dx = x - mouse.x, dy = y - mouse.y
        const dm = Math.sqrt(dx * dx + dy * dy)
        const near = Math.max(0, 1 - dm / 170)
        let px = x, py = y
        if (near > 0) {
          const f = (near * near * 14) / (dm || 1)
          px += dx * f
          py += dy * f
        }
        const g = Math.min(1, wave * 0.55 + near)
        const r = 0.9 + wave * 0.9 + near * 2.2
        const al = 0.18 + wave * 0.35 + near * 0.7
        const R = l[0] + (a[0] - l[0]) * g, G = l[1] + (a[1] - l[1]) * g, B = l[2] + (a[2] - l[2]) * g
        cx.fillStyle = `rgba(${R | 0},${G | 0},${B | 0},${al.toFixed(3)})`
        cx.beginPath()
        cx.arc(px, py, r, 0, 6.283)
        cx.fill()
      }
      if (!reduce) raf = requestAnimationFrame(draw)
    }

    size()
    window.addEventListener('resize', size)
    window.addEventListener('pointermove', onMove, { passive: true })
    document.addEventListener('pointerleave', onLeave)
    if (reduce) draw(0)
    else raf = requestAnimationFrame(draw)

    return () => {
      cancelAnimationFrame(raf)
      themeObserver.disconnect()
      window.removeEventListener('resize', size)
      window.removeEventListener('pointermove', onMove)
      document.removeEventListener('pointerleave', onLeave)
    }
  }, [])

  return (
    <>
      <div className="bg" aria-hidden="true">
        <canvas ref={canvasRef} />
        <div className="beam" />
        <div className="blob b1" />
        <div className="blob b2" />
        <div className="blob b3" />
        <div className="grain" />
      </div>
      <div className="spot" aria-hidden="true" />
    </>
  )
}
