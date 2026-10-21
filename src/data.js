// All resume content lives here. Components only read from this file.
//
// Any text field can be a plain string (same in every language)
// or an object with a version per language: { en: '...', ru: '...', sk: '...' }

export const profile = {
  firstName: { en: 'Artem', ru: 'Артём', sk: 'Artem' },
  lastName: { en: 'Stykharev', ru: 'Стихарёв', sk: 'Stykharev' },
  title: {
    en: 'Junior Backend Developer',
    ru: 'Junior Backend-разработчик',
    sk: 'Junior Backend vývojár',
  },
  location: {
    en: 'Žilina, Slovakia · UTC+1',
    ru: 'Жилина, Словакия · UTC+1',
    sk: 'Žilina, Slovensko · UTC+1',
  },
  // Put the file in public/. If it's missing, initials are shown instead
  photo: './photo.jpg',
}

// The line under the name: prefix + words that get typed one after another
export const typewriter = {
  prefix: {
    en: 'I build backends with',
    ru: 'Пишу бэкенд на',
    sk: 'Píšem backend v',
  },
  words: {
    en: ['Java / Spring Boot', 'C# / .NET', 'PostgreSQL & Docker', 'clean REST APIs'],
    ru: ['Java / Spring Boot', 'C# / .NET', 'PostgreSQL и Docker', 'чистых REST API'],
    sk: ['Java / Spring Boot', 'C# / .NET', 'PostgreSQL a Docker', 'čistých REST API'],
  },
}

// [[text]] is highlighted
export const about = {
  en: "I'm a third-year Informatics student at the University of Žilina and a backend developer. I work equally with [[Java / Spring Boot]] and [[C# / .NET]], use PostgreSQL / MySQL for data, and package services with Docker. I've also worked with Python / Django, and know enough React and TypeScript to build a UI for my own services — like this site. I'm looking for my first commercial role as a Junior Backend Developer.",
  ru: 'Я студент 3 курса информатики в Жилинском университете и backend-разработчик. Одинаково работаю с [[Java / Spring Boot]] и [[C# / .NET]], для данных использую PostgreSQL и MySQL, сервисы упаковываю в Docker. Также работал с Python / Django, а React и TypeScript знаю достаточно, чтобы самому сделать интерфейс к своему сервису — например, этот сайт. Ищу первую коммерческую позицию Junior Backend-разработчика.',
  sk: 'Som študent 3. ročníka informatiky na Žilinskej univerzite a backend vývojár. Rovnako pracujem s [[Java / Spring Boot]] aj [[C# / .NET]], na dáta používam PostgreSQL / MySQL a služby balím do Dockeru. Pracoval som aj s Python / Django a React s TypeScriptom ovládam natoľko, aby som si vedel spraviť rozhranie k vlastnej službe — napríklad túto stránku. Hľadám svoju prvú komerčnú pozíciu Junior Backend vývojára.',
}

// Number tiles under "About". value: 'skills' and 'langs' are counted automatically
export const facts = [
  {
    value: 3,
    label: { en: 'year of Informatics, UNIZA', ru: 'курс информатики, UNIZA', sk: 'ročník informatiky, UNIZA' },
  },
  {
    value: 2,
    label: {
      en: 'backend stacks: JVM & .NET',
      ru: 'бэкенд-стека: JVM и .NET',
      sk: 'backendové stacky: JVM a .NET',
    },
  },
  {
    value: 'skills',
    label: { en: 'technologies in the toolbox', ru: 'технологий в арсенале', sk: 'technológií v arzenáli' },
  },
  {
    value: 'langs',
    label: { en: 'languages on this site', ru: 'языка на этом сайте', sk: 'jazyky na tejto stránke' },
  },
]

// The scrolling line of big tech names
export const marquee = [
  'Java', 'Spring Boot', 'C#', '.NET', 'PostgreSQL', 'Docker',
  'MySQL', 'Gradle', 'Django', 'TypeScript', 'React', 'Git',
]

// note is the small green word next to the group name (optional)
export const skills = [
  {
    group: 'Java',
    note: { en: 'primary', ru: 'основной', sk: 'hlavný' },
    items: ['Java', 'Spring', 'Spring Boot', 'Maven', 'Gradle'],
  },
  {
    group: 'C# / .NET',
    note: { en: 'primary', ru: 'основной', sk: 'hlavný' },
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
    group: 'Frontend',
    note: { en: 'basics', ru: 'базово', sk: 'základy' },
    items: ['JavaScript', 'TypeScript', 'React', 'Node.js', 'HTML5', 'CSS'],
  },
]

