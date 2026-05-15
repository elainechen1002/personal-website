"use client"

import { useEffect, useState } from "react"
import { createPortal } from "react-dom"
import { X } from "lucide-react"
import { Footer } from "@/components/footer"
import { InstaxCamera } from "@/components/instax-camera"

const posts = [
  {
    image: "https://i.postimg.cc/qqRyF0hb/IMG-7460.jpg",
    title: "snow days",
    description:
      "Snowboarding has been my favourite sport since I picked it up. The adrenaline that rushes through me as I glide down the mountain is like no other feeling.",
  },
  {
    image: "https://i.postimg.cc/TwybxxJY/IMG-7276.jpg",
    title: "old sketchbook",
    description:
      "A personal favourite out of the hundreds of pieces I've created throughout my childhood.",
  },
  {
    image: "https://i.postimg.cc/HkxsR2tf/IMG-4166.jpg",
    title: "nail sets",
    description:
      "One of my many sets. Follow my nail account on insta: @haybennails",
  },
  {
    image: "https://i.postimg.cc/rsNwXZ3L/IMG-1603.jpg",
    title: "museum days",
    description:
      "Fell in love with the surreal vibes of Monet's impressionism.",
  },
  {
    image: "https://i.postimg.cc/4dR4STy9/IMG-3303.jpg",
    title: "city memories",
    description: "Travelling, exploring cities, and collecting memories.",
  },
  {
    image: "https://i.postimg.cc/pL92Vdnn/IMG-6447.jpg",
    title: "foodie moments",
    description:
      "I'm a big foodie and you'll catch me eating at every new restaurant.",
  },
  {
    image: "https://i.postimg.cc/C5K3vvGv/IMG-7011.jpg",
    title: "water mornings",
    description:
      "The sounds of the water, quiet mornings, and a loud speaker tied to my paddleboard.",
  },
  {
    image: "https://i.postimg.cc/VLFd35P3/0006028.jpg",
    title: "through my camera",
    description: "Capturing the beauty of nature on my camera.",
  },
]

const rotations = [
  "-rotate-2",
  "rotate-1",
  "rotate-2",
  "-rotate-1",
  "rotate-[1.5deg]",
  "-rotate-[1.5deg]",
  "rotate-[0.5deg]",
  "-rotate-[0.5deg]",
]

