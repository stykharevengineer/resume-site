import { useEffect } from 'react'
import { profile } from './data.js'
import { useLang } from './i18n.jsx'
import Background from './components/Background.jsx'
import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import { SkillsLabel, Marquee, SkillGroups } from './components/Skills.jsx'
import Projects from './components/Projects.jsx'
import Education from './components/Education.jsx'
import Contact from './components/Contact.jsx'

export default function App() {
  const { t, tr } = useLang()
  const name = `${tr(profile.firstName)} ${tr(profile.lastName)}`

  useEffect(() => {
    document.title = `${name} — ${tr(profile.title)}`
  }, [name, tr])

  return (
    <>
      <Background />
      <Nav />

      <main className="wrap">
        <Hero />
        <About />
        <SkillsLabel />
      </main>

      {/* The marquee runs edge to edge, outside the centered column */}
      <Marquee />

      <div className="wrap">
        <SkillGroups />
        <Projects />
        <Education />
        <Contact />
        <footer>
          <span>
            © {new Date().getFullYear()} {name}
          </span>
          <span>{t.footer}</span>
        </footer>
      </div>
    </>
  )
}
