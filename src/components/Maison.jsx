import { content } from '../content.js'
import Scene from './Scene.jsx'

export default function Maison() {
  const { maison } = content

  return (
    <section id="maison" className="px-6 py-24 md:px-12 md:py-32 lg:px-16">
      <Scene scene={maison.scene} className="mb-12" />
      <div className="grid gap-14 md:grid-cols-2 md:gap-20">
        <div>
          <h2 className="reveal font-fraunces text-[clamp(2rem,5vw,3.8rem)] font-light text-bone">
            {maison.title}
          </h2>
          <div className="mt-8 space-y-5">
            {maison.body.map((para, i) => (
              <p
                key={i}
                className="reveal max-w-md text-sm leading-relaxed text-bone/65 [text-wrap:pretty] sm:text-base"
                style={{ '--d': `${0.1 + i * 0.12}s` }}
              >
                {para}
              </p>
            ))}
          </div>
        </div>

        <div className="md:pt-24">
          <p className="reveal mb-6 text-xs uppercase tracking-[0.3em] text-bone/60">
            {maison.materialsTitle}
          </p>
          <ul>
            {maison.materials.map((mat, i) => (
              <li
                key={mat.name}
                className="reveal flex items-baseline justify-between gap-4 border-b border-bone/10 py-4 first:border-t"
                style={{ '--d': `${i * 0.07}s` }}
              >
                <span className="text-sm text-bone/85 sm:text-base">{mat.name}</span>
                <span className="font-fraunces text-sm italic text-bone/60">{mat.origin}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
