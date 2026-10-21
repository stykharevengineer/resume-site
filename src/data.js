// All resume content lives here. Components only read from this file.
//
// Any text field can be a plain string (same in every language)
// or an object with a version per language: { en: '...', ru: '...', sk: '...' }

export const profile = {
  name: { en: 'Name Surname', ru: 'Имя Фамилия', sk: 'Meno Priezvisko' },
  role: {
    en: 'Frontend Developer (React)',
    ru: 'Frontend-разработчик (React)',
    sk: 'Frontend vývojár (React)',
  },
  location: { en: 'Žilina, Slovakia', ru: 'Жилина, Словакия', sk: 'Žilina, Slovensko' },
  photo: '', // e.g. './photo.jpg' in public/. Leave empty to show initials
  about: {
    en: 'I build interfaces with React and TypeScript. I care about clean code, getting the details right, and products that are pleasant to use. Looking for a Junior / Middle Frontend Developer position.',
    ru: 'Пишу интерфейсы на React и TypeScript. Люблю аккуратную вёрстку, понятный код и когда продукт приятно использовать. Ищу позицию Junior / Middle Frontend-разработчика.',
    sk: 'Tvorím rozhrania v Reacte a TypeScripte. Záleží mi na čistom kóde, detailoch a produktoch, ktoré sa príjemne používajú. Hľadám pozíciu Junior / Middle Frontend vývojára.',
  },
  openToWork: true,
  // e.g. './cv.pdf' in public/, or one file per language: { en: './cv-en.pdf', ... }
  // Leave empty to hide the button
  resumePdf: '',
}

export const contacts = [
  { label: 'Email', value: 'you@example.com', href: 'mailto:you@example.com' },
  { label: 'GitHub', value: 'github.com/username', href: 'https://github.com/username' },
  { label: 'LinkedIn', value: 'linkedin.com/in/username', href: 'https://linkedin.com/in/username' },
  { label: 'Telegram', value: '@username', href: 'https://t.me/username' },
]

export const skills = [
  {
    group: { en: 'Core', ru: 'Основное', sk: 'Základ' },
    items: ['JavaScript (ES2023)', 'TypeScript', 'React', 'HTML5', 'CSS3 / SCSS'],
  },
  {
    group: { en: 'Ecosystem', ru: 'Экосистема', sk: 'Ekosystém' },
    items: ['React Router', 'Redux Toolkit', 'TanStack Query', 'Vite', 'Next.js'],
  },
  {
    group: { en: 'Tools', ru: 'Инструменты', sk: 'Nástroje' },
    items: ['Git / GitHub', 'Figma', 'REST API', 'Jest', 'npm'],
  },
]

export const projects = [
  {
    title: { en: 'Resume website', ru: 'Сайт-резюме', sk: 'Webový životopis' },
    description: {
      en: 'This site. React + Vite, three languages, responsive layout, deployed to GitHub Pages with GitHub Actions.',
      ru: 'Этот сайт. React + Vite, три языка, адаптивная вёрстка, автодеплой на GitHub Pages через GitHub Actions.',
      sk: 'Táto stránka. React + Vite, tri jazyky, responzívny dizajn, automatické nasadenie na GitHub Pages cez GitHub Actions.',
    },
    tech: ['React', 'Vite', 'CSS', 'GitHub Actions'],
    demo: 'https://username.github.io/resume-site/',
    code: 'https://github.com/username/resume-site',
  },
  {
    title: { en: 'Todo app', ru: 'Todo-приложение', sk: 'Todo aplikácia' },
    description: {
      en: 'Tasks with filters, drag & drop, and saving to localStorage.',
      ru: 'Задачи с фильтрами, drag & drop и сохранением в localStorage.',
      sk: 'Úlohy s filtrami, drag & drop a ukladaním do localStorage.',
    },
    tech: ['React', 'TypeScript', 'Redux Toolkit'],
    demo: '',
    code: 'https://github.com/username/todo-app',
  },
  {
    title: { en: 'Weather forecast', ru: 'Прогноз погоды', sk: 'Predpoveď počasia' },
    description: {
      en: 'City search and a 5-day forecast from a public API, with error and loading states.',
      ru: 'Поиск города, прогноз на 5 дней через открытый API, обработка ошибок и состояния загрузки.',
      sk: 'Vyhľadávanie mesta a 5-dňová predpoveď z verejného API vrátane chybových stavov a načítavania.',
    },
    tech: ['React', 'REST API', 'TanStack Query'],
    demo: '',
    code: 'https://github.com/username/weather-app',
  },
]

export const experience = [
  {
    role: {
      en: 'Frontend Developer (Intern)',
      ru: 'Frontend-разработчик (стажёр)',
      sk: 'Frontend vývojár (stážista)',
    },
    company: { en: 'Company', ru: 'Компания', sk: 'Spoločnosť' },
    period: { en: '2025 — present', ru: '2025 — сейчас', sk: '2025 — súčasnosť' },
    points: [
      {
        en: 'Built React components from Figma designs',
        ru: 'Вёрстка и разработка компонентов на React по макетам из Figma',
        sk: 'Tvorba React komponentov podľa návrhov vo Figme',
      },
      {
        en: 'Integrated REST APIs, worked on forms and validation',
        ru: 'Интеграция с REST API, работа с формами и валидацией',
        sk: 'Integrácia REST API, práca s formulármi a validáciou',
      },
    ],
  },
]

export const education = [
  {
    title: {
      en: 'University / course name',
      ru: 'Название университета / курса',
      sk: 'Názov univerzity / kurzu',
    },
    subtitle: { en: 'Field of study', ru: 'Специальность', sk: 'Študijný odbor' },
    period: '2021 — 2025',
  },
]

export const languages = [
  {
    name: { en: 'Russian', ru: 'Русский', sk: 'Ruština' },
    level: { en: 'native', ru: 'родной', sk: 'materinský' },
  },
  { name: { en: 'English', ru: 'Английский', sk: 'Angličtina' }, level: 'B2' },
  { name: { en: 'Slovak', ru: 'Словацкий', sk: 'Slovenčina' }, level: 'B1' },
]
