import Link from "next/link";

export const metadata = { title: "Thanks — Tiny Big Woods" };

export default function Thanks() {
  return (
    <main className="min-h-screen grid place-items-center p-6">
      <div className="card max-w-lg p-8 text-center">
        <h1 className="text-3xl font-bold">Thanks for reserving ✨</h1>
        <p className="text-white/80 mt-3">
          We’ve recorded your interest and will email next steps shortly. You can reply to that email any time with questions.
        </p>
        <div className="mt-6 flex flex-col md:flex-row items-center justify-center gap-3">
          <a href={process.env.NEXT_PUBLIC_STRIPE_PAYMENT_LINK || "#"} target="_blank" rel="noreferrer" className="rounded-xl bg-brand px-5 py-3 text-black font-semibold">Pay $20 Deposit</a>
          <Link href="/" className="rounded-xl border border-white/15 px-5 py-3">Back to site</Link>
        </div>
      </div>
    </main>
  )
}
