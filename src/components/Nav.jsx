import { useEffect, useRef, useState } from 'react'
import { LANGS, useLang } from '../i18n.jsx'

const SECTIONS = ['top', 'about', 'skills', 'projects', 'contact']

function getInitialTheme() {
  try {
    return localStorage.getItem('theme') || 'dark'
  } catch {
    return 'dark' // the design is dark by default
  }
}

// Scroll progress bar + floating pill menu with section links, language and theme
export default function Nav() {
  const { lang, setLang, t } = useLang()
  const [active, setActive] = useState('top')
  const [theme, setTheme] = useState(getInitialTheme)
  const progressRef = useRef(null)

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    try {
      localStorage.setItem('theme', theme)
    } catch {
      /* storage blocked */
    }
  }, [theme])

  useEffect(() => {
    let ticking = false
    const update = () => {
      const h = document.documentElement
      const max = h.scrollHeight - h.clientHeight
      progressRef.current.style.setProperty('--p', max > 0 ? h.scrollTop / max : 0)
      let cur = 'top'
      for (const id of SECTIONS) {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top < window.innerHeight * 0.4) cur = id
      }
      setActive(cur)
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
  }, [])

  const labels = { top: t.home, about: t.about, skills: t.skills, projects: t.projects, contact: t.contact }

  return (
    <>
      <div className="progress" ref={progressRef} aria-hidden="true" />
      <nav className="nav" aria-label={t.sections}>
        {SECTIONS.map((id) => (
          <a
            key={id}
            href={`#${id}`}
            className={[active === id && 'active', (id === 'about' || id === 'projects') && 'hide-s']
              .filter(Boolean)
              .join(' ')}
          >
            {labels[id]}
          </a>
        ))}
        <span className="sep" />
        {LANGS.map((l) => (
          <button
            key={l.code}
            className={`lang${l.code === lang ? ' on' : ''}`}
            onClick={() => setLang(l.code)}
            aria-pressed={l.code === lang}
          >
            {l.label}
          </button>
        ))}
        <span className="sep" />
        <button
          className="theme"
          onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
          aria-label={t.toggleTheme}
          title={t.toggleTheme}
        >
          ◐
        </button>
      </nav>
    </>
  )
}
