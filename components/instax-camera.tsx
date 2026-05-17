"use client"

import { useEffect, useState } from "react"

const photos = [
  "https://i.postimg.cc/qqRyF0hb/IMG-7460.jpg",
  "https://i.postimg.cc/TwybxxJY/IMG-7276.jpg",
  "https://i.postimg.cc/HkxsR2tf/IMG-4166.jpg",
  "https://i.postimg.cc/rsNwXZ3L/IMG-1603.jpg",
]

export function InstaxArchive() {
  const [activePhoto, setActivePhoto] = useState(0)
  const [flash, setFlash] = useState(false)
  const [dispense, setDispense] = useState(false)
  const [develop, setDevelop] = useState(false)

  useEffect(() => {
    playAnimation()

    const interval = setInterval(() => {
      setActivePhoto((prev) => (prev + 1) % photos.length)
      playAnimation()
    }, 7000)

    return () => clearInterval(interval)
  }, [])

  function playAnimation() {
    setFlash(false)
    setDispense(false)
    setDevelop(false)

    setTimeout(() => setFlash(true), 600)
    setTimeout(() => setFlash(false), 850)
    setTimeout(() => setDispense(true), 1200)
    setTimeout(() => setDevelop(true), 3000)
  }

  return (
    <section className="min-h-screen bg-[#f6ebe7] px-6 py-32 text-[#241818]">
      <div className="mx-auto max-w-6xl">
        <div className="mb-20 flex items-center gap-4">
          <div className="h-px w-10 bg-[#8b6f68]" />
          <p className="text-xs uppercase tracking-[0.35em] text-[#8b6f68]">
            archive
          </p>
        </div>

        <div className="grid gap-20 md:grid-cols-[0.9fr_1.1fr] md:items-center">
          <div>
            <h1 className="max-w-xl text-6xl font-light leading-[0.9] tracking-[-0.09em] md:text-8xl">
              little moments, slowly developed.
            </h1>

            <p className="mt-10 max-w-md text-[15px] leading-8 text-[#5f4b47]">
              a small visual archive of places, hobbies, and memories i keep
              returning to.
            </p>
          </div>

          <div className="relative flex min-h-[520px] items-center justify-center">
            {flash && (
              <div className="pointer-events-none absolute inset-0 z-40 bg-[#fffaf5] opacity-80" />
            )}

            <div className="relative flex flex-col items-center">
              <div className="relative z-20 h-[250px] w-[360px] border border-[#d8c7c2] bg-[#efe1dc]">
                <div className="absolute left-8 top-8 h-8 w-8 rounded-full border border-[#8b6f68]" />

                <div className="absolute right-8 top-8 h-8 w-14 border border-[#8b6f68] bg-[#f6ebe7]" />

                <div className="absolute left-1/2 top-[85px] h-24 w-24 -translate-x-1/2 rounded-full border border-[#8b6f68] bg-[#f6ebe7]">
                  <div className="absolute left-1/2 top-1/2 h-14 w-14 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#8b6f68] bg-[#241818]" />
                </div>

                <div className="absolute bottom-8 left-1/2 h-3 w-52 -translate-x-1/2 border border-[#8b6f68] bg-[#241818]" />
              </div>

              <div
                className={`absolute top-[220px] z-10 w-[210px] border border-[#d8c7c2] bg-[#f8eee9] p-3 transition-all duration-[2500ms] ease-out ${
                  dispense
                    ? "translate-y-[190px] opacity-100"
                    : "translate-y-0 opacity-0"
                }`}
              >
                <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#241818]">
                  <img
                    src={photos[activePhoto]}
                    alt="archive memory"
                    className={`h-full w-full object-cover transition-opacity duration-[2500ms] ${
                      develop ? "opacity-100" : "opacity-0"
                    }`}
                  />

                  <div
                    className={`absolute inset-0 bg-[#241818] transition-opacity duration-[2500ms] ${
                      develop ? "opacity-0" : "opacity-100"
                    }`}
                  />
                </div>

                <div className="h-10" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}