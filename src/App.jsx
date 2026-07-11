import { useState, Fragment } from 'react'
import { ArrowRight, Menu, X } from 'lucide-react'
import { content } from './content.js'

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="relative h-screen w-full overflow-hidden bg-black font-geist">
      {/* Background video */}
      <video
        src={content.video}
        autoPlay
        muted
        loop
        playsInline
        className="absolute h-full w-full object-cover [object-position:70%_center]"
      />

      {/* Navbar */}
      <nav className="relative z-30 flex items-center justify-between px-6 py-5 md:px-12 lg:px-16">
        <div className="flex items-center gap-10">
          <span className="text-lg font-semibold tracking-tight text-white sm:text-xl">
            {content.brand}
          </span>
          <div className="hidden items-center gap-8 md:flex">
            {content.nav.map((link) => (
              <a
                key={link}
                href="#"
                className="text-sm text-white/80 transition-colors hover:text-white"
              >
                {link}
              </a>
            ))}
          </div>
        </div>

        {/* Desktop CTA */}
        <button className="hidden rounded-lg bg-white px-5 py-2 text-sm font-medium text-black transition-transform hover:scale-105 md:block">
          {content.navCta}
        </button>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="relative z-50 flex h-10 w-10 items-center justify-center text-white active:scale-90 md:hidden"
          aria-label="Toggle menu"
        >
          <Menu
            className={`absolute transition-all duration-300 ${
              mobileMenuOpen ? 'rotate-90 scale-50 opacity-0' : 'rotate-0 scale-100 opacity-100'
            }`}
          />
          <X
            className={`absolute transition-all duration-300 ${
              mobileMenuOpen ? 'rotate-0 scale-100 opacity-100' : '-rotate-90 scale-50 opacity-0'
            }`}
          />
        </button>
      </nav>

      {/* Mobile menu overlay */}
      <div
        className={`absolute inset-x-0 top-0 z-20 overflow-hidden bg-black/98 backdrop-blur-xl transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] md:hidden ${
          mobileMenuOpen ? 'h-screen opacity-100' : 'pointer-events-none h-0 opacity-0'
        }`}
      >
        <div
          className={`flex h-full flex-col justify-center gap-7 px-8 transition-all delay-100 duration-500 ${
            mobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
        >
          {content.nav.map((link) => (
            <a
              key={link}
              href="#"
              onClick={() => setMobileMenuOpen(false)}
              className="text-3xl font-medium text-white/90 hover:text-white"
            >
              {link}
            </a>
          ))}
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="mt-6 self-start rounded-full bg-white px-8 py-3.5 text-base font-medium text-black transition-transform hover:scale-105"
          >
            {content.navCta}
          </button>
        </div>
      </div>

      {/* Hero content */}
      <div className="relative z-10 flex h-[calc(100vh-80px)] flex-col justify-between px-6 pb-10 pt-12 sm:pb-12 sm:pt-16 md:px-12 md:pb-16 md:pt-20 lg:px-16">
        <div className="max-w-3xl">
          <p className="mb-4 animate-[fadeSlideUp_0.8s_ease_0.2s_both] text-xs text-white/90 sm:mb-6 sm:text-sm">
            {content.badge}
          </p>
          <h1 className="animate-[fadeSlideUp_0.8s_ease_0.4s_both] text-3xl font-medium leading-[1.1] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
            {content.headline.map((line, i) => (
              <Fragment key={line}>
                {line}
                {i < content.headline.length - 1 && <br />}
              </Fragment>
            ))}
          </h1>
        </div>

        <div>
          <p className="mb-5 max-w-sm animate-[fadeSlideUp_0.8s_ease_0.7s_both] text-sm leading-relaxed text-white/60 sm:mb-6 sm:max-w-lg sm:text-base md:text-lg">
            {content.paragraph}
          </p>
          <button className="inline-flex animate-[fadeSlideUp_0.8s_ease_0.9s_both] items-center gap-2 rounded-lg bg-white px-5 py-2.5 text-sm font-medium text-black transition-transform hover:scale-105 sm:px-6 sm:py-3">
            {content.heroCta}
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </div>
  )
}
