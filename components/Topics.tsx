"use client";

import React, { useRef, useEffect, useState } from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import {
  VscArrowCircleRight,
  VscArrowCircleLeft,
} from "react-icons/vsc";
import { useRouter } from "next/navigation";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface CommitteeMember {
  _id: string;
  name: string;
  role: string;
  category: string;
  order: number;
  imageUrl: string;
}

const Topics = () => {
  const sliderRef = useRef<Slider>(null);
  const topicsSliderRef = useRef<Slider>(null);
  const [members, setMembers] = useState<CommitteeMember[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  // Specific roles to display
  const targetRoles = [
    "Chief Patron,   Director NIT Rourkela",
    "Chairperson, NIT Rourkela",
    "Convener, NIT Rourkela",
    "Co-Convener, NIT Rourkela",
    "Secretary, NIT Rourkela",
    "Treasurer, NIT Rourkela"
  ];

  // Conference topics data
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

  const topicsSettings = {
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

  useEffect(() => {
    const fetchCommitteeData = async () => {
      try {
        // Check session storage for cached ALL data
        const cachedData = sessionStorage.getItem('allCommitteeData');
        
        if (cachedData) {
          // Use cached data
          const allData: CommitteeMember[] = JSON.parse(cachedData);
          const filtered = allData.filter(m => targetRoles.includes(m.role));
          setMembers(filtered.sort((a, b) => a.order - b.order));
          setLoading(false);
          return;
        }

        // Fetch from API if no cached data
        const response = await fetch('https://cmdays-admin-ten.vercel.app/api/committee');
        
        if (!response.ok) {
          throw new Error(`Failed to fetch committee data: ${response.status}`);
        }

        const data: CommitteeMember[] = await response.json();
        
        // Store ALL data in session storage
        sessionStorage.setItem('allCommitteeData', JSON.stringify(data));
        
        // Filter for specific roles
        const filtered = data.filter(m => targetRoles.includes(m.role));
        setMembers(filtered.sort((a, b) => a.order - b.order));
        setLoading(false);
      } catch (err) {
        console.error('Error fetching committee data:', err);
        setError(err instanceof Error ? err.message : 'Failed to load committee data');
        setLoading(false);
      }
    };

    fetchCommitteeData();
  }, []);

  // Create chunks of members for slides (3 members per slide for better visibility)
  const memberSlides = [];
  for (let i = 0; i < members.length; i += 3) {
    memberSlides.push(members.slice(i, i + 3));
  }

  const settings = {
    dots: true,
    infinite: members.length > 3,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
  };

  const goToNext = () => sliderRef.current?.slickNext();
  const goToPrev = () => sliderRef.current?.slickPrev();
  const goToNextTopics = () => topicsSliderRef.current?.slickNext();
  const goToPrevTopics = () => topicsSliderRef.current?.slickPrev();

  const handleCentralCommittee = () => {
    router.push('/organizing');
  };

  const handleAdvisoryCommittee = () => {
    router.push('/advisory');
  };

  const handleLocalCommittee = () => {
    router.push('/local');
  };

  // Loading state
  if (loading) {
    return (
      <section className="relative py-20 px-4">
        <div className="flex flex-col items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-700 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading committee members...</p>
        </div>
      </section>
    );
  }

  // Error state
  if (error) {
    return (
      <section className="relative py-20 px-4">
        <div className="flex flex-col items-center justify-center">
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg max-w-md mx-auto text-center">
            <p className="font-semibold">Error loading committee data</p>
            <p className="text-sm mt-1">{error}</p>
            <button 
              onClick={() => {
                sessionStorage.removeItem('allCommitteeData');
                window.location.reload();
              }}
              className="mt-3 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors text-sm"
            >
              Retry
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      id="topics"
      className="relative py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-12"
    >
      <div className="max-w-7xl mx-auto">
        {/* Conference Themes Section */}
        <div className="mb-24">
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
                Conference Themes
              </h1>

              <div className="w-full h-1 mt-3 rounded-full bg-gradient-to-r from-purple-900 via-violet-700 to-indigo-600"></div>
            </div>

            <p className="mt-5 text-gray-600 text-sm sm:text-base max-w-3xl mx-auto leading-relaxed">
              Explore emerging research areas in condensed matter physics,
              nanotechnology, materials science, photonics, quantum systems,
              and interdisciplinary innovations.
            </p>
          </motion.div>

          {/* Topics Slider */}
          <div className="relative px-8 md:px-12">
            {/* Mobile Arrows */}
            <div className="block md:hidden">
              <button
                onClick={goToPrevTopics}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-lg rounded-full p-2 transition"
              >
                <VscArrowCircleLeft
                  className="text-purple-700"
                  size={30}
                />
              </button>

              <button
                onClick={goToNextTopics}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-lg rounded-full p-2 transition"
              >
                <VscArrowCircleRight
                  className="text-purple-700"
                  size={30}
                />
              </button>
            </div>

            <Slider ref={topicsSliderRef} {...topicsSettings}>
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
                onClick={goToPrevTopics}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 z-10 bg-white hover:bg-gray-50 shadow-xl rounded-full p-2 transition"
              >
                <VscArrowCircleLeft
                  className="text-purple-700"
                  size={36}
                />
              </button>

              <button
                onClick={goToNextTopics}
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

        
      </div>
      
      
    </section>
  );
};

export default Topics;