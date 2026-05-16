"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

const navLinks = [
  { href: "/#hero", label: "About" },
  { href: "/interests", label: "Interests" },
  { href: "/music", label: "Music" },
]

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-500 ${
        scrolled
          ? "bg-background/70 backdrop-blur-md border-b border-black/5"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="text-sm tracking-[0.25em] uppercase"
        >
          Elaine Chen
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm transition-opacity hover:opacity-60"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden"
        >
          {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
    </header>
  )
}