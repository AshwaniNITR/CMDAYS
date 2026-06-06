"use client";

import { motion, useAnimation, Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "./ui/button";
import { X, Maximize2 } from "lucide-react";

const AboutUs = () => {
  const controls = useAnimation();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.18,
        when: "beforeChildren",
      },
    },
  };

  const itemVariants: Variants = {
    hidden: {
      y: 30,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: [0.16, 0.77, 0.47, 0.97],
      },
    },
  };

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isModalOpen]);

  return (
    <>
      <section
        id="aboutus"
        className="relative overflow-hidden py-20 px-6 sm:px-10 lg:px-16"
      >
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="relative max-w-7xl mx-auto z-10"
        >
          {/* Heading */}
          <motion.div variants={itemVariants} className="text-center mb-14">
            <div className="inline-block relative">
              <h1 className="text-4xl md:text-6xl font-black tracking-tight bg-gradient-to-r from-purple-800 via-purple-700 to-violet-600 bg-clip-text text-transparent">
                About The Conference
              </h1>

              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 1 }}
                className="h-1.5 mt-3 rounded-full bg-gradient-to-r from-purple-900 via-purple-700 to-violet-500"
              />
            </div>
          </motion.div>

          {/* Two Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Left Section - Text */}
            <motion.div
              variants={itemVariants}
              className="relative bg-white/80 backdrop-blur-xl border border-white/40 shadow-2xl rounded-3xl p-8 md:p-10 overflow-hidden"
            >
              <div className="absolute -top-24 -right-24 w-72 h-72 bg-purple-300/20 rounded-full blur-3xl" />
              <div className="relative z-10">
                <h2 className="text-2xl md:text-3xl font-bold text-purple-900 mb-6">
                  CMDAYS-2026
                </h2>
                <div className="text-gray-700 text-base md:text-lg leading-relaxed space-y-4">
                  <p className="font-medium">
                    The Department of Physics and Astronomy, NIT Rourkela is
                    organizing the 34th National Conference "Condensed Matter Days"
                    (CMDAYS-2026).
                  </p>
                  <p>
                    While condensed matter physics remains the central theme of the
                    conference, the upcoming edition broadens its scope to reflect
                    emerging multidisciplinary research trends. The scientific
                    program will encompass topics spanning quantum science and
                    technology to active matter, fostering interactions between
                    condensed matter physics and a wide range of interdisciplinary
                    sciences.
                  </p>
                  <p>
                    CMDAYS aims to provide a suitable platform for young researchers
                    and scientists to present their works on experimental,
                    theoretical and computational Condensed Matter Physics. In
                    addition to this trend, CMDAYS-2026 includes a wide variety of
                    emerging and interdisciplinary areas of Condensed Matter Physics.
                  </p>
                  <p>
                    The conference is expected to achieve a large gathering of Physics
                    Community with ample thought-provoking ideas, discussions and
                    exchange of ideas that will be helpful in creation of sustained
                    research collaborations. CMDAYS-2026 will include Plenary
                    Lectures, Keynote Lectures, Invited Talks, and Contributory Oral
                    and Poster Presentations.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Right Section - PDF Preview */}
            <motion.div
              variants={itemVariants}
              className="relative bg-white/80 backdrop-blur-xl border border-white/40 shadow-2xl rounded-3xl p-6 md:p-8 overflow-hidden"
            >
              <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-blue-300/20 rounded-full blur-3xl" />
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl md:text-2xl font-bold text-purple-900">
                    Conference Brochure
                  </h3>
                  <Button
                    onClick={() => setIsModalOpen(true)}
                    variant="outline"
                    size="sm"
                    className="gap-2 border-purple-300 hover:bg-purple-50"
                  >
                    <Maximize2 className="w-4 h-4" />
                    Full Screen
                  </Button>
                </div>
                
                {/* PDF Iframe Preview */}
                <div className="relative rounded-xl overflow-hidden border border-gray-200 shadow-lg">
                  <div className="aspect-[3/4] w-full">
                    <iframe
                      src="/CMDAYS-2026_Flyer.pdf#toolbar=0&navpanes=0"
                      className="w-full h-full"
                      title="Conference Brochure"
                      style={{ border: "none" }}
                    >
                      This browser does not support PDFs. Please download the PDF to view it.
                    </iframe>
                  </div>
                  <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white/80 to-transparent pointer-events-none" />
                </div>
                
                <p className="text-center text-sm text-gray-500 mt-4">
                  Click the full screen button to view the complete brochure
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Modal Overlay */}
      {isModalOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-end justify-center p-6 pb-4 pt-16"
          onClick={() => setIsModalOpen(false)}
        >
          <motion.div
            initial={{ scale: 0.92, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.92, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="relative bg-white rounded-2xl shadow-2xl w-full max-w-4xl h-[90vh] flex flex-col overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200 shrink-0">
              <h3 className="text-lg font-bold text-purple-900">Conference Brochure</h3>
              <Button
                onClick={() => setIsModalOpen(false)}
                variant="default"
                size="icon"
                className="bg-purple-900 hover:bg-purple-800 shadow-lg rounded-full w-9 h-9"
              >
                <X className="w-5 h-5 text-white" />
              </Button>
            </div>

            {/* PDF Viewer */}
            <div className="flex-1 overflow-hidden">
              <iframe
                src="/CMDAYS-2026_Flyer.pdf"
                className="w-full h-full"
                title="Conference Brochure Full Screen"
                style={{ border: "none" }}
              >
                This browser does not support PDFs. Please download the PDF to view it.
              </iframe>
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
};

export default AboutUs;