// status: 'progress' | 'live' (optional)
// demo – live site, code – repository, api – Swagger / API docs (all optional)
export const projects = [
  {
    title: '33 RPM',
    status: 'progress',
    description: {
      en: 'Semester project for the VAII course at the University of Žilina. A vinyl record catalog with search, genre filters and rated reviews, plus separate roles for users and admins. AJAX search, validation on both client and server, runs in Docker with sample data.',
      ru: 'Семестровый проект по курсу VAII в Жилинском университете. Каталог виниловых пластинок: поиск, фильтр по жанрам, отзывы с оценками, роли пользователя и администратора. AJAX-поиск, валидация на клиенте и сервере, запуск в Docker с тестовыми данными.',
      sk: 'Semestrálny projekt z predmetu VAII na Žilinskej univerzite. Katalóg vinylových platní s vyhľadávaním, filtrom podľa žánru a recenziami s hodnotením, s rolami používateľa a administrátora. AJAX vyhľadávanie, validácia na klientovi aj serveri, spúšťanie v Dockeri s ukážkovými dátami.',
    },
    tech: ['PHP', 'JavaScript', 'SQL', 'Docker'],
    code: 'https://github.com/stykharevengineer/vaii-semestralka',
  },
  {
    title: { en: 'Resume website', ru: 'Сайт-резюме', sk: 'Webový životopis' },
    status: 'live',
    description: {
      en: 'This site. A frontend side project: React + Vite, three languages, responsive layout, deployed to GitHub Pages with GitHub Actions.',
      ru: 'Этот сайт. Проект на фронтенде: React + Vite, три языка, адаптивная вёрстка, автодеплой на GitHub Pages через GitHub Actions.',
      sk: 'Táto stránka. Frontendový projekt: React + Vite, tri jazyky, responzívny dizajn, automatické nasadenie na GitHub Pages cez GitHub Actions.',
    },
    tech: ['React', 'Vite', 'CSS', 'GitHub Actions'],
    demo: '#top',
    code: 'https://github.com/stykharevengineer/resume-site',
  },
]

// icon: 'email' | 'telegram' | 'linkedin' | 'github'
// copy: true adds a "Copy" button
// hero: true also shows the link as a button under the name
export const contacts = [
  {
    icon: 'email',
    label: 'Email',
    value: 'main.stykharev@gmail.com',
    href: 'mailto:main.stykharev@gmail.com',
    copy: true,
  },
  {
    icon: 'telegram',
    label: 'Telegram',
    value: '@stykharev',
    href: 'https://t.me/stykharev',
  },
  {
    icon: 'linkedin',
    label: 'LinkedIn',
    value: 'in/artem-stykharev',
    href: 'https://www.linkedin.com/in/artem-stykharev-2b1131388/',
    hero: true,
  },
  {
    icon: 'github',
    label: 'GitHub',
    value: 'stykharevengineer',
    href: 'https://github.com/stykharevengineer',
    hero: true,
  },
]

// year / years drive the small "Year 3 of 3" progress indicator
export const education = [
  {
    school: {
      en: 'University of Žilina',
      ru: 'Жилинский университет',
      sk: 'Žilinská univerzita v Žiline',
    },
    degree: {
      en: "Bachelor's in Informatics",
      ru: 'Бакалавриат, информатика',
      sk: 'Bakalárske štúdium, informatika',
    },
    faculty: {
      en: 'Faculty of Management Science and Informatics',
      ru: 'Факультет управления и информатики',
      sk: 'Fakulta riadenia a informatiky',
    },
    period: { en: '2024 — present', ru: '2024 — сейчас', sk: '2024 — súčasnosť' },
    year: 3,
    years: 3,
  },
]

// level: 'native' or a CEFR level (A1, A2, B1, B2, C1, C2)
export const languages = [
  { name: { en: 'Ukrainian', ru: 'Украинский', sk: 'Ukrajinčina' }, level: 'native' },
  { name: { en: 'Russian', ru: 'Русский', sk: 'Ruština' }, level: 'native' },
  { name: { en: 'English', ru: 'Английский', sk: 'Angličtina' }, level: 'B2' },
  { name: { en: 'Slovak', ru: 'Словацкий', sk: 'Slovenčina' }, level: 'B2' },
]
