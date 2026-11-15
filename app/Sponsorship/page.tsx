"use client";

import { useState, useEffect, useRef } from "react";
//import Navbar from "../../components/Navbar";

import { CommitteesBackground } from "../../components/Background";
import CombinedBackground from "../../components/CombinedBackground";
//import SecondBack from "../../components/SecondBack";
const sponsorLogos = [
  "/sponsors1.jpeg",
  "/sponsors2.jpeg",
  "/sponsor3.jpeg",
  "/sponsors4.jpeg"
];

// Duplicate logos multiple times for seamless scrolling
const DUPLICATE_COUNT = 8;

export default function Committee() {
  const [isPaused, setIsPaused] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sliderRef.current) return;
    sliderRef.current.style.animationPlayState = isPaused ? "paused" : "running";
  }, [isPaused]);

  // Create enough duplicates for seamless infinite scroll
  const duplicatedLogos = Array(DUPLICATE_COUNT).fill(sponsorLogos).flat();

  return (
    <div className="relative min-h-screen overflow-hidden ">
      <CombinedBackground/>
      {/* <Navbar/> */}
      <section className="relative  flex flex-col items-center justify-center min-h-screen">
        {/* Technical Sponsors Header */}
        <div className="container mx-auto px-4 lg:px-8 text-center mb-5">
          <h2 className="md:text-5xl text-4xl font-bold bg-gradient-to-r from-blue-900 via-blue-700 to-purple-600 bg-clip-text text-transparent mb-4">
            Our <span className="font-extrabold">Sponsors</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto  rounded-full"></div>
        </div>

        {/* Infinite Auto Slider */}
        <div
          className="relative w-full overflow-hidden py-10 mb-14"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div
            ref={sliderRef}
            className="flex items-center"
            style={{
              animation: `scroll 20s linear infinite`,
              width: "max-content",
            }}
          >
            {duplicatedLogos.map((logo, i) => (
              <div
                key={i}
                className="flex-shrink-0 mx-8 flex items-center justify-center"
                style={{
                  width: "220px",
                  height: "120px",
                }}
              >
                <img
                  src={logo}
                  alt={`Sponsor ${i + 1}`}
                  className="max-w-full max-h-full object-contain"
                  draggable="false"
                />
              </div>
            ))}
          </div>

          {/* Gradient overlays for fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-gray-50 to-transparent pointer-events-none z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-gray-100 to-transparent pointer-events-none z-10" />
        </div>

      </section>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-220px * ${sponsorLogos.length} - 64px * ${sponsorLogos.length}));
          }
        }
      `}</style>
    </div>
  );
}