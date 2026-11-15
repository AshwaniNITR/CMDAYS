"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import CombinedBackground from "../../components/CombinedBackground";
import { Calendar, Trophy, Plane, FileText } from "lucide-react";



const FlippableCard = ({ announcement, index, isDeadlinePassed }) => {
  
  const [isFlipped, setIsFlipped] = useState(false);
  const isJournal = announcement.title.toLowerCase().includes("journal");
  const isDeadline = announcement.title.toLowerCase().includes("deadline");

  return (
    <div
      className="relative w-full h-72 cursor-pointer perspective-1000"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <motion.div
        className="relative w-full h-full"
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, type: "spring", stiffness: 120 }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Front of card - Title only */}
        <div
          className={`absolute w-full h-full rounded-xl p-6 backface-hidden
            ${isJournal ? "bg-yellow-100" : (isDeadline && isDeadlinePassed) ? "bg-green-100":(isDeadline && !isDeadlinePassed) ? "bg-red-100" : "bg-white/90"}
            border ${isJournal ? "border-yellow-400" : (isDeadline && isDeadlinePassed) ? "border-green-500":(isDeadline && !isDeadlinePassed) ? "border-red-500" : "border-blue-100"}
            shadow-lg hover:shadow-xl transition-shadow duration-300
            flex flex-col items-center justify-center`}
        >
          {/* New Badge */}
          {!isJournal && (!isDeadline || isDeadlinePassed) && (
            <span className="absolute top-4 right-4 inline-flex items-center px-2.5 py-0.5 text-xs font-semibold bg-red-500 text-white rounded-full shadow-sm">
              New
            </span>
          )}
          
          
          {/* Icon */}
          <div className={`mb-4 p-3 rounded-full bg-gradient-to-r ${announcement.color} bg-opacity-20`}>
            <announcement.icon className="w-8 h-8 text-gray-800" />
          </div>
          
          {/* Title */}
          <h4
            className={`text-xl font-bold text-center
              ${isJournal ? "text-yellow-800" : (isDeadline && !isDeadlinePassed) ? "text-red-700": (isDeadline && isDeadlinePassed) ? "text-green-700" :  "text-blue-700"}`}
          >
            {announcement.title}
          </h4>
          
          {/* Click instruction */}
          <p className="mt-4 text-xs text-gray-500">Click to View More</p>
        </div>

        {/* Back of card - Description */}
        <div
          className={`absolute w-full h-full rounded-xl p-6 backface-hidden
            ${isJournal ? "bg-yellow-100" : (isDeadline && isDeadlinePassed)  ? "bg-green-100" : (isDeadline && !isDeadlinePassed) ? "bg-red-100" : "bg-white/90"}
            border ${isJournal ? "border-yellow-400" : (isDeadline && isDeadlinePassed) ? "border-green-500":(isDeadline && !isDeadlinePassed) ? "border-red-500" : "border-blue-100"}
            shadow-lg
            flex flex-col items-center justify-center
            overflow-y-auto`}
          style={{ transform: "rotateY(180deg)" }}
        >
          {/* Description content */}
          {!isDeadline ? (
            <>
              <announcement.icon className={`w-10 h-10 mb-3 ${isJournal ? "text-yellow-700" : isDeadline ? "text-red-600" : "text-blue-600"}`} />
              <p
                className={`text-center text-sm sm:text-base
                  ${isJournal ? "text-yellow-900 font-semibold" : "text-gray-700"}`}
              >
                {announcement.description}
              </p>
            </>
          ) : (
            <div className="text-center">
              <Calendar className={`w-10 h-10 ${isDeadlinePassed ? "text-green-600" : "text-red-600"} mx-auto mb-3`}   />
              <p className="text-sm sm:text-base text-gray-700 mb-2">
                Submit your papers before the deadline:
              </p>
              {isDeadlinePassed ? (
                <>
                  <p className="text-red-600 line-through font-extrabold text-lg sm:text-xl">
                  March 31, 2026
                </p>
                  <p className="text-green-600 font-extrabold text-lg sm:text-xl">
                  April 10, 2026 <span className=" text-red-500 font-extrabold ">(Hard Deadline)</span>
                </p>
                </>
              
                
              ) : (
                <p className="text-red-600 font-extrabold text-lg sm:text-xl">
                  March 31, 2026
                </p>
              )}
            </div>
          )}

          {/* Journal buttons */}
          {isJournal && (
            <div className="mt-4 flex flex-row gap-3 justify-center">
              <button className="text-xs font-bold px-3 py-1.5 bg-red-500 text-white rounded hover:bg-red-600 transition-colors">
                <a
                  href="https://ieee-ims.org/publication/ieee-tim/information-authors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  IEEE TIM
                </a>
              </button>
              <button className="text-xs font-bold px-3 py-1.5 bg-red-500 text-white rounded hover:bg-red-600 transition-colors">
                <a
                  href="https://ieee-ims.org/publication/ieee-ojim/author-information"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  IEEE OJIM
                </a>
              </button>
            </div>
          )}
          
          {/* Click instruction */}
          <p className="mt-3 text-xs text-gray-500">Click to flip back</p>
        </div>
      </motion.div>
    </div>
  );
};

const Page = () => {
  const announcements = [
  {
    title: "The Inauguration Ceremony",
    description: "The Inauguration of 34th National Conference Condensed Matter Days 2026 (CMDAYS-2026) will be held on 17th NOVEMBER 2026 at PPA NIT ROURKELA at 9:30AM",
    icon: Calendar,
    color: "from-orange-500 to-red-500",
  },
  {
    title:"Best Oral Presentation and Best Poster Presentation Award",
    icon:Trophy,
    color:"from-yellow-500 to-orange-500",
    description:"Best Oral Presentation and Best Poster Presentation Award will be given in the Velidictary Function on 19th November 2026."
  }

];
     const [now, setNow] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setNow(new Date());
    }, 1000); // update every second

    return () => clearInterval(interval);
  }, []);
  const targetTime = new Date("2026-03-31T23:59:00");
  const isDeadlinePassed = now >= targetTime;
  
  return (
    <div className="relative min-h-screen">
      <CombinedBackground/>

      <section className="relative py-20 md:py-12 lg:py-16 xl:py-20 flex flex-col items-center justify-center">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Modern Header */}
          <div className="mb-8 md:mb-10 lg:mb-12 text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-[#003366] to-[#0066cc] bg-clip-text text-transparent">
              Important<span className="font-extrabold"> Announcements</span>
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-[#003366] to-[#0066cc] mx-auto mb-4 rounded-full"></div>
            <p className="text-gray-600 text-sm md:text-base">Click on any card to flip and view details</p>
          </div>

          {/* Content Section - Responsive grid with flexible height */}
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-10">
              {announcements.map((announcement, index) => (
                <FlippableCard key={index} announcement={announcement} index={index} isDeadlinePassed={isDeadlinePassed} />
              ))}
            </div>

            {/* No bottom spacing - let the page content determine the height */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Page;