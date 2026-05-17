import { Hero } from "@/components/hero"
import { About } from "@/components/about"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f6ebe7]">
      <Hero />
      <About />
    </main>
  )
}