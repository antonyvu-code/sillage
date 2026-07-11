import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { content } from '../content.js'
import Scene from './Scene.jsx'

// Kinetic typography: các dòng manifesto sáng dần theo scroll (scrub) —
// người đọc "kéo" từng câu ra khỏi bóng tối bằng chính tay mình.
export default function Manifesto() {
  const { manifesto } = content
  const scope = useRef(null)

  useGSAP(
    () => {
      const mm = gsap.matchMedia()
      mm.add('(prefers-reduced-motion: no-preference)', () => {
        gsap.fromTo(
          '.manifesto-line',
          { opacity: 0.08, y: 36, filter: 'blur(5px)' },
          {
            opacity: 1,
            y: 0,
            filter: 'blur(0px)',
            stagger: 0.35,
            ease: 'none',
            scrollTrigger: {
              trigger: scope.current,
              start: 'top 78%',
              end: 'center 45%',
              scrub: 0.5,
            },
          },
        )
      })
    },
    { scope },
  )

  return (
    <section ref={scope} className="px-6 py-32 md:px-12 md:py-44 lg:px-16">
      <Scene scene={manifesto.scene} className="mb-12" />
      <p className="font-fraunces font-light leading-[1.15] text-bone">
        {manifesto.lines.map((line) => (
          <span key={line} className="manifesto-line block text-[clamp(1.9rem,4.8vw,4rem)]">
            {line}
          </span>
        ))}
      </p>
      <p className="reveal mt-10 max-w-xs text-sm leading-relaxed text-bone/60" style={{ '--d': '0.3s' }}>
        {manifesto.note}
      </p>
    </section>
  )
}
