"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"

const navLinks = [
  { href: "/#hero", label: "About" },
  { href: "/interests", label: "Archive" },
  { href: "/music", label: "Music" },
]

export function Header() {
  const pathname = usePathname()

  const isHomePage = pathname === "/"

  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [showHeader, setShowHeader] = useState(!isHomePage)

  useEffect(() => {
    if (!isHomePage) {
      setShowHeader(true)
      return
    }

    setShowHeader(false)

    const handleHeroDone = () => {
      setShowHeader(true)
    }

    window.addEventListener("heroAnimationDone", handleHeroDone)

    return () => {
      window.removeEventListener("heroAnimationDone", handleHeroDone)
    }
  }, [isHomePage])

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 bg-transparent text-[#3b2626] transition-all duration-1000 ${
        showHeader
          ? "translate-y-0 opacity-100"
          : "pointer-events-none -translate-y-4 opacity-0"
      }`}
    >
      <div className="mx-auto max-w-6xl px-8 py-6">
        <nav className="flex items-center justify-between">
          <ul className="hidden items-center gap-12 md:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="group text-[15px] font-medium tracking-wide text-[#3b2626]/75 transition-colors duration-300 hover:text-[#3b2626]"
                >
                  {link.label}
                  <span className="mt-1 block h-[1px] w-0 bg-[#3b2626] transition-all duration-300 group-hover:w-full" />
                </Link>
              </li>
            ))}
          </ul>

          <button
            className="text-[#3b2626] md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </nav>

        {isMenuOpen && (
          <ul className="mt-4 flex flex-col gap-4 rounded-2xl border border-white/70 bg-[#fff7f2]/90 p-4 shadow-md backdrop-blur-xl md:hidden">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-sm text-[#3b2626]/75 transition-colors hover:text-[#3b2626]"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </header>
  )
}