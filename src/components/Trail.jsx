import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { content } from '../content.js'
import Scene from './Scene.jsx'

// Section chữ ký: scroll = thời gian. Track cao 340vh, stage sticky
// giữ nguyên viewport; tiến trình scroll (0→1) được ghi vào CSS var
// --p, và mọi thứ — đồng hồ, opacity của từng tầng note, màu aura —
// đều derive từ --p. Note tầng Fond có out > 1: base notes không bao
// giờ tan hết, vì đó chính là sillage.
export default function Trail() {
  const { trail } = content
  const trackRef = useRef(null)
  const stageRef = useRef(null)
  const clockRef = useRef(null)

  // GSAP scrub 0.6: tiến trình --p "đuổi theo" scroll với độ trễ mượt —
  // đồng hồ và các tầng note lướt như kim đồng hồ thật thay vì giật
  // theo từng tick của bánh xe chuột.
  useGSAP(
    () => {
      const stage = stageRef.current
      const clock = clockRef.current
      const proxy = { p: 0 }

      gsap.to(proxy, {
        p: 1,
        ease: 'none',
        scrollTrigger: {
          trigger: trackRef.current,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 0.6,
        },
        onUpdate: () => {
          stage.style.setProperty('--p', proxy.p.toFixed(4))
          // Đồng hồ chạy theo giờ của câu chuyện: 19:00 → 23:00
          const mins = Math.round(proxy.p * 240)
          clock.textContent = `${19 + Math.floor(mins / 60)}:${String(mins % 60).padStart(2, '0')}`
        },
      })
    },
    { scope: trackRef },
  )

  // opacity = min(fade-in theo p, fade-out theo p) — thuần CSS calc,
  // không re-render React trong lúc scroll.
  const phaseOpacity = (phase) =>
    `min(clamp(0, calc((var(--p) - ${phase.in}) * 9), 1), clamp(0, calc((${phase.out} - var(--p)) * 9), 1))`

  return (
    <section id="trail" ref={trackRef} className="relative h-[340vh]">
      <div
        ref={stageRef}
        className="sticky top-0 flex h-svh flex-col justify-between overflow-hidden px-6 py-24 md:px-12 lg:px-16"
        style={{ '--p': 0 }}
      >
        {/* Aura chuyển màu ambre → iris theo tiến trình */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-1/2 h-[90vmin] w-[90vmin] -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{
            background: 'radial-gradient(closest-side, rgba(217,160,94,0.35), transparent 70%)',
            opacity: 'calc(0.9 - var(--p) * 0.8)',
          }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-1/2 h-[90vmin] w-[90vmin] -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{
            background: 'radial-gradient(closest-side, rgba(167,143,191,0.35), transparent 70%)',
            opacity: 'calc(var(--p) * 0.9)',
          }}
        />

        <div className="relative">
          <Scene scene={trail.scene} className="mb-6" />
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 className="reveal font-fraunces text-[clamp(2rem,5vw,3.8rem)] font-light text-bone">
              {trail.title}
            </h2>
            <p className="reveal max-w-xs text-sm text-bone/60" style={{ '--d': '0.15s' }}>
              {trail.sub}
            </p>
          </div>
        </div>

        {/* Đồng hồ wear-time + các tầng note chồng lên nhau */}
        <div className="relative flex flex-1 items-center">
          <div className="relative w-full">
            <p
              ref={clockRef}
              className="font-fraunces text-[clamp(5rem,16vw,12rem)] font-light leading-none text-bone tabular-nums"
            >
              19:00
            </p>

            <div className="relative mt-8 h-24">
              {trail.phases.map((phase) => (
                <div
                  key={phase.label}
                  className="absolute inset-0"
                  style={{ opacity: phaseOpacity(phase) }}
                >
                  <p className="text-xs uppercase tracking-[0.3em] text-bone/70">
                    {phase.label} · <span className="normal-case tracking-normal">{phase.time}</span>
                  </p>
                  <p className="mt-3 font-fraunces text-2xl italic text-bone/85 sm:text-3xl">
                    {phase.notes.join(' · ')}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Thanh tiến trình dọc */}
          <div aria-hidden="true" className="absolute right-0 hidden h-48 w-px bg-bone/15 md:block">
            <div
              className="w-full origin-top bg-ambre"
              style={{ height: '100%', transform: 'scaleY(var(--p))' }}
            />
          </div>
        </div>

        <p
          className="relative font-fraunces text-lg italic text-bone/70 sm:text-xl"
          style={{ opacity: 'clamp(0, calc((var(--p) - 0.85) * 8), 1)' }}
        >
          {trail.endLine}
        </p>
      </div>
    </section>
  )
}
