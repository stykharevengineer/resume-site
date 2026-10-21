import { education, languages } from '../data.js'
import { useLang } from '../i18n.jsx'
import Reveal from './Reveal.jsx'

const CEFR = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2']

// How many of the six CEFR cells to fill. Native fills all of them
const filled = (level) => (level === 'native' ? CEFR.length : CEFR.indexOf(level) + 1)

function EducationCard({ e, index }) {
  const { t, tr } = useLang()
  return (
    <Reveal as="article" className="edu-card" delay={index * 0.1}>
      <div className="head">
        <span className="num">{t.eduCard}</span>
        <span className="badge">
          <span className="bar" />
          {tr(e.period)}
        </span>
      </div>
      <h3>{tr(e.school)}</h3>
      <p className="deg">{tr(e.degree)}</p>
      <p className="fac">{tr(e.faculty)}</p>
      <div className="years">
        <div className="segs" aria-hidden="true">
          {Array.from({ length: e.years }, (_, i) => (
            <span
              key={i}
              className={i < e.year - 1 ? 'done' : i === e.year - 1 ? 'now' : ''}
              style={{ '--i': i }}
            />
          ))}
        </div>
        <span>{t.yearOf(e.year, e.years)}</span>
      </div>
    </Reveal>
  )
}

function LanguagesCard() {
  const { t, tr } = useLang()
  return (
    <Reveal as="article" className="edu-card" delay={0.1}>
      <div className="head">
        <span className="num">{t.langCard}</span>
        <span className="badge live">CEFR</span>
      </div>
      <ul className="langs">
        {languages.map((l, li) => {
          const n = filled(l.level)
          return (
            <li key={li}>
              <span className="nm">{tr(l.name)}</span>
              <span className="cells" aria-hidden="true">
                {CEFR.map((c, i) => (
                  <span key={c} className={i < n ? 'on' : ''} style={{ '--i': li * 2 + i }} />
                ))}
              </span>
              <span className={`lv${l.level === 'native' ? ' native' : ''}`}>
                {l.level === 'native' ? t.native : l.level}
              </span>
            </li>
          )
        })}
      </ul>
      <div className="scale" aria-hidden="true">
        {CEFR.map((c) => (
          <span key={c}>{c}</span>
        ))}
      </div>
    </Reveal>
  )
}

export default function Education() {
  const { t } = useLang()
  return (
    <section id="education">
      <Reveal className="label">
        <span className="n">04</span>
        {t.education}
      </Reveal>
      <div className="edu">
        {education.map((e, i) => (
          <EducationCard key={i} e={e} index={i} />
        ))}
        {languages.length > 0 && <LanguagesCard />}
      </div>
    </section>
  )
}
