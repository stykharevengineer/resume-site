import { createContext, useContext, useEffect, useState } from 'react'

export const LANGS = [
  { code: 'en', label: 'EN' },
  { code: 'ru', label: 'RU' },
  { code: 'sk', label: 'SK' },
]

// Interface text that isn't part of the resume itself
const ui = {
  en: {
    about: 'About',
    skills: 'Skills',
    projects: 'Projects',
    experience: 'Experience',
    education: 'Education',
    languages: 'Languages',
    openToWork: 'Open to work',
    downloadPdf: 'Download PDF',
    demo: 'Demo',
    code: 'Code',
    toggleTheme: 'Toggle theme',
    switchLang: 'Language',
  },
  ru: {
    about: 'Обо мне',
    skills: 'Навыки',
    projects: 'Проекты',
    experience: 'Опыт',
    education: 'Образование',
    languages: 'Языки',
    openToWork: 'Открыт к предложениям',
    downloadPdf: 'Скачать PDF',
    demo: 'Демо',
    code: 'Код',
    toggleTheme: 'Переключить тему',
    switchLang: 'Язык',
  },
  sk: {
    about: 'O mne',
    skills: 'Zručnosti',
    projects: 'Projekty',
    experience: 'Skúsenosti',
    education: 'Vzdelanie',
    languages: 'Jazyky',
    openToWork: 'Otvorený novým ponukám',
    downloadPdf: 'Stiahnuť PDF',
    demo: 'Demo',
    code: 'Kód',
    toggleTheme: 'Prepnúť tému',
    switchLang: 'Jazyk',
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

  // Text fields in data.js are either plain strings or { en, ru, sk }
  const tr = (value) =>
    value && typeof value === 'object' && !Array.isArray(value) ? value[lang] ?? value.en : value

  return (
    <LangContext.Provider value={{ lang, setLang, t: ui[lang], tr }}>{children}</LangContext.Provider>
  )
}

export function useLang() {
  return useContext(LangContext)
}
