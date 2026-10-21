import { useEffect } from 'react'
import Header from './components/Header.jsx'
import Section from './components/Section.jsx'
import Skills from './components/Skills.jsx'
import Projects from './components/Projects.jsx'
import Timeline from './components/Timeline.jsx'
import Toolbar from './components/Toolbar.jsx'
import { useLang } from './i18n.jsx'
import { profile, experience, education, languages } from './data.js'

export default function App() {
  const { t, tr } = useLang()

  useEffect(() => {
    document.title = `${tr(profile.name)} — ${tr(profile.role)}`
  }, [tr])

  return (
    <>
      <Toolbar />
      <main className="page">
        <Header />

        <Section id="about" title={t.about}>
          <p className="lead">{tr(profile.about)}</p>
        </Section>

        <Section id="skills" title={t.skills}>
          <Skills />
        </Section>

        <Section id="projects" title={t.projects}>
          <Projects />
        </Section>

        {experience.length > 0 && (
          <Section id="experience" title={t.experience}>
            <Timeline
              items={experience.map((e) => ({
                title: e.role,
                subtitle: e.company,
                period: e.period,
                points: e.points,
              }))}
            />
          </Section>
        )}

        <Section id="education" title={t.education}>
          <Timeline items={education} />
        </Section>

        <Section id="languages" title={t.languages}>
          <ul className="langs">
            {languages.map((l) => (
              <li key={l.name.en ?? l.name}>
                <span>{tr(l.name)}</span>
                <span className="muted">{tr(l.level)}</span>
              </li>
            ))}
          </ul>
        </Section>

        <footer className="footer">
          <span>
            © {new Date().getFullYear()} {tr(profile.name)}
          </span>
          <span className="mono muted">React · Vite · GitHub Pages</span>
        </footer>
      </main>
    </>
  )
}
