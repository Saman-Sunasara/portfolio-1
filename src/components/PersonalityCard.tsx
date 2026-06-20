"use client";

import React, { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

interface PersonalityCardProps {
  icon: string;
  title: string;
  description: string;
  color: string;
}

export default function PersonalityCard({
  icon,
  title,
  description,
  color,
}: PersonalityCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);

  // Motion values for mouse coordinates (-0.5 to 0.5)
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth springs for tilt rotation
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [12, -12]), {
    damping: 25,
    stiffness: 250,
  });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-12, 12]), {
    damping: 25,
    stiffness: 250,
  });

  // Motion values for radial glow coordinates (percentages)
  const glowX = useSpring(useMotionValue(50), { damping: 30, stiffness: 200 });
  const glowY = useSpring(useMotionValue(50), { damping: 30, stiffness: 200 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    
    // Relative mouse position from -0.5 to 0.5
    const relativeX = (e.clientX - rect.left) / rect.width - 0.5;
    const relativeY = (e.clientY - rect.top) / rect.height - 0.5;
    
    x.set(relativeX);
    y.set(relativeY);

    // Glow position (0% to 100%)
    glowX.set(((e.clientX - rect.left) / rect.width) * 100);
    glowY.set(((e.clientY - rect.top) / rect.height) * 100);
  };

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
    x.set(0);
    y.set(0);
    glowX.set(50);
    glowY.set(50);
  };

  // Convert custom coordinates to background style
  const glowBackground = useTransform(
    [glowX, glowY],
    ([gx, gy]) =>
      `radial-gradient(circle 120px at ${gx}% ${gy}%, rgba(255, 207, 224, 0.35) 0%, transparent 80%)`
  );

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="relative flex flex-col h-64 p-8 rounded-3xl border border-[#FFCFE0]/30 bg-[#FFF9FB]/40 backdrop-blur-md cursor-pointer select-none shadow-md shadow-pink-100/5 transition-colors duration-500 overflow-hidden"
    >
      {/* Background Radial Mouse Glow */}
      <motion.div
        className="absolute inset-0 pointer-events-none z-0"
        style={{ background: glowBackground }}
      />

      {/* Glass grain noise */}
      <div className="absolute inset-0 bg-[radial-gradient(transparent_60%,rgba(255,255,255,0.05))] pointer-events-none z-0 opacity-20" />

      {/* Decorative colored corner light */}
      <div
        className="absolute -right-12 -top-12 w-28 h-28 rounded-full blur-2xl opacity-20 transition-all duration-700"
        style={{ backgroundColor: color }}
      />

      {/* Content wrapper with transform depth */}
      <div className="relative z-10 flex flex-col justify-between h-full" style={{ transform: "translateZ(30px)" }}>
        {/* Icon / Emoji badge */}
        <div
          className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl shadow-inner border border-pink-50"
          style={{ backgroundColor: `${color}25` }}
        >
          {icon}
        </div>

        {/* Title & Desc */}
        <div>
          <motion.h3 
            className="font-serif text-2xl font-medium text-gray-800 tracking-wide mb-2"
            animate={{ color: hovered ? "#B76E79" : "#1F2937" }}
            transition={{ duration: 0.3 }}
          >
            {title}
          </motion.h3>
          <p className="font-sans text-xs text-gray-500 leading-relaxed font-light">
            {description}
          </p>
        </div>
      </div>

      {/* Bottom border shine */}
      <motion.div 
        className="absolute bottom-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#B76E79] to-transparent opacity-0 transition-opacity duration-500"
        style={{ opacity: hovered ? 1 : 0 }}
      />
    </motion.div>
  );
}
