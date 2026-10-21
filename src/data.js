// All resume content lives here. Components only read from this file.
//
// Any text field can be a plain string (same in every language)
// or an object with a version per language: { en: '...', ru: '...', sk: '...' }
//
// Empty sections (experience, education, languages) are hidden automatically.

export const profile = {
  name: { en: 'Artem Stykharev', ru: 'Артём Стихарёв', sk: 'Artem Stykharev' },
  role: {
    en: 'Junior Backend Developer · Java / Spring · C# / .NET',
    ru: 'Junior Backend-разработчик · Java / Spring · C# / .NET',
    sk: 'Junior Backend vývojár · Java / Spring · C# / .NET',
  },
  location: { en: 'Žilina, Slovakia', ru: 'Жилина, Словакия', sk: 'Žilina, Slovensko' },
  // Put the file in public/. If it's missing, initials are shown instead
  photo: './photo.jpg',
  about: {
    en: "I'm a third-year Informatics student at the University of Žilina and a backend developer. I work equally with Java / Spring Boot and C# / .NET, use PostgreSQL / MySQL for data, and package services with Docker. I've also worked with Python / Django. On the frontend I know enough React and TypeScript to build a UI for my own services, like this site. I'm looking for my first commercial role as a Junior Backend Developer on Java or .NET.",
    ru: 'Я студент 3 курса информатики в Жилинском университете и backend-разработчик. Одинаково работаю с Java / Spring Boot и C# / .NET, для данных использую PostgreSQL и MySQL, сервисы упаковываю в Docker. Также работал с Python / Django. Во фронтенде знаю React и TypeScript на уровне, чтобы самому сделать интерфейс к своему сервису — например, этот сайт. Ищу первую коммерческую позицию Junior Backend-разработчика на Java или .NET.',
    sk: 'Som študent 3. ročníka informatiky na Žilinskej univerzite a backend vývojár. Rovnako pracujem s Java / Spring Boot aj C# / .NET, na dáta používam PostgreSQL / MySQL a služby balím do Dockeru. Pracoval som aj s Python / Django. Na frontende ovládam React a TypeScript natoľko, aby som si vedel sám spraviť rozhranie k vlastnej službe, napríklad túto stránku. Hľadám svoju prvú komerčnú pozíciu Junior Backend vývojára v Jave alebo .NET.',
  },
  openToWork: true,
  // e.g. './cv.pdf' in public/, or one file per language: { en: './cv-en.pdf', ... }
  // Leave empty to hide the button
  resumePdf: '',
}

// icon: 'github' | 'linkedin' | 'email' (optional)
// Email example: { label: 'Email', icon: 'email', value: 'me@mail.com', href: 'mailto:me@mail.com' }
export const contacts = [
  {
    label: 'GitHub',
    icon: 'github',
    value: 'github.com/stykharevengineer',
    href: 'https://github.com/stykharevengineer',
  },
  {
    label: 'LinkedIn',
    icon: 'linkedin',
    value: 'linkedin.com/in/artem-stykharev',
    href: 'https://www.linkedin.com/in/artem-stykharev-2b1131388/',
  },
]

export const skills = [
  {
    group: { en: 'Java', ru: 'Java', sk: 'Java' },
    items: ['Java', 'Spring', 'Spring Boot', 'Maven', 'Gradle'],
  },
  {
    group: { en: 'C# / .NET', ru: 'C# / .NET', sk: 'C# / .NET' },
    items: ['C#', '.NET'],
  },
  {
    group: {
      en: 'Databases, tools & other',
      ru: 'Базы данных, инструменты и другое',
      sk: 'Databázy, nástroje a iné',
    },
    items: ['SQL', 'PostgreSQL', 'MySQL', 'Docker', 'Git', 'Python', 'Django'],
  },
  {
    group: { en: 'Frontend (basics)', ru: 'Frontend (базово)', sk: 'Frontend (základy)' },
    items: ['JavaScript', 'TypeScript', 'React', 'Node.js', 'HTML5', 'CSS'],
  },
]

// demo – live site, code – repository, api – Swagger / API docs (all optional)
// inProgress: true shows an "In progress" label
export const projects = [
  {
    title: '33 RPM',
    description: {
      en: 'Semester project for the VAII course at the University of Žilina. A vinyl record catalog with search, genre filters and rated reviews, plus separate roles for users and admins. AJAX search, validation on both client and server, runs in Docker with sample data.',
      ru: 'Семестровый проект по курсу VAII в Жилинском университете. Каталог виниловых пластинок: поиск, фильтр по жанрам, отзывы с оценками, роли пользователя и администратора. AJAX-поиск, валидация на клиенте и сервере, запуск в Docker с тестовыми данными.',
      sk: 'Semestrálny projekt z predmetu VAII na Žilinskej univerzite. Katalóg vinylových platní s vyhľadávaním, filtrom podľa žánru a recenziami s hodnotením, s rolami používateľa a administrátora. AJAX vyhľadávanie, validácia na klientovi aj serveri, spúšťanie v Dockeri s ukážkovými dátami.',
    },
    tech: ['PHP', 'JavaScript', 'SQL', 'Docker'],
    demo: '',
    code: 'https://github.com/stykharevengineer/vaii-semestralka',
    api: '',
    inProgress: true,
  },
  {
    title: { en: 'Resume website', ru: 'Сайт-резюме', sk: 'Webový životopis' },
    description: {
      en: 'This site. A frontend side project: React + Vite, three languages, responsive layout, deployed to GitHub Pages with GitHub Actions.',
      ru: 'Этот сайт. Проект на фронтенде: React + Vite, три языка, адаптивная вёрстка, автодеплой на GitHub Pages через GitHub Actions.',
      sk: 'Táto stránka. Frontendový projekt: React + Vite, tri jazyky, responzívny dizajn, automatické nasadenie na GitHub Pages cez GitHub Actions.',
    },
    tech: ['React', 'Vite', 'CSS', 'GitHub Actions'],
    demo: 'https://stykharevengineer.github.io/resume-site/',
    code: 'https://github.com/stykharevengineer/resume-site',
    api: '',
  },
]

export const experience = []

export const education = [
  {
    title: {
      en: 'University of Žilina',
      ru: 'Жилинский университет',
      sk: 'Žilinská univerzita v Žiline',
    },
    subtitle: {
      en: "Bachelor's in Informatics · Faculty of Management Science and Informatics · 3rd year",
      ru: 'Бакалавриат, информатика · Факультет управления и информатики · 3 курс',
      sk: 'Bakalárske štúdium, Informatika · Fakulta riadenia a informatiky · 3. ročník',
    },
    period: { en: '2024 — present', ru: '2024 — сейчас', sk: '2024 — súčasnosť' },
  },
]

const native = { en: 'native', ru: 'родной', sk: 'materinský' }

export const languages = [
  { name: { en: 'Ukrainian', ru: 'Украинский', sk: 'Ukrajinčina' }, level: native },
  { name: { en: 'Russian', ru: 'Русский', sk: 'Ruština' }, level: native },
  { name: { en: 'English', ru: 'Английский', sk: 'Angličtina' }, level: 'B2' },
  { name: { en: 'Slovak', ru: 'Словацкий', sk: 'Slovenčina' }, level: 'B2' },
]
