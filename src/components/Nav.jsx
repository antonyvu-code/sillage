import { useEffect, useRef, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { content } from '../content.js'
import Magnetic from './Magnetic.jsx'

export default function Nav() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [hidden, setHidden] = useState(false)
  const lastY = useRef(0)

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY
      setScrolled(y > 24)
      // Ẩn khi cuộn xuống (đã qua hero một đoạn), hiện lại khi cuộn lên
      setHidden(y > 160 && y > lastY.current)
      lastY.current = y
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-[background-color,transform] duration-500 ${
        scrolled ? 'bg-smoke/80 backdrop-blur-md' : 'bg-transparent'
      } ${hidden && !open ? '-translate-y-full' : 'translate-y-0'}`}
    >
      <nav className="flex items-center justify-between px-6 py-5 md:px-12 lg:px-16">
        <div className="flex items-center gap-10">
          <a href="#top" className="text-lg font-semibold tracking-[0.18em] text-bone sm:text-xl">
            {content.brand}
          </a>
          <div className="hidden items-center gap-8 md:flex">
            {content.nav.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-bone/70 transition-colors hover:text-bone"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <Magnetic strength={0.25} className="hidden md:inline-block">
          <a
            href={content.navCta.href}
            className="inline-block rounded-full bg-bone px-5 py-2 text-sm font-medium text-smoke transition-colors hover:bg-ambre"
          >
            {content.navCta.label}
          </a>
        </Magnetic>

        <button
          onClick={() => setOpen(!open)}
          className="relative z-50 flex h-10 w-10 items-center justify-center text-bone active:scale-90 md:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <Menu
            className={`absolute transition-all duration-300 ${
              open ? 'rotate-90 scale-50 opacity-0' : 'rotate-0 scale-100 opacity-100'
            }`}
          />
          <X
            className={`absolute transition-all duration-300 ${
              open ? 'rotate-0 scale-100 opacity-100' : '-rotate-90 scale-50 opacity-0'
            }`}
          />
        </button>
      </nav>

      {/* Mobile menu overlay */}
      <div
        aria-hidden={!open}
        className={`fixed inset-x-0 top-0 z-20 overflow-hidden bg-smoke/95 backdrop-blur-xl transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] md:hidden ${
          open ? 'h-svh opacity-100' : 'pointer-events-none h-0 opacity-0'
        }`}
      >
        <div
          className={`flex h-full flex-col justify-center gap-7 px-8 transition-all delay-100 duration-500 ${
            open ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
        >
          {content.nav.map((link) => (
            <a
              key={link.label}
              href={link.href}
              tabIndex={open ? 0 : -1}
              onClick={() => setOpen(false)}
              className="font-fraunces text-4xl text-bone/90 hover:text-bone"
            >
              {link.label}
            </a>
          ))}
          <a
            href={content.navCta.href}
            tabIndex={open ? 0 : -1}
            onClick={() => setOpen(false)}
            className="mt-6 self-start rounded-full bg-bone px-8 py-3.5 text-base font-medium text-smoke transition-colors hover:bg-ambre"
          >
            {content.navCta.label}
          </a>
        </div>
      </div>
    </header>
  )
}
