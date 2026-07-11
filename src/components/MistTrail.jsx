import { useEffect, useRef } from 'react'

// Vệt "hương" theo con trỏ: mỗi cú di chuột nhả một hạt mist ấm,
// nở ra và tan trong ~3 giây — trang web tự có sillage.
// Tắt hoàn toàn với touch device và prefers-reduced-motion.
export default function MistTrail() {
  const ref = useRef(null)

  useEffect(() => {
    const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches
    const finePointer = matchMedia('(pointer: fine)').matches
    if (reduced || !finePointer) return

    const canvas = ref.current
    const ctx = canvas.getContext('2d')
    let width, height, raf
    const particles = []

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      width = window.innerWidth
      height = window.innerHeight
      canvas.width = width * dpr
      canvas.height = height * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }
    resize()

    let lastSpawn = 0
    const onMove = (e) => {
      const now = performance.now()
      if (now - lastSpawn < 24) return
      lastSpawn = now
      particles.push({ x: e.clientX, y: e.clientY, r: 26 + Math.random() * 22, life: 1 })
      if (particles.length > 90) particles.shift()
    }

    const tick = () => {
      ctx.clearRect(0, 0, width, height)
      ctx.globalCompositeOperation = 'lighter'
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i]
        p.life -= 0.006
        p.r += 0.5
        if (p.life <= 0) {
          particles.splice(i, 1)
          continue
        }
        const g = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r)
        g.addColorStop(0, `rgba(217, 160, 94, ${p.life * 0.05})`)
        g.addColorStop(1, 'rgba(217, 160, 94, 0)')
        ctx.fillStyle = g
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fill()
      }
      raf = requestAnimationFrame(tick)
    }

    window.addEventListener('resize', resize)
    window.addEventListener('pointermove', onMove)
    raf = requestAnimationFrame(tick)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
      window.removeEventListener('pointermove', onMove)
    }
  }, [])

  return <canvas ref={ref} className="pointer-events-none fixed inset-0 z-0" aria-hidden="true" />
}
