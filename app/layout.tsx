import type { ReactNode } from "react";
import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "KOLmarket — Predict. Bet. Win.",
  description: "Bet on crypto KOL performance on Solana. Predict tweets, gains, and more.",
  manifest: "/manifest.json",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: "#0a0a0f",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
      </head>
      <body className="bg-[#0a0a0f] text-white antialiased font-sans">
        <div className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(139,92,246,0.14),_transparent_36%),linear-gradient(180deg,_#0f1020_0%,_#0a0a0f_45%)]">
          <div className="app-shell">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
