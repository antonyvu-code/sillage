import { content } from '../content.js'
import Scene from './Scene.jsx'

export default function Manifesto() {
  const { manifesto } = content

  return (
    <section className="px-6 py-32 md:px-12 md:py-44 lg:px-16">
      <Scene scene={manifesto.scene} className="mb-12" />
      <p className="font-fraunces font-light leading-[1.15] text-bone">
        {manifesto.lines.map((line, i) => (
          <span
            key={line}
            className="reveal block text-[clamp(1.9rem,4.8vw,4rem)]"
            style={{ '--d': `${i * 0.12}s` }}
          >
            {line}
          </span>
        ))}
      </p>
      <p className="reveal mt-10 max-w-xs text-sm leading-relaxed text-bone/50" style={{ '--d': '0.5s' }}>
        {manifesto.note}
      </p>
    </section>
  )
}
