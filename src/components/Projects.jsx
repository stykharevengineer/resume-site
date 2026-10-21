import { projects } from '../data.js'
import { useLang } from '../i18n.jsx'

export default function Projects() {
  const { t, tr } = useLang()

  return (
    <div className="projects">
      {projects.map((p) => (
        <article key={p.code || tr(p.title)} className="card">
          <div className="card-head">
            <h3>{tr(p.title)}</h3>
            {p.inProgress && <span className="status">{t.inProgress}</span>}
          </div>
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
            {p.api && (
              <a href={p.api} target="_blank" rel="noreferrer">
                {t.api} ↗
              </a>
            )}
          </div>
        </article>
      ))}
    </div>
  )
}
