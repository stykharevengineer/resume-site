import { useEffect, useRef } from 'react'
import { reduceMotion, useTilt } from '../motion.js'

// [html, typingSpeed]. A speed > 0 means the line is typed letter by letter
const LINES = [
  ['<span class="p">$</span> <span class="s">curl</span> api.artem.dev/v1/candidate', 90],
  ['<span class="c">HTTP/1.1</span> <span class="ok">200 OK</span>', 0],
  ['{', 0],
  ['  <span class="k">"name"</span>: <span class="s">"Artem Stykharev"</span>,', 0],
  ['  <span class="k">"role"</span>: <span class="s">"Junior Backend Developer"</span>,', 0],
  ['  <span class="k">"stack"</span>: [<span class="s">"Java"</span>, <span class="s">"Spring Boot"</span>,', 0],
  ['            <span class="s">"C#"</span>, <span class="s">".NET"</span>],', 0],
  ['  <span class="k">"data"</span>: [<span class="s">"PostgreSQL"</span>, <span class="s">"MySQL"</span>],', 0],
  ['  <span class="k">"ships_with"</span>: <span class="s">"Docker"</span>,', 0],
  ['  <span class="k">"education"</span>: <span class="s">"Informatics, UNIZA · year 3"</span>,', 0],
  ['  <span class="k">"also_knows"</span>: [<span class="s">"Python"</span>, <span class="s">"Django"</span>, <span class="s">"React"</span>],', 0],
  ['  <span class="k">"open_to"</span>: [<span class="s">"on-site"</span>, <span class="s">"hybrid"</span>, <span class="s">"remote"</span>],', 0],
  ['  <span class="k">"location"</span>: <span class="s">"Žilina, SK"</span>,', 0],
  ['  <span class="k">"available"</span>: <span class="ok">true</span>', 0],
  ['}', 0],
  ['<span class="p">$</span> <span class="cursor"></span>', 0],
]

const strip = (html) => {
  const d = document.createElement('div')
  d.innerHTML = html
  return d.textContent
}

// A fake terminal that "requests" the candidate profile and prints it as JSON.
// The content is static, so writing innerHTML directly is safe here.
export default function Terminal() {
  const codeRef = useRef(null)
  const [tiltRef, tilt] = useTilt({ x: 5, y: 4 })

  useEffect(() => {
    const code = codeRef.current
    if (reduceMotion()) {
      code.innerHTML = LINES.map((l) => l[0]).join('\n')
      return
    }
    code.innerHTML = ''
    let timer
    let li = 0
    const next = () => {
      if (li >= LINES.length) return
      const [html, speed] = LINES[li]
      if (speed) {
        const plain = strip(html)
        const pre = code.innerHTML
        let k = 0
        ;(function typeCmd() {
          if (k <= plain.length) {
            code.innerHTML = pre + '<span class="p">' + plain.slice(0, k++).replace(/</g, '&lt;') + '</span>'
            timer = setTimeout(typeCmd, 38)
          } else {
            code.innerHTML = pre + html + '\n'
            li++
            timer = setTimeout(next, 420)
          }
        })()
      } else {
        code.innerHTML += html + (li < LINES.length - 1 ? '\n' : '')
        li++
        timer = setTimeout(next, 70)
      }
    }
    timer = setTimeout(next, 1300)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="term fade" style={{ '--d': '.5s' }} ref={tiltRef} {...tilt}>
      <div className="term-top">
        <i />
        <i />
        <i />
        <span>~/artem — zsh</span>
      </div>
      <pre ref={codeRef} aria-label="Terminal: candidate profile as JSON" />
    </div>
  )
}
