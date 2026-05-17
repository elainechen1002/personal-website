"use client"

import { Footer } from "@/components/footer"
import { createPortal } from "react-dom"
import { useEffect, useRef, useState } from "react"
import {
  Play,
  Pause,
  SkipBack,
  SkipForward,
  Music as MusicIcon,
  Heart,
  Disc3,
} from "lucide-react"

const playlists = [
  {
    id: "late-night",
    name: "late night",
    description:
      "songs i listen to when i'm studying, driving, or out late at night",
    cover: "https://i.postimg.cc/rpnQyyXg/IMG-7251.jpg",
    songs: [
      {
        title: "Who Knows",
        artist: "Daniel Caesar",
        album: "Son Of Spergy",
        duration: "3:46",
        src: "/music/whoknows.mp3",
      },
      {
        title: "Raindance (feat. Tems)",
        artist: "Dave, Tems",
        album: "The Boy Who Played the Harp",
        duration: "3:39",
        src: "/music/raindance.mp3",
      },
      {
        title: "Ribs",
        artist: "Lorde",
        album: "Pure Heroine",
        duration: "4:18",
        src: "/music/ribs.mp3",
      },
      {
        title: "DAISIES",
        artist: "Justin Bieber",
        album: "SWAG",
        duration: "2:56",
        src: "/music/daisies.mp3",
      },
    ],
  },
  {
    id: "snow-days",
    name: "snow days",
    description:
      "songs for chairlifts, snowboard runs, and cold mountain air",
    cover: "https://i.postimg.cc/d3q1WFDq/IMG-7252.jpg",
    songs: [
      {
        title: "Cherry Flavoured",
        artist: "The Neighbourhood",
        album: "Chip Chrome & The Mono-Tones",
        duration: "3:28",
        src: "/music/cherry.mp3",
      },
      {
        title: "Consume",
        artist: "Chase Atlantic",
        album: "Chase Atlantic",
        duration: "4:27",
        src: "/music/consume.mp3",
      },
      {
        title: "SLOW DANCING IN THE DARK",
        artist: "Joji",
        album: "BALLADS 1",
        duration: "3:29",
        src: "/music/joji.mp3",
      },
      {
        title: "Lovers Rock",
        artist: "TV Girl",
        album: "French Exit",
        duration: "3:33",
        src: "/music/rock.mp3",
      },
    ],
  },
  {
    id: "travel",
    name: "travel",
    description: "songs that remind me of places i've visited",
    cover: "https://i.postimg.cc/ZYdtQ26N/IMG-7253.jpg",
    songs: [
      {
        title: "Good Days",
        artist: "SZA",
        album: "SOS",
        duration: "4:39",
        src: "/music/good.mp3",
      },
      {
        title: "Champagne Coast",
        artist: "Blood Orange",
        album: "Coastal Grooves",
        duration: "4:52",
        src: "/music/coast.mp3",
      },
      {
        title: "While We're Young",
        artist: "Jhené Aiko",
        album: "Trip",
        duration: "3:56",
        src: "/music/young.mp3",
      },
      {
        title: "Robbers",
        artist: "The 1975",
        album: "The 1975",
        duration: "4:14",
        src: "/music/robbers.mp3",
      },
    ],
  },
]

