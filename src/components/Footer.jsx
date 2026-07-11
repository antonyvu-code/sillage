import { content } from '../content.js'

export default function Footer() {
  const { footer, brand } = content

  return (
    <footer className="relative overflow-hidden px-6 pt-28 md:px-12 lg:px-16">
      <div className="mx-auto max-w-xl text-center">
        <h2 className="reveal font-fraunces text-[clamp(2rem,5vw,3.4rem)] font-light text-bone">
          {footer.ctaTitle}
        </h2>
        <p
          className="reveal mt-5 text-sm leading-relaxed text-bone/60 [text-wrap:pretty] sm:text-base"
          style={{ '--d': '0.12s' }}
        >
          {footer.ctaBody}
        </p>
        <a
          href={`mailto:${footer.contact}?subject=Discovery%20set`}
          className="reveal mt-8 inline-block rounded-full bg-bone px-7 py-3 text-sm font-medium text-smoke transition-colors hover:bg-ambre"
          style={{ '--d': '0.24s' }}
        >
          {footer.ctaLabel}
        </a>
      </div>

      <div className="mt-20 flex flex-col gap-2 border-t border-bone/10 py-8 text-xs text-bone/40 sm:flex-row sm:items-center sm:justify-between">
        <a href={`mailto:${footer.contact}`} className="transition-colors hover:text-bone/80">
          {footer.contact}
        </a>
        <span>{footer.address}</span>
        <span>{footer.legal}</span>
      </div>

      {/* Wordmark tự phai dần về bên phải — chính nó cũng có sillage */}
      <p
        aria-hidden="true"
        className="pointer-events-none select-none whitespace-nowrap pb-6 font-fraunces text-[clamp(4rem,18vw,16rem)] font-light leading-none tracking-[0.12em] text-bone/25"
        style={{
          maskImage: 'linear-gradient(90deg, black 35%, transparent 92%)',
          WebkitMaskImage: 'linear-gradient(90deg, black 35%, transparent 92%)',
        }}
      >
        {brand}
      </p>
    </footer>
  )
}
