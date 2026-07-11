import { ArrowDown } from 'lucide-react'
import { content } from '../content.js'

export default function Hero() {
  const { hero } = content

  return (
    <section id="top" className="relative flex min-h-svh flex-col justify-end overflow-hidden">
      {/* Ambient auras — hơi hương trôi rất chậm phía sau chữ */}
      <div
        aria-hidden="true"
        className="aura absolute -top-[10%] right-[-12%] h-[75vmin] w-[75vmin] rounded-full opacity-40"
        style={{
          background: 'radial-gradient(closest-side, rgba(217,160,94,0.5), transparent 70%)',
        }}
      />
      <div
        aria-hidden="true"
        className="aura absolute bottom-[-20%] left-[-15%] h-[60vmin] w-[60vmin] rounded-full opacity-30 [animation-delay:-8s]"
        style={{
          background: 'radial-gradient(closest-side, rgba(167,143,191,0.45), transparent 70%)',
        }}
      />

      <div className="relative px-6 pb-14 pt-32 sm:pb-16 md:px-12 md:pb-20 lg:px-16">
        <p
          className="vapor mb-5 text-xs uppercase tracking-[0.3em] text-bone/60 sm:text-sm"
          style={{ '--d': '0.15s' }}
        >
          {hero.eyebrow}
        </p>

        <h1 className="font-fraunces font-light leading-[1.02] tracking-tight text-bone [text-wrap:balance]">
          {hero.headline.map((line, i) => (
            <span
              key={line}
              className="vapor block text-[clamp(3rem,9.5vw,7.5rem)]"
              style={{ '--d': `${0.3 + i * 0.18}s` }}
            >
              {line === hero.italicWord || line.endsWith(hero.italicWord) ? (
                <>
                  {line.replace(hero.italicWord, '')}
                  <em className="font-normal italic text-ambre">{hero.italicWord}</em>
                </>
              ) : (
                line
              )}
            </span>
          ))}
        </h1>

        <div className="mt-10 flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-end">
          <p
            className="vapor max-w-md text-sm leading-relaxed text-bone/60 [text-wrap:pretty] sm:text-base"
            style={{ '--d': '0.75s' }}
          >
            {hero.sub}
          </p>
          <div className="vapor flex items-center gap-6" style={{ '--d': '0.9s' }}>
            <a
              href={hero.cta.href}
              className="rounded-full bg-bone px-6 py-3 text-sm font-medium text-smoke transition-colors hover:bg-ambre"
            >
              {hero.cta.label}
            </a>
            <span className="hidden items-center gap-2 text-xs text-bone/40 lg:flex">
              <ArrowDown size={14} />
              {hero.hint}
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
