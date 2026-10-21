import { useInView } from '../motion.js'

// Fades its content in when it scrolls into view
export default function Reveal({ as: Tag = 'div', className = '', delay = 0, style, children, ...rest }) {
  const [ref, inView] = useInView()
  return (
    <Tag
      ref={ref}
      className={`rv${inView ? ' in' : ''}${className ? ' ' + className : ''}`}
      style={{ '--d': `${delay}s`, ...style }}
      {...rest}
    >
      {typeof children === 'function' ? children(inView) : children}
    </Tag>
  )
}
