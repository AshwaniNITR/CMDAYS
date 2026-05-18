"use client";

import React, { useState, useEffect } from "react";
import { Calendar, MapPin } from "lucide-react";
import CombinedBackground from "./CombinedBackground";

const Hero = () => {
  const [animationStates, setAnimationStates] = useState({
    desktopLayout: false,
    content: false,
    logo: false,
    text: false,
    dateBadge: false,
    locationSection: false,
    bottomImages: [] as boolean[],
    announcementsSection: false,
    submissionSection: false,
  });
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setNow(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  // Staggered entrance animation
  useEffect(() => {
    setTimeout(() => {
      setAnimationStates(prev => ({ ...prev, desktopLayout: true }));
    }, 100);
    
    setTimeout(() => {
      setAnimationStates(prev => ({ ...prev, content: true }));
    }, 200);
    
    setTimeout(() => {
      setAnimationStates(prev => ({ ...prev, logo: true }));
    }, 300);
    
    setTimeout(() => {
      setAnimationStates(prev => ({ ...prev, text: true }));
    }, 400);
    
    setTimeout(() => {
      setAnimationStates(prev => ({ ...prev, dateBadge: true }));
    }, 500);
    
    setTimeout(() => {
      setAnimationStates(prev => ({ ...prev, locationSection: true }));
    }, 600);
    
  }, []);

  // Current date for conference display as per image: NOVEMBER 17-19, 2026
  const conferenceDate = "NOVEMBER 17-19, 2026";

  return (
    <div id="home" className="relative overflow-hidden min-h-screen">
      {/* <CombinedBackground/> */}
      
      {/* Desktop Layout - Full Screen Centered with no scrolling */}
      <div className={`hidden xl:flex min-h-screen transition-all duration-700 ease-out ${
        animationStates.desktopLayout ? "opacity-100" : "opacity-0"
      }`}>
        <div className="w-full max-w-7xl mx-auto px-6 py-8 flex flex-col justify-center h-screen">
          {/* Main Content - Centered and compact */}
          <section className={`w-full max-w-4xl mx-auto transition-all duration-700 ease-out ${
            animationStates.content 
              ? "opacity-100 translate-y-0" 
              : "opacity-0 translate-y-10"
          }`}>
            <div className="flex flex-col items-center justify-center">
              {/* Logo - smaller for better fit */}
              <div className={`flex justify-center items-center w-full mb-3 transition-all duration-500 ease-out ${
                animationStates.logo 
                  ? "opacity-100 scale-100" 
                  : "opacity-0 scale-90"
              }`}>
                <div className="w-64 h-40">
                  <img
                    src="/cropped_circle_image.png"
                    alt="I3ST Logo"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>

              {/* Text content styled like the image: serif fonts, deep blue/black colors */}
              <div className={`text-center w-full space-y-2 transition-all duration-500 ease-out ${
                animationStates.text 
                  ? "opacity-100 translate-y-0" 
                  : "opacity-0 translate-y-5"
              }`}>
                <p className="text-2xl font-serif font-semibold text-[#1e3a8a] tracking-wide backdrop-blur-sm bg-white/20 inline-block px-4 py-1 rounded-full mx-auto">
                  34th National Conference
                </p>
<h1
  className="
    text-8xl
    2xl:text-9xl
    3xl:text-[6rem]
    4xl:text-[7rem]
    font-black
    tracking-[-0.07em]
    leading-none
    bg-[linear-gradient(90deg,#1e1b9b_0%,#2563eb_68%,#ec4899_100%)]
    bg-clip-text
    text-transparent
    drop-shadow-[0_3px_10px_rgba(59,130,246,0.12)]
  "
  style={{
    fontFamily: "Arial, Helvetica, sans-serif",
  }}
>
  CMDAYS 2026
</h1>       

                {/* Date badge - style like the image (dark blue background with white text) */}
                <div className={`inline-block mt-3 transition-all duration-500 ease-out delay-100 ${
                  animationStates.dateBadge 
                    ? "opacity-100 scale-100" 
                    : "opacity-0 scale-95"
                }`}>
                  <div
  className="
    px-8
    py-3
    rounded-2xl
    border
    border-white/40
    bg-white/55
    backdrop-blur-md
    shadow-[0_8px_30px_rgba(124,58,237,0.10)]
  "
>
  <div className="flex items-center justify-center gap-3">

    <Calendar
      className="w-5 h-5"
      style={{
        color: "#7c3aed",
      }}
    />

    <span
      className="
        text-2xl
        2xl:text-3xl
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
                </div>

                {/* Location section - clean and compact with subtle styling */}
                <div className={`mt-4 transition-all duration-500 ease-out delay-200 ${
                  animationStates.locationSection 
                    ? "opacity-100 translate-y-0" 
                    : "opacity-0 translate-y-5"
                }`}>
                  <div className="flex flex-col items-center">
                    <div className="w-24 h-24 mb-2">
                      <img
                        src="/nitlogo-removebg-preview.png"
                        alt="NIT Rourkela Logo"
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="text-center backdrop-blur-sm bg-white/20 px-6 py-2 rounded-2xl">
                      <p className="font-serif font-bold text-gray-800 text-lg">
                        Department of Physics And Astronomy
                      </p>
                      <p className="font-serif text-gray-600 text-base flex items-center justify-center gap-1">
                        <MapPin className="w-4 h-4" />
                        National Institute of Technology, Rourkela • Odisha, India - 769008
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* Tablet Layout (lg) */}
      <div className="hidden lg:flex xl:hidden min-h-screen items-center justify-center">
        <div className="w-full max-w-4xl mx-auto px-6 py-12 flex flex-col items-center">
          <div className="w-56 h-40 mb-3">
            <img
              src="/cropped_circle_image.png"
              alt="CMDAYS Logo"
              className="w-full h-full object-contain"
            />
          </div>

          <div className="text-center w-full space-y-2">
            <p className="text-xl font-serif font-semibold text-[#1e3a8a] backdrop-blur-sm bg-white/20 inline-block px-4 py-1 rounded-full">
              34th National Conference
            </p>
            <h1
  className="
    text-8xl
    font-black
    tracking-[-0.07em]
    leading-none
    bg-[linear-gradient(90deg,#1e1b8f_0%,#1d4ed8_72%,#7c3aed_100%)]
    bg-clip-text
    text-transparent
    drop-shadow-[0_3px_12px_rgba(37,99,235,0.15)]
  "
  style={{
    fontFamily: "Arial, Helvetica, sans-serif",
  }}
>
  CMDAYS 2026
</h1>
          

            <div className="flex justify-center mt-2">
              <div className="inline-flex items-center gap-2 px-5 py-2 rounded-sm bg-[#0f2b4d] backdrop-blur-sm">
                <Calendar className="w-4 h-4 text-white" />
                <span className="font-serif font-bold text-white">{conferenceDate}</span>
              </div>
            </div>

            <div className="mt-4 flex flex-col items-center">
              <div className="w-20 h-20 mb-2">
                <img src="/nitlogo-removebg-preview.png" alt="NIT Logo" className="w-full h-full object-contain" />
              </div>
              <div className="backdrop-blur-sm bg-white/20 px-6 py-2 rounded-2xl">
                <p className="font-serif font-bold text-gray-800 text-base">Department of Electronics and Communication Engineering</p>
                <p className="font-serif text-gray-600 text-sm flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5" />
                  National Institute of Technology, Rourkela, Odisha, India - 769008
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Layout */}
      {/* Mobile Layout */}
<div className="lg:hidden relative min-h-screen flex flex-col">
  <div className="flex-1 flex flex-col items-center justify-center px-5 py-10 text-center">

    {/* Logo */}
    <div className="w-40 h-28 sm:w-48 sm:h-32 mb-2">
      <img
        src="/cropped_circle_image.png"
        alt="CMDAYS Logo"
        className="w-full h-full object-contain"
      />
    </div>

    {/* Conference Subtitle */}
    <p className="text-sm sm:text-base font-serif font-semibold text-[#1e3a8a] backdrop-blur-sm bg-white/20 inline-block px-3 py-0.5 rounded-full">
      34th National Conference
    </p>

    {/* Main Title */}
    <h1
      className="
        text-[3.6rem]
        sm:text-7xl
        font-black
        tracking-[-0.06em]
        leading-[0.92]
        bg-clip-text
        text-transparent
        drop-shadow-[0_3px_10px_rgba(59,130,246,0.10)]
      "
      style={{
        fontFamily: "Arial, Helvetica, sans-serif",
        backgroundImage: `
          linear-gradient(
            135deg,
            #1a1b9f 0%,
            #1a1b9f 18%,
            #1d4ed8 42%,
            #4f46e5 68%,
            #ec4899 100%
          )
        `,
      }}
    >
      CMDAYS 2026
    </h1>

    {/* Date Badge */}
    <div
      className="
        inline-flex
        items-center
        gap-2
        px-5
        py-2
        rounded-2xl
        border
        border-white/40
        bg-white/55
        backdrop-blur-md
        shadow-[0_8px_30px_rgba(124,58,237,0.10)]
        mt-3
      "
    >
      <Calendar
        className="w-4 h-4"
        style={{
          color: "#7c3aed",
        }}
      />

      <span
        className="text-sm font-extrabold tracking-[0.06em]"
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

    {/* Location Section */}
    <div className="mt-5">
      <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-2">
        <img
          src="/nitlogo-removebg-preview.png"
          alt="NIT Logo"
          className="w-full h-full object-contain"
        />
      </div>

      <div className="backdrop-blur-sm bg-white/20 px-4 py-2 rounded-2xl">
        <p className="font-serif font-bold text-gray-800 text-sm sm:text-base px-2">
          Department of Physics And Astronomy
        </p>

        <p className="font-serif text-gray-600 text-xs sm:text-sm flex items-center justify-center gap-1 mt-1 px-4">
          <MapPin className="w-3 h-3 sm:w-4 sm:h-4 shrink-0" />
          National Institute of Technology, Rourkela • Odisha, India
        </p>
      </div>
    </div>
  </div>
</div>
    </div>
  );
};

export default Hero;