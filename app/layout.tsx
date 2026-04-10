import type { Metadata, Viewport } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
  weight: ["400", "500", "600", "700"],
});

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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={montserrat.variable}>
      <body className="bg-[#0a0a0f] text-white antialiased font-sans">
        <div className="min-h-screen flex flex-col relative bg-[#0a0a0f] w-full">
          {children}
        </div>
      </body>
    </html>
  );
}
