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
      <MistTrail />
      <Nav />
      <main className="relative z-10">
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
