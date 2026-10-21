# resume-site

My personal resume page. It's live here:
**https://stykharevengineer.github.io/resume-site/**

![Screenshot of the site](./screenshot.png)

I'm a backend developer (Java / Spring Boot and C# / .NET), and I wanted a resume
that's easier to share than a PDF. I also used it as an excuse to practice
React, so it's a small single-page app built with React and Vite rather than
a template from a site builder. No UI libraries, just components and plain CSS.

## What's inside

All the content (contacts, skills, projects) lives in `src/data.js`. The
components just read from it, so updating the resume means editing one file
and pushing. Treating the content as data and keeping it out of the markup
felt natural coming from the backend side.

A few other things I added along the way:

- Three languages: English, Russian and Slovak. There's a switch in the top
  corner, and the choice ends up in the URL, so
  `https://stykharevengineer.github.io/resume-site/?lang=sk` always opens in
  Slovak. There's no i18n library here; a text field in `data.js` is either a
  plain string or `{ en, ru, sk }`, and a small context picks the right one.
- Dark mode. It follows your system setting by default and remembers if you switch it.
- It works on phones. The layout collapses to one column under 640px.
- Print styles, so Ctrl+P gives you a clean page you can save as a PDF.
- Deploys happen on their own. Every push to `main` runs a GitHub Actions
  workflow that builds the site and publishes it to GitHub Pages.

## Running it locally

You'll need Node 18 or newer.

```bash
npm install
npm run dev
```

Then open http://localhost:5173. `npm run build` puts a production build in `dist/`.

## Project layout

```
public/
  photo.jpg          profile photo
src/
  data.js            resume content in all three languages
  i18n.jsx           language context and interface strings
  App.jsx            puts the sections together
  index.css          styles and color themes
  components/
    Header.jsx       photo, name, role, contacts
    Icon.jsx         inline SVG icons for the contact links
    Section.jsx      section wrapper
    Skills.jsx
    Projects.jsx
    Timeline.jsx     used for both experience and education
    Toolbar.jsx      language switch + theme toggle
    ThemeToggle.jsx
.github/workflows/
  deploy.yml         build + deploy to GitHub Pages
```

## Other projects

My backend work (Java / Spring Boot, C# / .NET, Django) is in my other
repositories: [github.com/stykharevengineer](https://github.com/stykharevengineer).

## Contact

Feel free to reach out on [LinkedIn](https://www.linkedin.com/in/artem-stykharev-2b1131388/).
