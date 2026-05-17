"use client"

import { useState } from "react"
import { Footer } from "@/components/footer"

const posts = [
  {
    image: "https://i.postimg.cc/qqRyF0hb/IMG-7460.jpg",
    title: "snow days",
    description: "Snowboarding, cold air, and mountain adrenaline.",
    movieCover:
      "https://static1.colliderimages.com/wordpress/wp-content/uploads/sharedimages/2024/04/the-outsiders-movie-poster.jpg",
    movieTitle: "The Outsiders",
  },
  {
    image: "https://i.postimg.cc/TwybxxJY/IMG-7276.jpg",
    title: "old sketchbook",
    description: "Years of drawing, sketching, and unfinished ideas.",
    movieCover:
      "https://static1.colliderimages.com/wordpress/wp-content/uploads/sharedimages/2024/04/dead-poets-society-poster.jpg",
    movieTitle: "Dead Poets Society",
  },
  {
    image: "https://i.postimg.cc/HkxsR2tf/IMG-4166.jpg",
    title: "nail sets",
    description: "Tiny details, colour palettes, and wearable art.",
    movieCover:
      "https://tse2.mm.bing.net/th/id/OIP.uGHHTy-qyf-9yujlIICNDQHaLH?rs=1&pid=ImgDetMain&o=7&rm=3",
    movieTitle: "10 Things I Hate About You",
  },
  {
    image: "https://i.postimg.cc/rsNwXZ3L/IMG-1603.jpg",
    title: "museum days",
    description: "Soft rooms, quiet looking, and Monet colours.",
    movieCover:
      "https://xl.movieposterdb.com/14_08/2011/1605783/xl_1605783_d650a75e.jpg",
    movieTitle: "Midnight in Paris",
  },
  {
    image: "https://i.postimg.cc/4dR4STy9/IMG-3303.jpg",
    title: "city memories",
    description: "Travelling, exploring cities, and collecting moments.",
    movieCover:
      "https://static1.srcdn.com/wordpress/wp-content/uploads/2020/04/Good-Will-Hunting-Movie-Poster.jpg",
    movieTitle: "Good Will Hunting",
  },
  {
    image: "https://i.postimg.cc/pL92Vdnn/IMG-6447.jpg",
    title: "foodie moments",
    description: "New restaurants, comfort meals, and little treats.",
    movieCover:
      "https://m.media-amazon.com/images/M/MV5BMTU1MTQ0NDAyNV5BMl5BanBnXkFtZTgwNjQ4MjE4MjI@._V1_.jpg",
    movieTitle: "To the Bone",
  },
  {
    image: "https://i.postimg.cc/C5K3vvGv/IMG-7011.jpg",
    title: "water mornings",
    description: "Paddleboards, speakers, and slow summer mornings.",
    movieCover:
      "https://media.services.cinergy.ch/media/box1600/eb45ca82de9170e6cfdbea680c873d33da42ac6e.jpg",
    movieTitle: "Manchester by the Sea",
  },
  {
    image: "https://i.postimg.cc/VLFd35P3/0006028.jpg",
    title: "through my camera",
    description: "Nature, light, and scenes worth keeping.",
    movieCover:
      "https://www.themoviedb.org/t/p/original/wbvboxr6xmdSbMEBKzXVWgAwJ1Q.jpg",
    movieTitle: "The Notebook",
  },
]

