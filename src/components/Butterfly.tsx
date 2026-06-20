"use client";

import { motion } from "framer-motion";

interface ButterflyProps {
  delay?: number;
  initialX?: number;
  initialY?: number;
  scale?: number;
}

export default function Butterfly({
  delay = 0,
  initialX = 100,
  initialY = 200,
  scale = 1,
}: ButterflyProps) {
  return (
    <motion.div
      className="absolute pointer-events-none select-none z-10"
      style={{ x: initialX, y: initialY }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        opacity: [0, 0.8, 0.8, 0],
        scale: [0, scale, scale, 0],
        // Floating organic path
        x: [initialX, initialX + 80, initialX - 40, initialX + 120, initialX + 200],
        y: [initialY, initialY - 120, initialY - 240, initialY - 320, initialY - 450],
        rotate: [0, 15, -10, 20, 0],
      }}
      transition={{
        duration: 15,
        repeat: Infinity,
        repeatDelay: 2,
        delay: delay,
        ease: "easeInOut",
      }}
    >
      <div className="relative w-8 h-8 flex items-center justify-center">
        {/* Left Wing */}
        <motion.svg
          className="absolute origin-right w-4 h-6 right-4"
          viewBox="0 0 50 100"
          animate={{
            rotateY: [0, 75, 0],
          }}
          transition={{
            duration: 0.25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <path
            d="M 50 50 C 10 20, 0 40, 20 60 C 5 75, 10 90, 50 80 Z"
            fill="url(#butterflyGradient)"
            stroke="#B76E79"
            strokeWidth="2"
          />
        </motion.svg>

        {/* Right Wing */}
        <motion.svg
          className="absolute origin-left w-4 h-6 left-4"
          viewBox="0 0 50 100"
          animate={{
            rotateY: [0, 75, 0],
          }}
          transition={{
            duration: 0.25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <path
            d="M 0 50 C 40 20, 50 40, 30 60 C 45 75, 40 90, 0 80 Z"
            fill="url(#butterflyGradient)"
            stroke="#B76E79"
            strokeWidth="2"
          />
        </motion.svg>

        {/* Body */}
        <div className="absolute w-[2px] h-5 bg-[#B76E79] rounded-full" />
        
        {/* Antennas */}
        <div className="absolute -top-1 w-[4px] h-[4px] border-l border-t border-[#B76E79] rounded-tl-full rotate-45 origin-bottom-right" />
        
        {/* Gradients */}
        <svg className="w-0 h-0 absolute">
          <defs>
            <linearGradient id="butterflyGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFCFE0" />
              <stop offset="50%" stopColor="#FFDDEB" />
              <stop offset="100%" stopColor="#F2E9FF" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </motion.div>
  );
}