export default function MusicPage() {
  const audioRef = useRef<HTMLAudioElement | null>(null)

  const [mounted, setMounted] = useState(false)
  const [selectedPlaylist, setSelectedPlaylist] = useState(playlists[0])
  const [selectedSong, setSelectedSong] = useState(playlists[0].songs[0])
  const [isPlaying, setIsPlaying] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  function choosePlaylist(playlist: (typeof playlists)[0]) {
    setSelectedPlaylist(playlist)
  }

  function chooseSong(song: (typeof playlists)[0]["songs"][0]) {
    setSelectedSong(song)
    setIsPlaying(true)

    setTimeout(() => {
      audioRef.current?.play()
    }, 0)
  }

  function togglePlay() {
    if (!audioRef.current) return

    if (isPlaying) {
      audioRef.current.pause()
      setIsPlaying(false)
    } else {
      audioRef.current.play()
      setIsPlaying(true)
    }
  }

  function skipForward() {
    const currentIndex = selectedPlaylist.songs.findIndex(
      (song) => song.title === selectedSong.title
    )

    const nextSong =
      selectedPlaylist.songs[
        (currentIndex + 1) % selectedPlaylist.songs.length
      ]

    chooseSong(nextSong)
  }

  function skipBack() {
    const currentIndex = selectedPlaylist.songs.findIndex(
      (song) => song.title === selectedSong.title
    )

    const previousSong =
      selectedPlaylist.songs[
        (currentIndex - 1 + selectedPlaylist.songs.length) %
          selectedPlaylist.songs.length
      ]

    chooseSong(previousSong)
  }

  return (
    <>
      <main className="min-h-screen bg-[#f6ebe7] px-6 pt-28 pb-52 text-[#241818]">
        <audio ref={audioRef} src={selectedSong.src} onEnded={skipForward} />

        <section className="mx-auto max-w-6xl">
          <div className="mb-10 flex items-center justify-between border-b border-[#d8c7c2] pb-5">
            <p className="text-[11px] uppercase tracking-[0.4em] text-[#8b6f68]">
              personal archive
            </p>

            <p className="text-[11px] uppercase tracking-[0.25em] text-[#8b6f68]">
              music edition
            </p>
          </div>

          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
            {/* LEFT PANEL */}
            <div className="border border-[#d8c7c2] bg-[#f8eee9] p-6 md:p-8">
              <p className="mb-4 font-serif text-sm italic text-[#8b6f68]">
                edition no. 02
              </p>

              <h1 className="font-serif text-6xl leading-[0.9] tracking-[-0.08em] md:text-8xl">
                songs as
                <br />
                memories.
              </h1>

              <p className="mt-8 border-l border-[#d8c7c2] pl-6 text-[15px] leading-8 text-[#5f4b47]">
                A small collection of playlists for late nights, snow days,
                travelling, and the moments that feel like scenes from a film.
              </p>

              <div className="mt-10 grid gap-3">
                {playlists.map((playlist) => (
                  <button
                    key={playlist.id}
                    onClick={() => choosePlaylist(playlist)}
                    className={`flex items-center gap-4 border p-3 text-left transition ${
                      selectedPlaylist.id === playlist.id
                        ? "border-[#241818] bg-[#241818] text-[#f6ebe7]"
                        : "border-[#d8c7c2] bg-[#f6ebe7] text-[#241818] hover:border-[#241818]"
                    }`}
                  >
                    <img
                      src={playlist.cover}
                      alt={playlist.name}
                      className="h-16 w-16 object-cover"
                    />

                    <div>
                      <p className="font-serif text-2xl italic tracking-[-0.03em]">
                        {playlist.name}
                      </p>

                      <p
                        className={`mt-1 text-xs leading-5 ${
                          selectedPlaylist.id === playlist.id
                            ? "text-[#f6ebe7]/75"
                            : "text-[#5f4b47]"
                        }`}
                      >
                        {playlist.description}
                      </p>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* RIGHT PANEL */}
            <div className="border border-[#d8c7c2] bg-[#f8eee9] p-6 md:p-8">
              <div className="grid gap-8 md:grid-cols-[260px_1fr]">
                <div>
                  <div className="border border-[#d8c7c2] bg-[#f6ebe7] p-3">
                    <img
                      src={selectedPlaylist.cover}
                      alt={selectedPlaylist.name}
                      className="aspect-square w-full object-cover"
                    />
                  </div>

                  <div className="mt-5 border-t border-[#d8c7c2] pt-4">
                    <p className="text-[10px] uppercase tracking-[0.3em] text-[#8b6f68]">
                      now viewing
                    </p>

                    <h2 className="mt-2 font-serif text-4xl italic tracking-[-0.04em]">
                      {selectedPlaylist.name}
                    </h2>

                    <p className="mt-3 text-sm leading-6 text-[#5f4b47]">
                      {selectedPlaylist.description}
                    </p>
                  </div>
                </div>

                <div>
                  <div className="mb-5 flex items-center gap-3 border-b border-[#d8c7c2] pb-4">
                    <Disc3 size={18} className="text-[#8b6f68]" />

                    <p className="text-[11px] uppercase tracking-[0.35em] text-[#8b6f68]">
                      track list
                    </p>
                  </div>

                  <div className="space-y-3">
                    {selectedPlaylist.songs.map((song, index) => {
                      const active = selectedSong.title === song.title

                      return (
                        <button
                          key={song.title}
                          onClick={() => chooseSong(song)}
                          className={`grid w-full grid-cols-[32px_1fr_auto] items-center gap-4 border p-4 text-left transition ${
                            active
                              ? "border-[#241818] bg-[#241818] text-[#f6ebe7]"
                              : "border-[#d8c7c2] bg-[#f6ebe7] text-[#241818] hover:border-[#241818]"
                          }`}
                        >
                          <p
                            className={`font-serif text-xl italic ${
                              active ? "text-[#f6ebe7]" : "text-[#8b6f68]"
                            }`}
                          >
                            {String(index + 1).padStart(2, "0")}
                          </p>

                          <div>
                            <p className="font-serif text-2xl italic tracking-[-0.03em]">
                              {song.title}
                            </p>

                            <p
                              className={`mt-1 text-xs ${
                                active ? "text-[#f6ebe7]/70" : "text-[#5f4b47]"
                              }`}
                            >
                              {song.artist} · {song.album}
                            </p>
                          </div>

                          <p
                            className={`text-xs ${
                              active ? "text-[#f6ebe7]/70" : "text-[#8b6f68]"
                            }`}
                          >
                            {song.duration}
                          </p>
                        </button>
                      )
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer
          background="bg-[#f6ebe7]"
          border="border-[#d8c7c2]"
          text="text-[#8b6f68]"
          hover="hover:text-[#241818]"
        />
      </main>

      {mounted &&
        createPortal(
          <div className="fixed inset-x-0 bottom-0 z-[99999] border-t border-[#d8c7c2] bg-[#f8eee9]/95 px-6 py-4 text-[#241818] backdrop-blur-xl supports-[backdrop-filter]:bg-[#f8eee9]/80">
            <div className="mx-auto flex max-w-6xl items-center justify-between gap-4">
              <div className="flex min-w-0 items-center gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center border border-[#d8c7c2] bg-[#f6ebe7]">
                  <MusicIcon size={22} className="text-[#8b6f68]" />
                </div>

                <div className="min-w-0">
                  <p className="truncate font-serif text-xl italic tracking-[-0.03em]">
                    {selectedSong.title}
                  </p>

                  <p className="truncate text-xs text-[#5f4b47]">
                    {selectedSong.artist}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={skipBack}
                  className="flex h-10 w-10 items-center justify-center border border-[#d8c7c2] transition hover:border-[#241818]"
                >
                  <SkipBack size={17} />
                </button>

                <button
                  onClick={togglePlay}
                  className="flex h-12 w-12 items-center justify-center bg-[#241818] text-[#f6ebe7] transition hover:opacity-80"
                >
                  {isPlaying ? (
                    <Pause size={18} />
                  ) : (
                    <Play size={18} />
                  )}
                </button>

                <button
                  onClick={skipForward}
                  className="flex h-10 w-10 items-center justify-center border border-[#d8c7c2] transition hover:border-[#241818]"
                >
                  <SkipForward size={17} />
                </button>
              </div>

              <div className="hidden items-center gap-2 text-[#8b6f68] md:flex">
                <Heart size={16} />
                <p className="text-[10px] uppercase tracking-[0.3em]">
                  currently playing
                </p>
              </div>
            </div>
          </div>,
          document.body
        )}
    </>
  )
}