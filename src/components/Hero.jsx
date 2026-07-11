import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ArrowDown } from 'lucide-react'
import { content } from '../content.js'
import Flacon from './Flacon.jsx'
import Magnetic from './Magnetic.jsx'

// Hero cinematic: letterbox mở màn như phim → camera zoom-out chậm →
// auras bùng lên → flacon nổi từ bóng tối → headline ngưng tụ từng
// dòng. Mouse parallax cho chiều sâu; cuộn xuống thì cả cảnh trôi
// ngược lên và mờ dần (scrub).
export default function Hero() {
  const { hero, collection } = content
  const ombre = collection.scents.find((s) => s.name === 'OMBRE')
  const scope = useRef(null)

  useGSAP(
    (context, contextSafe) => {
      const mm = gsap.matchMedia()

      mm.add('(prefers-reduced-motion: no-preference)', () => {
        // ── Màn mở phim ──
        const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
        tl.to('.letterbox', { scaleY: 0, duration: 1.5, ease: 'power2.inOut' }, 0)
          .from('.hero-zoom', { scale: 1.07, duration: 2.6, ease: 'power2.out' }, 0)
          .from('.hero-aura', { opacity: 0, scale: 0.65, duration: 2, stagger: 0.25 }, 0.15)
          .from('.hero-flacon', { y: 90, opacity: 0, duration: 1.8 }, 0.55)
          .from('.hero-eyebrow', { opacity: 0, letterSpacing: '0.7em', duration: 1.4 }, 0.7)
          .from(
            '.hero-line',
            { yPercent: 105, opacity: 0, filter: 'blur(14px)', duration: 1.3, stagger: 0.16 },
            0.85,
          )
          .from('.hero-soft', { y: 26, opacity: 0, duration: 1, stagger: 0.14 }, 1.5)

        // ── Cuộn ra khỏi hero: cảnh trôi lên, flacon rơi lại (parallax) ──
        gsap.to('.hero-inner', {
          yPercent: -16,
          opacity: 0,
          ease: 'none',
          scrollTrigger: { trigger: scope.current, start: 'top top', end: 'bottom 25%', scrub: true },
        })
        gsap.to('.hero-flacon', {
          yPercent: 18,
          ease: 'none',
          scrollTrigger: { trigger: scope.current, start: 'top top', end: 'bottom top', scrub: true },
        })

        // ── Mouse parallax: flacon nghiêng theo cursor, auras trôi ngược ──
        if (matchMedia('(pointer: fine)').matches) {
          const flaconX = gsap.quickTo('.hero-flacon', 'x', { duration: 0.9, ease: 'power3' })
          const flaconRot = gsap.quickTo('.hero-flacon', 'rotation', {
            duration: 1.1,
            ease: 'power3',
          })
          const auraX = gsap.quickTo('.hero-aura', 'x', { duration: 1.4, ease: 'power2' })

          const onMove = contextSafe((e) => {
            const nx = e.clientX / window.innerWidth - 0.5
            flaconX(nx * -34)
            flaconRot(nx * -3)
            auraX(nx * 40)
          })
          window.addEventListener('pointermove', onMove)
          return () => window.removeEventListener('pointermove', onMove)
        }
      })

      mm.add('(prefers-reduced-motion: reduce)', () => {
        gsap.set('.letterbox', { scaleY: 0 })
      })
    },
    { scope },
  )

  return (
    <section
      ref={scope}
      id="top"
      className="relative flex min-h-svh flex-col justify-end overflow-hidden"
    >
      {/* Letterbox mở màn */}
      <div
        aria-hidden="true"
        className="letterbox absolute inset-x-0 top-0 z-20 h-[12vh] origin-top bg-black"
      />
      <div
        aria-hidden="true"
        className="letterbox absolute inset-x-0 bottom-0 z-20 h-[12vh] origin-bottom bg-black"
      />

      <div className="hero-zoom absolute inset-0">
        {/* Ambient auras */}
        <div
          aria-hidden="true"
          className="hero-aura aura absolute -top-[10%] right-[-12%] h-[75vmin] w-[75vmin] rounded-full opacity-40"
          style={{
            background: 'radial-gradient(closest-side, rgba(217,160,94,0.5), transparent 70%)',
          }}
        />
        <div
          aria-hidden="true"
          className="hero-aura aura absolute bottom-[-20%] left-[-15%] h-[60vmin] w-[60vmin] rounded-full opacity-30 [animation-delay:-8s]"
          style={{
            background: 'radial-gradient(closest-side, rgba(167,143,191,0.45), transparent 70%)',
          }}
        />

        {/* Sản phẩm: flacon OMBRE */}
        <div className="hero-flacon pointer-events-none absolute bottom-[14%] right-[4%] hidden md:block lg:right-[8%]">
          <div className="float-slow">
            <Flacon scent={ombre} className="h-[46vh] max-h-[460px] drop-shadow-2xl" />
          </div>
        </div>
      </div>

      <div className="hero-inner relative px-6 pb-14 pt-32 sm:pb-16 md:px-12 md:pb-20 lg:px-16">
        <p className="hero-eyebrow mb-5 text-xs uppercase tracking-[0.3em] text-bone/60 sm:text-sm">
          {hero.eyebrow}
        </p>

        <h1 className="font-fraunces font-light leading-[1.02] tracking-tight text-bone [text-wrap:balance]">
          {hero.headline.map((line) => (
            <span key={line} className="block overflow-hidden">
              <span className="hero-line block text-[clamp(3rem,9.5vw,7.5rem)]">
                {line === hero.italicWord || line.endsWith(hero.italicWord) ? (
                  <>
                    {line.replace(hero.italicWord, '')}
                    <em className="font-normal italic text-ambre">{hero.italicWord}</em>
                  </>
                ) : (
                  line
                )}
              </span>
            </span>
          ))}
        </h1>

        <div className="mt-10 flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-end">
          <p className="hero-soft max-w-md text-sm leading-relaxed text-bone/60 [text-wrap:pretty] sm:text-base">
            {hero.sub}
          </p>
          <div className="hero-soft flex items-center gap-6 md:pr-[24vh]">
            <Magnetic>
              <a
                href={hero.cta.href}
                className="inline-block rounded-full bg-bone px-6 py-3 text-sm font-medium text-smoke transition-colors hover:bg-ambre"
              >
                {hero.cta.label}
              </a>
            </Magnetic>
            <span className="hidden items-center gap-2 text-xs text-bone/40 xl:flex">
              <ArrowDown size={14} />
              {hero.hint}
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
