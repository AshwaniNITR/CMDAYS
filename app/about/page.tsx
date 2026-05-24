"use client";

import { motion } from "framer-motion";
import { type FC } from "react";
import Image from "next/image";
import OtherBackground from "../../components/OtherBackground";

interface Section {
  title: string;
  content: string;
  image: string;
}

const AboutUs: FC = () => {
  const sections: Section[] = [
    {
      title: "About NIT ROURKELA",
      content: `National Institute of Technology (NIT) Rourkela is a prestigious institution of national importance, which is fully funded by the Ministry of Education. The institute is recognized as one of the leading national-level institutions for technical education in India. Its primary objective is to produce highly skilled and competent engineers and scientists through its graduate, post-graduate, and doctoral programs in various branches of Engineering and Science. NIT Rourkela has been ranked 317 in QS Asia University, 13 in NIRF Engineering, 30 in NIRF Research and 34 in NIRF Overall.`,
      image: "/nitlogo.png",
    },
    {
      title: "About Department of Physics and Astronomy",
      content: `Department of Physics and Astronomy at NIT Rourkela was established in 1961. The department is known for providing high-quality education in undergraduate and postgraduate studies, as well as PhD and M.Tech (Research) programs. The department is actively engaged in research activities in the field of low-temperature physics, astrophysics, astronomy, functional material, soft matter and polymer physics, and theoretical physics etc. For further information about the institute, please visit our website at www.nitrkl.ac.in`,
      image: "/physics.jpeg",
    },
  ];

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
{/* w-fit px-5 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-2xl md:text-3xl font-bold text-gray-900 mb-5 text-center lg:text-left shadow-md */}
      <div className="relative z-20">
        <motion.h2
  className="w-fit mx-auto px-6 py-3 rounded-full bg-white/[0.08] backdrop-blur-md border border-white/20 shadow-lg text-4xl md:text-5xl font-extrabold text-center mb-4 bg-gradient-to-r from-purple-900 via-purple-700 to-purple-900 bg-clip-text text-transparent"
  initial={{ opacity: 0, y: -20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
>
  About CMDAYS 2026
</motion.h2>

        <div className="w-24 h-1.5 bg-gradient-to-r from-purple-900 to-purple-900 mx-auto mb-10 rounded-full"></div>

        <div className="max-w-6xl mx-auto space-y-24">
          {sections.map((section, index) => (
            <motion.div
              key={section.title}
              className={`flex flex-col ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } items-center gap-8 lg:gap-12`}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "0px 0px -100px 0px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              {/* Image */}
              <motion.div
                className="relative w-full lg:w-1/2 overflow-hidden rounded-2xl shadow-xl"
                variants={imageVariants}
                whileHover="hover"
                initial="rest"
                transition={{ duration: 0.3 }}
              >
                <Image
                  src={section.image}
                  alt={section.title}
                  width={800}
                  height={450}
                  className={`w-full h-64 md:h-80 ${
                    section.image === "/physics.jpeg"
                      ? "object-cover"
                      : "object-contain"
                  }`}
                  priority={index < 2}
                />
              </motion.div>

              {/* Text Content */}
              <div
                className={`w-full lg:w-1/2 flex flex-col items-center lg:items-start ${
                  index % 2 === 0 ? "lg:pl-6" : "lg:pr-6"
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