import { LANGS, useLang } from '../i18n.jsx'
import ThemeToggle from './ThemeToggle.jsx'

export default function Toolbar() {
  const { lang, setLang, t } = useLang()

  return (
    <div className="toolbar">
      <div className="lang-switch" role="group" aria-label={t.switchLang}>
        {LANGS.map((l) => (
          <button
            key={l.code}
            className={l.code === lang ? 'active' : ''}
            onClick={() => setLang(l.code)}
            aria-pressed={l.code === lang}
          >
            {l.label}
          </button>
        ))}
      </div>
      <ThemeToggle />
    </div>
  )
}
