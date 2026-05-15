"use client"

import { useEffect } from "react"
import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"

export default function Home() {
  useEffect(() => {
    document.body.style.overflow = "auto"
  }, [])

  return (
    <>
      <Header />

      <main className="min-h-screen">
        <Hero />
        <About />
      </main>
    </>
  )
}