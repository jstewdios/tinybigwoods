import "./globals.css";
import { ReactNode } from "react";

export const metadata = {
  title: "Tiny Big Woods — Presale",
  description: "Hand-carved wood, made with love. Reserve your custom live-edge sign.",
  openGraph: {
    title: "Tiny Big Woods — Presale",
    description: "Reserve your custom live-edge sign with LED glow.",
    images: ["/og.jpg"]
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
