"use client"

import { Footer } from "@/components/footer"
import { useEffect, useRef, useState } from "react"
import { createPortal } from "react-dom"
import {
  Play,
  Pause,
  Shuffle,
  SkipBack,
  SkipForward,
  Heart,
  Music,
} from "lucide-react"

const playlists = [
  {
    id: "late-night",
    name: "late night",
    description:
      "songs i listen to when i'm studying, driving, or out, late at night",
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
      "songs that i like to listen to on chairlifts, snowboard runs, and snowy days",
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
        title: "Consume (feat. Goon Des Garcons)",
        artist: "Chase Atlantic, GOON DES GARCONS",
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

export function MusicPage() {
  const audioRef = useRef<HTMLAudioElement | null>(null)

  const [selectedPlaylist, setSelectedPlaylist] = useState(playlists[0])
  const [selectedSong, setSelectedSong] = useState(playlists[0].songs[0])
  const [isPlaying, setIsPlaying] = useState(false)
  const [mounted, setMounted] = useState(false)

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
      <main className="min-h-screen overflow-hidden bg-[#f8d0d0] pt-24 pb-36 text-[#3b2626]">
        <audio ref={audioRef} src={selectedSong.src} onEnded={skipForward} />

        <div className="pointer-events-none fixed left-[-120px] top-24 h-72 w-72 rounded-full bg-white/35 blur-3xl" />
        <div className="pointer-events-none fixed bottom-20 right-[-100px] h-80 w-80 rounded-full bg-[#f3b8b8]/60 blur-3xl" />

        <div className="mx-auto max-w-[1400px] px-4 md:px-5 text-[#3b2626]">
          <div className="relative">

            {/* MOBILE TOP PLAYLIST BAR + DESKTOP SIDEBAR */}
            <aside className="mb-5 flex w-full items-center gap-3 overflow-x-auto rounded-[1.5rem] border border-white/70 bg-[#fff7f2]/80 p-3 shadow-[0_20px_60px_rgba(90,45,45,0.12)] backdrop-blur-xl md:fixed md:top-24 md:mb-0 md:h-[calc(100vh-9rem)] md:w-[118px] md:flex-col md:overflow-visible md:rounded-[2rem] md:p-4">

              <div className="hidden h-16 w-16 shrink-0 items-center justify-center rounded-[1.4rem] bg-[#3b2626] text-[#fff7f2] md:flex">
                <Music size={26} />
              </div>

              <div className="flex gap-3 md:block md:space-y-4">
                {playlists.map((playlist) => (
                  <button
                    key={playlist.id}
                    onClick={() => choosePlaylist(playlist)}
                    className={`group relative h-16 w-16 shrink-0 overflow-hidden rounded-[1.15rem] border bg-white p-1 transition hover:-rotate-2 hover:scale-105 ${
                      selectedPlaylist.id === playlist.id
                        ? "border-[#3b2626] shadow-md"
                        : "border-white/80 opacity-80 hover:opacity-100"
                    }`}
                  >
                    <img
                      src={playlist.cover}
                      alt={playlist.name}
                      className="h-full w-full rounded-[0.9rem] object-cover"
                    />
                  </button>
                ))}
              </div>
            </aside>

            <section className="overflow-hidden rounded-[2.5rem] border border-white/70 bg-[#fff7f2]/85 text-[#3b2626] shadow-[0_30px_90px_rgba(90,45,45,0.14)] backdrop-blur-xl md:ml-[140px]">

              <div className="relative p-6 md:p-10">

                <div className="absolute right-8 top-10 hidden md:block">
                  <div className="relative h-[280px] w-[280px] overflow-visible">
                    {[
                      "animate-[note1_3.2s_ease-out_infinite]",
                      "animate-[note2_3s_ease-out_0.3s_infinite]",
                      "animate-[note3_3.4s_ease-out_0.6s_infinite]",
                      "animate-[note4_3.1s_ease-out_0.9s_infinite]",
                      "animate-[note5_3.5s_ease-out_1.2s_infinite]",
                      "animate-[note6_3s_ease-out_1.5s_infinite]",
                      "animate-[note7_3.4s_ease-out_1.8s_infinite]",
                      "animate-[note8_3.2s_ease-out_2.1s_infinite]",
                    ].map((animation, index) => (
                      <span
                        key={index}
                        className={`pointer-events-none absolute left-[130px] top-[165px] z-20 text-3xl font-bold text-pink-200/90 opacity-0 ${animation}`}
                      >
                        {["♪", "♫", "♬", "♪", "♩", "♫", "♪", "♬"][index]}
                      </span>
                    ))}

                    <img
                      src="https://i.postimg.cc/50TKQv33/IMG-2517.png"
                      alt="snoopy listening to music"
                      className="relative z-10 ml-6 h-[200px] w-auto object-contain"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-8 md:flex-row md:items-end">

                  <div className="mx-auto rotate-[-3deg] rounded-[0.6rem] bg-white p-3 pb-10 shadow-[0_18px_40px_rgba(90,45,45,0.18)] md:mx-0">
                    <img
                      src={selectedPlaylist.cover}
                      alt={selectedPlaylist.name}
                      className="h-52 w-44 rounded-[0.3rem] object-cover md:h-56 md:w-48"
                    />
                  </div>

                  <div className="max-w-2xl pb-2 md:pb-4">
                    <p className="mb-3 w-fit rounded-full border border-[#3b2626]/15 bg-white/70 px-4 py-1 text-[10px] uppercase tracking-[0.3em] text-[#8b5b5b] md:text-xs">
                      private playlist
                    </p>

                    <h1 className="text-5xl font-semibold tracking-[-0.07em] text-[#3b2626] md:text-8xl">
                      {selectedPlaylist.name}
                    </h1>

                    <p className="mt-4 max-w-xl text-sm leading-6 text-[#6f4b4b]">
                      {selectedPlaylist.description}
                    </p>

                    <p className="mt-3 text-sm text-[#9b6b6b]">
                      Elaine · {selectedPlaylist.songs.length} songs
                    </p>
                  </div>
                </div>
              </div>

              <div className="border-t border-[#3b2626]/10 bg-white/45 p-4 md:p-8">

                <div className="mb-7 flex items-center gap-4">
                  <button
                    onClick={togglePlay}
                    className="flex h-14 w-14 items-center justify-center rounded-full bg-[#3b2626] text-[#fff7f2] transition hover:scale-105"
                  >
                    {isPlaying ? (
                      <Pause size={25} />
                    ) : (
                      <Play size={25} fill="#fff7f2" />
                    )}
                  </button>

                  <Shuffle className="text-[#9b6b6b]" />
                  <Heart className="text-[#9b6b6b]" />
                </div>

                {/* DESKTOP TABLE HEADER */}
                <div className="hidden grid-cols-[40px_1fr_1fr_70px] border-b border-[#3b2626]/10 px-4 pb-3 text-xs uppercase tracking-[0.18em] text-[#9b6b6b] md:grid">
                  <p>#</p>
                  <p>Title</p>
                  <p>Album</p>
                  <p>Time</p>
                </div>

                <div className="mt-3 space-y-2">
                  {selectedPlaylist.songs.map((song, index) => (
                    <button
                      key={song.title}
                      onClick={() => chooseSong(song)}
                      className={`w-full rounded-2xl px-4 py-4 text-left transition hover:bg-white/80 ${
                        selectedSong.title === song.title
                          ? "bg-white shadow-sm"
                          : ""
                      }`}
                    >

                      {/* MOBILE */}
                      <div className="flex items-center justify-between md:hidden">
                        <div>
                          <p className="font-medium text-[#3b2626]">
                            {song.title}
                          </p>

                          <p className="text-sm text-[#9b6b6b]">
                            {song.artist}
                          </p>
                        </div>

                        <p className="text-sm text-[#9b6b6b]">
                          {song.duration}
                        </p>
                      </div>

                      {/* DESKTOP */}
                      <div className="hidden grid-cols-[40px_1fr_1fr_70px] items-center md:grid">
                        <p className="text-sm text-[#9b6b6b]">{index + 1}</p>

                        <div>
                          <p className="font-medium text-[#3b2626]">
                            {song.title}
                          </p>

                          <p className="text-sm text-[#9b6b6b]">
                            {song.artist}
                          </p>
                        </div>

                        <p className="truncate text-sm text-[#9b6b6b]">
                          {song.album}
                        </p>

                        <p className="text-sm text-[#9b6b6b]">
                          {song.duration}
                        </p>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </section>
          </div>
        </div>

        <Footer
          background="bg-[#f8d0d0]"
          border="border-white/40"
          text="text-[#8b5b5b]"
          hover="hover:text-[#3b2626]"
        />
      </main>

      {mounted &&
        createPortal(
          <div className="fixed bottom-0 left-0 right-0 z-[999999] h-24 border-t border-white/70 bg-[#fff7f2]/90 text-[#3b2626] shadow-[0_-20px_50px_rgba(90,45,45,0.12)] backdrop-blur-xl">
            <div className="relative flex h-full items-center px-4 md:px-6">

              <div className="w-[120px] md:w-[260px]">
                <p className="truncate text-sm font-semibold">
                  {selectedSong.title}
                </p>

                <p className="truncate text-xs text-[#9b6b6b]">
                  {selectedSong.artist}
                </p>
              </div>

              <div className="absolute left-1/2 flex -translate-x-1/2 items-center gap-5 md:gap-6">

                <Shuffle
                  size={18}
                  className="hidden cursor-pointer text-[#9b6b6b] md:block"
                />

                <button onClick={skipBack}>
                  <SkipBack
                    size={22}
                    className="cursor-pointer transition hover:scale-110"
                  />
                </button>

                <button
                  onClick={togglePlay}
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-[#3b2626] text-[#fff7f2] transition hover:scale-105"
                >
                  {isPlaying ? (
                    <Pause size={18} />
                  ) : (
                    <Play size={18} fill="#fff7f2" />
                  )}
                </button>

                <button onClick={skipForward}>
                  <SkipForward
                    size={22}
                    className="cursor-pointer transition hover:scale-110"
                  />
                </button>
              </div>
            </div>
          </div>,
          document.body
        )}
    </>
  )
}