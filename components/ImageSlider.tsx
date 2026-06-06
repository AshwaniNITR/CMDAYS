"use client";

import React, { useEffect } from "react";

interface ImageSliderProps {
  images: string[];
}

const ImageSlider: React.FC<ImageSliderProps> = ({ images }) => {
  // Triple the images to ensure seamless loop on wide screens
  const triplicatedImages = [...images, ...images, ...images];

  useEffect(() => {
    const style = document.createElement("style");
    style.textContent = `
  @keyframes infiniteScroll {
    0% { transform: translateX(0); }
    100% { transform: translateX(-33.333%); }
  }

  .slider-track-desktop {
    animation: infiniteScroll 40s linear infinite;
    animation-play-state: running !important;
  }

  .slider-track-tablet {
    animation: infiniteScroll 35s linear infinite;
    animation-play-state: running !important;
  }

  .slider-track-mobile {
    animation: infiniteScroll 30s linear infinite;
    animation-play-state: running !important;
  }

  .slider-track-desktop *,
  .slider-track-tablet *,
  .slider-track-mobile * {
    animation-play-state: running !important;
  }
`;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div className="w-full overflow-hidden py-4">
      {/* Desktop - xl+ */}
      <div className="hidden xl:block">
        <div className="slider-track-desktop flex gap-6 w-max">
          {triplicatedImages.map((src, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-80 h-52 rounded-xl overflow-hidden shadow-lg  transition-shadow duration-300 cursor-pointer"
            >
              <img
                src={src}
                alt={`Conference ${(index % images.length) + 1}`}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.src = "/fallback-image.jpg";
                }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Tablet - md to xl */}
      <div className="hidden md:block xl:hidden">
        <div className="slider-track-tablet flex gap-5 w-max">
          {triplicatedImages.map((src, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-72 h-48 rounded-xl overflow-hidden shadow-lg  transition-shadow duration-300 cursor-pointer"
            >
              <img
                src={src}
                alt={`Conference ${(index % images.length) + 1}`}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.src = "/fallback-image.jpg";
                }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Mobile - below md */}
      <div className="md:hidden">
        <div className="slider-track-mobile flex gap-4 w-max">
          {triplicatedImages.map((src, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-64 h-40 rounded-xl overflow-hidden shadow-lg  transition-shadow duration-300 cursor-pointer"
            >
              <img
                src={src}
                alt={`Conference ${(index % images.length) + 1}`}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.src = "/fallback-image.jpg";
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;