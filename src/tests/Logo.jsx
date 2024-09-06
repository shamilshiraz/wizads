// src/Logo.js
import React, { useEffect, useRef } from 'react';
import './Logo.css';

const Logo = () => {
  const svgRef = useRef(null);

  useEffect(() => {
    const svgElement = svgRef.current;

    const onMouseMove = (event) => {
      const { width, height } = svgElement.getBoundingClientRect();
      const mouseX = event.clientX / width;
      const mouseY = event.clientY / height;
      
      // Adjust gradient position
      const radialGradient = svgElement.querySelector('radialGradient');
      radialGradient.setAttribute('cx', mouseX);
      radialGradient.setAttribute('cy', mouseY);

      // Calculate distortion
      const blur = svgElement.querySelector('feGaussianBlur');
      const offsetX = svgElement.querySelector('feOffset');

      // Apply distortion based on mouse position
      const distortionAmount = Math.sqrt(mouseX ** 2 + mouseY ** 2) * 20;
      blur.setAttribute('stdDeviation', distortionAmount / 10);
      offsetX.setAttribute('dx', distortionAmount / 5);
      offsetX.setAttribute('dy', distortionAmount / 5);
    };

    svgElement.addEventListener('mousemove', onMouseMove);
    return () => svgElement.removeEventListener('mousemove', onMouseMove);
  }, []);

  return (
    <div className="logo-container">
      <svg
        ref={svgRef}
        viewBox="0 0 600 400"
        preserveAspectRatio="xMidYMid slice"
        className="logo-svg"
      >
        <defs>
          <radialGradient id="gradient" cx="0.5" cy="0.5" r="0.5" fx="0.5" fy="0.5">
            <stop offset="0%" stopColor="#ff8a00" />
            <stop offset="100%" stopColor="#e52e71" />
          </radialGradient>
          <filter id="distortFilter">
            <feGaussianBlur in="SourceGraphic" stdDeviation="0" />
            <feOffset dx="0" dy="0" />
            <feBlend mode="normal" in2="SourceGraphic" in="effect1_dropShadow" result="shape" />
          </filter>
        </defs>
        
        <g filter="url(#distortFilter)">
          <circle cx="300" cy="200" r="150" fill="url(#gradient)" />
          <text x="50%" y="50%" textAnchor="middle" fill="white" dy=".3em" fontSize="50" fontWeight="bold">
            MyLogo
          </text>
        </g>
      </svg>
    </div>
  );
};

export default Logo;
