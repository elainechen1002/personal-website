"use client"

import { useRef } from "react"
import { ScrollReveal } from "@/app/ScrollReveal"
import { Footer } from "@/components/footer"

const experiences = [
  {
    date: "2025 — 2026",
    title: "Co-Founder",
    company: "ADE Initiative",
    description:
      "Developed the Assist, Disentangle, Empower Initiative, a youth-led marine conservation project focused on reducing animal entanglement.",
    tags: ["Leadership", "Design", "Collaboration"],
  },
]

export function About() {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return

    scrollRef.current.scrollBy({
      left: direction === "left" ? -320 : 320,
      behavior: "smooth",
    })
  }

  return (
    <>
      {/* ABOUT */}
      <section
        id="about"
        className="min-h-screen overflow-hidden bg-[#f8d0d0] px-6 pb-12 pt-20 text-[#3b2626]"
      >
        <div className="mx-auto max-w-6xl">
          <div className="grid items-center gap-10 md:grid-cols-5">
            
            {/* PHOTOS */}
            <div className="relative md:col-span-2">
              <div className="mb-4 flex items-center gap-4">
                <div className="h-px w-10 bg-[#8b5b5b]" />
                <p className="text-xs uppercase tracking-[0.35em] text-[#8b5b5b]">
                  about
                </p>
              </div>

              <div className="relative">
                <button
                  onClick={() => scroll("left")}
                  className="absolute left-2 top-1/2 z-20 -translate-y-1/2 rounded-full border border-white/60 bg-white/70 px-3 py-2 text-[#3b2626] shadow-lg backdrop-blur transition hover:scale-105"
                >
                  ←
                </button>

                <div
                  ref={scrollRef}
                  className="flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth pb-2 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
                >
                  {[
                    "https://i.postimg.cc/W1wwd6L0/IMG-8445-(1).jpg",
                    "https://i.postimg.cc/d3gMrtwY/IMG-6977.jpg",
                    "https://i.postimg.cc/Y0F7XmXW/IMG-6981.jpg",
                    "https://i.postimg.cc/m2TppHp3/IMG-6978.jpg",
                    "https://i.postimg.cc/XqLL6s1s/IMG-6980.jpg",
                    "https://i.postimg.cc/CLv7v6qB/IMG-6979.jpg",
                  ].map((img, index) => (
                    <div
                      key={index}
                      className={`flex-shrink-0 snap-center rounded-[1rem] bg-white p-3 shadow-[0_20px_50px_rgba(90,45,45,0.18)] transition-transform duration-500 hover:-translate-y-1 ${
                        index % 2 === 0
                          ? "rotate-[-3deg]"
                          : "rotate-[2deg]"
                      }`}
                    >
                      <img
                        src={img}
                        alt={`Elaine Chen ${index + 1}`}
                        className="h-[22rem] w-[18rem] rounded-[0.5rem] object-cover"
                      />
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => scroll("right")}
                  className="absolute right-2 top-1/2 z-20 -translate-y-1/2 rounded-full border border-white/60 bg-white/70 px-3 py-2 text-[#3b2626] shadow-lg backdrop-blur transition hover:scale-105"
                >
                  →
                </button>
              </div>
            </div>

            {/* TEXT */}
            <ScrollReveal className="md:col-span-3">
              <div className="rounded-[2.5rem] border border-white/60 bg-[#fff7f2]/70 p-8 shadow-[0_25px_80px_rgba(90,45,45,0.14)] backdrop-blur-2xl md:p-12">
                <p className="mb-3 text-5xl font-semibold tracking-[-0.08em] text-[#3b2626] md:text-6xl">
                  Elaine Chen
                </p>

                <p className="mb-8 text-sm uppercase tracking-[0.45em] text-[#8b5b5b]">
                  陈依林
                </p>

                <div className="space-y-4 text-[1rem] leading-relaxed text-[#6f4b4b]">
                  <p>
                    hi! i'm a designer, artist, and incoming mechanical engineering
                    student at the University of Waterloo.
                  </p>

                  <p>
                    i'm inspired by photography, music, movement,
                    and thoughtful design.
                  </p>

                  <p>
                    this is a small collection of moments,
                    projects, and things i love
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section
        id="experience"
        className="bg-[#f8d0d0] px-6 py-16 text-[#3b2626]"
      >
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 flex items-center gap-4">
            <div className="h-px w-10 bg-[#8b5b5b]" />
            <p className="text-xs uppercase tracking-[0.35em] text-[#8b5b5b]">
              projects
            </p>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <ScrollReveal key={index}>
                <div className="group rounded-[2rem] border border-white/60 bg-white/55 p-8 shadow-[0_20px_60px_rgba(90,45,45,0.12)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_25px_70px_rgba(90,45,45,0.18)] md:p-10">
                  <div className="grid gap-8 md:grid-cols-[140px_1fr]">
                    
                    <div>
                      <p className="text-xs uppercase tracking-[0.25em] text-[#8b5b5b]">
                        {exp.date}
                      </p>
                    </div>

                    <div>
                      <div className="mb-5">
                        <h3 className="text-2xl font-semibold tracking-[-0.05em] text-[#3b2626]">
                          {exp.title}
                        </h3>

                        <p className="mt-1 text-sm uppercase tracking-[0.25em] text-[#8b5b5b]">
                          {exp.company}
                        </p>
                      </div>

                      <p className="max-w-2xl leading-relaxed text-[#6f4b4b]">
                        {exp.description}
                      </p>

                      <div className="mt-6 flex flex-wrap gap-3">
                        {exp.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full border border-white/70 bg-[#fff7f2]/70 px-4 py-1.5 text-xs tracking-wide text-[#8b5b5b]"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="bg-[#f8d0d0] px-6 py-16 text-[#3b2626]"
      >
        <div className="mx-auto max-w-5xl">
          <ScrollReveal>
            <div className="rounded-[2.5rem] border border-white/60 bg-[#fff7f2]/65 p-10 shadow-[0_25px_80px_rgba(90,45,45,0.14)] backdrop-blur-2xl md:p-16">
              
              <div className="mb-8">
                <p className="mb-4 text-xs uppercase tracking-[0.35em] text-[#8b5b5b]">
                  contact
                </p>

                <h2 className="max-w-xl text-5xl font-semibold tracking-[-0.08em] text-[#3b2626] md:text-6xl">
                  let’s connect.
                </h2>
              </div>

              <div className="grid gap-10 md:grid-cols-2">
                
                <div>
                  <p className="max-w-sm leading-relaxed text-[#6f4b4b]">
                    always open to creative projects,
                    new conversations, and meaningful ideas.
                  </p>
                </div>

                <div className="space-y-5">
                  <a
                    href="mailto:elainechen1002edu@gmail.com"
                    className="group flex items-center justify-between rounded-2xl border border-white/70 bg-white/50 px-6 py-5 transition-all hover:bg-white/70"
                  >
                    <div>
                      <p className="mb-1 text-xs uppercase tracking-[0.25em] text-[#8b5b5b]">
                        Email
                      </p>
                      <p className="text-[#3b2626]">
                        elainechen1002edu@gmail.com
                      </p>
                    </div>

                    <span className="text-[#8b5b5b] transition-transform group-hover:translate-x-1">
                      ↗
                    </span>
                  </a>

                  <a
                    href="https://www.linkedin.com/in/elainechen-waterloo/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between rounded-2xl border border-white/70 bg-white/50 px-6 py-5 transition-all hover:bg-white/70"
                  >
                    <div>
                      <p className="mb-1 text-xs uppercase tracking-[0.25em] text-[#8b5b5b]">
                        LinkedIn
                      </p>
                      <p className="text-[#3b2626]">
                        @Elaine Chen
                      </p>
                    </div>

                    <span className="text-[#8b5b5b] transition-transform group-hover:translate-x-1">
                      ↗
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer
        background="bg-[#f8d0d0]"
        border="border-[#e7d8ca]"
        text="text-[#7a6254]"
        hover="hover:text-[#3f3128]"
      />
    </>
  )
}