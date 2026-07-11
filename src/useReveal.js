import { useEffect } from 'react'

// Gắn IntersectionObserver một lần cho mọi phần tử .reveal:
// vào viewport → thêm .is-in (CSS transition lo phần còn lại),
// rồi unobserve — reveal chỉ chạy một lần, như hương đã tỏa thì không thu lại.
export function useRevealObserver() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal')
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-in')
            io.unobserve(entry.target)
          }
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -8% 0px' },
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])
}
