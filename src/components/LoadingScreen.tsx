"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface LoadingScreenProps {
  onComplete: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    // Elegant, varying loading speed increments (Apple-style)
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsDone(true);
            setTimeout(onComplete, 800); // Allow fade animation to finish
          }, 600);
          return 100;
        }
        
        // Custom incremental steps
        const diff = Math.random() * 15;
        return Math.min(prev + Math.floor(diff), 100);
      });
    }, 180);

    return () => clearInterval(interval);
  }, [onComplete]);

  // Generate deterministic-looking decorative sparkles
  const sparkles = Array.from({ length: 12 }).map((_, i) => ({
    id: i,
    x: `${15 + Math.random() * 70}%`,
    y: `${20 + Math.random() * 60}%`,
    delay: Math.random() * 1.5,
    size: 6 + Math.random() * 14,
  }));

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0, 
            filter: "blur(20px)",
            scale: 1.05
          }}
          transition={{ duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#FFF9FB] overflow-hidden"
        >
          {/* Subtle Pink/White mesh gradient background */}
          <div className="absolute inset-0 bg-gradient-to-tr from-[#FFDDEB] via-[#FFF9FB] to-[#F2E9FF] opacity-80 -z-10" />
          
          {/* Luxury Grain/Noise texture */}
          <div className="absolute inset-0 bg-[radial-gradient(transparent_50%,rgba(255,255,255,0.15))] pointer-events-none -z-10 mix-blend-overlay opacity-30" />
          
          {/* SVG Animated Ribbon */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none opacity-30"
            viewBox="0 0 1000 1000"
            preserveAspectRatio="none"
          >
            <motion.path
              d="M-100,500 C150,300 350,700 600,400 C800,200 850,600 1100,500"
              fill="none"
              stroke="#FFCFE0"
              strokeWidth="3"
              initial={{ pathLength: 0, strokeDasharray: "20,10" }}
              animate={{ 
                pathLength: 1, 
                strokeDashoffset: [0, -100]
              }}
              transition={{
                pathLength: { duration: 3, ease: "easeInOut" },
                strokeDashoffset: { repeat: Infinity, duration: 20, ease: "linear" }
              }}
            />
            <motion.path
              d="M-100,450 C200,600 400,200 650,600 C850,800 800,300 1100,450"
              fill="none"
              stroke="#F2E9FF"
              strokeWidth="2"
              initial={{ pathLength: 0 }}
              animate={{ 
                pathLength: 1 
              }}
              transition={{
                duration: 4,
                ease: "easeInOut",
                delay: 0.5
              }}
            />
          </svg>

          {/* Sparkles */}
          {sparkles.map((sparkle) => (
            <motion.div
              key={sparkle.id}
              className="absolute text-pink-300 pointer-events-none"
              style={{
                left: sparkle.x,
                top: sparkle.y,
                fontSize: sparkle.size,
              }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: [0, 0.8, 0],
                scale: [0, 1.2, 0],
                y: [0, -40, -80],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: sparkle.delay,
                ease: "easeInOut",
              }}
            >
              ✦
            </motion.div>
          ))}

          {/* Main Title Container */}
          <div className="relative flex flex-col items-center max-w-xl text-center px-6">
            {/* Soft Bloom Glow Element */}
            <div className="absolute w-64 h-64 bg-[#FFCFE0] rounded-full blur-3xl opacity-30 -z-10 animate-pulse" />

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="mb-8"
            >
              <h1 className="font-serif text-3xl sm:text-5xl tracking-wide text-gray-800 leading-tight">
                🌸 Welcome to Shree&apos;s World 🌸
              </h1>
              <p className="font-sans text-xs tracking-[0.25em] text-[#B76E79] uppercase mt-3">
                Engineer • Model • Dreamer
              </p>
            </motion.div>

            {/* Progress Container */}
            <div className="w-48 h-[1px] bg-pink-100 rounded-full overflow-hidden mb-3 relative">
              <motion.div
                className="h-full bg-gradient-to-r from-[#B76E79] to-[#FFCFE0]"
                style={{ width: `${progress}%` }}
                transition={{ ease: "easeInOut" }}
              />
            </div>

            <motion.span
              key={progress}
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-sans text-sm font-light text-gray-400 tracking-widest"
            >
              {progress}%
            </motion.span>
          </div>

          {/* Elegant Footer watermark in loader */}
          <div className="absolute bottom-10 left-0 right-0 text-center">
            <span className="font-serif italic text-sm text-[#B76E79]/50 tracking-wider">
              Elegance in Engineering &amp; Fashion
            </span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
