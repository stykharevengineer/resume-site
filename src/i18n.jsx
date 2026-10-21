import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'

export const LANGS = [
  { code: 'en', label: 'EN' },
  { code: 'ru', label: 'RU' },
  { code: 'sk', label: 'SK' },
]

// Interface text that isn't part of the resume itself
const ui = {
  en: {
    home: 'Home',
    about: 'About',
    skills: 'Skills',
    projects: 'Projects',
    contact: 'Contact',
    education: 'Education & languages',
    eduCard: 'Education',
    langCard: 'Languages',
    native: 'native',
    yearOf: (y, n) => `Year ${y} of ${n}`,
    openToWork: 'Open to work',
    inProgress: 'In progress',
    live: 'Live',
    demo: 'Demo',
    code: 'Code',
    api: 'API docs',
    copy: 'Copy',
    copied: 'Copied ✓',
    copyEmail: 'Copy email',
    toggleTheme: 'Toggle theme',
    sections: 'Sections',
    footer: 'Built with React + Vite · Žilina, SK',
  },
  ru: {
    home: 'Главная',
    about: 'Обо мне',
    skills: 'Навыки',
    projects: 'Проекты',
    contact: 'Контакты',
    education: 'Образование и языки',
    eduCard: 'Образование',
    langCard: 'Языки',
    native: 'родной',
    yearOf: (y, n) => `${y} курс из ${n}`,
    openToWork: 'Открыт к предложениям',
    inProgress: 'В разработке',
    live: 'Онлайн',
    demo: 'Демо',
    code: 'Код',
    api: 'API',
    copy: 'Копировать',
    copied: 'Скопировано ✓',
    copyEmail: 'Скопировать email',
    toggleTheme: 'Переключить тему',
    sections: 'Разделы',
    footer: 'Сделано на React + Vite · Жилина, SK',
  },
  sk: {
    home: 'Úvod',
    about: 'O mne',
    skills: 'Zručnosti',
    projects: 'Projekty',
    contact: 'Kontakt',
    education: 'Vzdelanie a jazyky',
    eduCard: 'Vzdelanie',
    langCard: 'Jazyky',
    native: 'materinský',
    yearOf: (y, n) => `${y}. ročník z ${n}`,
    openToWork: 'Otvorený novým ponukám',
    inProgress: 'Vo vývoji',
    live: 'Online',
    demo: 'Demo',
    code: 'Kód',
    api: 'API',
    copy: 'Kopírovať',
    copied: 'Skopírované ✓',
    copyEmail: 'Skopírovať email',
    toggleTheme: 'Prepnúť tému',
    sections: 'Sekcie',
    footer: 'Postavené na React + Vite · Žilina, SK',
  },
}

const supported = LANGS.map((l) => l.code)

// Order: ?lang= in the URL, then the last choice, then the browser language
function getInitialLang() {
  const fromUrl = new URLSearchParams(window.location.search).get('lang')
  if (supported.includes(fromUrl)) return fromUrl

  try {
    const saved = localStorage.getItem('lang')
    if (supported.includes(saved)) return saved
  } catch {
    /* storage blocked */
  }

  const browser = (navigator.language || 'en').slice(0, 2)
  if (browser === 'cs') return 'sk' // Czech readers get Slovak, close enough
  return supported.includes(browser) ? browser : 'en'
}

const LangContext = createContext(null)

export function LangProvider({ children }) {
  const [lang, setLang] = useState(getInitialLang)

  useEffect(() => {
    document.documentElement.lang = lang
    try {
      localStorage.setItem('lang', lang)
    } catch {
      /* storage blocked */
    }
    // Keep the URL in sync so a copied link opens in the same language
    const url = new URL(window.location.href)
    url.searchParams.set('lang', lang)
    window.history.replaceState(null, '', url)
  }, [lang])

  // Text fields in data.js are either plain values or { en, ru, sk }
  const tr = useCallback(
    (value) =>
      value && typeof value === 'object' && !Array.isArray(value) && 'en' in value
        ? value[lang] ?? value.en
        : value,
    [lang]
  )

  const value = useMemo(() => ({ lang, setLang, t: ui[lang], tr }), [lang, tr])

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>
}

export function useLang() {
  return useContext(LangContext)
}
