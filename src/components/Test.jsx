// src/components/WavyHoverImage.js
import React, { useState } from 'react';
import { motion } from 'framer-motion';

// WavyHoverImage Component
const WavyHoverImage = ({ imageUrl, altText }) => {
  const [hoverPosition, setHoverPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  // Handle mouse movement
  const handleMouseMove = (e) => {
    const { left, top } = e.currentTarget.getBoundingClientRect();
    setHoverPosition({
      x: e.clientX - left,
      y: e.clientY - top,
    });
  };

  // Handle mouse enter
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  // Handle mouse leave
  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className="flex justify-center items-center h-screen bg-gray-900 overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* SVG Filter for Wavy Effect */}
      <svg className="absolute top-0 left-0 w-0 h-0 hidden">
        <filter id="turbulence-hover" x="0%" y="0%">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.02"
            numOctaves="3"
            result="turbulence"
            seed="1"
          />
          <feDisplacementMap
            in="SourceGraphic"
            in2="turbulence"
            scale="30"
            xChannelSelector="R"
            yChannelSelector="G"
          />
          <feColorMatrix
            type="matrix"
            values="1 0 0 0 0.6 
                    0 1 0 0 0.3 
                    0 0 1 0 0.1 
                    0 0 0 1 0"
            result="colorChange"
          />
          <feComposite in="SourceGraphic" in2="colorChange" operator="in" />
        </filter>
      </svg>

      {/* Image with Partial Hover Effect */}
      <div className="relative w-80 h-80 sm:w-96 sm:h-96 lg:w-[500px] lg:h-[500px] rounded-lg overflow-hidden">
        <img
          src={imageUrl}
          alt={altText}
          className="w-full h-full object-cover rounded-lg"
        />
        <motion.div
          className="absolute inset-0 pointer-events-none"
          style={{
            maskImage: `radial-gradient(circle 100px at ${hoverPosition.x}px ${hoverPosition.y}px, black 50%, transparent 80%)`,
            WebkitMaskImage: `radial-gradient(circle 100px at ${hoverPosition.x}px ${hoverPosition.y}px, black 50%, transparent 80%)`,
            filter: isHovered ? 'url(#turbulence-hover)' : 'none',
            transition: 'filter 0.5s ease-in-out',
          }}
        />
      </div>
    </div>
  );
};

export default WavyHoverImage;
