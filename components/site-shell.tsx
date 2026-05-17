"use client"

import { Header } from "@/components/header"
import  PageTransition  from "@/components/page-transition"

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />

      <main className="flex-1">
        <PageTransition>{children}</PageTransition>
      </main>
    </>
  )
}