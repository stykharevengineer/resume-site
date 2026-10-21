import { projects } from '../data.js'
import { useLang } from '../i18n.jsx'
import { useInView, useTilt } from '../motion.js'
import Icon from './Icon.jsx'

function Project({ p, index }) {
  const { t, tr } = useLang()
  const [viewRef, inView] = useInView()
  const [tiltRef, tilt] = useTilt({ x: 6, y: 5, lift: 4, glow: true })

  const setRefs = (el) => {
    viewRef.current = el
    tiltRef.current = el
  }

  const links = [
    p.demo && { href: p.demo, label: t.demo },
    p.code && { href: p.code, label: t.code },
    p.api && { href: p.api, label: t.api },
  ].filter(Boolean)

  return (
    <article
      ref={setRefs}
      className={`proj rv${inView ? ' in' : ''}`}
      style={{ '--d': `${index * 0.1}s` }}
      {...tilt}
    >
      <div className="proj-in">
        <div className="head">
          <span className="num">P/{String(index + 1).padStart(2, '0')}</span>
          {p.status === 'progress' && (
            <span className="badge">
              <span className="bar" />
              {t.inProgress}
            </span>
          )}
          {p.status === 'live' && <span className="badge live">● {t.live}</span>}
        </div>
        <h3>{tr(p.title)}</h3>
        <p>{tr(p.description)}</p>
        <div className="tags">
          {p.tech.map((tech) => (
            <span key={tech} className="tag">
              {tech}
            </span>
          ))}
        </div>
        <div className="plinks">
          {links.map((l) => {
            const external = !l.href.startsWith('#')
            return (
              <a key={l.label} href={l.href} {...(external && { target: '_blank', rel: 'noopener noreferrer' })}>
                {l.label} <Icon name="arrow" />
              </a>
            )
          })}
        </div>
      </div>
    </article>
  )
}

export default function Projects() {
  const { t } = useLang()
  const [labelRef, labelIn] = useInView()
  return (
    <section id="projects">
      <div ref={labelRef} className={`label rv${labelIn ? ' in' : ''}`}>
        <span className="n">03</span>
        {t.projects}
      </div>
      <div className="projects">
        {projects.map((p, i) => (
          <Project key={i} p={p} index={i} />
        ))}
      </div>
    </section>
  )
}
