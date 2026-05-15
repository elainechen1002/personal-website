export function InstaxCamera() {
  return (
    <>
      <div className="relative mx-auto flex w-full max-w-[430px] justify-center pt-40">
        <div className="relative h-[330px] w-[300px] sm:h-[370px] sm:w-[340px]">
          {/* FLASH */}
          <div className="flash-burst absolute right-4 top-6 z-[60] h-32 w-32 rounded-full bg-white" />

          {/* PHOTO BEHIND CAMERA */}
          <div className="instax-photo photo-behind absolute left-1/2 top-[18px] z-20 h-52 w-40 rounded-[0.15rem] bg-white p-3">
            <div className="photo-develop h-32 w-full bg-black" />
            <div className="mx-auto mt-3 h-2 w-16 rounded-full bg-[#eee2d6]" />
          </div>

          {/* PHOTO IN FRONT ONLY ABOVE SLIT */}
          <div className="pointer-events-none absolute left-0 top-[-260px] z-40 h-[278px] w-full overflow-hidden">
            <div className="instax-photo photo-front absolute left-1/2 top-[278px] h-52 w-40 rounded-[0.15rem] bg-white p-3">
              <div className="photo-develop h-32 w-full bg-black" />
              <div className="mx-auto mt-3 h-2 w-16 rounded-full bg-[#eee2d6]" />
            </div>
          </div>

          {/* CAMERA */}
          <div className="absolute inset-0 z-30 overflow-hidden rounded-[2.7rem] bg-[#f3dfc7]">
            <div className="absolute left-0 top-0 h-24 w-full rounded-b-[2.2rem] bg-[#f8ead9]" />

            {/* SLIT */}
            <div className="absolute left-1/2 top-[18px] z-50 h-3 w-48 -translate-x-1/2 rounded-full bg-[#c7a98c]">
              <div className="absolute left-1/2 top-1/2 h-1 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#8d6f5f]" />
            </div>

            {/* VIEWFINDER */}
            <div className="absolute left-8 top-28 z-50 h-12 w-16 rounded-2xl bg-[#fffaf3]">
              <div className="absolute inset-3 rounded-xl bg-[#8d6f5f]" />
            </div>

            {/* FLASH PIECE */}
            <div className="absolute right-9 top-28 z-50 h-14 w-14 rounded-2xl bg-[#fffaf3]">
              <div className="absolute inset-3 rounded-xl bg-[#ead8c5]" />
              <div className="flash-dot absolute -right-1 -top-1 h-5 w-5 rounded-full bg-white" />
            </div>

            {/* BUTTONS */}
            <div className="absolute right-11 top-40 z-50 h-9 w-9 rounded-full bg-[#d8c4a8]" />
            <div className="absolute left-16 top-42 z-50 h-6 w-6 rounded-full bg-[#d8c4a8]" />

            {/* LENS */}
            <div className="absolute left-1/2 top-[160px] z-50 flex h-36 w-36 -translate-x-1/2 items-center justify-center rounded-full bg-[#e4cbb1] sm:top-[175px] sm:h-40 sm:w-40">
              <div className="flex h-28 w-28 items-center justify-center rounded-full bg-[#6f574b] sm:h-32 sm:w-32">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#2f251f] sm:h-24 sm:w-24">
                  <div className="h-8 w-8 rounded-full bg-[#4a3930]" />
                </div>
              </div>
            </div>

            {/* BOTTOM DETAIL */}
            <div className="absolute bottom-8 left-1/2 z-50 h-10 w-28 -translate-x-1/2 rounded-full bg-[#d8c4a8]" />
          </div>
        </div>
      </div>

      <style jsx>{`
        .flash-burst {
          opacity: 0;
          pointer-events: none;

          background: radial-gradient(
            circle,
            rgba(255, 255, 255, 0.95) 0%,
            rgba(255, 255, 255, 0.6) 35%,
            rgba(255, 255, 255, 0) 75%
          );

          filter: blur(18px);
          animation: flashBurst 1s ease-out forwards;
          animation-delay: 1s;
        }

        .flash-dot {
          animation: flashDot 1s ease-out forwards;
          animation-delay: 1s;
        }

        .instax-photo {
          opacity: 0;
          transform: translateX(-50%) translateY(95px);

          animation: slideUpFromSlit 5.5s
            cubic-bezier(0.22, 1, 0.36, 1)
            forwards;

          animation-delay: 1.2s;
        }

        .photo-develop {
          background-image: url("https://i.postimg.cc/vBsk0591/IMG-7314.jpg");
          background-size: cover;
          background-position: center;
          filter: brightness(0);

          animation: developPhoto 2.5s ease-in-out forwards;

          /* starts shortly before the photo fully finishes dispensing */
          animation-delay: 3.5s;
        }

        @keyframes flashBurst {
          0% {
            opacity: 0;
            transform: scale(0.3);
          }

          18% {
            opacity: 1;
            transform: scale(2.4);
          }

          40% {
            opacity: 0.45;
            transform: scale(3.1);
          }

          100% {
            opacity: 0;
            transform: scale(3.6);
          }
        }

        @keyframes flashDot {
          0% {
            opacity: 0.45;
            transform: scale(1);
            box-shadow: none;
          }

          18% {
            opacity: 1;
            transform: scale(1.7);
            box-shadow:
              0 0 35px 18px rgba(255, 255, 255, 0.95),
              0 0 90px 45px rgba(255, 255, 255, 0.45);
          }

          100% {
            opacity: 0.45;
            transform: scale(1);
            box-shadow: none;
          }
        }

        @keyframes slideUpFromSlit {
          0% {
            opacity: 0;
            transform: translateX(-50%) translateY(95px);
          }

          8% {
            opacity: 1;
            transform: translateX(-50%) translateY(95px);
          }

          100% {
            opacity: 1;
            transform: translateX(-50%) translateY(-180px);
          }
        }

        @keyframes developPhoto {
          0%,
          32% {
            filter: brightness(0);
          }

          52% {
            filter: brightness(0.35) saturate(0.4);
          }

          76%,
          100% {
            filter: brightness(1) saturate(1);
          }
        }
      `}</style>
    </>
  )
}