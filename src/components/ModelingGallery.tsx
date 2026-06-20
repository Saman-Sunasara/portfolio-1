"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Maximize2 } from "lucide-react";

interface GalleryItem {
  id: number;
  title: string;
  category: string;
  magazineName: string;
  subTitle: string;
  tag: string;
  heightClass: string; // Tailwind heights for masonry variety
  gradient: string;
  textColor: string;
}

const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 1,
    title: "SARTORIAL SILHOUETTE",
    category: "Fashion Shoots",
    magazineName: "VOGUE",
    subTitle: "Shree in Haute Couture",
    tag: "Studio",
    heightClass: "h-[450px] md:h-[550px]",
    gradient: "from-[#F5E6E8] via-[#E8C5C8] to-[#D4A5A9]",
    textColor: "text-[#4A2E35]",
  },
  {
    id: 2,
    title: "VISAKHA BREEZE",
    category: "Lifestyle Modeling",
    magazineName: "DIOR",
    subTitle: "Elegance by the Shoreline",
    tag: "Outdoor",
    heightClass: "h-[350px] md:h-[400px]",
    gradient: "from-[#FBF8F5] via-[#E6DFD5] to-[#D5CBB9]",
    textColor: "text-[#5A4E40]",
  },
  {
    id: 3,
    title: "NEO-ELECTRONICS",
    category: "Creative Projects",
    magazineName: "SHREE",
    subTitle: "Balancing Silicon & Satin",
    tag: "Concept",
    heightClass: "h-[400px] md:h-[480px]",
    gradient: "from-[#E3D9FC] via-[#D5C6F9] to-[#BFACF0]",
    textColor: "text-[#3D2278]",
  },
  {
    id: 4,
    title: "CHAMPAGNE GOLD SOIRÉE",
    category: "Editorial Looks",
    magazineName: "VOGUE",
    subTitle: "Sunset Reflection Series",
    tag: "Luxury",
    heightClass: "h-[450px] md:h-[580px]",
    gradient: "from-[#FFFDF9] via-[#F4EBD7] to-[#DDC9A3]",
    textColor: "text-[#5E4C2A]",
  },
  {
    id: 5,
    title: "GLAMOUR MATRIX",
    category: "Brand Collaborations",
    magazineName: "DIOR",
    subTitle: "Futuristic Luxe Collaboration",
    tag: "Campaign",
    heightClass: "h-[350px] md:h-[420px]",
    gradient: "from-[#FFF0F5] via-[#FFD1DC] to-[#E2A7B5]",
    textColor: "text-[#6B3F4A]",
  },
  {
    id: 6,
    title: "MINIMALIST BLISS",
    category: "Lifestyle Modeling",
    magazineName: "SHREE",
    subTitle: "Refined Casual Portraiture",
    tag: "Portrait",
    heightClass: "h-[400px] md:h-[500px]",
    gradient: "from-[#F9F9FB] via-[#ECECF1] to-[#D5D5DD]",
    textColor: "text-[#3E3E4B]",
  },
];

const CATEGORIES = [
  "All",
  "Fashion Shoots",
  "Lifestyle Modeling",
  "Editorial Looks",
  "Creative Projects",
  "Brand Collaborations",
];

