export default function FAQ() {
  const items = [
    {q:"What is Tiny Big Woods?", a:"A small studio making hand-carved, live-edge wooden signs and art pieces—often with subtle LED backlighting."},
    {q:"How does the presale work?", a:"Reserve with a refundable $20 deposit. We’ll email to confirm design details; your deposit becomes a discount on your final invoice."},
    {q:"How long does a piece take?", a:"For presale, we’re batching orders. Expect 2–4 weeks from design approval to ship. We’ll keep you updated."},
    {q:"Can I request custom fonts or icons?", a:"Yes. Share references in the notes; we’ll send a proof before carving."},
  ];
  return (
    <section id="faq" className="container py-20">
      <h2 className="text-2xl md:text-3xl font-bold tracking-tight">FAQ</h2>
      <div className="mt-8 grid md:grid-cols-2 gap-6">
        {items.map((it, i)=>(
          <div key={i} className="card p-6">
            <h3 className="font-semibold">{it.q}</h3>
            <p className="text-white/80 mt-2 leading-relaxed">{it.a}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
