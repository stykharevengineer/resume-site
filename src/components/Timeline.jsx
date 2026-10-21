import { useLang } from '../i18n.jsx'

export default function Timeline({ items }) {
  const { tr } = useLang()

  return (
    <ol className="timeline">
      {items.map((it, i) => (
        <li key={i}>
          <div className="tl-head">
            <h3>{tr(it.title)}</h3>
            <span className="mono muted">{tr(it.period)}</span>
          </div>
          {it.subtitle && <p className="muted">{tr(it.subtitle)}</p>}
          {it.points && (
            <ul className="points">
              {it.points.map((p, j) => (
                <li key={j}>{tr(p)}</li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ol>
  )
}
