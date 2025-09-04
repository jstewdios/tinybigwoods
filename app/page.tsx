import Nav from "@/components/Nav";
import Badge from "@/components/Badge";
import Feature from "@/components/Feature";
import PresaleForm from "@/components/PresaleForm";
import Gallery from "@/components/Gallery";
import FAQ from "@/components/FAQ";

export default function Page() {
  return (
    <main id="top" className="wood-gradient">
      <Nav />

      {/* Hero */}
      <section className="container pt-16 pb-12 md:pt-24 md:pb-20 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <Badge>Presale Open</Badge>
          <h1 className="mt-4 text-4xl md:text-6xl font-bold tracking-tight leading-[1.05]">
            Tiny Big Woods<span className="text-brand">.</span>{" "}
            <span className="text-white/80">Hand-carved wood, made with love.</span>
          </h1>
          <p className="mt-5 text-white/80 text-lg leading-relaxed max-w-xl">
            Live-edge wooden signs and glowing wall art. Carved by hand, finished with care, designed to feel timeless—and a little bit magical.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a href="#presale" className="rounded-xl bg-brand px-5 py-3 text-black font-semibold hover:bg-brand/90 shadow-glow">
              Reserve a spot
            </a>
            <a href="#gallery" className="rounded-xl border border-white/15 px-5 py-3 hover:bg-white/5">See gallery</a>
          </div>

          <div className="mt-6 text-sm text-white/70">
            Live-edge • LED glow option • Custom text & motifs
          </div>
        </div>

        <div className="relative card aspect-[4/3] p-0 overflow-hidden woodgrain">
          <div className="absolute inset-0 bg-gradient-to-br from-brand/10 to-white/5"></div>
          <div className="relative z-10 h-full grid place-items-center">
            <div className="text-center">
              <div className="text-6xl">🪵✨</div>
              <p className="mt-2 text-white/80">From grain to glow.</p>
            </div>
          </div>
        </div>
      </section>

      <Gallery />

      {/* Features */}
      <section id="features" className="container py-10 md:py-20">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight">What makes it special</h2>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          <Feature title="Live-edge character" icon="🌲">
            Every slab is different. We preserve knots, rings, and curves to celebrate the tree’s story.
          </Feature>
          <Feature title="Warm LED glow" icon="💡">
            Optional backlighting adds a soft halo that makes the grain come alive at night.
          </Feature>
          <Feature title="Custom & personal" icon="✍️">
            Names, phrases, pets, myths—tell us your idea and we’ll bring it to life.
          </Feature>
          <Feature title="Durable finish" icon="🛡️">
            Sealed with a hand-rubbed matte finish for a natural look that lasts.
          </Feature>
          <Feature title="Thoughtful hardware" icon="🪛">
            Hidden mounting and tidy wiring keep the focus on the art.
          </Feature>
          <Feature title="Made with love" icon="❤️">
            Small-batch, handcrafted, and inspected at every step.
          </Feature>
        </div>
      </section>

      {/* Presale */}
      <section id="presale" className="container py-10 md:py-20">
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Reserve your custom piece</h2>
            <p className="text-white/80 mt-3 max-w-prose">
              Join the first batch and help shape the collection. Your deposit is fully refundable any time before we begin carving.
            </p>
            <ul className="mt-4 space-y-2 text-white/80">
              <li>• Early-bird pricing: <span className="font-semibold">$149–$349</span> (size & options)</li>
              <li>• Early adopter discount for presale customers</li>
              <li>• We’ll confirm your text, style, and finish before production</li>
            </ul>
          </div>
          <PresaleForm />
        </div>
      </section>

      <FAQ />

      <footer className="border-t border-white/10">
        <div className="container py-8 text-sm text-white/70 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>© {new Date().getFullYear()} Tiny Big Woods</div>
          <div className="flex items-center gap-4">
            <a className="opacity-80 hover:opacity-100" href="#faq">FAQ</a>
            <a className="opacity-80 hover:opacity-100" href="#presale">Pre-Order</a>
            <a className="opacity-80 hover:opacity-100" href="#top">Back to top ↑</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
