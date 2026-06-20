"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface Heart {
  id: number;
  x: number;
  y: number;
  scale: number;
  rotate: number;
  color: string;
  delay: number;
}

interface HeartBurstProps {
  active: boolean;
  onComplete: () => void;
}

const HEARTS_COUNT = 30;
const COLORS = ["#FFCFE0", "#FFDDEB", "#B76E79", "#F2E9FF", "#ECCCD2"];

export default function HeartBurst({ active, onComplete }: HeartBurstProps) {
  const [hearts, setHearts] = useState<Heart[]>([]);

  useEffect(() => {
    if (!active) {
      setHearts([]);
      return;
    }

    // Generate hearts starting from the center center
    const newHearts: Heart[] = Array.from({ length: HEARTS_COUNT }).map((_, i) => {
      // Random direction in radians
      const angle = Math.random() * Math.PI * 2;
      // Random distance
      const distance = 80 + Math.random() * 180;
      
      const targetX = Math.cos(angle) * distance;
      const targetY = Math.sin(angle) * distance - 80; // drift upwards

      return {
        id: i,
        x: targetX,
        y: targetY,
        scale: 0.6 + Math.random() * 1.0,
        rotate: (Math.random() - 0.5) * 60,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
        delay: Math.random() * 0.25,
      };
    });

    setHearts(newHearts);

    const timer = setTimeout(() => {
      onComplete();
    }, 2800);

    return () => clearTimeout(timer);
  }, [active, onComplete]);

  if (!active) return null;

  return (
    <div className="absolute inset-0 z-20 pointer-events-none flex items-center justify-center">
      {hearts.map((heart) => (
        <motion.div
          key={heart.id}
          className="absolute"
          initial={{ opacity: 0, scale: 0, x: 0, y: 0, rotate: 0 }}
          animate={{
            opacity: [0, 1, 1, 0],
            scale: [0, heart.scale, heart.scale, 0],
            x: [0, heart.x * 0.8, heart.x],
            y: [0, heart.y * 0.8, heart.y],
            rotate: [0, heart.rotate * 0.5, heart.rotate],
          }}
          transition={{
            duration: 2.2,
            ease: "easeOut",
            delay: heart.delay,
          }}
        >
          {/* Heart icon or spark symbol */}
          {heart.id % 4 === 0 ? (
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill={heart.color}
              stroke="none"
              className="drop-shadow-sm shadow-pink-200"
            >
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          ) : (
            <span
              style={{ color: heart.color }}
              className="text-lg font-bold select-none drop-shadow-sm"
            >
              ✦
            </span>
          )}
        </motion.div>
      ))}
    </div>
  );
}
