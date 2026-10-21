import { useState } from 'react'
import { profile, contacts } from '../data.js'
import { useLang } from '../i18n.jsx'
import Icon from './Icon.jsx'

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
  // Falls back to initials if the photo file is missing
  const [photoOk, setPhotoOk] = useState(Boolean(profile.photo))

  return (
    <header className="header">
      <div className="avatar">
        {photoOk ? (
          <img src={profile.photo} alt={name} onError={() => setPhotoOk(false)} />
        ) : (
          <span>{initials(name)}</span>
        )}
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
                <span className="contact-label mono muted">
                  <Icon name={c.icon} size={14} />
                  {c.label}
                </span>
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
