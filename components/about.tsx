"use client"

import { useState } from "react"

const photos = [
  "https://i.postimg.cc/W1wwd6L0/IMG-8445-(1).jpg",
  "https://i.postimg.cc/d3gMrtwY/IMG-6977.jpg",
  "https://i.postimg.cc/Y0F7XmXW/IMG-6981.jpg",
  "https://i.postimg.cc/m2TppHp3/IMG-6978.jpg",
  "https://i.postimg.cc/XqLL6s1s/IMG-6980.jpg",
  "https://i.postimg.cc/CLv7v6qB/IMG-6979.jpg",
]

export function About() {
  const [currentPhoto, setCurrentPhoto] = useState(0)
  const [previousPhoto, setPreviousPhoto] = useState(0)

  const handleMouseMove = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    const percent = x / rect.width

    const index = Math.min(
      photos.length - 1,
      Math.floor(percent * photos.length)
    )

    if (index !== currentPhoto) {
      setPreviousPhoto(currentPhoto)
      setCurrentPhoto(index)
    }
  }

  return (
    <section
      id="about"
      className="bg-[#f6ebe7] px-6 py-24 text-[#241818]"
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid items-start gap-10 lg:grid-cols-[1fr_260px]">
          <div>
            <div className="border-b border-[#b99f97] pb-5">
              <div className="flex items-center justify-between text-[11px] uppercase tracking-[0.28em] text-[#8b6f68]">
                <span>personal notes</span>
                <span>vancouver / waterloo</span>
              </div>

              <h2 className="mt-6 text-6xl font-light leading-[0.9] tracking-[-0.08em] md:text-8xl">
                Elaine Chen
              </h2>

              <p className="mt-4 text-sm uppercase tracking-[0.45em] text-[#8b6f68]">
                陈依林
              </p>
            </div>

            <div className="grid gap-8 border-b border-[#b99f97] py-8 md:grid-cols-2">
              <p className="text-[15px] leading-8 text-[#5f4b47]">
                hi! i’m an incoming mechanical engineering student at the
                University of Waterloo, based in Vancouver. i’m drawn to
                thoughtful design, movement, photography, music, and projects
                that feel useful but still personal.
              </p>

              <p className="text-[15px] leading-8 text-[#5f4b47]">
                this site is a collection of things i’ve built, moments i care
                about, and ideas i’m still figuring out.
              </p>
            </div>

            <div className="mt-6 flex gap-6 text-sm text-[#5f4b47]">
              <a
                href="mailto:elainechen1002edu@gmail.com"
                className="border-b border-[#8b6f68]/40 transition-opacity hover:opacity-60"
              >
                email
              </a>

              <a
                href="https://www.linkedin.com/in/elainechen-waterloo/"
                target="_blank"
                rel="noopener noreferrer"
                className="border-b border-[#8b6f68]/40 transition-opacity hover:opacity-60"
              >
                linkedin
              </a>
            </div>
          </div>

          <figure className="mt-16 border border-[#b99f97] bg-[#fff7f4] p-2">
            <div
              onMouseMove={handleMouseMove}
              className="relative h-[300px] overflow-hidden"
            >
              <img
                src={photos[previousPhoto]}
                alt=""
                className="absolute inset-0 h-full w-full object-cover"
              />

              <img
                key={currentPhoto}
                src={photos[currentPhoto]}
                alt={`Elaine Chen photo ${currentPhoto + 1}`}
                className="absolute inset-0 h-full w-full animate-[slideIn_220ms_ease-out] object-cover"
              />

              <div className="absolute bottom-3 right-3 rounded-full border border-[#fff7f4]/60 bg-[#241818]/35 px-3 py-1 text-[9px] uppercase tracking-[0.22em] text-[#fff7f4] backdrop-blur-sm">
                swipe →
              </div>
            </div>

            <figcaption className="mt-3 border-t border-[#b99f97] pt-3 text-[10px] uppercase leading-5 tracking-[0.22em] text-[#8b6f68]">
              collected memories
            </figcaption>
          </figure>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideIn {
          from {
            transform: translateX(12px);
            opacity: 0.85;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
      `}</style>
    </section>
  )
}