"use client";

import { motion, useAnimation, Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import Link from "next/link";
import { Button } from "./ui/button";
import CombinedBackground from "./CombinedBackground";



const AboutUs = () => {
  const controls = useAnimation();

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

  return (
    <section
      id="aboutus"
      className="relative overflow-hidden py-20 px-6 sm:px-10 lg:px-16"
    >
      {/* Animated Background */}
      {/* <CombinedBackground /> */}

      {/* Soft Overlay */}
      {/* <div className="absolute inset-0 bg-white/70 backdrop-blur-[2px]" /> */}

      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={controls}
        className="relative max-w-6xl mx-auto z-10"
      >
        {/* Heading */}
        <motion.div
          variants={itemVariants}
          className="text-center mb-14"
        >
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

        {/* Main Content Card */}
        <motion.div
          variants={itemVariants}
          className="relative bg-white/80 backdrop-blur-xl border border-white/40 shadow-2xl rounded-3xl p-8 md:p-12 lg:p-16 overflow-hidden"
        >
          {/* Decorative Glow Effects */}
          <div className="absolute -top-24 -right-24 w-72 h-72 bg-purple-300/20 rounded-full blur-3xl" />
          <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-blue-300/20 rounded-full blur-3xl" />

          {/* Content */}
          <div className="relative z-10">
           <motion.p
  variants={itemVariants}
  className="text-gray-700 text-base md:text-lg lg:text-[1.15rem] leading-10 font-[500] text-center max-w-5xl mx-auto font-serif tracking-wide"
>
  The Department of Physics and Astronomy, NIT Rourkela is
  organizing the 34th National Conference “Condensed Matter Days”
  (CMDAYS-2026). CMDAYS aims to provide a suitable platform for
  young researchers and scientists to present their work in
  experimental, theoretical, and computational Condensed Matter
  Physics. In addition to these traditional domains, CMDAYS-2026
  also focuses on a wide variety of emerging and interdisciplinary
  areas of Condensed Matter Physics, encouraging meaningful academic
  exchange and collaboration. The conference is expected to bring
  together a vibrant community of physicists, researchers,
  academicians, and scholars for thought-provoking discussions,
  innovative ideas, and long-term research collaborations that will
  contribute significantly to the advancement of the field.
</motion.p>

            {/* CTA Button */}
            {/* <motion.div
              variants={itemVariants}
              className="mt-12 flex justify-center"
            >
              <Link href="/about">
                <Button className="relative overflow-hidden px-8 py-6 text-base font-semibold rounded-xl bg-gradient-to-r from-blue-900 to-blue-700 hover:from-blue-800 hover:to-blue-600 text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-blue-800/40">
                  <span className="relative z-10">Learn More</span>

                  <div className="absolute inset-0 bg-white/10 opacity-0 hover:opacity-100 transition-opacity duration-300" />
                </Button>
              </Link>
            </motion.div> */}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default AboutUs;