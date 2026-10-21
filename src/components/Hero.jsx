import { useEffect, useState } from 'react'
import { profile, typewriter, contacts } from '../data.js'
import { useLang } from '../i18n.jsx'
import { reduceMotion, magnetic } from '../motion.js'
import Icon from './Icon.jsx'
import Terminal from './Terminal.jsx'

// Each letter is its own span so they can rise one after another
function SplitName({ first, last }) {
  let i = 0
  const letters = (text) =>
    [...text].map((ch) => (
      <span key={i} className="ch" style={{ '--i': i++ }} aria-hidden="true">
        {ch}
      </span>
    ))
  return (
    <h1 aria-label={`${first} ${last}`}>
      <span className="line">{letters(first)}</span>
      <span className="line last">{letters(last)}</span>
    </h1>
  )
}

function Typewriter({ words }) {
  const [text, setText] = useState(words[0])

  useEffect(() => {
    setText(words[0])
    if (reduceMotion()) return
    let wi = 0
    let timer
    const cycle = () => {
      const w = words[wi]
      let n = w.length
      timer = setTimeout(function del() {
        if (n > 0) {
          setText(w.slice(0, --n))
          timer = setTimeout(del, 28)
        } else {
          wi = (wi + 1) % words.length
          const nw = words[wi]
          let m = 0
          ;(function type() {
            if (m <= nw.length) {
              setText(nw.slice(0, m++))
              timer = setTimeout(type, 55)
            } else cycle()
          })()
        }
      }, 2200)
    }
    cycle()
    return () => clearTimeout(timer)
  }, [words])

  return <span className="tw">{text}</span>
}

export default function Hero() {
  const { t, tr, lang } = useLang()
  const first = tr(profile.firstName)
  const last = tr(profile.lastName)
  const [photoOk, setPhotoOk] = useState(Boolean(profile.photo))

  return (
    <header className="hero" id="top">
      <div>
        <span className="status fade" style={{ '--d': '.05s' }}>
          <span className="dot" />
          {t.openToWork}
        </span>

        <div className="who fade" style={{ '--d': '.15s' }}>
          <div className="avatar">
            {photoOk ? (
              <img alt={`${first} ${last}`} src={profile.photo} onError={() => setPhotoOk(false)} />
            ) : (
              <span className="initials">{first[0] + last[0]}</span>
            )}
          </div>
          <div className="loc">
            <b>{tr(profile.title)}</b>
            {tr(profile.location)}
          </div>
        </div>

        {/* key={lang} replays the letter animation when the language changes */}
        <SplitName key={lang} first={first} last={last} />

        <p className="role fade" style={{ '--d': '.8s' }}>
          {tr(typewriter.prefix)} <Typewriter key={lang} words={tr(typewriter.words)} />
          <span className="caret" />
        </p>

        <div className="links fade" style={{ '--d': '1s' }}>
          {contacts
            .filter((c) => c.hero)
            .reverse()
            .map((c, i) => (
              <a
                key={c.label}
                className={`btn${i === 0 ? ' primary' : ''}`}
                href={c.href}
                target="_blank"
                rel="noopener noreferrer"
                {...magnetic()}
              >
                <Icon name={c.icon} />
                {c.label} <span className="arr">↗</span>
              </a>
            ))}
        </div>
      </div>

      <Terminal />
    </header>
  )
}
