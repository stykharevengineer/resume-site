import { marquee, skills } from '../data.js'
import { useLang } from '../i18n.jsx'
import Reveal from './Reveal.jsx'

export function SkillsLabel() {
  const { t } = useLang()
  return (
    <section id="skills">
      <Reveal className="label">
        <span className="n">02</span>
        {t.skills}
      </Reveal>
    </section>
  )
}

// Full-width scrolling line of tech names. The list is doubled so the loop is seamless
export function Marquee() {
  return (
    <Reveal className="marquee" aria-hidden="true">
      <div className="track">
        {[...marquee, ...marquee].map((name, i) => (
          <span key={i}>{name}</span>
        ))}
      </div>
    </Reveal>
  )
}

export function SkillGroups() {
  const { tr } = useLang()
  return (
    <div className="groups">
      {skills.map((g, gi) => (
        <Reveal key={gi} className="group" delay={gi * 0.08}>
          <h3>
            {tr(g.group)} {g.note && <em>{tr(g.note)}</em>}
          </h3>
          <div className="chips">
            {g.items.map((s, i) => (
              <span key={s} className="chip" style={{ '--i': i }}>
                {s}
              </span>
            ))}
          </div>
        </Reveal>
      ))}
    </div>
  )
}
