import { useRevealObserver } from './useReveal.js'
import MistTrail from './components/MistTrail.jsx'
import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import Manifesto from './components/Manifesto.jsx'
import Collection from './components/Collection.jsx'
import Trail from './components/Trail.jsx'
import Maison from './components/Maison.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  useRevealObserver()

  return (
    <div className="relative min-h-svh bg-smoke font-geist text-bone">
      {/* Skip link — hiện khi focus bằng bàn phím, nhảy thẳng qua nav */}
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-bone focus:px-5 focus:py-2.5 focus:text-sm focus:font-medium focus:text-smoke"
      >
        Skip to content
      </a>
      <MistTrail />
      <Nav />
      <main id="main" className="relative z-10">
        <Hero />
        <Manifesto />
        <Collection />
        <Trail />
        <Maison />
      </main>
      <Footer />
    </div>
  )
}