export default function Page() {
  const [selectedPost, setSelectedPost] = useState<(typeof posts)[0] | null>(
    null
  )
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!selectedPost) return

    const originalOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"

    return () => {
      document.body.style.overflow = originalOverflow
    }
  }, [selectedPost])

  return (
    <>
      <main className="relative min-h-screen overflow-hidden bg-[#f8d0d0] text-[#3b2626]">
        {/* SOFT BACKGROUND */}
        <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
          <div className="soft-blob soft-blob-1" />
          <div className="soft-blob soft-blob-2" />
          <div className="soft-blob soft-blob-3" />
        </div>

        {/* INTRO */}
        <section className="relative z-10 flex min-h-[82vh] items-center justify-center px-6 pb-10 pt-28">
          <div className="relative w-full max-w-5xl overflow-hidden rounded-[2.5rem] border border-white/60 bg-[#fff7f2]/70 px-8 py-10 shadow-[0_25px_80px_rgba(90,45,45,0.13)] backdrop-blur-2xl md:px-12 md:py-12">
            <div className="grid items-center gap-10 md:grid-cols-[1fr_0.85fr]">
              <div className="text-center md:text-left">
                <p className="mx-auto mb-5 w-fit rounded-full border border-[#3b2626]/10 bg-white/60 px-4 py-1 text-xs uppercase tracking-[0.35em] text-[#8b5b5b] md:mx-0">
                  interests
                </p>

                <h1 className="text-6xl font-semibold leading-[0.9] tracking-[-0.08em] text-[#3b2626] sm:text-7xl md:text-8xl">
                  a peek
                  <br />
                  into my life
                </h1>

                <p className="mt-6 max-w-md text-sm leading-7 text-[#6f4b4b] sm:text-base">
                  little pieces of what i love, collect, create, and remember.
                </p>

                <div className="mt-8 flex justify-center md:justify-start">
                  <a
                    href="#gallery"
                    className="rounded-full bg-[#3b2626] px-6 py-3 text-sm font-medium text-[#fff7f2] shadow-sm transition duration-300 hover:-translate-y-1 hover:scale-105"
                  >
                    look around
                  </a>
                </div>
              </div>

              <div className="relative flex items-center justify-center">
                <div className="absolute right-8 top-14 hidden rotate-[6deg] rounded-full border border-white/70 bg-white/75 px-5 py-2 text-sm italic text-[#8b5b5b] shadow-md backdrop-blur md:block">
                  now developing...
                </div>

                <div className="absolute bottom-8 left-4 hidden rotate-[-8deg] rounded-full border border-white/70 bg-white/75 px-5 py-2 text-sm text-[#8b5b5b] shadow-md backdrop-blur md:block">
                  saved moments ♡
                </div>

                <div className="scale-[0.86]">
                  <InstaxCamera />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* GALLERY */}
        <section
          id="gallery"
          className="relative z-10 min-h-screen px-4 pb-28 pt-8 sm:px-8"
        >
          <div className="mx-auto mb-14 max-w-6xl text-center">
            <p className="text-xs uppercase tracking-[0.4em] text-[#8b5b5b]">
              memories
            </p>

            <h2 className="mt-4 text-5xl font-semibold tracking-[-0.08em] text-[#3b2626] sm:text-6xl">
              collected lately
            </h2>
          </div>

          <div className="mx-auto max-w-6xl columns-1 gap-8 sm:columns-2 lg:columns-4">
            {posts.map((post, index) => (
              <button
                key={index}
                onClick={() => setSelectedPost(post)}
                className={`group reveal-card relative mb-8 flex w-full break-inside-avoid flex-col rounded-[0.8rem] bg-white p-3 pb-12 text-left shadow-[0_18px_45px_rgba(90,45,45,0.16)] transition duration-500 hover:z-20 hover:-translate-y-3 hover:rotate-0 hover:shadow-[0_24px_65px_rgba(90,45,45,0.2)] ${
                  rotations[index % rotations.length]
                }`}
                style={{
                  animationDelay: `${index * 90}ms`,
                }}
              >
                <div className="overflow-hidden rounded-[0.45rem] bg-[#f8d0d0]/35">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="h-auto w-full object-contain transition duration-700 group-hover:scale-105"
                  />
                </div>

                <p className="absolute bottom-4 left-4 text-lg font-medium tracking-[-0.04em] text-[#3b2626]">
                  {post.title}
                </p>
              </button>
            ))}
          </div>
        </section>

        <Footer
          background="bg-[#f8d0d0]"
          border="border-white/40"
          text="text-[#8b5b5b]"
          hover="hover:text-[#3b2626]"
        />
      </main>

      {/* MODAL */}
      {mounted &&
        selectedPost &&
        createPortal(
          <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#3b2626]/45 p-6 backdrop-blur-xl">
            <button
              onClick={() => setSelectedPost(null)}
              className="absolute right-6 top-6 z-30 rounded-full bg-white/90 p-2 text-[#3b2626] shadow-md transition hover:scale-105"
            >
              <X size={22} />
            </button>

            <div className="flex max-h-[88vh] max-w-[90vw] rotate-[-1deg] flex-col overflow-hidden rounded-[0.9rem] bg-white p-4 shadow-2xl">
              <img
                src={selectedPost.image}
                alt={selectedPost.title}
                className="max-h-[58vh] max-w-[82vw] object-contain"
              />

              <div className="bg-white px-6 pb-6 pt-5 text-center">
                <p className="text-2xl font-semibold tracking-[-0.05em] text-[#3b2626]">
                  {selectedPost.title}
                </p>

                <p className="mx-auto mt-2 max-w-xl text-sm leading-6 text-[#6f4b4b]">
                  {selectedPost.description}
                </p>
              </div>
            </div>
          </div>,
          document.body
        )}

      <style jsx global>{`
        .reveal-card {
          opacity: 0;
          transform: translateY(35px);
          animation: revealPolaroid 0.7s ease forwards;
        }

        .soft-blob {
          position: absolute;
          border-radius: 9999px;
          filter: blur(90px);
          opacity: 0.32;
          animation: floatBlob 18s ease-in-out infinite alternate;
        }

        .soft-blob-1 {
          top: 10%;
          left: -8%;
          width: 340px;
          height: 340px;
          background: #ffffff;
        }

        .soft-blob-2 {
          top: 38%;
          right: -12%;
          width: 420px;
          height: 420px;
          background: #f3b8b8;
        }

        .soft-blob-3 {
          bottom: -8%;
          left: 18%;
          width: 360px;
          height: 360px;
          background: #fff7f2;
        }

        @keyframes floatBlob {
          from {
            transform: translate(0, 0) scale(1);
          }
          to {
            transform: translate(55px, -45px) scale(1.1);
          }
        }

        @keyframes revealPolaroid {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  )
}