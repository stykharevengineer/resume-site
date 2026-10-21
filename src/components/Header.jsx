import { profile, contacts } from '../data.js'
import { useLang } from '../i18n.jsx'

function initials(name) {
  return name
    .split(' ')
    .map((p) => p[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()
}

export default function Header() {
  const { t, tr } = useLang()
  const name = tr(profile.name)
  const pdf = tr(profile.resumePdf)

  return (
    <header className="header">
      <div className="avatar">
        {profile.photo ? <img src={profile.photo} alt={name} /> : <span>{initials(name)}</span>}
      </div>

      <div className="header-info">
        {profile.openToWork && <span className="badge">● {t.openToWork}</span>}
        <h1>{name}</h1>
        <p className="role">{tr(profile.role)}</p>
        <p className="muted">{tr(profile.location)}</p>

        <ul className="contacts">
          {contacts.map((c) => (
            <li key={c.label}>
              <a href={c.href} target="_blank" rel="noreferrer">
                <span className="mono muted">{c.label}</span>
                {c.value}
              </a>
            </li>
          ))}
        </ul>

        {pdf && (
          <a className="btn" href={pdf} download>
            {t.downloadPdf}
          </a>
        )}
      </div>
    </header>
  )
}
