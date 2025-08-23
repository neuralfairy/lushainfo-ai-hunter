import type React from "react"
import type { Metadata } from "next"
import { Inter, Orbitron } from "next/font/google"
import "./globals.css"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import StickyCtaBar from "@/components/StickyCtaBar"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const orbitron = Orbitron({ subsets: ["latin"], variable: "--font-orbitron" })

export const metadata: Metadata = {
  title: "AI Hunter by Lush AI Info - AI-Powered Lead Discovery at Scale",
  description:
    "AI Hunter by Lush AI Info: Find verified contact emails and auto-enrich with our AI-powered platform. B2B sales intelligence for lead generation and contact discovery.",
  icons: {
    icon: "/favicon.png",
  },
  keywords: "AI-powered prospecting, lead intelligence, contact discovery, AI Hunter, Lush AI Info, B2B sales tools",
  authors: [{ name: "Lush AI Info Solutions" }],
  openGraph: {
    title: "AI Hunter by Lush AI Info - AI-Powered Lead Discovery at Scale",
    description: "Find verified contact emails and auto-enrich with AI Hunter by Lush AI Info",
    url: "https://lushainfo.com",
    siteName: "Lush AI Info Solutions",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Lush AI Info Solutions",
              alternateName: "AI Hunter",
              url: "https://lushainfo.com",
              logo: "https://lushainfo.com/logo.png",
              description: "AI Hunter by Lush AI Info - AI-powered lead discovery and contact enrichment platform",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Austin",
                addressRegion: "TX",
                addressCountry: "US",
              },
              sameAs: ["https://salescentri.com"],
            }),
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${orbitron.variable} font-sans bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white min-h-screen`}
      >
        <Header />
        <main className="relative">{children}</main>
        <StickyCtaBar />
        <Footer />
      </body>
    </html>
  )
}
