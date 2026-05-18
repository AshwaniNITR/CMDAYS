"use client";
import React, { useRef, useState } from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import { VscArrowCircleRight, VscArrowCircleLeft } from "react-icons/vsc";
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
    autoplaySpeed: 6000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true
        }
      }
    ]
  };

  const tracks = [
    {
      title: "Track 1: Smart Sensors and Intelligent Instrumentation",
      items: [
        "Smart Sensors: Design, Fabrication, and Applications",
        "Sensor Fusion and Calibration",
        "3D Printing and Rapid Prototyping",
        "Optical Sensors and Photonic Instrumentation",
        "Sensor Reliability, Fault Tolerance, and Metrology",
        "AI/ML for Measurements and Decision Support",
      ],
    },
    {
      title: "Track 2:Sustainable IoT and Communication Technologies",
      items: [
        "Wireless, RFID, and IoT-Enabled Instrumentation",
        "Communication Protocols and Network Architectures",
        "IoT in Mining and Precision Agriculture",
        "Cyber-Physical Security, Privacy, and Resilience",
        "Standardization, Interoperability, and Sustainability",
        "RF,5G and Beyond",
      ],
    },
    {
      title:
        "Track 3: Advances in Intelligent Control, Robotics, and Mechatronics",
      items: [
        "Intelligent Control and Adaptive Systems",
        "Instrumentation and Control for Process Industries",
        "Cyber-Physical Systems, Robotics and Industrial Automation",
        "Predictive Maintenance and Condition Monitoring",
        "Drone Design, Navigation, and Control",
        "Digital Twins, HMI and Smart Manufacturing",
      ],
    },
    {
      title: "Track 4: Innovations in Microelectronics, Circuits, and Devices",
      items: [
        "Quantum Sensors, Emerging Devices, and Design Paradigms",
        "MEMS, NEMS, Flexible Electronics and Energy Harvesting",
        "Sensor Interfacing Circuits and Low-Power Circuit Design",
        "Biomedical Devices and Wearable Systems",
        "Bio-inspired and Neuromorphic Circuits",
      ],
    },
    {
      title: "Track 5: Sustainable Technologies for Electrical Systems",
      items: [
        "Smart Grids and Renewable Energy Systems",
        "Condition Monitoring and Fault Diagnosis",
        "Energy-Efficient Irrigation Systems",
        "Hardware-Software Co-Design for Power Systems",
        "EV Charging, Storage and Battery Management",
      ],
    },
    {
      title:
        "Track 6: Applied Signal and Image Processing",
      items: [
        "Diagnostics and Personalized Healthcare",
        "Pollution and Environmental Monitoring",
        "Multimodal Fusion, AI/ML and XAI",
        "Automation and Smart Manufacturing",
        "Computer Vision, Speech and Audio Processing",
      ],
    },
    {
      title: "Track 7: Instrumentation for Defense and Space Applications",
      items: [
        "Space Instrumentation, Sensors, and Payload Systems",
        "Remote Sensing, Navigation, Satellite Communication and Microwave Systems",
        "Advanced Materials, Devices, and Energy Solutions for Defense",
        "Guidance, Navigation, and Control (GNC) Systems",
        "Simulation, Digital Twins, and Validation of Mission-Critical Systems",
      ],
    },
  ];

  const goToNext = () => sliderRef.current?.slickNext();
  const goToPrev = () => sliderRef.current?.slickPrev();

  return (
    <div
      id="topics"
      className="bg-gradient-to-tr  p-4 sm:p-6 md:p-10 lg:p-16"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-8 sm:mb-10 md:mb-12 text-center"
        >
          <div className="relative inline-block text-center">
            <h1 className="text-4xl  sm:text-3xl md:text-4xl lg:text-5xl text-center font-extrabold bg-gradient-to-r from-purple-800 via-purple-700 to-violet-600 bg-clip-text text-transparent mb-2">
              Conference Tracks
            </h1>
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-800 via-purple-700 to-violet-600"></div>
          </div>
        </motion.div>

        <div className="relative px-8 sm:px-10 md:px-12">
          {/* Mobile: Show only arrow buttons, desktop: hide arrows when dots are visible */}
          <div className="block md:hidden">
            <button
              onClick={goToPrev}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full shadow-lg bg-white/90 hover:bg-white transition-colors"
              aria-label="Previous tracks"
            >
              <VscArrowCircleLeft className="text-blue-700" size={28} />
            </button>
            <button
              onClick={goToNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full shadow-lg bg-white/90 hover:bg-white transition-colors"
              aria-label="Next tracks"
            >
              <VscArrowCircleRight className="text-blue-700" size={28} />
            </button>
          </div>

          <Slider ref={sliderRef} {...settings}>
            {tracks.map((track, index) => (
              <div key={index} className="px-2 sm:px-3 md:px-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-4 sm:p-5 md:p-6 rounded-xl shadow-lg border border-gray-100 min-h-[400px] sm:min-h-[450px] flex flex-col h-full"
                >
                  <div className="flex mb-3 justify-center items-center sm:mb-4">
                    <span className="inline-block px-3 py-1 sm:px-4 sm:py-1 bg-gradient-to-r from-blue-900 to-blue-700 text-white text-xs sm:text-sm font-semibold rounded-full">
                      Track {index + 1}
                    </span>
                  </div>
                  
                  <h3 className="text-lg sm:text-xl md:text-xl font-bold bg-gradient-to-r from-blue-900 via-blue-700 to-blue-600 mb-4 sm:mb-6 bg-clip-text text-transparent leading-tight">
                    {track.title}
                  </h3>
                  
                  <ul className="space-y-2 sm:space-y-3 flex-grow">
                    {track.items.map((item, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.05, duration: 0.3 }}
                        viewport={{ once: true }}
                        className="text-gray-700 text-xs sm:text-sm md:text-base relative pl-3 sm:pl-4 before:absolute before:left-0 before:top-1.5 sm:before:top-2 before:w-1.5 sm:before:w-2 before:h-1.5 sm:before:h-2 before:bg-gradient-to-r before:from-blue-900 before:to-purple-600 before:rounded-full"
                      >
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            ))}
          </Slider>

          {/* Desktop: Show arrow buttons */}
          <div className="hidden md:block">
            <button
              onClick={goToPrev}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 lg:-translate-x-8 z-10 p-2 rounded-full shadow-lg bg-white hover:bg-gray-50 transition-colors"
              aria-label="Previous tracks"
            >
              <VscArrowCircleLeft className="text-blue-700" size={32} />
            </button>
            <button
              onClick={goToNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 lg:translate-x-8 z-10 p-2 rounded-full shadow-lg bg-white hover:bg-gray-50 transition-colors"
              aria-label="Next tracks"
            >
              <VscArrowCircleRight className="text-blue-700" size={32} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topics;