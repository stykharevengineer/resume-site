import { useState } from 'react'
import { contacts } from '../data.js'
import { useLang } from '../i18n.jsx'
import Icon from './Icon.jsx'
import Reveal from './Reveal.jsx'

function CopyButton({ text }) {
  const { t } = useLang()
  const [done, setDone] = useState(false)

  const onClick = (e) => {
    // The button sits inside the link, so stop the click from opening it
    e.preventDefault()
    e.stopPropagation()
    const finish = () => {
      setDone(true)
      setTimeout(() => setDone(false), 1600)
    }
    try {
      navigator.clipboard.writeText(text).then(finish, finish)
    } catch {
      finish()
    }
  }

  return (
    <button className={`copy${done ? ' done' : ''}`} type="button" onClick={onClick} aria-label={t.copyEmail}>
      {done ? t.copied : t.copy}
    </button>
  )
}

export default function Contact() {
  const { t } = useLang()

  // The fill circle grows from wherever the cursor entered the card
  const onPointerEnter = (e) => {
    const c = e.currentTarget
    const r = c.getBoundingClientRect()
    c.style.setProperty('--cx', e.clientX - r.left + 'px')
    c.style.setProperty('--cy', e.clientY - r.top + 'px')
  }

  return (
    <section className="contact" id="contact">
      <Reveal className="label">
        <span className="n">05</span>
        {t.contact}
      </Reveal>
      <div className="cts">
        {contacts.map((c) => (
          <Reveal
            key={c.label}
            as="a"
            className="ct"
            href={c.href}
            target="_blank"
            rel="noopener noreferrer"
            onPointerEnter={onPointerEnter}
          >
            <span className="ic">
              <Icon name={c.icon} />
            </span>
            <span className="tx">
              <span className="lb">{c.label}</span>
              <span className="vl">{c.value}</span>
            </span>
            {c.copy && <CopyButton text={c.value} />}
            <Icon name="arrow" className="go" />
          </Reveal>
        ))}
      </div>
    </section>
  )
}
