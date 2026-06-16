"use client";

import { title } from "process";
import { useState, useEffect, useRef } from "react";

const IMPORTANT_DATES = [
  {
    id: 1,
    title: "Abstract Submission Begins",
    date: new Date("2026-08-01"),
  },
  {
    id: 2,
    title: "Abstract Submission Ends",
    date: new Date("2026-08-31"),
  },
  {
    id: 3,
    title: "Confirmation of Acceptance",
    date: new Date("2026-09-10"),
  },
  {
    id: 4,
    title: "Registration Begins",
    date: new Date("2026-09-10"),
  },
   {
    id: 5,
    title: "Registration Ends",
    date: new Date("2026-09-20"),
  },
];

export default function ImportantDatesSlider() {
  const [isPaused, setIsPaused] = useState(false);

  const sliderRef = useRef<HTMLDivElement>(null);
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setNow(new Date());
    }, 1000); // update every second

    return () => clearInterval(interval);
  }, []);
  const targetTime = new Date("2026-03-31T23:59:00");
  const isDeadlinePassed = now >= targetTime;

  const formatDate = (date: Date) => {
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };
  const getDaysRemaining = (date: Date) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const diffTime = date.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays < 0) return "Passed";
    if (diffDays === 0) return "Today";
    if (diffDays === 1) return "Tomorrow";
    return `${diffDays} days`;
  };
  const getStatusColor = (date: Date) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const diffTime = date.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays < 0) return "bg-gradient-to-r from-red-500 to-red-600";
    if (diffDays <= 3) return "bg-gradient-to-r from-amber-500 to-orange-500";
    return "bg-gradient-to-r from-green-500 to-emerald-500";
  };

  useEffect(() => {
    if (!sliderRef.current) return;

    if (isPaused) {
      sliderRef.current.style.animationPlayState = "paused";
    } else {
      sliderRef.current.style.animationPlayState = "running";
    }
  }, [isPaused]);

  const calculateAnimationDuration = () => {
    return 10 + IMPORTANT_DATES.length * 2;
  };

  const allItems = [...IMPORTANT_DATES, ...IMPORTANT_DATES];

  return (
    <div
      className="relative w-full bg-gradient-to-br from-slate-50 via-white to-blue-50 shadow-xl overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-1/4 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-purple-400/10 rounded-full blur-3xl"></div>
      </div>

      {/* Header with gradient */}
      <div className="relative bg-gradient-to-r from-purple-700 via-purple-800 to-purple-700 py-4 px-6 flex justify-center items-center border-b border-blue-700/50 backdrop-blur-sm">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-lg flex items-center justify-center">
            <svg
              className="w-5 h-5 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-center bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
            Important Dates
          </h2>
        </div>
      </div>

      <div className="relative overflow-hidden py-6">
        <style jsx>{`
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
        `}</style>

        <div
          ref={sliderRef}
          className="flex w-[200%] animate-scroll"
          style={{
            animation: `scroll ${calculateAnimationDuration()}s linear infinite`,
            width: "fit-content",
            WebkitAnimation: `scroll ${calculateAnimationDuration()}s linear infinite`,
            WebkitTransform: "translate3d(0, 0, 0)",
            WebkitBackfaceVisibility: "hidden",
            WebkitPerspective: 1000,
          }}
        >
          {allItems.map((item, index) => (
            <div
              key={`${item.id}-${index}`}
              className="flex-shrink-0 min-w-[200px] sm:min-w-[250px] md:min-w-[300px] p-4 mx-3 bg-white/80 backdrop-blur-xl rounded-2xl border border-gray-200/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group relative overflow-hidden"
              style={{
                WebkitBackfaceVisibility: "hidden",
                WebkitPerspective: 1000,
              }}
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

              <div className="relative z-10">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-base font-semibold bg-gradient-to-r from-blue-900 to-blue-700 bg-clip-text text-transparent pr-2 leading-tight">
                    {item.title}
                  </h3>
                    {(() => {
                      let effectiveDate = item.date;

                      // If deadline passed and it's the submission end → use extended date
                      if (
                        isDeadlinePassed &&
                        item.title === "Paper Submission Ends"
                      ) {
                        effectiveDate = new Date("2026-04-10T23:59:59+05:30");
                      }

                      return (
                        <span
                          className={`text-xs px-3 py-1.5 rounded-full text-white font-bold shadow-md ${getStatusColor(effectiveDate)} whitespace-nowrap`}
                        >
                          {getDaysRemaining(effectiveDate)}
                        </span>
                      );
                    })()}
                  
                </div>

                <div className="flex items-center gap-2">
                  <svg
                    className="w-4 h-4 text-blue-600 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  <p className="text-gray-700 font-semibold">
                    {!isDeadlinePassed &&
                      (() => {
                        switch (item.title) {
                          case "Paper Submission Ends":
                            return "31 Mar, 2026";
                          case "Camera-ready Submission":
                            return "31 May, 2026";
                          default:
                            return formatDate(item.date);
                        }
                      })()}
                    {isDeadlinePassed &&
                      (() => {
                        if (item.title === "Paper Submission Ends") {
                          return (
                            <>
                              <span className="line-through text-red-500 mr-2">
                                31 Mar, 2026
                              </span>
                              <span className="text-green-600 font-bold">
                                April 10, 2026 <span className=" text-red-500 font-extrabold">(Hard Deadline)</span>
                              </span>
                            </>
                          );
                        }
                        else if(item.title==="Notification of Acceptance"){
                          return (
                            <>
                              <span className="line-through text-red-500 mr-2">
                                15 May, 2026
                              </span>
                              <span className="text-green-600 font-bold">
                                31 May, 2026
                              </span>
                            </>
                          );
                        }
                        return formatDate(item.date);
                      })()}
                  </p>
                </div>
              </div>

              {/* Subtle gradient border effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none blur-sm -z-10"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom gradient accent */}
      {/* <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-purple-500 to-blue-600"></div> */}
    </div>
  );
}
