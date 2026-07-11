import { content } from '../content.js'
import Flacon from './Flacon.jsx'
import Scene from './Scene.jsx'

export default function Collection() {
  const { collection } = content
  const labels = collection.noteLabels

  return (
    <section id="collection" className="px-6 py-24 md:px-12 md:py-32 lg:px-16">
      <Scene scene={collection.scene} className="mb-10" />
      <h2 className="reveal mb-14 font-fraunces text-[clamp(2rem,5vw,3.8rem)] font-light text-bone">
        {collection.title}
      </h2>

      <div className="grid gap-6 md:grid-cols-3">
        {collection.scents.map((scent, i) => (
          <article
            key={scent.name}
            className="reveal group relative overflow-hidden rounded-2xl border border-bone/10 p-7 transition-colors duration-500 hover:border-bone/25 sm:p-8"
            style={{ '--d': `${i * 0.12}s` }}
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
              <div className="my-6 flex justify-center">
                <Flacon
                  scent={scent}
                  className="h-60 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-2 sm:h-64"
                />
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
        ))}
      </div>
    </section>
  )
}
