import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { SiteShell } from "@/components/site-shell"

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
})

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
})

export const metadata: Metadata = {
  title: "Elaine Chen",
  description: "A peek into my life.",
  icons: {
    icon: "/snoopy.png",
    apple: "/snoopy.png",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="bg-background">
      <body
        className={`${geist.variable} ${geistMono.variable} font-sans antialiased flex flex-col min-h-screen`}
      >
        <SiteShell>{children}</SiteShell>

        {process.env.NODE_ENV === "production" && <Analytics />}
        <Analytics />
      </body>
    </html>
  )
}