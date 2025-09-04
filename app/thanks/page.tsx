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
        <Link href="/" className="inline-block mt-6 rounded-xl bg-brand px-5 py-3 text-black font-semibold">Back to site</Link>
      </div>
    </main>
  )
}
