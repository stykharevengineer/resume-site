import { useEffect, useMemo, useRef, useState } from 'react'
import { about, facts, skills } from '../data.js'
import { LANGS, useLang } from '../i18n.jsx'
import { reduceMotion } from '../motion.js'
import Reveal from './Reveal.jsx'

// Turns "text [[highlight]] text" into words and the spaces between them,
// keeping the highlight flag on each word
function toTokens(text) {
  const tokens = []
  text.split(/(\[\[.*?\]\])/).forEach((part) => {
    const hl = part.startsWith('[[')
    const clean = hl ? part.slice(2, -2) : part
    clean.split(/(\s+)/).filter(Boolean).forEach((w) => tokens.push(/^\s+$/.test(w) ? { space: true } : { w, hl }))
  })
  return tokens
}

function Counter({ to, run }) {
  const [n, setN] = useState(0)
  useEffect(() => {
    if (!run) return
    if (reduceMotion()) {
      setN(to)
      return
    }
    const t0 = performance.now()
    let raf
    const f = (t) => {
      const q = Math.min(1, (t - t0) / 1200)
      setN(Math.round(to * (1 - Math.pow(1 - q, 3))))
      if (q < 1) raf = requestAnimationFrame(f)
    }
    raf = requestAnimationFrame(f)
    return () => cancelAnimationFrame(raf)
  }, [run, to])
  return <b>{n}</b>
}

export default function About() {
  const { t, tr } = useLang()
  const tokens = useMemo(() => toTokens(tr(about)), [tr])
  const wordCount = tokens.filter((x) => !x.space).length
  const textRef = useRef(null)
  const [lit, setLit] = useState(reduceMotion() ? Infinity : 0)

  // Words light up one by one while the paragraph scrolls through the screen
  useEffect(() => {
    if (reduceMotion()) return
    let ticking = false
    const update = () => {
      const r = textRef.current.getBoundingClientRect()
      const vh = window.innerHeight
      const p = Math.min(1, Math.max(0, (vh * 0.85 - r.top) / (r.height + vh * 0.35)))
      setLit(Math.round(p * wordCount))
      ticking = false
    }
    const onScroll = () => {
      if (!ticking) {
        ticking = true
        requestAnimationFrame(update)
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    update()
    return () => window.removeEventListener('scroll', onScroll)
  }, [wordCount])

  const countOf = (v) =>
    v === 'skills' ? skills.reduce((sum, g) => sum + g.items.length, 0) : v === 'langs' ? LANGS.length : v

  return (
    <section className="about" id="about">
      <Reveal className="label">
        <span className="n">01</span>
        {t.about}
      </Reveal>
      <p ref={textRef}>
        {(() => {
          let n = 0
          return tokens.map((tok, i) => {
            if (tok.space) return ' '
            const on = n++ < lit
            return (
              <span key={i} className={`w${on ? ' on' : ''}${tok.hl ? ' hl' : ''}`}>
                {tok.w}
              </span>
            )
          })
        })()}
      </p>
      <div className="facts">
        {facts.map((f, i) => (
          <Reveal key={i} className="fact" delay={i * 0.08}>
            {(inView) => (
              <>
                <Counter to={countOf(f.value)} run={inView} />
                <span>{tr(f.label)}</span>
              </>
            )}
          </Reveal>
        ))}
      </div>
    </section>
  )
}
