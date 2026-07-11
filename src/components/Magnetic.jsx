import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

// Magnetic wrapper — element bị "hút" nhẹ về phía cursor và bật lại
// đàn hồi khi rời đi. Chỉ chạy với pointer chính xác (chuột).
export default function Magnetic({ children, strength = 0.35, className = '' }) {
  const ref = useRef(null)

  useGSAP(
    (context, contextSafe) => {
      if (!matchMedia('(pointer: fine)').matches) return
      if (matchMedia('(prefers-reduced-motion: reduce)').matches) return
      const el = ref.current
      const xTo = gsap.quickTo(el, 'x', { duration: 0.8, ease: 'elastic.out(1, 0.4)' })
      const yTo = gsap.quickTo(el, 'y', { duration: 0.8, ease: 'elastic.out(1, 0.4)' })

      const onMove = contextSafe((e) => {
        const r = el.getBoundingClientRect()
        xTo((e.clientX - r.left - r.width / 2) * strength)
        yTo((e.clientY - r.top - r.height / 2) * strength)
      })
      const onLeave = contextSafe(() => {
        xTo(0)
        yTo(0)
      })

      el.addEventListener('pointermove', onMove)
      el.addEventListener('pointerleave', onLeave)
      return () => {
        el.removeEventListener('pointermove', onMove)
        el.removeEventListener('pointerleave', onLeave)
      }
    },
    { scope: ref },
  )

  return (
    <div ref={ref} className={`inline-block ${className}`}>
      {children}
    </div>
  )
}