export default function ModelingGallery() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [activePreview, setActivePreview] = useState<GalleryItem | null>(null);

  const filteredItems = GALLERY_ITEMS.filter(
    (item) => selectedCategory === "All" || item.category === selectedCategory
  );

  return (
    <div className="w-full">
      {/* Category Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
        {CATEGORIES.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`font-sans text-[10px] sm:text-xs tracking-widest uppercase px-5 py-2.5 rounded-full border transition-all duration-500 relative ${
              selectedCategory === category
                ? "bg-[#B76E79] text-white border-[#B76E79]"
                : "bg-transparent text-gray-500 border-pink-100 hover:border-[#B76E79]/50 hover:text-[#B76E79]"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Masonry Grid */}
      <motion.div
        layout
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-start"
      >
        <AnimatePresence mode="popLayout">
          {filteredItems.map((item) => (
            <motion.div
              layout
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className={`relative ${item.heightClass} rounded-[32px] overflow-hidden group cursor-pointer border border-[#FFCFE0]/30 shadow-md shadow-pink-100/5`}
            >
              {/* Luxury Styled Editorial Cover Background */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${item.gradient} transition-transform duration-1000 ease-out group-hover:scale-105`}
              >
                {/* Vintage halftone grain simulation */}
                <div className="absolute inset-0 bg-[radial-gradient(transparent_50%,rgba(0,0,0,0.06))] mix-blend-overlay opacity-40" />

                {/* Simulated Fashion Portrait Outline (Sleek minimalist drawing overlay) */}
                <svg
                  className="absolute inset-0 w-full h-full opacity-10 group-hover:opacity-15 transition-opacity duration-700 pointer-events-none"
                  viewBox="0 0 100 100"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M 50 10 Q 70 30 75 50 T 50 90 T 25 50 Z"
                    fill="none"
                    stroke="currentColor"
                    className={item.textColor}
                    strokeWidth="0.5"
                  />
                  <line
                    x1="10"
                    y1="50"
                    x2="90"
                    y2="50"
                    stroke="currentColor"
                    className={item.textColor}
                    strokeWidth="0.1"
                  />
                </svg>

                {/* Big Magazine Header Overlay */}
                <div className="absolute top-8 left-0 right-0 text-center select-none pointer-events-none opacity-80 group-hover:opacity-100 transition-opacity duration-500">
                  <h4
                    className={`font-serif text-5xl md:text-6xl font-light tracking-[0.18em] ${item.textColor} opacity-25`}
                  >
                    {item.magazineName}
                  </h4>
                </div>

                {/* Layout Grid details simulating luxury magazine layout */}
                <div className="absolute inset-x-6 top-24 flex justify-between font-sans text-[9px] tracking-widest uppercase opacity-45 pointer-events-none">
                  <span>ISSUE NO. 0{item.id}</span>
                  <span>AUTUMN / WINTER 2026</span>
                </div>

                {/* Center Badge styled label */}
                <div className="absolute inset-0 flex flex-col justify-center items-center px-8 text-center pointer-events-none">
                  <span className="font-serif italic text-xs tracking-widest text-[#B76E79] mb-1.5 opacity-80">
                    {item.category}
                  </span>
                  <h3
                    className={`font-serif text-xl sm:text-2xl font-semibold tracking-wider uppercase leading-snug mb-2 ${item.textColor}`}
                  >
                    {item.title}
                  </h3>
                  <div className="w-8 h-[1px] bg-current opacity-30 my-2" className-disabled={item.textColor} />
                  <p className="font-sans text-[10px] tracking-wide font-light text-gray-600 opacity-90 max-w-[200px]">
                    {item.subTitle}
                  </p>
                </div>

                {/* Bottom luxury tags */}
                <div className="absolute inset-x-6 bottom-6 flex justify-between items-center z-10">
                  <span className="font-sans text-[9px] tracking-[0.2em] font-light bg-white/70 backdrop-blur-sm px-3 py-1 rounded-full border border-pink-100/50 text-[#B76E79] uppercase">
                    {item.tag}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-white/70 backdrop-blur-sm flex items-center justify-center border border-pink-100/50 shadow-inner group-hover:bg-[#B76E79] group-hover:text-white transition-colors duration-300">
                    <Maximize2 size={12} className="opacity-70 group-hover:opacity-100" />
                  </div>
                </div>
              </div>

              {/* Dior-style Overlay Shade */}
              <div className="absolute inset-0 bg-[#FFF9FB]/10 group-hover:bg-transparent pointer-events-none transition-colors duration-500" />

              {/* Invisible Click Trigger */}
              <div
                className="absolute inset-0"
                onClick={() => setActivePreview(item)}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Lightbox / Magazine Cover Zoom Preview */}
      <AnimatePresence>
        {activePreview && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActivePreview(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-900/40 backdrop-blur-lg"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-xl aspect-[3/4] max-h-[90vh] rounded-[40px] overflow-hidden shadow-2xl border border-white/30 bg-gradient-to-br"
            >
              {/* Full Zoomed Magazine Cover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${activePreview.gradient} p-8 flex flex-col justify-between`}>
                <div className="absolute inset-0 bg-[radial-gradient(transparent_50%,rgba(0,0,0,0.06))] mix-blend-overlay opacity-40 pointer-events-none" />
                
                {/* Header */}
                <div className="relative z-10 w-full flex flex-col items-center">
                  <span className="font-sans text-[10px] tracking-[0.3em] text-gray-500 uppercase mb-2">DIOR CAMPAIGN PRESETS</span>
                  <h2 className={`font-serif text-6xl md:text-7xl font-light tracking-[0.2em] uppercase leading-none opacity-80 ${activePreview.textColor}`}>
                    {activePreview.magazineName}
                  </h2>
                  <div className="flex justify-between w-full border-b border-gray-400/20 pb-3 mt-4 font-sans text-[10px] tracking-widest text-gray-600 uppercase">
                    <span>ISSUE 0{activePreview.id}</span>
                    <span>SPRING / SUMMER 2026</span>
                    <span>PAGE {activePreview.id * 12}</span>
                  </div>
                </div>

                {/* Center Visual Sketch Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-15 pointer-events-none">
                  <svg className="w-2/3 h-2/3" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="35" fill="none" stroke="currentColor" className={activePreview.textColor} strokeWidth="0.5" />
                    <line x1="15" y1="50" x2="85" y2="50" stroke="currentColor" className={activePreview.textColor} strokeWidth="0.2" />
                    <line x1="50" y1="15" x2="50" y2="85" stroke="currentColor" className={activePreview.textColor} strokeWidth="0.2" />
                  </svg>
                </div>

                {/* Bottom Text and details */}
                <div className="relative z-10 flex flex-col items-center text-center max-w-md mx-auto">
                  <span className="font-serif italic text-sm tracking-widest text-[#B76E79] mb-2">{activePreview.category}</span>
                  <h3 className={`font-serif text-3xl font-semibold tracking-wide uppercase leading-tight mb-4 ${activePreview.textColor}`}>
                    {activePreview.title}
                  </h3>
                  <div className="w-12 h-[1px] bg-gray-400/40 mb-4" />
                  <p className="font-sans text-xs tracking-wide text-gray-600 leading-relaxed font-light mb-6">
                    A representation of visual aesthetics that merge engineering logic and modeling grace. Ready for replacement with Shree&apos;s real photography assets.
                  </p>
                  
                  {/* Close button inside card */}
                  <button
                    onClick={() => setActivePreview(null)}
                    className="font-sans text-[10px] tracking-[0.25em] bg-white border border-pink-100 text-[#B76E79] uppercase px-6 py-3 rounded-full hover:bg-[#B76E79] hover:text-white transition-all duration-300"
                  >
                    Return to Gallery
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
