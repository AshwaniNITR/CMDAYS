"use client";

import React, { useRef } from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import {
  VscArrowCircleRight,
  VscArrowCircleLeft,
} from "react-icons/vsc";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Topics = () => {
  const sliderRef = useRef<Slider>(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const topics = [
    "Dielectrics, Ferroelectrics, and Multiferroics",
    "Energy Storage Devices",
    "Magnetism and Spintronic Systems",
    "Nanomaterials and Nanocomposites",
    "Semiconductor Materials and Devices",
    "Photoluminescence and Optical Materials",

    "Spectroscopic Techniques",
    "Photonics and Optoelectronic Devices",
    "Photovoltaics and Photocatalysis",
    "Superconductivity and Low-T Physics",
    "Strongly Correlated Systems",
    "Topological Materials",

    "Disordered Systems and Phase Transitions",
    "Surface, Interfaces and Thin Films",
    "Quantum Materials and Devices",
    "Mesoscopic Phenomena and Junctions",
    "Nonlinear Physics",
    "Soft Condensed Matter Physics",

    "Organic, Inorganic, and Biomaterials and Sensors",
    "AI and ML for Materials Discovery",
    "Interdisciplinary Topics Relevant to Condensed Matter Systems",
  ];

  // Create chunks of 6 topics per slide
  const topicSlides = [];
  for (let i = 0; i < topics.length; i += 6) {
    topicSlides.push(topics.slice(i, i + 6));
  }

  const goToNext = () => sliderRef.current?.slickNext();
  const goToPrev = () => sliderRef.current?.slickPrev();

  return (
    <section
      id="topics"
      className="relative py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-12"
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-block relative">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold bg-gradient-to-r from-purple-900 via-violet-700 to-indigo-600 bg-clip-text text-transparent">
              Conference Topics
            </h1>

            <div className="w-full h-1 mt-3 rounded-full bg-gradient-to-r from-purple-900 via-violet-700 to-indigo-600"></div>
          </div>

          <p className="mt-5 text-gray-600 text-sm sm:text-base max-w-3xl mx-auto leading-relaxed">
            Explore emerging research areas in condensed matter physics,
            nanotechnology, materials science, photonics, quantum systems,
            and interdisciplinary innovations.
          </p>
        </motion.div>

        {/* Slider */}
        <div className="relative px-8 md:px-12">
          {/* Mobile Arrows */}
          <div className="block md:hidden">
            <button
              onClick={goToPrev}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-lg rounded-full p-2 transition"
            >
              <VscArrowCircleLeft
                className="text-purple-700"
                size={30}
              />
            </button>

            <button
              onClick={goToNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-lg rounded-full p-2 transition"
            >
              <VscArrowCircleRight
                className="text-purple-700"
                size={30}
              />
            </button>
          </div>

          <Slider ref={sliderRef} {...settings}>
            {topicSlides.map((slide, index) => (
              <div key={index} className="px-3 py-2">
                <motion.div
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                  }}
                  viewport={{ once: true }}
                  className="min-h-[380px] rounded-3xl border border-white/30 bg-white/80 backdrop-blur-lg shadow-2xl p-6 sm:p-8"
                >
                  <ul className="space-y-5">
                    {slide.map((topic, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -15 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{
                          duration: 0.3,
                          delay: i * 0.08,
                        }}
                        viewport={{ once: true }}
                        className="relative pl-6 text-sm sm:text-base text-gray-700 leading-relaxed font-medium"
                      >
                        <span className="absolute left-0 top-2 w-2.5 h-2.5 rounded-full bg-gradient-to-r from-purple-700 to-indigo-600"></span>

                        {topic}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            ))}
          </Slider>

          {/* Desktop Arrows */}
          <div className="hidden md:block">
            <button
              onClick={goToPrev}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 z-10 bg-white hover:bg-gray-50 shadow-xl rounded-full p-2 transition"
            >
              <VscArrowCircleLeft
                className="text-purple-700"
                size={36}
              />
            </button>

            <button
              onClick={goToNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 z-10 bg-white hover:bg-gray-50 shadow-xl rounded-full p-2 transition"
            >
              <VscArrowCircleRight
                className="text-purple-700"
                size={36}
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Topics;