'use client';
import Link from "next/link";
import { useState } from "react";
import clsx from "clsx";

export default function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-black/30 bg-black/10 border-b border-white/10">
      <div className="container py-4 flex items-center justify-between">
        <Link href="#top" className="flex items-center gap-3">
          <img src="/logo-tbw.svg" alt="Tiny Big Woods" className="h-9 w-auto" />
        </Link>
        <nav className={clsx("md:flex items-center gap-6 text-sm", open ? "block" : "hidden md:block")}>
          <a href="#gallery" className="opacity-90 hover:opacity-100">Gallery</a>
          <a href="#features" className="opacity-90 hover:opacity-100">Features</a>
          <a href="#presale" className="opacity-90 hover:opacity-100">Pre-Order</a>
          <a href="#faq" className="opacity-90 hover:opacity-100">FAQ</a>
        </nav>
        <a href="#presale" className="hidden md:inline-flex rounded-xl bg-brand px-4 py-2 text-black font-semibold hover:bg-brand/90">Reserve</a>
        <button onClick={()=>setOpen(!open)} className="md:hidden p-2 rounded-lg border border-white/10">☰</button>
      </div>
    </header>
  )
}
