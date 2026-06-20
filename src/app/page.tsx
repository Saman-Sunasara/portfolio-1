"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Instagram,
  ArrowDown,
  Sparkles,
  Heart,
  ChevronRight,
  BookOpen,
  Send,
  Linkedin,
} from "lucide-react";
import LoadingScreen from "@/components/LoadingScreen";
import Butterfly from "@/components/Butterfly";
import PersonalityCard from "@/components/PersonalityCard";
import ModelingGallery from "@/components/ModelingGallery";
import HeartBurst from "@/components/HeartBurst";

// Interests grid datasets
const INTERESTS = [
  { name: "Photography", icon: "📸", color: "#F2E9FF", size: "col-span-1 row-span-1" },
  { name: "Fashion", icon: "👗", color: "#FFDDEB", size: "col-span-1 row-span-2" },
  { name: "Travel", icon: "✈️", color: "#FFCFE0", size: "col-span-2 row-span-1" },
  { name: "Beauty", icon: "💄", color: "#FFF9FB", size: "col-span-1 row-span-1" },
  { name: "Styling", icon: "🎀", color: "#F2E9FF", size: "col-span-1 row-span-1" },
  { name: "Content Creation", icon: "📱", color: "#FFCFE0", size: "col-span-2 row-span-1" },
  { name: "Technology", icon: "💡", color: "#FFDDEB", size: "col-span-1 row-span-2" },
  { name: "Personal Growth", icon: "🌸", color: "#FFF9FB", size: "col-span-1 row-span-1" },
];

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [burstActive, setBurstActive] = useState(false);
  const [activeInterest, setActiveInterest] = useState<string | null>(null);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    // Trigger successful animation state
    setFormSubmitted(true);
    setBurstActive(true);
    
    // Reset form after successful submission animation triggers
    setFormData({ name: "", email: "", message: "" });
  };

  const handleScrollTo = (id: string) => {
    const targetElement = document.querySelector(id);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <LoadingScreen onComplete={() => setLoading(false)} />

      <AnimatePresence>
        {!loading && (
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="w-full relative"
          >
            {/* Ambient glows behind page sections */}
            <div className="absolute top-[20%] left-[-10%] w-[50%] h-[600px] bg-[#FFDDEB] rounded-full blur-[150px] opacity-25 pointer-events-none -z-10 animate-pulse" />
            <div className="absolute top-[50%] right-[-15%] w-[45%] h-[700px] bg-[#F2E9FF] rounded-full blur-[180px] opacity-35 pointer-events-none -z-10" />
            <div className="absolute top-[80%] left-[-5%] w-[40%] h-[600px] bg-[#FFCFE0] rounded-full blur-[160px] opacity-20 pointer-events-none -z-10 animate-pulse" />

            {/* 1. HERO SECTION */}
            <section
              id="home"
              className="relative min-h-screen flex flex-col items-center justify-center pt-24 px-6 md:px-12 overflow-hidden"
            >
              {/* Fluttering Butterflies in Hero */}
              <Butterfly delay={2} initialX={150} initialY={300} scale={0.9} />
              <Butterfly delay={6} initialX={900} initialY={150} scale={1.1} />
              <Butterfly delay={11} initialX={400} initialY={500} scale={0.8} />

              <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-16 items-center z-10 relative">
                {/* Text Content */}
                <div className="lg:col-span-7 flex flex-col items-start text-left">
                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                    className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-pink-200/50 bg-[#FFF9FB]/60 backdrop-blur-md mb-6"
                  >
                    <Sparkles size={14} className="text-[#B76E79]" />
                    <span className="font-sans text-[10px] tracking-[0.25em] text-[#B76E79] uppercase font-light">
                      Balancing Tech &amp; Couture
                    </span>
                  </motion.div>

                  <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
                    className="font-serif text-5xl sm:text-7xl lg:text-8xl tracking-wide text-gray-800 leading-[1.05] mb-6"
                  >
                    Hi, I&apos;m Shree <span className="text-[#FFCFE0]">🎀</span>
                  </motion.h1>

                  <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
                    className="font-serif text-gold-gradient text-xl sm:text-3xl font-light italic tracking-widest mb-6"
                  >
                    Engineer. Model. Dreamer. Creator.
                  </motion.h2>

                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
                    className="font-sans text-sm md:text-base font-light text-gray-500 max-w-xl leading-relaxed mb-10"
                  >
                    Balancing technology, creativity, and confidence while building a future filled with innovation, elegance, and endless possibilities. Based in Visakhapatnam.
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.6 }}
                    className="flex flex-wrap gap-4 items-center"
                  >
                    <button
                      onClick={() => handleScrollTo("#about")}
                      className="font-sans text-xs tracking-widest uppercase px-7 py-4 rounded-full bg-gradient-to-r from-[#B76E79] to-[#FFCFE0] text-white hover:shadow-xl hover:shadow-pink-200/50 hover:scale-105 transition-all duration-300 flex items-center gap-2 group"
                    >
                      Explore My Journey
                      <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
                    </button>
                    <button
                      onClick={() => handleScrollTo("#modeling")}
                      className="font-sans text-xs tracking-widest uppercase px-7 py-4 rounded-full border border-pink-200/50 bg-[#FFF9FB]/50 hover:bg-white text-gray-700 hover:border-[#B76E79]/50 hover:scale-105 transition-all duration-300"
                    >
                      View Portfolio
                    </button>
                  </motion.div>
                </div>

                {/* Portrait Placeholder Container */}
                <div className="lg:col-span-5 flex justify-center items-center relative">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
                    animate={{ opacity: 1, scale: 1, rotate: 2 }}
                    transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
                    className="relative w-full max-w-[340px] aspect-[3/4] rounded-[40px] border border-[#FFCFE0]/40 p-4 bg-[#FFF9FB]/40 backdrop-blur-md shadow-xl shadow-pink-100/10 animate-float"
                  >
                    {/* Portrait Inner Box */}
                    <div className="relative w-full h-full rounded-[28px] overflow-hidden bg-gradient-to-tr from-[#FFDDEB] via-[#FFF9FB] to-[#F2E9FF] flex flex-col justify-between p-6">
                      {/* Fashion sketch watermark */}
                      <svg
                        className="absolute inset-0 w-full h-full opacity-10 pointer-events-none"
                        viewBox="0 0 100 100"
                        preserveAspectRatio="none"
                      >
                        <path
                          d="M 50 15 Q 65 35 70 55 T 50 90 T 30 55 Z"
                          fill="none"
                          stroke="#B76E79"
                          strokeWidth="0.5"
                        />
                      </svg>

                      {/* Header tags in mockup */}
                      <div className="flex justify-between font-sans text-[8px] tracking-[0.25em] text-[#B76E79] uppercase">
                        <span>PORTRAIT PRESET</span>
                        <span>01 / 06</span>
                      </div>

                      {/* Floating Ribbons visual decoration */}
                      <div className="absolute inset-x-8 top-16 bottom-24 flex items-center justify-center">
                        <span className="font-serif italic text-7xl font-extralight text-[#FFCFE0]/50 tracking-widest select-none">
                          S
                        </span>
                      </div>

                      {/* Bio labels at bottom */}
                      <div className="relative z-10 text-center">
                        <span className="font-serif italic text-xs text-[#B76E79]">
                          Visakhapatnam, IN
                        </span>
                        <h3 className="font-serif text-lg text-gray-700 tracking-wider font-semibold mt-1">
                          SHREE 🎀
                        </h3>
                        <div className="w-8 h-[1px] bg-[#B76E79]/30 mx-auto my-1.5" />
                        <span className="font-sans text-[9px] tracking-widest uppercase text-gray-400">
                          Electronics &amp; Comm. Student
                        </span>
                      </div>
                    </div>

                    {/* Butterfly landing decoration */}
                    <div className="absolute -top-3 -right-3 text-2xl animate-pulse">🌸</div>
                  </motion.div>
                </div>
              </div>

              {/* Scroll Down Indicator */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, delay: 1 }}
                onClick={() => handleScrollTo("#about")}
                className="absolute bottom-8 cursor-pointer flex flex-col items-center gap-1.5 z-10"
              >
                <span className="font-sans text-[9px] tracking-[0.3em] uppercase text-[#B76E79] font-light">
                  Scroll Down
                </span>
                <ArrowDown size={14} className="text-[#B76E79] animate-bounce" />
              </motion.div>
            </section>

            {/* 2. ABOUT ME SECTION */}
            <section
              id="about"
              className="py-24 px-6 md:px-12 max-w-6xl mx-auto w-full relative z-10"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                {/* Side Title info */}
                <div className="lg:col-span-5 flex flex-col items-start lg:sticky lg:top-32">
                  <span className="font-sans text-xs tracking-[0.3em] text-[#B76E79] uppercase mb-3">
                    Who I Am
                  </span>
                  <h2 className="font-serif text-4xl sm:text-5xl font-light tracking-wide text-gray-800 mb-6 leading-tight">
                    More Than Just A Pretty Face
                  </h2>
                  <div className="w-20 h-[1px] bg-gradient-to-r from-[#B76E79] to-[#FFCFE0] mb-8" />
                  <p className="font-sans text-sm font-light text-gray-500 leading-relaxed mb-6">
                    I&apos;m Shree, an Electronics &amp; Communication Engineering student from Visakhapatnam who believes dreams should never be limited to one path. Alongside my academic journey, I&apos;ve explored modeling, fashion, and creative expression.
                  </p>
                  <p className="font-sans text-sm font-light text-gray-500 leading-relaxed">
                    Every experience teaches me something new and helps me grow into the person I aspire to become, demonstrating that engineering rigor and modeling creativity can beautifully coexist.
                  </p>
                </div>

                {/* Floating Glass Bio Cards */}
                <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 lg:pt-0">
                  {/* Name Card */}
                  <motion.div
                    whileHover={{ y: -6 }}
                    className="p-6 rounded-[28px] border border-[#FFCFE0]/30 bg-[#FFF9FB]/30 backdrop-blur-md flex flex-col justify-between h-48 shadow-sm hover:border-[#B76E79]/40 transition-all duration-300"
                  >
                    <span className="font-sans text-[10px] tracking-widest text-[#B76E79] uppercase">IDENTITY</span>
                    <div>
                      <h3 className="font-serif text-2xl text-gray-800 font-medium">Shree</h3>
                      <p className="font-sans text-xs text-gray-400 mt-1">Full Identity Profile</p>
                    </div>
                  </motion.div>

                  {/* Height Card */}
                  <motion.div
                    whileHover={{ y: -6 }}
                    className="p-6 rounded-[28px] border border-[#FFCFE0]/30 bg-[#FFF9FB]/30 backdrop-blur-md flex flex-col justify-between h-48 shadow-sm hover:border-[#B76E79]/40 transition-all duration-300"
                  >
                    <span className="font-sans text-[10px] tracking-widest text-[#B76E79] uppercase">HEIGHT</span>
                    <div>
                      <h3 className="font-serif text-2xl text-gray-800 font-medium">5&apos;2&quot;</h3>
                      <p className="font-sans text-xs text-gray-400 mt-1">Fashion Stat Ratio</p>
                    </div>
                  </motion.div>

                  {/* Education Card */}
                  <motion.div
                    whileHover={{ y: -6 }}
                    className="p-6 rounded-[28px] border border-[#FFCFE0]/30 bg-[#FFF9FB]/30 backdrop-blur-md flex flex-col justify-between h-48 shadow-sm hover:border-[#B76E79]/40 transition-all duration-300 sm:col-span-2"
                  >
                    <span className="font-sans text-[10px] tracking-widest text-[#B76E79] uppercase">EDUCATION</span>
                    <div>
                      <h3 className="font-serif text-xl sm:text-2xl text-gray-800 font-medium flex items-center gap-2">
                        <BookOpen size={18} className="text-[#B76E79]" />
                        3rd Year ECE Student
                      </h3>
                      <p className="font-sans text-xs text-gray-400 mt-1.5">
                        Electronics &amp; Communication Engineering
                      </p>
                    </div>
                  </motion.div>

                  {/* Hometown Card */}
                  <motion.div
                    whileHover={{ y: -6 }}
                    className="p-6 rounded-[28px] border border-[#FFCFE0]/30 bg-[#FFF9FB]/30 backdrop-blur-md flex flex-col justify-between h-48 shadow-sm hover:border-[#B76E79]/40 transition-all duration-300"
                  >
                    <span className="font-sans text-[10px] tracking-widest text-[#B76E79] uppercase">HOMETOWN</span>
                    <div>
                      <h3 className="font-serif text-xl text-gray-800 font-medium flex items-center gap-1.5">
                        <MapPin size={16} className="text-[#B76E79]" />
                        Visakhapatnam, IN
                      </h3>
                      <p className="font-sans text-xs text-gray-400 mt-1">City of Destiny</p>
                    </div>
                  </motion.div>

                  {/* Languages Card */}
                  <motion.div
                    whileHover={{ y: -6 }}
                    className="p-6 rounded-[28px] border border-[#FFCFE0]/30 bg-[#FFF9FB]/30 backdrop-blur-md flex flex-col justify-between h-48 shadow-sm hover:border-[#B76E79]/40 transition-all duration-300"
                  >
                    <span className="font-sans text-[10px] tracking-widest text-[#B76E79] uppercase">LANGUAGES</span>
                    <div>
                      <h3 className="font-serif text-lg text-gray-800 font-medium leading-normal">
                        English, Telugu, Hindi
                      </h3>
                      <p className="font-sans text-xs text-gray-400 mt-1">Trilingual Fluency</p>
                    </div>
                  </motion.div>
                </div>
              </div>
            </section>

            {/* 3. PERSONALITY SHOWCASE */}
            <section
              id="personality"
              className="py-24 px-6 md:px-12 max-w-6xl mx-auto w-full relative z-10"
            >
              <div className="text-center max-w-xl mx-auto mb-16">
                <span className="font-sans text-xs tracking-[0.3em] text-[#B76E79] uppercase mb-3 block">
                  My Core Philosophy
                </span>
                <h2 className="font-serif text-4xl sm:text-5xl font-light tracking-wide text-gray-800">
                  Personality Showcase
                </h2>
                <div className="w-16 h-[1px] bg-gradient-to-r from-[#B76E79] to-[#FFCFE0] mx-auto mt-5" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <PersonalityCard
                  icon="🌸"
                  title="Confidence"
                  description="Owning the stage and the screen, believing that true presence stems from internal comfort and self-worth."
                  color="#FFDDEB"
                />
                <PersonalityCard
                  icon="🎀"
                  title="Creativity"
                  description="Exploring visual styling, aesthetic details, and layouts, using fashion as a canvas for storytelling."
                  color="#FFCFE0"
                />
                <PersonalityCard
                  icon="💡"
                  title="Innovation"
                  description="Using my electronics and communication background to think critically and architect novel technological projects."
                  color="#F2E9FF"
                />
                <PersonalityCard
                  icon="💖"
                  title="Kindness"
                  description="Connecting with everyone I collaborate with, fostering warm environments that value collective energy."
                  color="#FFF9FB"
                />
                <PersonalityCard
                  icon="📸"
                  title="Expression"
                  description="Utilizing camera perspectives, physical poses, and editorial styling to bring high-fashion narratives to life."
                  color="#FFDDEB"
                />
                <PersonalityCard
                  icon="🌷"
                  title="Growth"
                  description="Constantly iterating and adapting, understanding that engineering rigor and fashion are both journeys of evolution."
                  color="#F2E9FF"
                />
              </div>
            </section>

            {/* 4. MODELING JOURNEY */}
            <section
              id="modeling"
              className="py-24 px-6 md:px-12 max-w-6xl mx-auto w-full relative z-10"
            >
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
                <div className="mb-6 md:mb-0">
                  <span className="font-sans text-xs tracking-[0.3em] text-[#B76E79] uppercase mb-3 block">
                    Vogue × Dior Aesthetics
                  </span>
                  <h2 className="font-serif text-4xl sm:text-5xl font-light tracking-wide text-gray-800">
                    Modeling Journey
                  </h2>
                </div>
                <div className="h-[1px] flex-grow bg-pink-100/80 mx-8 hidden md:block mb-4" />
                <p className="font-sans text-xs tracking-widest text-[#B76E79] uppercase font-light mb-1 select-none">
                  [ EDITORIAL PORTFOLIO ]
                </p>
              </div>

              {/* Modeling Vogue Grid component */}
              <ModelingGallery />
            </section>

            {/* 5. EDUCATION TIMELINE & SKILLS */}
            <section
              id="skills"
              className="py-24 px-6 md:px-12 max-w-6xl mx-auto w-full relative z-10"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
                {/* Academic Timeline side */}
                <div className="lg:col-span-6">
                  <span className="font-sans text-xs tracking-[0.3em] text-[#B76E79] uppercase mb-3 block">
                    The Scholar
                  </span>
                  <h2 className="font-serif text-4xl font-light tracking-wide text-gray-800 mb-12">
                    Academic Timeline
                  </h2>

                  <div className="relative border-l border-[#FFCFE0]/60 pl-8 ml-4 space-y-12">
                    {/* Point 1 */}
                    <div className="relative">
                      {/* Timeline Dot */}
                      <span className="absolute -left-[41px] top-1.5 w-6 h-6 rounded-full border-4 border-[#FFF9FB] bg-[#B76E79] shadow-sm flex items-center justify-center text-[8px] text-white">
                        ✦
                      </span>
                      <span className="font-sans text-[10px] tracking-widest font-semibold text-[#B76E79] uppercase block mb-1">
                        2023 — Present
                      </span>
                      <h3 className="font-serif text-2xl text-gray-800 font-medium">
                        Electronics &amp; Communication Engineering
                      </h3>
                      <p className="font-sans text-xs text-gray-400 mt-1">
                        3rd Year Engineering Student
                      </p>
                      <p className="font-sans text-sm font-light text-gray-500 leading-relaxed mt-3">
                        Deepening knowledge in analog devices, signals, signal processing, embedded systems, and communication theories. Striving to connect hardware architecture with visual layouts.
                      </p>
                    </div>

                    {/* Point 2 */}
                    <div className="relative">
                      {/* Timeline Dot */}
                      <span className="absolute -left-[41px] top-1.5 w-6 h-6 rounded-full border-4 border-[#FFF9FB] bg-[#FFCFE0]/80 shadow-sm" />
                      <span className="font-sans text-[10px] tracking-widest font-semibold text-gray-400 uppercase block mb-1">
                        2021 — 2023
                      </span>
                      <h3 className="font-serif text-xl text-gray-700 font-medium">
                        Pre-University / Intermediate Academics
                      </h3>
                      <p className="font-sans text-xs text-gray-400 mt-1">
                        Focus on Mathematics, Physics &amp; Chemistry (MPC)
                      </p>
                      <p className="font-sans text-sm font-light text-gray-500 leading-relaxed mt-2.5">
                        Built fundamental mathematical and problem-solving analytical frameworks that form the bedrock of engineering studies.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Technical / Creative Skills list side */}
                <div className="lg:col-span-6 bg-[#FFF9FB]/30 backdrop-blur-md rounded-[36px] border border-[#FFCFE0]/30 p-8 sm:p-10">
                  <span className="font-sans text-xs tracking-[0.3em] text-[#B76E79] uppercase mb-3 block">
                    Core Competencies
                  </span>
                  <h2 className="font-serif text-3xl font-light tracking-wide text-gray-800 mb-8">
                    Skills &amp; Strengths
                  </h2>
                  <div className="w-16 h-[1px] bg-[#B76E79]/30 mb-8" />

                  <div className="flex flex-wrap gap-3">
                    {[
                      "Communication",
                      "Teamwork",
                      "Leadership",
                      "Creativity",
                      "Problem Solving",
                      "Presentation",
                      "Public Speaking",
                      "Styling Coordination",
                      "Project Management",
                      "Concept Design",
                      "Digital Modeling",
                    ].map((skill, index) => (
                      <span
                        key={skill}
                        className={`font-sans text-xs tracking-wider px-4.5 py-2.5 rounded-full border transition-all duration-300 ${
                          index < 4
                            ? "bg-gradient-to-r from-[#B76E79]/10 to-[#FFCFE0]/20 text-[#B76E79] border-[#B76E79]/30"
                            : "bg-[#FFF9FB] text-gray-600 border-pink-100/60"
                        } hover:scale-105 cursor-default hover:border-[#B76E79]/40`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Aesthetic card insert */}
                  <div className="mt-10 p-5 rounded-2xl border border-pink-100 bg-[#FFDDEB]/20 flex items-start gap-4">
                    <span className="text-2xl mt-0.5">🎀</span>
                    <div>
                      <h4 className="font-serif text-base text-gray-800 font-semibold mb-1">
                        Synthesis of Paths
                      </h4>
                      <p className="font-sans text-xs text-gray-500 leading-normal font-light">
                        Engineering disciplines teach me systemic thinking and structural logic, while modeling gives me absolute freedom of visual expression and presence.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* 6. INTERESTS SECTION */}
            <section
              id="interests"
              className="py-24 px-6 md:px-12 max-w-6xl mx-auto w-full relative z-10"
            >
              <div className="text-center max-w-xl mx-auto mb-16">
                <span className="font-sans text-xs tracking-[0.3em] text-[#B76E79] uppercase mb-3 block">
                  Pinterest-Style Inspiration
                </span>
                <h2 className="font-serif text-4xl sm:text-5xl font-light tracking-wide text-gray-800">
                  Interests &amp; Inspiration
                </h2>
                <div className="w-16 h-[1px] bg-gradient-to-r from-[#B76E79] to-[#FFCFE0] mx-auto mt-5" />
              </div>

              {/* Pinterest Mosaic Grid */}
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[140px]">
                {INTERESTS.map((interest) => (
                  <motion.div
                    key={interest.name}
                    className={`relative rounded-3xl p-6 flex flex-col justify-between border border-[#FFCFE0]/20 bg-[#FFF9FB]/30 backdrop-blur-md cursor-pointer overflow-hidden shadow-sm ${interest.size}`}
                    onClick={() =>
                      setActiveInterest(
                        activeInterest === interest.name ? null : interest.name
                      )
                    }
                    whileHover={{ scale: 1.03 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    {/* Gradient background light color */}
                    <div
                      className="absolute inset-0 opacity-10 -z-10"
                      style={{ backgroundColor: interest.color }}
                    />

                    {/* Expand glow overlay */}
                    <AnimatePresence>
                      {activeInterest === interest.name && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="absolute inset-0 bg-white/90 backdrop-blur-sm p-5 flex flex-col justify-between z-10"
                        >
                          <span className="text-2xl">{interest.icon}</span>
                          <div>
                            <h4 className="font-serif text-base text-gray-800 font-semibold mb-1">
                              {interest.name}
                            </h4>
                            <p className="font-sans text-[10px] text-gray-500 font-light leading-snug">
                              Shree&apos;s personal passion. Essential facet of daily growth and visual inspiration.
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Normal Card Layout */}
                    <span className="text-3xl">{interest.icon}</span>
                    <div className="flex justify-between items-end">
                      <h3 className="font-serif text-base sm:text-lg text-gray-700 tracking-wide font-medium">
                        {interest.name}
                      </h3>
                      <span className="text-[10px] text-[#B76E79] opacity-40 font-serif">✦</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* 7. INSTAGRAM EXPERIENCE */}
            <section
              id="lens"
              className="py-24 px-6 md:px-12 max-w-6xl mx-auto w-full relative z-10"
            >
              <div className="text-center max-w-xl mx-auto mb-16">
                <span className="font-sans text-xs tracking-[0.3em] text-[#B76E79] uppercase mb-3 block">
                  Life Through My Lens 📸
                </span>
                <h2 className="font-serif text-4xl sm:text-5xl font-light tracking-wide text-gray-800">
                  Instagram Experience
                </h2>
                <div className="w-16 h-[1px] bg-gradient-to-r from-[#B76E79] to-[#FFCFE0] mx-auto mt-5" />
              </div>

              {/* Instagram Card & Feed Preview */}
              <div className="bg-[#FFF9FB]/30 backdrop-blur-md rounded-[40px] border border-[#FFCFE0]/30 p-8 sm:p-10 shadow-lg shadow-pink-100/5 max-w-4xl mx-auto">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 pb-8 border-b border-pink-100/50 mb-10">
                  {/* Profile Header */}
                  <div className="flex items-center gap-6">
                    {/* Avatar Ring */}
                    <div className="w-18 h-18 rounded-full bg-gradient-to-tr from-[#D4AF37] via-[#B76E79] to-[#FFCFE0] p-[2.5px]">
                      <div className="w-full h-full rounded-full bg-white flex items-center justify-center font-serif text-2xl font-light text-[#B76E79]">
                        S
                      </div>
                    </div>
                    <div>
                      <h3 className="font-serif text-xl sm:text-2xl font-semibold text-gray-800 flex items-center gap-2">
                        shhrree94
                        <span className="text-[10px] bg-pink-100/60 text-[#B76E79] px-2 py-0.5 rounded-full font-sans tracking-widest font-normal uppercase">
                          Model
                        </span>
                      </h3>
                      <p className="font-sans text-xs text-gray-400 mt-1">Shree 🎀</p>
                    </div>
                  </div>

                  {/* Profile Action */}
                  <a
                    href="https://www.instagram.com/shhrree94/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 font-sans text-xs tracking-widest uppercase px-6 py-3.5 rounded-full bg-gradient-to-r from-[#B76E79] to-[#FFCFE0] text-white hover:shadow-lg hover:shadow-pink-200/50 hover:scale-105 transition-all duration-300"
                  >
                    <Instagram size={14} />
                    Follow @shhrree94
                  </a>
                </div>

                {/* Simulated Post Grid (6 items) */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {[
                    { tag: "Fashion", gradient: "from-[#F5E6E8] to-[#D4A5A9]" },
                    { tag: "Visakha Shore", gradient: "from-[#FFFDF9] to-[#DDC9A3]" },
                    { tag: "ECE Lab", gradient: "from-[#E3D9FC] to-[#BFACF0]" },
                    { tag: "Style Draft", gradient: "from-[#FFF0F5] to-[#E2A7B5]" },
                    { tag: "Editorial", gradient: "from-[#F9F9FB] to-[#D5D5DD]" },
                    { tag: "Confidence", gradient: "from-[#FFDDEB] to-[#FFCFE0]" },
                  ].map((post, idx) => (
                    <a
                      key={idx}
                      href="https://www.instagram.com/shhrree94/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative aspect-square rounded-[24px] overflow-hidden border border-pink-100/40 bg-gradient-to-br bg-white"
                    >
                      {/* Post Mockup background */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${post.gradient} transition-transform duration-700 group-hover:scale-105`} />
                      
                      {/* Grid cover visual lines */}
                      <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="0.5" />
                      </svg>

                      {/* Instagram overlay on hover */}
                      <div className="absolute inset-0 bg-gray-900/30 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-white p-4">
                        <Instagram size={20} className="mb-2" />
                        <span className="font-serif italic text-xs tracking-wider">
                          View Post
                        </span>
                        <span className="font-sans text-[8px] tracking-[0.25em] uppercase text-pink-200 mt-1.5">
                          #{post.tag}
                        </span>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </section>

            {/* 8. CONTACT SECTION */}
            <section
              id="contact"
              className="py-24 px-6 md:px-12 max-w-6xl mx-auto w-full relative z-10"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start relative">
                {/* Heartburst animation success target */}
                <HeartBurst active={burstActive} onComplete={() => setBurstActive(false)} />

                {/* Contact Coordinates */}
                <div className="lg:col-span-5 flex flex-col items-start lg:sticky lg:top-32">
                  <span className="font-sans text-xs tracking-[0.3em] text-[#B76E79] uppercase mb-3">
                    Start a Conversation
                  </span>
                  <h2 className="font-serif text-4xl sm:text-5xl font-light tracking-wide text-gray-800 mb-8">
                    Contact Shree
                  </h2>
                  <div className="w-20 h-[1px] bg-gradient-to-r from-[#B76E79] to-[#FFCFE0] mb-12" />

                  {/* Info Cards */}
                  <div className="w-full space-y-6">
                    {/* Email Card */}
                    <div className="flex items-center gap-5 p-4 rounded-2xl border border-pink-100/50 bg-[#FFF9FB]/30">
                      <div className="w-11 h-11 rounded-xl bg-[#B76E79]/10 flex items-center justify-center text-[#B76E79]">
                        <Mail size={18} />
                      </div>
                      <div>
                        <span className="font-sans text-[9px] tracking-widest uppercase text-gray-400">Email</span>
                        <a
                          href="mailto:shhrree4na@gmail.com"
                          className="font-serif text-sm sm:text-base text-gray-700 hover:text-[#B76E79] transition-colors block mt-0.5"
                        >
                          shhrree4na@gmail.com
                        </a>
                      </div>
                    </div>

                    {/* Phone Card */}
                    <div className="flex items-center gap-5 p-4 rounded-2xl border border-pink-100/50 bg-[#FFF9FB]/30">
                      <div className="w-11 h-11 rounded-xl bg-[#B76E79]/10 flex items-center justify-center text-[#B76E79]">
                        <Phone size={18} />
                      </div>
                      <div>
                        <span className="font-sans text-[9px] tracking-widest uppercase text-gray-400">Phone</span>
                        <a
                          href="tel:+918984198333"
                          className="font-serif text-sm sm:text-base text-gray-700 hover:text-[#B76E79] transition-colors block mt-0.5"
                        >
                          +91 8984198333
                        </a>
                      </div>
                    </div>

                    {/* Location Card */}
                    <div className="flex items-center gap-5 p-4 rounded-2xl border border-pink-100/50 bg-[#FFF9FB]/30">
                      <div className="w-11 h-11 rounded-xl bg-[#B76E79]/10 flex items-center justify-center text-[#B76E79]">
                        <MapPin size={18} />
                      </div>
                      <div>
                        <span className="font-sans text-[9px] tracking-widest uppercase text-gray-400">Location</span>
                        <span className="font-serif text-sm sm:text-base text-gray-700 block mt-0.5">
                          Visakhapatnam, India
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Contact Form card container */}
                <div className="lg:col-span-7 bg-[#FFF9FB]/30 backdrop-blur-md rounded-[40px] border border-[#FFCFE0]/30 p-8 sm:p-10 shadow-lg shadow-pink-100/5 relative overflow-hidden">
                  <AnimatePresence mode="wait">
                    {!formSubmitted ? (
                      <motion.form
                        key="contact-form"
                        initial={{ opacity: 1 }}
                        exit={{ opacity: 0, y: -20 }}
                        onSubmit={handleFormSubmit}
                        className="space-y-6"
                      >
                        {/* Name input */}
                        <div>
                          <label className="font-sans text-[10px] tracking-widest text-[#B76E79] uppercase block mb-2 font-medium">
                            Your Name
                          </label>
                          <input
                            type="text"
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleInputChange}
                            placeholder="Introduce yourself..."
                            className="w-full px-5 py-4 rounded-2xl border border-pink-100 bg-[#FFF9FB]/60 text-gray-800 placeholder-gray-400 text-sm focus:outline-none focus:border-[#B76E79] focus:ring-1 focus:ring-[#B76E79] transition-all duration-300"
                          />
                        </div>

                        {/* Email input */}
                        <div>
                          <label className="font-sans text-[10px] tracking-widest text-[#B76E79] uppercase block mb-2 font-medium">
                            Your Email
                          </label>
                          <input
                            type="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="hello@example.com"
                            className="w-full px-5 py-4 rounded-2xl border border-pink-100 bg-[#FFF9FB]/60 text-gray-800 placeholder-gray-400 text-sm focus:outline-none focus:border-[#B76E79] focus:ring-1 focus:ring-[#B76E79] transition-all duration-300"
                          />
                        </div>

                        {/* Message box */}
                        <div>
                          <label className="font-sans text-[10px] tracking-widest text-[#B76E79] uppercase block mb-2 font-medium">
                            Your Message
                          </label>
                          <textarea
                            name="message"
                            required
                            rows={5}
                            value={formData.message}
                            onChange={handleInputChange}
                            placeholder="Share your ideas, projects, or collaborations..."
                            className="w-full px-5 py-4 rounded-2xl border border-pink-100 bg-[#FFF9FB]/60 text-gray-800 placeholder-gray-400 text-sm focus:outline-none focus:border-[#B76E79] focus:ring-1 focus:ring-[#B76E79] transition-all duration-300 resize-none"
                          />
                        </div>

                        {/* Submit Button */}
                        <button
                          type="submit"
                          className="w-full font-sans text-xs tracking-widest uppercase py-4.5 rounded-2xl bg-gradient-to-r from-[#B76E79] to-[#FFCFE0] text-white hover:shadow-xl hover:shadow-pink-200/50 hover:scale-[1.01] transition-all duration-300 flex items-center justify-center gap-2 group"
                        >
                          <Send size={13} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                          💌 Send Love
                        </button>
                      </motion.form>
                    ) : (
                      <motion.div
                        key="success-message"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-center py-16 flex flex-col items-center justify-center"
                      >
                        {/* Success Icon */}
                        <div className="w-16 h-16 rounded-full bg-[#FFDDEB] flex items-center justify-center text-pink-500 mb-6 animate-bounce">
                          <Heart fill="#FFCFE0" stroke="#B76E79" size={24} />
                        </div>
                        <h3 className="font-serif text-3xl font-light text-gray-800 mb-2">
                          Message Sent!
                        </h3>
                        <p className="font-sans text-xs text-gray-500 tracking-wider font-light max-w-xs mb-8">
                          Thank you so much. Shree will get back to you with love &amp; details shortly.
                        </p>
                        <button
                          onClick={() => setFormSubmitted(false)}
                          className="font-sans text-[10px] tracking-widest bg-transparent border border-pink-200/80 text-[#B76E79] uppercase px-5 py-3 rounded-full hover:bg-pink-50/50 transition-all duration-300"
                        >
                          Send Another Message
                        </button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </section>

            {/* 9. FOOTER */}
            <footer className="relative border-t border-pink-100/50 bg-gradient-to-b from-transparent to-[#FFDDEB]/15 pt-16 pb-8 px-6 md:px-12 z-10 overflow-hidden">
              {/* Star sparkles background decorations */}
              <div className="absolute inset-0 opacity-10 pointer-events-none -z-10">
                <span className="absolute left-[15%] top-[40%] text-xs">✦</span>
                <span className="absolute right-[25%] top-[20%] text-sm">✦</span>
                <span className="absolute left-[70%] top-[70%] text-xs">✦</span>
              </div>

              <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 pb-10 border-b border-pink-50">
                <div>
                  <h3 className="font-serif text-2xl font-semibold text-gray-800">Shree</h3>
                  <p className="font-sans text-[10px] tracking-widest text-[#B76E79] uppercase mt-2 font-light">
                    Made with 🎀, Dreams &amp; Confidence
                  </p>
                </div>

                {/* Footer Links */}
                <div className="flex flex-wrap items-center justify-center gap-6">
                  <a
                    href="https://www.instagram.com/shhrree94/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-sans text-[10px] tracking-widest text-gray-500 hover:text-[#B76E79] uppercase transition-colors"
                  >
                    Instagram
                  </a>
                  <a
                    href="mailto:shhrree4na@gmail.com"
                    className="font-sans text-[10px] tracking-widest text-gray-500 hover:text-[#B76E79] uppercase transition-colors"
                  >
                    Email
                  </a>
                  <a
                    href="#contact"
                    onClick={(e) => {
                      e.preventDefault();
                      handleScrollTo("#contact");
                    }}
                    className="font-sans text-[10px] tracking-widest text-gray-500 hover:text-[#B76E79] uppercase transition-colors"
                  >
                    Contact
                  </a>
                  <span className="font-sans text-[10px] tracking-widest text-gray-300 uppercase select-none">
                    |
                  </span>
                  <span className="font-sans text-[10px] tracking-widest text-gray-400 uppercase flex items-center gap-1">
                    <Linkedin size={10} /> LinkedIn
                  </span>
                </div>
              </div>

              <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 text-[10px] font-sans text-gray-400 font-light tracking-wide">
                <span>&copy; {new Date().getFullYear()} Shree. All rights reserved.</span>
                <span>Designed with elegance in Visakhapatnam</span>
              </div>
            </footer>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
