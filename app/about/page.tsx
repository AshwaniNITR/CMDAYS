"use client";

import { motion } from "framer-motion";
import { type FC, useState, useEffect } from "react";
import Image from "next/image";
import OtherBackground from "../../components/OtherBackground";

interface Section {
  title: string;
  content: string;
  images: string[]; // Changed from single image to array
}

const AboutUs: FC = () => {
  // State for current image index in the first section
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Images for NIT Rourkela section
  const nitImages = [
    "/photo1NIT.jpeg",
    "/photo2NIT.jpeg",
    "/photo3NIT.jpeg",
    "/photo5NIT.jpeg",
    "/photo6NIT.jpeg",
  ];

  const sections: Section[] = [
    {
      title: "About NIT ROURKELA",
      content: `National Institute of Technology (NIT) Rourkela is a prestigious institution of national importance, which is fully funded by the Ministry of Education. The institute is recognized as one of the leading national-level institutions for technical education in India. Its primary objective is to produce highly skilled and competent engineers and scientists through its graduate, post-graduate, and doctoral programs in various branches of Engineering and Science. NIT Rourkela has been ranked 317 in QS Asia University, 13 in NIRF Engineering, 30 in NIRF Research and 34 in NIRF Overall.`,
      images: nitImages,
    },
    {
      title: "About Department of Physics and Astronomy",
      content: `Department of Physics and Astronomy at NIT Rourkela was established in 1961. The department is known for providing high-quality education in undergraduate and postgraduate studies, as well as PhD and M.Tech (Research) programs. The department is actively engaged in research activities in the field of low-temperature physics, astrophysics, astronomy, functional material, soft matter and polymer physics, and theoretical physics etc. For further information about the institute, please visit our website at www.nitrkl.ac.in`,
      images: ["/physics.jpeg"], // Single image as array for consistency
    },
  ];

  // Auto-slide effect for NIT images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % nitImages.length);
    }, 2000); // 2 seconds interval

    return () => clearInterval(interval);
  }, [nitImages.length]);

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const imageVariants = {
    hover: { scale: 1.03 },
    rest: { scale: 1 },
  };

  return (
    <div className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <OtherBackground />
      
      <div className="relative z-20">
        <motion.h2
          className="w-fit mx-auto px-6 py-3 rounded-full bg-white/[0.08] backdrop-blur-md border border-white/20 shadow-lg text-4xl md:text-5xl font-extrabold text-center mb-4 bg-gradient-to-r from-purple-900 via-purple-700 to-purple-900 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          About the Host Institute
        </motion.h2>

        <div className="w-24 h-1.5 bg-gradient-to-r from-purple-900 to-purple-900 mx-auto mb-10 rounded-full"></div>

        <div className="max-w-6xl mx-auto space-y-24">
          {sections.map((section, sectionIndex) => (
            <motion.div
              key={section.title}
              className={`flex flex-col ${
                sectionIndex % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } items-center gap-8 lg:gap-12`}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "0px 0px -100px 0px" }}
              transition={{ duration: 0.6, delay: sectionIndex * 0.1 }}
            >
              {/* Image Slider for NIT Section, Static Image for Physics Section */}
              <motion.div
                className="relative w-full lg:w-1/2 overflow-hidden rounded-2xl shadow-xl"
                variants={imageVariants}
                whileHover="hover"
                initial="rest"
                transition={{ duration: 0.3 }}
              >
                {sectionIndex === 0 ? (
                  // Image Slider for NIT Rourkela
                  <div className="relative w-full h-64 md:h-80 overflow-hidden">
                    <motion.div
                      key={currentImageIndex}
                      initial={{ opacity: 0, scale: 1.1 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5 }}
                      className="w-full h-full"
                    >
                      <Image
                        src={section.images[currentImageIndex]}
                        alt={`${section.title} - Image ${currentImageIndex + 1}`}
                        width={800}
                        height={450}
                        className="w-full h-full object-cover"
                        priority={sectionIndex === 0}
                      />
                    </motion.div>
                    
                    {/* Image Counter/Dots Indicator */}
                    <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-10">
                      {nitImages.map((_, idx) => (
                        <button
                          key={idx}
                          onClick={() => setCurrentImageIndex(idx)}
                          className={`transition-all duration-300 rounded-full ${
                            currentImageIndex === idx
                              ? "w-8 h-2 bg-white"
                              : "w-2 h-2 bg-white/50 hover:bg-white/80"
                          }`}
                          aria-label={`Go to image ${idx + 1}`}
                        />
                      ))}
                    </div>
                    
                    {/* Navigation Arrows */}
                    <button
                      onClick={() => setCurrentImageIndex((prev) => (prev - 1 + nitImages.length) % nitImages.length)}
                      className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-all duration-200 z-10"
                      aria-label="Previous image"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                    </button>
                    <button
                      onClick={() => setCurrentImageIndex((prev) => (prev + 1) % nitImages.length)}
                      className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-all duration-200 z-10"
                      aria-label="Next image"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                ) : (
                  // Static Image for Physics Department
                  <Image
                    src={section.images[0]}
                    alt={section.title}
                    width={800}
                    height={450}
                    className={`w-full h-64 md:h-80 ${
                      section.images[0] === "/physics.jpeg"
                        ? "object-cover"
                        : "object-contain"
                    }`}
                    priority={sectionIndex < 2}
                  />
                )}
              </motion.div>

              {/* Text Content */}
              <div
                className={`w-full lg:w-1/2 flex flex-col items-center lg:items-start ${
                  sectionIndex % 2 === 0 ? "lg:pl-6" : "lg:pr-6"
                }`}
              >
                <h3 className="w-fit px-5 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-2xl md:text-3xl font-bold text-gray-900 mb-5 text-center lg:text-left shadow-md">
                  {section.title}
                </h3>

                <p className="text-slate-900 font-semibold leading-relaxed text-center lg:text-justify text-base md:text-lg bg-white/[0.08] backdrop-blur-md border border-white/20 rounded-2xl px-6 py-5 shadow-lg">
                  {section.content}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;