export default function Page() {
  const [entered, setEntered] = useState(false)
  const [showIntro, setShowIntro] = useState(true)
  const [flippedCards, setFlippedCards] = useState<number[]>([])

  const enterArchive = () => {
    setEntered(true)

    setTimeout(() => {
      setShowIntro(false)
    }, 700)
  }

  const toggleFlip = (index: number) => {
    setFlippedCards((current) =>
      current.includes(index)
        ? current.filter((card) => card !== index)
        : [...current, index]
    )
  }

  return (
    <>
      <main className="min-h-screen bg-[#f6ebe7] text-[#241818]">
        <section
          id="gallery"
          className={`px-6 pt-32 pb-32 transition duration-700 ${
            showIntro ? "opacity-0" : "opacity-100"
          }`}
        >
          <div className="mx-auto max-w-6xl">
            <div className="mb-14 flex items-center gap-4">
              <div className="h-px w-10 bg-[#8b6f68]" />

              <p className="text-[11px] uppercase tracking-[0.35em] text-[#8b6f68]">
                archive
              </p>
            </div>

            <div className="grid gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-4">
              {posts.map((post, index) => {
                const isFlipped = flippedCards.includes(index)

                return (
                  <button
                    key={index}
                    type="button"
                    onClick={() => toggleFlip(index)}
                    className="group h-[430px] cursor-pointer text-left [perspective:1200px]"
                  >
                    <div
                      className={`relative h-full w-full transition-transform duration-700 [transform-style:preserve-3d] ${
                        isFlipped
                          ? "[transform:rotateY(180deg)] group-hover:[transform:rotateY(0deg)]"
                          : "[transform:rotateY(0deg)] group-hover:[transform:rotateY(180deg)]"
                      }`}
                    >
                      <div className="absolute inset-0 h-full w-full border border-[#d8c7c2] bg-[#f8eee9] p-3 shadow-sm [backface-visibility:hidden]">
                        <div className="flex h-full flex-col">
                          <div className="overflow-hidden">
                            <img
                              src={post.image}
                              alt={post.title}
                              className="aspect-[3/4] w-full object-cover"
                            />
                          </div>

                          <div className="flex flex-1 flex-col justify-between border-t border-[#d8c7c2] pt-4">
                            <div>
                              <p className="font-serif text-2xl italic tracking-[-0.03em] text-[#241818]">
                                {post.title}
                              </p>

                              <p className="mt-2 text-sm leading-6 text-[#5f4b47]">
                                {post.description}
                              </p>
                            </div>

                            <p className="mt-4 text-[10px] uppercase tracking-[0.25em] text-[#8b6f68]">
                              hover / click to flip
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="absolute inset-0 h-full w-full border border-[#d8c7c2] bg-[#f8eee9] p-3 [backface-visibility:hidden] [transform:rotateY(180deg)]">
                        <div className="flex h-full flex-col">
                          <div className="overflow-hidden">
                            <img
                              src={post.movieCover}
                              alt={post.movieTitle}
                              className="aspect-[3/4] w-full object-cover"
                            />
                          </div>

                          <div className="flex flex-1 flex-col justify-between border-t border-[#d8c7c2] pt-4">
                            <div>
                              <p className="text-[10px] uppercase tracking-[0.25em] text-[#8b6f68]">
                                movie rec
                              </p>

                              <p className="mt-2 font-serif text-2xl italic tracking-[-0.03em] text-[#241818]">
                                {post.movieTitle}
                              </p>
                            </div>

                            <p className="mt-4 text-[10px] uppercase tracking-[0.25em] text-[#8b6f68]">
                              hover / click to flip
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </button>
                )
              })}
            </div>
          </div>
        </section>

        {!showIntro && (
          <Footer
            background="bg-[#f6ebe7]"
            border="border-[#d8c7c2]"
            text="text-[#8b6f68]"
            hover="hover:text-[#241818]"
          />
        )}
      </main>

      {showIntro && (
        <section
          className={`fixed inset-0 z-40 flex min-h-screen items-start justify-center overflow-y-auto bg-[#f6ebe7] px-6 pt-24 pb-16 text-[#241818] transition-all duration-700 ${
            entered ? "pointer-events-none opacity-0" : "opacity-100"
          }`}
        >
          <div className="absolute inset-0 opacity-[0.045]">
            <div
              className="h-full w-full"
              style={{
                backgroundImage:
                  "linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)",
                backgroundSize: "42px 42px",
              }}
            />
          </div>

          <div className="relative mx-auto w-full max-w-6xl border border-[#d8c7c2] bg-[#f8eee9] p-8 md:p-14">
            <div className="mb-10 flex items-center justify-between border-b border-[#d8c7c2] pb-5">
              <p className="text-[11px] uppercase tracking-[0.4em] text-[#8b6f68]">
                personal archive
              </p>

              <p className="text-[11px] uppercase tracking-[0.25em] text-[#8b6f68]">
                memories × movies
              </p>
            </div>

            <div className="grid gap-14 md:grid-cols-[1.2fr_0.8fr]">
              <div>
                <p className="mb-5 font-serif text-sm italic text-[#8b6f68]">
                  edition no. 01
                </p>

                <h1 className="max-w-4xl font-serif text-6xl leading-[0.9] tracking-[-0.08em] md:text-8xl">
                  memories as
                  <br />
                  movie scenes.
                </h1>
              </div>

              <div className="flex flex-col justify-end">
                <p className="border-l border-[#d8c7c2] pl-6 text-[15px] leading-8 text-[#5f4b47]">
                  A small archive of personal moments paired with films that
                  match their mood — like every photo has its own scene,
                  soundtrack, and story.
                </p>

                <button
                  type="button"
                  onClick={enterArchive}
                  className="mt-10 w-fit border border-[#241818] px-5 py-3 text-[11px] uppercase tracking-[0.3em] text-[#241818] transition hover:bg-[#241818] hover:text-[#f6ebe7]"
                >
                  enter archive
                </button>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  )
}