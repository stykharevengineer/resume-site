import { skills } from '../data.js'
import { useLang } from '../i18n.jsx'

export default function Skills() {
  const { tr } = useLang()

  return (
    <div className="skills">
      {skills.map((g) => (
        <div key={g.group.en ?? g.group} className="skill-group">
          <h3>{tr(g.group)}</h3>
          <ul className="tags">
            {g.items.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}
