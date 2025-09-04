export default function Gallery(){
  const items = [
    {title: "Live-edge + Glow", desc: "Warm LED backlight reveals the grain."},
    {title: "Pet Name Sign", desc: "Hand-carved letters, sealed matte."},
    {title: "Mystic Motif", desc: "Symbols + soft light for mood."},
  ];
  return (
    <section id="gallery" className="container py-16">
      <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Gallery</h2>
      <p className="text-white/80 mt-2">A peek at the vibe — each piece is unique.</p>
      <div className="mt-8 grid md:grid-cols-3 gap-6">
        {items.map((it, i)=>(
          <div key={i} className="relative card p-0 overflow-hidden woodgrain">
            <div className="aspect-[4/3] grid place-items-center bg-gradient-to-br from-white/5 to-black/40">
              <div className="text-center">
                <div className="text-6xl mb-2">🌲✨</div>
                <div className="font-semibold">{it.title}</div>
                <div className="text-white/80 text-sm mt-1">{it.desc}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
