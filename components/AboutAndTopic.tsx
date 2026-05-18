"use client";

import React from "react";
import AboutUs from "./AboutUs";
import Topics from "./Topics";
import CombinedBackground from "./CombinedBackground";

const AboutAndTopic = () => {
  return (
    <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8 2xl:px-0">
      
      {/* Shared Background */}
      <div className="fixed inset-0 -z-20 pointer-events-none">
        <CombinedBackground />
      </div>

      {/* Shared Soft Overlay */}
      <div className="fixed inset-0 bg-white/60 backdrop-blur-[0.5px] -z-10" />

      {/* Main Content Wrapper */}
      <div className="relative z-10 w-full flex justify-center">
        
        {/* Centered Content Container */}
        <div className="w-full max-w-7xl">
          <AboutUs />
          <Topics />
        </div>

      </div>
    </section>
  );
};

export default AboutAndTopic;