import { projects } from '../data.js'
import { useLang } from '../i18n.jsx'

export default function Projects() {
  const { t, tr } = useLang()

  return (
    <div className="projects">
      {projects.map((p) => (
        <article key={p.code || p.title.en} className="card">
          <h3>{tr(p.title)}</h3>
          <p>{tr(p.description)}</p>
          <ul className="tags small">
            {p.tech.map((tech) => (
              <li key={tech}>{tech}</li>
            ))}
          </ul>
          <div className="card-links">
            {p.demo && (
              <a href={p.demo} target="_blank" rel="noreferrer">
                {t.demo} ↗
              </a>
            )}
            {p.code && (
              <a href={p.code} target="_blank" rel="noreferrer">
                {t.code} ↗
              </a>
            )}
          </div>
        </article>
      ))}
    </div>
  )
}
