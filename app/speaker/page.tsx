"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import {
  motion,
  AnimatePresence,
  easeInOut,
  easeOut,
  Variants,
} from "framer-motion";
import { X, FileText, User } from "lucide-react";
import OtherBackground from "../../components/OtherBackground";

interface Speaker {
  _id: string;
  name: string;
  role: string;
  talkTitle: string;
  abstract: string;
  bio?: string;
  biosketch?: string;
  order: number;
  imageUrl: string;
}

export default function Committee() {
  const [speakers, setSpeakers] = useState<Speaker[]>([]);
  const [loading, setLoading] = useState(true);

  const [selectedSpeaker, setSelectedSpeaker] = useState<Speaker | null>(null);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const [sidebarSpeaker, setSidebarSpeaker] = useState<Speaker | null>(null);

  useEffect(() => {
    const fetchSpeakers = async () => {
      try {
        const response = await fetch(
          "https://cmdays-admin.vercel.app/api/speakers",
          {
            method: "GET",
            cache: "no-store",
          },
        );

        const data = await response.json();

        // Sort by order ascending
        const sortedData = data.sort(
          (a: Speaker, b: Speaker) => a.order - b.order,
        );

        setSpeakers(sortedData);
      } catch (error) {
        console.error("Failed to fetch speakers:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchSpeakers();
  }, []);

  const handleSpeakerClick = (speaker: Speaker) => {
    if (speaker.talkTitle || speaker.abstract) {
      setSelectedSpeaker(speaker);
      setIsModalOpen(true);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);

    setTimeout(() => {
      setSelectedSpeaker(null);
    }, 300);
  };

  const handleBiosketchClick = (
    e: React.MouseEvent<HTMLButtonElement>,
    speaker: Speaker,
  ) => {
    e.stopPropagation();

    setSidebarSpeaker(speaker);
    setIsSidebarOpen(true);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);

    setTimeout(() => {
      setSidebarSpeaker(null);
    }, 300);
  };

  // Fix relative image URLs
  const getImageUrl = (url: string) => {
    if (!url) return "/placeholder.svg";

    if (url.startsWith("http")) return url;

    return `https://cmdays-admin.vercel.app${url}`;
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },

    visible: {
      opacity: 1,

      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },

    visible: {
      opacity: 1,
      y: 0,

      transition: {
        duration: 0.5,
        ease: easeOut,
      },
    },
  };

  const modalOverlayVariants = {
    hidden: { opacity: 0 },

    visible: {
      opacity: 1,

      transition: {
        duration: 0.3,
        ease: easeInOut,
      },
    },

    exit: {
      opacity: 0,

      transition: {
        duration: 0.2,
        ease: easeInOut,
      },
    },
  };

  const modalContentVariants: Variants = {
    hidden: {
      opacity: 0,
      scale: 0.9,
      y: 20,
    },

    visible: {
      opacity: 1,
      scale: 1,
      y: 0,

      transition: {
        type: "spring",
        damping: 25,
        stiffness: 300,
      },
    },

    exit: {
      opacity: 0,
      scale: 0.95,
      y: 10,

      transition: {
        type: "spring",
        damping: 30,
        stiffness: 400,
      },
    },
  };

  const sidebarVariants: Variants = {
    hidden: {
      x: "100%",
    },

    visible: {
      x: 0,

      transition: {
        type: "spring",
        damping: 25,
        stiffness: 200,
        duration: 0.3,
      },
    },

    exit: {
      x: "100%",

      transition: {
        type: "spring",
        damping: 30,
        stiffness: 300,
        duration: 0.2,
      },
    },
  };

  const sidebarOverlayVariants = {
    hidden: { opacity: 0 },

    visible: {
      opacity: 1,

      transition: {
        duration: 0.2,
      },
    },

    exit: {
      opacity: 0,

      transition: {
        duration: 0.15,
      },
    },
  };

  return (
    <div className="min-h-screen py-10">
      <OtherBackground />

      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col items-center justify-center py-8 mb-12">
          <motion.div
            className="relative inline-block"
            initial={{
              opacity: 0,
              y: -20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.5,
            }}
          >
            <div className="absolute inset-0 backdrop-blur-sm rounded-3xl -z-10 px-12 py-8"></div>

            <motion.h2
              className="w-fit mx-auto px-6 py-3 rounded-full bg-white/[0.08] backdrop-blur-md border border-white/20 shadow-lg text-4xl md:text-5xl font-extrabold text-center mb-4 bg-gradient-to-r from-purple-900 via-purple-700 to-purple-900 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Our Speakers
            </motion.h2>
          </motion.div>

          <div className="w-32 h-2 bg-gradient-to-r from-[#003366] to-[#0066cc] rounded-full"></div>
        </div>

        {/* Loading */}
        {loading && (
          <div className="flex justify-center items-center py-20">
            <div className="text-xl font-semibold text-gray-700">
              Loading Speakers...
            </div>
          </div>
        )}

        {/* Speakers Grid */}
        {!loading && (
          <motion.div
            className="flex flex-wrap justify-center gap-6 max-w-7xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {speakers.map((speaker, index) => {
              const hasTalkInfo = speaker.talkTitle || speaker.abstract;

              const hasBiosketch = speaker.bio || speaker.biosketch;

              return (
                <motion.div
                  key={speaker._id}
                  variants={cardVariants}
                  custom={index}
                  onClick={() => hasTalkInfo && handleSpeakerClick(speaker)}
                  className={`w-full sm:w-[45%] lg:w-[45%] xl:w-[30%] group bg-white rounded-lg overflow-hidden border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 ${
                    hasTalkInfo
                      ? "cursor-pointer hover:border-blue-300"
                      : "cursor-default"
                  }`}
                  whileHover={{
                    y: -5,
                    transition: {
                      duration: 0.2,
                    },
                  }}
                >
                  {/* IMAGE */}
                  <div className="relative w-full pt-[100%] bg-gray-50 overflow-hidden z-0">
                    {/* <Image
                        src={getImageUrl(
                          speaker.imageUrl
                        )}
                        alt={speaker.name}
                        fill
                        className="object-cover z-0"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        priority={index < 4}
                      /> */}
                    <img
                      src={getImageUrl(speaker.imageUrl)}
                      alt={speaker.name}
                      className="absolute inset-0 w-full h-full object-cover"
                    />

                    {hasTalkInfo && (
                      <div className="absolute top-3 right-3 bg-blue-600 text-white text-xs font-semibold px-2 py-1 rounded shadow-md z-10">
                        VIEW TALK
                      </div>
                    )}
                  </div>

                  {/* CONTENT */}
                  <div className="relative z-10 p-5 bg-white">
                    <h3 className="text-lg font-bold text-gray-900 mb-1">
                      {speaker.name}
                    </h3>

                    <p className="text-gray-600 font-bold text-sm mb-3">
                      {speaker.role}
                    </p>

                    {speaker.talkTitle && (
                      <div className="mt-4 pt-4 border-t border-gray-100">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="w-2 h-2 bg-blue-600 rounded-full"></div>

                          <span className="text-blue-700 text-xs font-semibold uppercase tracking-wide">
                            Title Of Talk
                          </span>
                        </div>

                        <p className="text-gray-800 text-sm leading-relaxed line-clamp-2">
                          {speaker.talkTitle}
                        </p>

                        <div className="flex gap-2 mt-3 flex-wrap">
                          {hasTalkInfo && (
                            <button
                              onClick={() => handleSpeakerClick(speaker)}
                              className="inline-flex items-center gap-1 px-3 py-1.5 bg-blue-50 text-blue-700 text-xs font-medium rounded-md border border-blue-200 hover:bg-blue-100 hover:border-blue-300 transition-all duration-200"
                            >
                              <FileText className="w-3.5 h-3.5" />

                              <span>View Abstract</span>
                            </button>
                          )}

                          {hasBiosketch && (
                            <button
                              onClick={(e) => handleBiosketchClick(e, speaker)}
                              className="inline-flex items-center gap-1 px-3 py-1.5 bg-purple-50 text-purple-700 text-xs font-medium rounded-md border border-purple-200 hover:bg-purple-100 hover:border-purple-300 transition-all duration-200"
                            >
                              <User className="w-3.5 h-3.5" />

                              <span>Biosketch</span>
                            </button>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        )}
      </div>

      {/* MODAL */}
      <AnimatePresence>
        {isModalOpen && selectedSpeaker && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            variants={modalOverlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={closeModal}
            style={{
              backgroundColor: "rgba(0,0,0,0.7)",
            }}
          >
            <motion.div
              className="bg-white rounded-lg shadow-2xl max-w-3xl w-full max-h-[90vh] flex flex-col overflow-hidden"
              variants={modalContentVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={(e) => e.stopPropagation()}
            >
              {/* HEADER */}
              <div className="bg-gradient-to-r from-[#003366] to-[#0066cc] text-white p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-2xl font-extrabold">
                      {selectedSpeaker.name}
                    </h3>

                    <h4 className="text-xl font-bold mt-1">
                      {selectedSpeaker.role}
                    </h4>
                  </div>

                  <button
                    onClick={closeModal}
                    className="p-2 hover:bg-white/20 rounded-full transition-colors"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>
              </div>

              {/* CONTENT */}
              <div className="flex-grow overflow-y-auto p-6">
                {selectedSpeaker.talkTitle && (
                  <div className="mb-6">
                    <h4 className="text-lg font-bold mb-3">
                      Presentation Title
                    </h4>

                    <div className="p-4 bg-blue-50 rounded-lg border border-blue-100">
                      <p>{selectedSpeaker.talkTitle}</p>
                    </div>
                  </div>
                )}

                {selectedSpeaker.abstract && (
                  <div>
                    <h4 className="text-lg font-bold mb-3">Abstract</h4>

                    <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                      <p className="whitespace-pre-line">
                        {selectedSpeaker.abstract}
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {/* FOOTER */}
              <div className="border-t border-gray-200 p-4 bg-gray-50">
                <button
                  onClick={closeModal}
                  className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Close Details
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* SIDEBAR */}
      <AnimatePresence>
        {isSidebarOpen && sidebarSpeaker && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/50 z-50"
              variants={sidebarOverlayVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={closeSidebar}
            />

            <motion.div
              className="fixed top-0 right-0 h-full w-full max-w-md bg-white shadow-2xl z-50 flex flex-col"
              variants={sidebarVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              {/* HEADER */}
              <div className="bg-gradient-to-r from-[#003366] to-[#0066cc] text-white p-6">
                <div className="flex justify-between items-center">
                  <h3 className="text-2xl font-bold">Biosketch</h3>

                  <button
                    onClick={closeSidebar}
                    className="p-2 hover:bg-white/20 rounded-full transition-colors"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>
              </div>

              {/* CONTENT */}
              <div className="flex-1 overflow-y-auto p-6">
                <div className="relative w-32 h-32 mx-auto mb-4 rounded-lg overflow-hidden">
                  <Image
                    src={getImageUrl(sidebarSpeaker.imageUrl)}
                    alt={sidebarSpeaker.name}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="text-center mb-6">
                  <h4 className="text-xl font-bold">{sidebarSpeaker.name}</h4>

                  <p className="text-gray-600 font-semibold text-sm">
                    {sidebarSpeaker.role}
                  </p>
                </div>

                <p className="text-gray-700 whitespace-pre-line">
                  {sidebarSpeaker.bio ||
                    sidebarSpeaker.biosketch ||
                    "No biosketch available"}
                </p>
              </div>

              {/* FOOTER */}
              <div className="border-t border-gray-200 p-4 bg-gray-50">
                <button
                  onClick={closeSidebar}
                  className="w-full py-3 bg-gradient-to-r from-[#003366] to-[#0066cc] text-white font-semibold rounded-lg"
                >
                  Close Biosketch
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
