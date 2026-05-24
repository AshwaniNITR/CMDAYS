"use client";

import React, { useState, useEffect } from "react";
import { Calendar, MapPin } from "lucide-react";

const Hero = () => {
  const [animationStates, setAnimationStates] = useState({
    desktopLayout: false,
    content: false,
    logo: false,
    text: false,
    dateBadge: false,
    locationSection: false,
  });

  useEffect(() => {
    setTimeout(() => {
      setAnimationStates((prev) => ({ ...prev, desktopLayout: true }));
    }, 100);

    setTimeout(() => {
      setAnimationStates((prev) => ({ ...prev, content: true }));
    }, 200);

    setTimeout(() => {
      setAnimationStates((prev) => ({ ...prev, logo: true }));
    }, 300);

    setTimeout(() => {
      setAnimationStates((prev) => ({ ...prev, text: true }));
    }, 400);

    setTimeout(() => {
      setAnimationStates((prev) => ({ ...prev, dateBadge: true }));
    }, 500);

    setTimeout(() => {
      setAnimationStates((prev) => ({ ...prev, locationSection: true }));
    }, 600);
  }, []);

  const conferenceDate = "NOVEMBER 17-19, 2026";

  return (
    <div
      id="home"
      className="relative overflow-hidden min-h-screen flex items-center justify-center"
    >
     {/* DESKTOP LAYOUT */}
     {/* DESKTOP LAYOUT */}
<div
  className={`hidden xl:flex min-h-screen w-full transition-all duration-700 ease-out ${
    animationStates.desktopLayout ? "opacity-100" : "opacity-0"
  }`}
>
  <div
    className="
      w-full
      max-w-[1800px]
      mx-auto

      px-10
      min-[1600px]:px-16

      py-10

      flex
      flex-col
      justify-center
      items-center
    "
  >
    <section
      className={`w-full max-w-7xl mx-auto transition-all duration-700 ease-out ${
        animationStates.content
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-10"
      }`}
    >
      <div className="flex flex-col items-center justify-center">
        
        {/* Main Logo */}
        <div
          className={`mb-3 mt-10 transition-all duration-500 ease-out ${
            animationStates.logo
              ? "opacity-100 scale-100"
              : "opacity-0 scale-95"
          }`}
        >
          <div
            className="
              w-[15rem]
              h-[10rem]

              min-[1400px]:w-[19rem]
              min-[1400px]:h-[13rem]

              min-[1700px]:w-[22rem]
              min-[1700px]:h-[15rem]
            "
          >
            <img
              src="/cropped_circle_image.png"
              alt="CMDAYS Logo"
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        {/* Text Content */}
        <div
          className={`text-center flex flex-col items-center w-full transition-all duration-500 ease-out ${
            animationStates.text
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-5"
          }`}
        >
          {/* Subtitle */}
          <div
            className="
              text-[1.3rem]

              min-[1400px]:text-[1.55rem]
              min-[1700px]:text-[1.8rem]

              font-serif
              font-semibold
              text-[#1e3a8a]

              tracking-wide

              backdrop-blur-sm
              bg-white/20

              inline-block
              px-6
              py-2

              rounded-full
            "
          >
            34th National Conference
          </div>

          {/* Condensed Matter Days */}
          <div className="w-full flex justify-center">
            <div className="flex items-center justify-center gap-4">
              
              <div
                className="
                  w-16
                  min-[1700px]:w-20

                  h-[2px]
                  rounded-full

                  bg-gradient-to-r
                  from-blue-500
                  to-blue-400
                "
              />

              <span
                className="
                  text-[2.3rem]

                  min-[1400px]:text-[3rem]
                  min-[1700px]:text-[3.5rem]

                  font-extrabold
                  tracking-tight
                  whitespace-nowrap
                "
                style={{
                  backgroundImage:
                    "linear-gradient(90deg,#2563eb 0%,#7c3aed 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Condensed Matter Days
              </span>

              <div
                className="
                  w-16
                  min-[1700px]:w-20

                  h-[2px]
                  rounded-full

                  bg-gradient-to-l
                  from-pink-500
                  to-purple-500
                "
              />
            </div>
          </div>

          {/* Main Heading */}
          <h1
            className="
              mt-2

              font-black
              leading-[0.9]

              tracking-[-0.05em]
              pr-2

              text-transparent
              bg-clip-text
              select-none

              drop-shadow-[0_8px_28px_rgba(99,102,241,0.18)]

              text-[6rem]

              min-[1400px]:text-[7.5rem]
              min-[1700px]:text-[9rem]
            "
            style={{
              fontFamily: "Inter, Arial, sans-serif",
              backgroundImage: `
                linear-gradient(
                  135deg,
                  #60a5fa 0%,
                  #3b82f6 20%,
                  #2563eb 42%,
                  #4f46e5 65%,
                  #7c3aed 82%,
                  #a855f7 100%
                )
              `,
            }}
          >
            CMDAYS 2026
          </h1>

          {/* Date Badge */}
          <div
            className={`mt-4 transition-all duration-500 ease-out ${
              animationStates.dateBadge
                ? "opacity-100 scale-100"
                : "opacity-0 scale-95"
            }`}
          >
            <div
              className="
                inline-flex
                items-center
                gap-3

                px-8
                py-3.5

                min-[1700px]:px-10
                min-[1700px]:py-4

                rounded-2xl
                border
                border-white/40

                bg-white/60
                backdrop-blur-md

                shadow-[0_8px_30px_rgba(124,58,237,0.10)]
              "
            >
              <Calendar
                className="
                  w-5
                  h-5

                  min-[1700px]:w-6
                  min-[1700px]:h-6
                "
                style={{
                  color: "#7c3aed",
                }}
              />

              <span
                className="
                  text-[1.15rem]

                  min-[1400px]:text-[1.35rem]
                  min-[1700px]:text-[1.55rem]

                  font-extrabold
                  tracking-[0.08em]
                "
                style={{
                  fontFamily: "Arial, Helvetica, sans-serif",
                  backgroundImage:
                    "linear-gradient(90deg,#2563eb 0%,#4f46e5 55%,#9333ea 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {conferenceDate}
              </span>
            </div>
          </div>

          {/* Location Section */}
          <div
            className={`mt-8 transition-all duration-500 ease-out ${
              animationStates.locationSection
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-5"
            }`}
          >
            <div className="flex flex-col items-center">
              
              {/* NIT Logo */}
              <div
                className="
                  w-28
                  h-28

                  min-[1400px]:w-32
                  min-[1400px]:h-32

                  min-[1700px]:w-36
                  min-[1700px]:h-36

                  mb-4
                "
              >
                <img
                  src="/nitlogo-removebg-preview.png"
                  alt="NIT Logo"
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Department Card */}
              <div
                className="
                  backdrop-blur-sm
                  bg-white/20

                  px-8
                  py-4

                  min-[1700px]:px-10
                  min-[1700px]:py-5

                  rounded-3xl
                "
              >
                <p
                  className="
                    text-[1.3rem]

                    min-[1400px]:text-[1.6rem]
                    min-[1700px]:text-[1.9rem]

                    font-bold
                    text-gray-800
                    leading-snug
                  "
                  style={{
                    fontFamily: "Georgia, serif",
                  }}
                >
                  Department of Physics And Astronomy
                </p>

                <p
                  className="
                    mt-2

                    text-[1.05rem]

                    min-[1400px]:text-[1.2rem]
                    min-[1700px]:text-[1.35rem]

                    text-gray-600

                    inline-flex
                    items-start

                    gap-1.5
                    leading-relaxed

                    text-center
                    max-w-[850px]
                    mx-auto
                  "
                  style={{
                    fontFamily: "Georgia, serif",
                  }}
                >
                  <MapPin className="w-5 h-5 shrink-0 mt-[0.18rem]" />

                  National Institute of Technology, Rourkela • Odisha, India -
                  769008
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</div>


     {/* TABLET LAYOUT */}
<div className="hidden md:flex xl:hidden min-h-screen items-center justify-center w-full overflow-hidden">
  <div
    className="
      w-full
      max-w-5xl
      mx-auto

      px-8
      py-12

      flex
      flex-col
      items-center
      justify-center
    "
  >
    {/* Main Logo */}
    <div className="w-[17rem] mt-6 h-[12rem] lg:w-[19rem] lg:h-[13rem] mb-2">
      <img
        src="/cropped_circle_image.png"
        alt="CMDAYS Logo"
        className="w-full h-full object-contain"
      />
    </div>

    {/* Content */}
    <div className="text-center w-full space-y-3">
      
      {/* Subtitle */}
      <p
        className="
          text-[1.15rem]
          lg:text-[1.3rem]

          font-serif
          font-semibold
          text-[#1e3a8a]

          backdrop-blur-sm
          bg-white/25

          inline-block
          px-5
          py-1.5
          rounded-full
        "
      >
        34th National Conference
      </p>

      {/* Condensed Matter Days */}
      {/* <div
        className="
          text-[2.5rem]
          lg:text-[3rem]

          leading-tight
          font-extrabold
          tracking-tight
          text-[#1e3a8a]

          backdrop-blur-sm
          bg-white/20

          inline-block
          px-6
          py-2
          rounded-3xl
        "
        style={{
          fontFamily: "Georgia, serif",
        }}
      >
        Condensed Matter Days
      </div> */}
      {/* <div className="flex items-center gap-3 mt-6">
            <div className="w-12 h-[2px] bg-gradient-to-r from-blue-500 to-blue-400 rounded-full" />

            <span
              className="
          text-xl
          font-extrabold
          tracking-[0.08em]
          uppercase
        "
              style={{
                backgroundImage:
                  "linear-gradient(90deg,#2563eb 0%,#9333ea 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Condensed Matter Days
            </span>

            <div className="w-12 h-[2px] bg-gradient-to-l from-pink-500 to-purple-500 rounded-full" />
          </div> */}
          <div className="w-full flex justify-center">
  <div className="flex items-center justify-center gap-3">
    
    <div
      className="
        w-12
        h-[2px]
        rounded-full
        bg-gradient-to-r
        from-blue-500
        to-blue-400
      "
    />

    <span
      className="
        text-2xl

        font-extrabold
        tracking-[0.08em]
        uppercase
        whitespace-nowrap
      "
      style={{
        backgroundImage:
          "linear-gradient(90deg,#2563eb 0%,#9333ea 100%)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
      }}
    >
      Condensed Matter Days
    </span>

    <div
      className="
        w-12
        h-[2px]
        rounded-full
        bg-gradient-to-l
        from-pink-500
        to-purple-500
      "
    />
  </div>
</div>


      {/* Main Heading */}
      <h1
        className="
          mt-1

          font-black
          leading-[0.9]

          tracking-[-0.05em]
          pr-2

          text-transparent
          bg-clip-text
          select-none

          drop-shadow-[0_8px_24px_rgba(99,102,241,0.18)]

          text-[5.4rem]
          lg:text-[6.5rem]
        "
        style={{
          fontFamily: "Inter, Arial, sans-serif",
          backgroundImage: `
            linear-gradient(
              135deg,
              #60a5fa 0%,
              #3b82f6 20%,
              #2563eb 42%,
              #4f46e5 65%,
              #7c3aed 82%,
              #a855f7 100%
            )
          `,
        }}
      >
        CMDAYS 2026
      </h1>

      {/* Date Badge */}
      <div className="flex justify-center mt-3">
        <div
          className="
            inline-flex
            items-center
            gap-3

            px-7
            py-3

            rounded-2xl
            border
            border-white/40

            bg-white/60
            backdrop-blur-md

            shadow-[0_8px_30px_rgba(124,58,237,0.10)]
          "
        >
          <Calendar
            className="w-5 h-5"
            style={{
              color: "#7c3aed",
            }}
          />

          <span
            className="
              text-[1.05rem]
              lg:text-[1.15rem]

              font-extrabold
              tracking-[0.08em]
            "
            style={{
              fontFamily: "Arial, Helvetica, sans-serif",
              backgroundImage:
                "linear-gradient(90deg,#2563eb 0%,#4f46e5 55%,#9333ea 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            {conferenceDate}
          </span>
        </div>
      </div>

      {/* NIT Section */}
      <div className="mt-7 flex flex-col items-center">
        
        {/* NIT Logo */}
        <div className="w-24 h-24 lg:w-28 lg:h-28 mb-3">
          <img
            src="/nitlogo-removebg-preview.png"
            alt="NIT Logo"
            className="w-full h-full object-contain"
          />
        </div>

        {/* Department Card */}
        <div
          className="
            backdrop-blur-sm
            bg-white/20

            px-7
            py-4

            rounded-3xl
          "
        >
          <p
            className="
              text-[1.2rem]
              lg:text-[1.35rem]

              font-bold
              text-gray-800
              leading-snug
            "
            style={{
              fontFamily: "Georgia, serif",
            }}
          >
            Department of Physics And Astronomy
          </p>

          <p
            className="
              mt-2

              text-[1rem]
              lg:text-[1.08rem]

              text-gray-600

              inline-flex
              items-start

              gap-1.5
              leading-relaxed

              text-center
              max-w-[520px]
              mx-auto
            "
            style={{
              fontFamily: "Georgia, serif",
            }}
          >
            <MapPin className="w-5 h-5 shrink-0 mt-[0.18rem]" />

            National Institute of Technology, Rourkela • Odisha, India - 769008
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

      {/* MOBILE */}
      {/* MOBILE LAYOUT */}
      <div className="md:hidden relative min-h-screen flex flex-col overflow-hidden">
        <div className="flex-1 flex flex-col items-center justify-center px-6 py-10 text-center relative z-10">
          {/* Main Logo */}
          <div className="w-52  mt-6 h-36 mb-1">
            <img
              src="/cropped_circle_image.png"
              alt="CMDAYS Logo"
              className="w-full h-full object-contain"
            />
          </div>

          {/* Subtitle */}
          <p
            className="
        text-[0.95rem]
        font-serif
        font-semibold
        text-[#1d3b8b]
        tracking-wide
        w-auto
          bg-white/75
        backdrop-blur-md
        border
        border-white/50
        shadow-[0_8px_30px_rgba(124,58,237,0.10)]
      "
          >
            34th National Conference
          </p>

          {/* Condensed Matter Days */}
          <div className="flex items-center gap-3 mt-6
           bg-white/75
        backdrop-blur-md
        border
        border-white/50
        shadow-[0_8px_30px_rgba(124,58,237,0.10)]">
            <div className="w-12 h-[2px] bg-gradient-to-r from-blue-500 to-blue-400 rounded-full" />

            <span
              className="
          text-xl
          font-extrabold
          tracking-[0.08em]
          uppercase
        "
              style={{
                backgroundImage:
                  "linear-gradient(90deg,#2563eb 0%,#9333ea 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Condensed Matter Days
            </span>

            <div className="w-12 h-[2px] bg-gradient-to-l from-pink-500 to-purple-500 rounded-full" />
          </div>

          {/* CMDAYS 2026 */}
          <h1
            className="
        mt-1
        leading-[0.9]

        tracking-[-0.05em]
        pr-2

        font-black
        text-transparent
        bg-clip-text
        drop-shadow-[0_6px_18px_rgba(79,70,229,0.18)]
        text-[4.5rem]
         bg-white/75
        backdrop-blur-md
        border
        border-white/50
        shadow-[0_8px_30px_rgba(124,58,237,0.10)]
      "
            style={{
              fontFamily: "Inter, Arial, sans-serif",
              backgroundImage: `
          linear-gradient(
            135deg,
            #2563eb 0%,
            #1d4ed8 30%,
            #4338ca 65%,
            #7c3aed 100%
          )
        `,
            }}
          >
            CMDAYS
            <br />
            2026
          </h1>

          {/* Date Badge */}
          <div
            className="
        mt-5
        inline-flex
        items-center
        gap-2.5
        px-6
        py-3
        rounded-full
        bg-white/75
        backdrop-blur-md
        border
        border-white/50
        shadow-[0_8px_30px_rgba(124,58,237,0.10)]
      "
          >
            <Calendar className="w-4 h-4 text-[#7c3aed]" />

            <span
              className="
          text-[0.95rem]
          font-extrabold
          tracking-[0.08em]
        "
              style={{
                fontFamily: "Arial, Helvetica, sans-serif",
                backgroundImage:
                  "linear-gradient(90deg,#4f46e5 0%,#7c3aed 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              {conferenceDate}
            </span>
          </div>

          {/* Decorative Line */}
          {/* <div className="flex items-center gap-3 mt-6">
      <div className="w-12 h-[2px] bg-gradient-to-r from-blue-500 to-blue-400 rounded-full" />

      <span
        className="
          text-[1rem]
          font-bold
          tracking-[0.08em]
          uppercase
        "
        style={{
          backgroundImage:
            "linear-gradient(90deg,#2563eb 0%,#9333ea 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        Condensed Matter Days
      </span>

      <div className="w-12 h-[2px] bg-gradient-to-l from-pink-500 to-purple-500 rounded-full" />
    </div> */}

          {/* NIT Logo */}
          <div className="w-24 h-24 mt-8 mb-2">
            <img
              src="/nitlogo-removebg-preview.png"
              alt="NIT Logo"
              className="w-full h-full object-contain"
            />
          </div>

          {/* Department */}
          <div className="px-4">
            <p
              className="
          text-[1.28rem]
          font-extrabold
          text-[#1f2937]
          leading-snug
           bg-white/75
        backdrop-blur-md
        border
        border-white/50
        shadow-[0_8px_30px_rgba(124,58,237,0.10)]
        "
              style={{
                fontFamily: "Georgia, serif",
              }}
            >
              Department of Physics And Astronomy
            </p>

            <p
              className="
           mt-2
    text-[0.95rem]
    text-gray-600
    font-bold

    inline-flex
    items-start

    gap-1.5
    leading-relaxed
    text-center
    max-w-[280px]
    mx-auto
     bg-white/75
        backdrop-blur-md
        border
        border-white/50
        shadow-[0_8px_30px_rgba(124,58,237,0.10)]
        "
              style={{
                fontFamily: "Georgia, serif",
              }}
            >
              <MapPin className="w-4 h-4 shrink-0 mt-[0.18rem]" />
              National Institute of Technology, Rourkela,Odisha, India-769008
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
