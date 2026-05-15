"use client"

import { useEffect, useRef, useState } from "react"
import HanziWriter from "hanzi-writer"

export function Hero() {
  const charRefs = useRef<(HTMLDivElement | null)[]>([])
  const hasAnimated = useRef(false)
  const [showMajor, setShowMajor] = useState(false)

  useEffect(() => {
    if (hasAnimated.current) return
    hasAnimated.current = true

    const chars = ["陈", "依", "林"]

    const originalOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"

    async function animateChars() {
      await new Promise((resolve) => setTimeout(resolve, 500))

      for (let i = 0; i < chars.length; i++) {
        const el = charRefs.current[i]
        if (!el) continue

        el.innerHTML = ""

        const writer = HanziWriter.create(el, chars[i], {
          width: 120,
          height: 120,
          padding: 10,
          showOutline: false,
          showCharacter: false,
          strokeColor: "#3b2626",
          radicalColor: "#3b2626",
          delayBetweenStrokes: 60,
          strokeAnimationSpeed: 2.5,
        })

        await writer.animateCharacter()
      }

      setShowMajor(true)

      setTimeout(() => {
        document.body.style.overflow = originalOverflow
        window.dispatchEvent(new Event("heroAnimationDone"))
      }, 900)
    }

    animateChars()

    return () => {
      document.body.style.overflow = originalOverflow
    }
  }, [])

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#f8d0d0] px-4 text-center text-[#3b2626] sm:px-6"
    >
      <h1 className="pointer-events-none absolute left-1/2 top-1/2 select-none whitespace-nowrap text-[22vw] font-semibold leading-none tracking-[-0.12em] text-[#3b2626]/[0.12] scale-y-[1.45] -translate-x-1/2 -translate-y-1/2 md:text-[18vw]">
        Elaine Chen
      </h1>

      <div className="relative z-10 flex w-full max-w-[520px] flex-col items-center justify-center gap-7">
        <div className="flex w-full justify-center gap-2 sm:gap-4">
          {[0, 1, 2].map((_, index) => (
            <div
              key={index}
              ref={(el) => {
                charRefs.current[index] = el
              }}
              className="flex h-[120px] w-[120px] shrink-0 items-center justify-center"
            />
          ))}
        </div>

        <p
          className={`max-w-[320px] text-center text-xs uppercase leading-6 tracking-[0.28em] text-[#3b2626]/80 transition-all duration-1000 sm:max-w-none sm:text-sm sm:tracking-[0.35em] md:text-base ${
            showMajor
              ? "translate-y-0 opacity-100 blur-0"
              : "translate-y-4 opacity-0 blur-sm"
          }`}
        >
          Mechanical Engineering @ University of Waterloo
        </p>
      </div>
    </section>
  )
}