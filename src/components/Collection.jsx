import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { content } from '../content.js'
import Flacon from './Flacon.jsx'
import Scene from './Scene.jsx'

export default function Collection() {
  const { collection } = content
  const labels = collection.noteLabels
  const scope = useRef(null)

  // 3D tilt: card nghiêng theo vị trí cursor, flacon nổi lên phía trước
  // (translateZ) nhờ preserve-3d — cầm thử chai lên xem.
  useGSAP(
    (context, contextSafe) => {
      if (!matchMedia('(pointer: fine)').matches) return
      if (matchMedia('(prefers-reduced-motion: reduce)').matches) return

      const cards = gsap.utils.toArray('.scent-card')
      gsap.set(cards, { transformPerspective: 900, transformStyle: 'preserve-3d' })
      gsap.set('.scent-flacon', { transformStyle: 'preserve-3d' })

      const cleanups = cards.map((card) => {
        const rotX = gsap.quickTo(card, 'rotationX', { duration: 0.7, ease: 'power3' })
        const rotY = gsap.quickTo(card, 'rotationY', { duration: 0.7, ease: 'power3' })
        const flacon = card.querySelector('.scent-flacon')
        const lift = gsap.quickTo(flacon, 'z', { duration: 0.7, ease: 'power3' })

        const onMove = contextSafe((e) => {
          const r = card.getBoundingClientRect()
          const nx = (e.clientX - r.left) / r.width - 0.5
          const ny = (e.clientY - r.top) / r.height - 0.5
          rotY(nx * 9)
          rotX(-ny * 9)
          lift(36)
        })
        const onLeave = contextSafe(() => {
          rotX(0)
          rotY(0)
          lift(0)
        })

        card.addEventListener('pointermove', onMove)
        card.addEventListener('pointerleave', onLeave)
        return () => {
          card.removeEventListener('pointermove', onMove)
          card.removeEventListener('pointerleave', onLeave)
        }
      })

      return () => cleanups.forEach((fn) => fn())
    },
    { scope },
  )

  return (
    <section ref={scope} id="collection" className="px-6 py-24 md:px-12 md:py-32 lg:px-16">
      <Scene scene={collection.scene} className="mb-10" />
      <h2 className="reveal mb-14 font-fraunces text-[clamp(2rem,5vw,3.8rem)] font-light text-bone">
        {collection.title}
      </h2>

      <div className="grid gap-6 md:grid-cols-3">
        {collection.scents.map((scent, i) => (
          // .reveal nằm ở wrapper — không đặt cùng element với GSAP tilt,
          // vì inline transform của GSAP sẽ đè CSS transition của .reveal
          <div key={scent.name} className="reveal" style={{ '--d': `${i * 0.12}s` }}>
          <article
            className="scent-card group relative h-full overflow-hidden rounded-2xl border border-bone/10 p-7 transition-colors duration-500 hover:border-bone/25 sm:p-8"
          >
            {/* Aura của mùi hương */}
            <div
              aria-hidden="true"
              className="aura pointer-events-none absolute -top-16 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full opacity-40 transition-opacity duration-700 group-hover:opacity-80"
              style={{
                background: `radial-gradient(closest-side, ${scent.accent}66, transparent 70%)`,
                animationDelay: `${-i * 5}s`,
              }}
            />

            <div className="relative">
              <p className="text-xs tracking-[0.2em] text-bone/40">{scent.no}</p>

              {/* Sản phẩm */}
              <div className="scent-flacon my-6 flex justify-center">
                <Flacon scent={scent} className="h-60 drop-shadow-xl sm:h-64" />
              </div>

              <h3 className="font-fraunces text-3xl font-light tracking-wide text-bone">
                {scent.name}
              </h3>
              <p className="mt-1 font-fraunces italic text-bone/60">{scent.tagline}</p>

              <dl className="mt-6 space-y-3 border-t border-bone/10 pt-5 text-sm">
                {['tete', 'coeur', 'fond'].map((key) => (
                  <div key={key} className="flex justify-between gap-4">
                    <dt className="shrink-0 text-xs uppercase tracking-[0.2em] text-bone/40">
                      {labels[key]}
                    </dt>
                    <dd className="text-right text-bone/75">{scent.notes[key]}</dd>
                  </div>
                ))}
              </dl>

              <div className="mt-6 flex items-center justify-between border-t border-bone/10 pt-5 text-sm">
                <span className="text-bone/50">{scent.size}</span>
                <span className="font-medium text-bone">{scent.price}</span>
              </div>
            </div>
          </article>
          </div>
        ))}
      </div>
    </section>
  )
}
