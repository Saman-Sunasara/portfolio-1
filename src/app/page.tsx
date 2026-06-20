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
  Clock,
  Cpu,
  Tv,
} from "lucide-react";
import LoadingScreen from "@/components/LoadingScreen";
import Butterfly from "@/components/Butterfly";
import PersonalityCard from "@/components/PersonalityCard";
import HeartBurst from "@/components/HeartBurst";

// Day in the Life timeline items
const DIARY_EVENTS = [
  {
    time: "09:00 AM",
    title: "Logic Gates & Signals",
    category: "Engineering",
    icon: <Cpu size={16} />,
    description:
      "Attending Electronics & Communication lectures. Analyzing signals, microcontrollers, and debugging circuits. Shree loves solving complex logic systems.",
    accent: "#F2E9FF",
  },
  {
    time: "02:00 PM",
    title: "Editorial Moodboards",
    category: "Couture",
    icon: <Sparkles size={16} />,
    description:
      "Drafting clothing coordinates, browsing Pinterest for styling inspiration, and analyzing Dior runway aesthetics. Translating structured logic into fashion.",
    accent: "#FFDDEB",
  },
  {
    time: "05:30 PM",
    title: "Coastal Lens & Sunsets",
    category: "Lifestyle",
    icon: <Clock size={16} />,
    description:
      "Walking along the coast of Visakhapatnam. Taking aesthetic photos of the shore, finding peace, and brainstorming future creative portfolio themes.",
    accent: "#FFF9FB",
  },
];

// Interests dataset
const INTERESTS = [
  { name: "Photography", icon: "📸", color: "#F2E9FF" },
  { name: "Fashion", icon: "👗", color: "#FFDDEB" },
  { name: "Travel", icon: "✈️", color: "#FFCFE0" },
  { name: "Beauty", icon: "💄", color: "#FFF9FB" },
  { name: "Styling", icon: "🎀", color: "#F2E9FF" },
  { name: "Content Creation", icon: "📱", color: "#FFCFE0" },
  { name: "Technology", icon: "💡", color: "#FFDDEB" },
  { name: "Personal Growth", icon: "🌸", color: "#FFF9FB" },
];

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [burstActive, setBurstActive] = useState(false);
  const [activeInterest, setActiveInterest] = useState<string | null>(null);
  const [activeDiary, setActiveDiary] = useState<number | null>(null);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setFormSubmitted(true);
    setBurstActive(true);
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
            {/* Soft background glows */}
            <div className="absolute top-[15%] left-[-10%] w-[50%] h-[600px] bg-[#FFDDEB] rounded-full blur-[150px] opacity-25 pointer-events-none -z-10 animate-pulse" />
            <div className="absolute top-[45%] right-[-15%] w-[45%] h-[700px] bg-[#F2E9FF] rounded-full blur-[180px] opacity-30 pointer-events-none -z-10" />
            <div className="absolute top-[75%] left-[-5%] w-[40%] h-[600px] bg-[#FFCFE0] rounded-full blur-[160px] opacity-20 pointer-events-none -z-10 animate-pulse" />

            {/* 1. HERO SECTION */}
            <section
              id="home"
              className="relative min-h-screen flex flex-col items-center justify-center pt-24 px-6 md:px-12 overflow-hidden"
            >
              {/* Floating butterflies */}
              <Butterfly delay={2} initialX={120} initialY={280} scale={0.95} />
              <Butterfly delay={7} initialX={880} initialY={140} scale={1.05} />
              <Butterfly delay={12} initialX={350} initialY={480} scale={0.8} />

              <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-16 items-center z-10 relative">
                {/* Text Block */}
                <div className="lg:col-span-7 flex flex-col items-start text-left">
                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                    className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-pink-200/50 bg-[#FFF9FB]/60 backdrop-blur-md mb-6"
                  >
                    <Sparkles size={13} className="text-[#B76E79]" />
                    <span className="font-sans text-[10px] tracking-[0.25em] text-[#B76E79] uppercase font-light">
                      Balancing Logic &amp; Grace 🎀
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
                    An Electronics &amp; Communication Engineering student who designs systems, codes layouts, and explores fashion styling. Striving to connect engineering logic with Dior-inspired creative expression.
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
                      View Profile
                    </button>
                  </motion.div>
                </div>

                {/* Floating Mock frame (No real photos needed, pure visual branding) */}
                <div className="lg:col-span-5 flex justify-center items-center relative">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
                    animate={{ opacity: 1, scale: 1, rotate: 2 }}
                    transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
                    className="relative w-full max-w-[340px] aspect-[3/4] rounded-[40px] border border-[#FFCFE0]/40 p-4 bg-[#FFF9FB]/40 backdrop-blur-md shadow-xl shadow-pink-100/10 animate-float"
                  >
                    <div className="relative w-full h-full rounded-[28px] overflow-hidden bg-gradient-to-tr from-[#FFDDEB] via-[#FFF9FB] to-[#F2E9FF] flex flex-col justify-between p-6">
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

                      <div className="flex justify-between font-sans text-[8px] tracking-[0.25em] text-[#B76E79] uppercase">
                        <span>PORTRAIT OUTLINE</span>
                        <span>01 / 01</span>
                      </div>

                      <div className="absolute inset-x-8 top-16 bottom-24 flex items-center justify-center">
                        <span className="font-serif italic text-8xl font-extralight text-[#FFCFE0]/60 tracking-widest select-none">
                          S
                        </span>
                      </div>

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
                  </motion.div>
                </div>
              </div>

              {/* Scroll Down */}
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

            {/* 2. ABOUT ME & DETAILED BIOGRAPHY */}
            <section
              id="about"
              className="py-24 px-6 md:px-12 max-w-6xl mx-auto w-full relative z-10"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                <div className="lg:col-span-5 flex flex-col items-start lg:sticky lg:top-32">
                  <span className="font-sans text-xs tracking-[0.3em] text-[#B76E79] uppercase mb-3">
                    Who Is Shree?
                  </span>
                  <h2 className="font-serif text-4xl sm:text-5xl font-light tracking-wide text-gray-800 mb-6 leading-tight">
                    More Than Just A Pretty Face
                  </h2>
                  <div className="w-20 h-[1px] bg-gradient-to-r from-[#B76E79] to-[#FFCFE0] mb-8" />
                  <p className="font-sans text-sm font-light text-gray-500 leading-relaxed mb-6">
                    I&apos;m Shree, a 3rd Year Electronics &amp; Communication Engineering student from the coastal city of Visakhapatnam. I believe dreams shouldn&apos;t be restricted to a single trajectory. While engineering challenges my analytical mind, styling and modeling satisfy my visual creativity.
                  </p>
                  <p className="font-sans text-sm font-light text-gray-500 leading-relaxed">
                    Rather than separating these aspects, I treat them as complementary paths. Circuits have layout structures, code has syntax alignment, and fashion has visual geometry. In everything I create, I look for balance, details, and confidence.
                  </p>
                </div>

                <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Glass Stats Cards */}
                  <motion.div
                    whileHover={{ y: -5 }}
                    className="p-6 rounded-[28px] border border-[#FFCFE0]/30 bg-[#FFF9FB]/30 backdrop-blur-md flex flex-col justify-between h-44 shadow-sm hover:border-[#B76E79]/40 transition-all duration-300"
                  >
                    <span className="font-sans text-[10px] tracking-widest text-[#B76E79] uppercase">IDENTITY</span>
                    <div>
                      <h3 className="font-serif text-2xl text-gray-800 font-medium">Shree</h3>
                      <p className="font-sans text-xs text-gray-400 mt-1">Engineer &amp; Creator</p>
                    </div>
                  </motion.div>

                  <motion.div
                    whileHover={{ y: -5 }}
                    className="p-6 rounded-[28px] border border-[#FFCFE0]/30 bg-[#FFF9FB]/30 backdrop-blur-md flex flex-col justify-between h-44 shadow-sm hover:border-[#B76E79]/40 transition-all duration-300"
                  >
                    <span className="font-sans text-[10px] tracking-widest text-[#B76E79] uppercase">HEIGHT</span>
                    <div>
                      <h3 className="font-serif text-2xl text-gray-800 font-medium">5&apos;2&quot;</h3>
                      <p className="font-sans text-xs text-gray-400 mt-1">Modeling Ratio</p>
                    </div>
                  </motion.div>

                  <motion.div
                    whileHover={{ y: -5 }}
                    className="p-6 rounded-[28px] border border-[#FFCFE0]/30 bg-[#FFF9FB]/30 backdrop-blur-md flex flex-col justify-between h-44 shadow-sm hover:border-[#B76E79]/40 transition-all duration-300 sm:col-span-2"
                  >
                    <span className="font-sans text-[10px] tracking-widest text-[#B76E79] uppercase">STUDIES</span>
                    <div>
                      <h3 className="font-serif text-xl sm:text-2xl text-gray-800 font-medium flex items-center gap-2">
                        <BookOpen size={18} className="text-[#B76E79]" />
                        3rd Year ECE Student
                      </h3>
                      <p className="font-sans text-xs text-gray-400 mt-1">
                        Electronics &amp; Communication Engineering
                      </p>
                    </div>
                  </motion.div>

                  <motion.div
                    whileHover={{ y: -5 }}
                    className="p-6 rounded-[28px] border border-[#FFCFE0]/30 bg-[#FFF9FB]/30 backdrop-blur-md flex flex-col justify-between h-44 shadow-sm hover:border-[#B76E79]/40 transition-all duration-300"
                  >
                    <span className="font-sans text-[10px] tracking-widest text-[#B76E79] uppercase">HOMETOWN</span>
                    <div>
                      <h3 className="font-serif text-lg text-gray-800 font-medium flex items-center gap-1.5">
                        <MapPin size={15} className="text-[#B76E79]" />
                        Visakhapatnam, IN
                      </h3>
                      <p className="font-sans text-xs text-gray-400 mt-1">City of Destiny</p>
                    </div>
                  </motion.div>

                  <motion.div
                    whileHover={{ y: -5 }}
                    className="p-6 rounded-[28px] border border-[#FFCFE0]/30 bg-[#FFF9FB]/30 backdrop-blur-md flex flex-col justify-between h-44 shadow-sm hover:border-[#B76E79]/40 transition-all duration-300"
                  >
                    <span className="font-sans text-[10px] tracking-widest text-[#B76E79] uppercase">LANGUAGES</span>
                    <div>
                      <h3 className="font-serif text-base text-gray-800 font-medium">
                        English, Telugu, Hindi
                      </h3>
                      <p className="font-sans text-xs text-gray-400 mt-1">Trilingual Fluency</p>
                    </div>
                  </motion.div>
                </div>
              </div>
            </section>

            {/* 3. NEW SECTION: A DAY IN SHREE'S WORLD (Cute Interactive Diary) */}
            <section
              id="diary"
              className="py-24 px-6 md:px-12 max-w-6xl mx-auto w-full relative z-10"
            >
              <div className="text-center max-w-xl mx-auto mb-16">
                <span className="font-sans text-xs tracking-[0.3em] text-[#B76E79] uppercase mb-3 block">
                  Daily Balance
                </span>
                <h2 className="font-serif text-4xl sm:text-5xl font-light tracking-wide text-gray-800">
                  A Day in Shree&apos;s World
                </h2>
                <div className="w-16 h-[1px] bg-gradient-to-r from-[#B76E79] to-[#FFCFE0] mx-auto mt-5" />
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                {/* Visual Diary Side */}
                <div className="lg:col-span-6 space-y-6">
                  {DIARY_EVENTS.map((event, idx) => (
                    <motion.div
                      key={idx}
                      onClick={() => setActiveDiary(activeDiary === idx ? null : idx)}
                      className={`p-6 rounded-[28px] border cursor-pointer transition-all duration-500 ${
                        activeDiary === idx
                          ? "bg-white border-[#B76E79]/50 shadow-md shadow-pink-100/10 scale-[1.01]"
                          : "bg-[#FFF9FB]/30 border-[#FFCFE0]/30 hover:border-[#B76E79]/30"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div
                            className="w-10 h-10 rounded-full flex items-center justify-center text-[#B76E79]"
                            style={{ backgroundColor: `${event.accent}80` }}
                          >
                            {event.icon}
                          </div>
                          <div>
                            <span className="font-sans text-[10px] tracking-widest text-gray-400 block">
                              {event.time}
                            </span>
                            <h3 className="font-serif text-lg font-semibold text-gray-800">
                              {event.title}
                            </h3>
                          </div>
                        </div>
                        <span className="font-sans text-[9px] tracking-widest uppercase bg-pink-50/50 text-[#B76E79] px-2.5 py-1 rounded-full border border-pink-100/30">
                          {event.category}
                        </span>
                      </div>

                      <AnimatePresence>
                        {activeDiary === idx && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.4, ease: "easeInOut" }}
                            className="overflow-hidden"
                          >
                            <p className="font-sans text-xs font-light text-gray-500 leading-relaxed mt-4 pt-4 border-t border-pink-50/50">
                              {event.description}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  ))}
                </div>

                {/* Decorative Visual Explanation (No photo, pure vector illustration) */}
                <div className="lg:col-span-6 bg-[#FFF9FB]/30 backdrop-blur-md rounded-[36px] border border-[#FFCFE0]/30 p-8 sm:p-10 text-center flex flex-col items-center justify-center min-h-[300px]">
                  <span className="text-4xl mb-4 animate-bounce">🌷</span>
                  <h3 className="font-serif text-2xl font-semibold text-gray-800 mb-3">
                    Logic &amp; Aesthetics
                  </h3>
                  <p className="font-sans text-xs font-light text-gray-500 leading-relaxed max-w-sm">
                    &quot;Engineering teaches me the rules of structural logic. Styling gives me the freedom of visual expression. The two coexist in this digital site, designed to represent who I am.&quot;
                  </p>
                  <div className="w-10 h-[1px] bg-[#B76E79]/30 my-6" />
                  <span className="font-serif italic text-xs text-[#B76E79]">
                    — Shree, 3rd Year ECE Student
                  </span>
                </div>
              </div>
            </section>

            {/* 4. PERSONALITY SHOWCASE */}
            <section
              id="personality"
              className="py-24 px-6 md:px-12 max-w-6xl mx-auto w-full relative z-10"
            >
              <div className="text-center max-w-xl mx-auto mb-16">
                <span className="font-sans text-xs tracking-[0.3em] text-[#B76E79] uppercase mb-3 block">
                  Core Essence
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
                  description="Believing in presence, carrying myself with posture and self-worth in classrooms, labs, or on camera."
                  color="#FFDDEB"
                />
                <PersonalityCard
                  icon="🎀"
                  title="Creativity"
                  description="Drafting visual guides, matching color palettes, and exploring styling coordinates as a designer."
                  color="#FFCFE0"
                />
                <PersonalityCard
                  icon="💡"
                  title="Innovation"
                  description="Leveraging my communication engineering background to think logically and design functional web layout logic."
                  color="#F2E9FF"
                />
                <PersonalityCard
                  icon="💖"
                  title="Kindness"
                  description="Connecting with team members, building collaborative workflows, and expressing support."
                  color="#FFF9FB"
                />
                <PersonalityCard
                  icon="📸"
                  title="Expression"
                  description="Working with symmetry, lighting setups, and camera angles to capture aesthetic lifestyle narratives."
                  color="#FFDDEB"
                />
                <PersonalityCard
                  icon="🌷"
                  title="Growth"
                  description="Constantly learning, experimenting with code frameworks, styling trends, and personal presentation."
                  color="#F2E9FF"
                />
              </div>
            </section>

            {/* 5. TYPOGRAPHIC MODELING JOURNEY (Replaces the big image gallery) */}
            <section
              id="modeling"
              className="py-24 px-6 md:px-12 max-w-6xl mx-auto w-full relative z-10"
            >
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
                <div className="mb-6 md:mb-0">
                  <span className="font-sans text-xs tracking-[0.3em] text-[#B76E79] uppercase mb-3 block">
                    Vogue &amp; Dior Influenced
                  </span>
                  <h2 className="font-serif text-4xl sm:text-5xl font-light tracking-wide text-gray-800">
                    Modeling Journey
                  </h2>
                </div>
                <div className="h-[1px] flex-grow bg-pink-100/80 mx-8 hidden md:block mb-4" />
                <span className="font-sans text-xs tracking-widest text-[#B76E79] uppercase font-light">
                  [ COUTURE PROFILE ]
                </span>
              </div>

              <div className="bg-[#FFF9FB]/30 backdrop-blur-md rounded-[40px] border border-[#FFCFE0]/30 p-8 sm:p-12 shadow-lg shadow-pink-100/5">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                  {/* Left Column: Physical Metrics & Card */}
                  <div className="lg:col-span-5 space-y-6">
                    <h3 className="font-serif text-2xl font-semibold text-gray-800 mb-6">
                      Model Profile
                    </h3>

                    {/* Stats List */}
                    <div className="space-y-4 border-l border-pink-100 pl-6">
                      <div>
                        <span className="font-sans text-[10px] tracking-widest uppercase text-gray-400">Height</span>
                        <p className="font-serif text-lg font-medium text-gray-700">5&apos;2&quot; / 157 cm</p>
                      </div>
                      <div>
                        <span className="font-sans text-[10px] tracking-widest uppercase text-gray-400">Specialty</span>
                        <p className="font-serif text-lg font-medium text-gray-700">Editorial &amp; Lifestyle Modeling</p>
                      </div>
                      <div>
                        <span className="font-sans text-[10px] tracking-widest uppercase text-gray-400">Location Base</span>
                        <p className="font-serif text-lg font-medium text-gray-700">Visakhapatnam, Andhra Pradesh</p>
                      </div>
                      <div>
                        <span className="font-sans text-[10px] tracking-widest uppercase text-gray-400">Focus Areas</span>
                        <p className="font-serif text-lg font-medium text-gray-700">Styling Coordination, Fashion Shoots</p>
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Typographic Philosophy / Dior Quote */}
                  <div className="lg:col-span-7 flex flex-col justify-center">
                    <span className="text-4xl mb-4 text-pink-300">“</span>
                    <p className="font-serif italic text-lg sm:text-xl text-gray-600 leading-relaxed mb-6 font-light">
                      Modeling is the expression of silent narratives. I focus on the geometry of posing, the texture of fabrics, and the play of soft shadows. Even without photograph assets on this website yet, I strive to design visual layouts that mimic high-fashion print magazines.
                    </p>
                    <div className="w-12 h-[1px] bg-[#B76E79]/30 mb-4" />
                    <span className="font-sans text-xs tracking-widest text-[#B76E79] uppercase font-light">
                      — Portfolio shoots in progress
                    </span>
                  </div>
                </div>
              </div>
            </section>

            {/* 6. EDUCATION TIMELINE & SKILLS */}
            <section
              id="skills"
              className="py-24 px-6 md:px-12 max-w-6xl mx-auto w-full relative z-10"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
                {/* Timeline */}
                <div className="lg:col-span-6">
                  <span className="font-sans text-xs tracking-[0.3em] text-[#B76E79] uppercase mb-3 block">
                    Academics
                  </span>
                  <h2 className="font-serif text-4xl font-light tracking-wide text-gray-800 mb-12">
                    Education Timeline
                  </h2>

                  <div className="relative border-l border-[#FFCFE0]/60 pl-8 ml-4 space-y-12">
                    <div className="relative">
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
                        3rd Year Student • Visakhapatnam
                      </p>
                      <p className="font-sans text-sm font-light text-gray-500 leading-relaxed mt-3">
                        Deepening core understanding of electronic circuits, signal processing theory, antenna designs, and digital logic layouts.
                      </p>
                    </div>

                    <div className="relative">
                      <span className="absolute -left-[41px] top-1.5 w-6 h-6 rounded-full border-4 border-[#FFF9FB] bg-[#FFCFE0]/80 shadow-sm" />
                      <span className="font-sans text-[10px] tracking-widest font-semibold text-gray-400 uppercase block mb-1">
                        2021 — 2023
                      </span>
                      <h3 className="font-serif text-xl text-gray-700 font-medium">
                        Pre-University Intermediate Studies
                      </h3>
                      <p className="font-sans text-xs text-gray-400 mt-1">
                        MPC Stream (Mathematics, Physics, Chemistry)
                      </p>
                      <p className="font-sans text-sm font-light text-gray-500 leading-relaxed mt-2.5">
                        Acquired foundation mathematical and scientific analysis capabilities that lead to engineering structures.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Soft & Hard Skills */}
                <div className="lg:col-span-6 bg-[#FFF9FB]/30 backdrop-blur-md rounded-[36px] border border-[#FFCFE0]/30 p-8 sm:p-10">
                  <span className="font-sans text-xs tracking-[0.3em] text-[#B76E79] uppercase mb-3 block">
                    Competencies
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

                  <div className="mt-10 p-5 rounded-2xl border border-pink-100 bg-[#FFDDEB]/20 flex items-start gap-4">
                    <span className="text-2xl mt-0.5">🎀</span>
                    <div>
                      <h4 className="font-serif text-base text-gray-800 font-semibold mb-1">
                        Aesthetic Engineering
                      </h4>
                      <p className="font-sans text-xs text-gray-500 leading-normal font-light">
                        Logic gate routing is very similar to designing layout spacing. I enjoy synthesizing engineering principles with creative modeling fashion workflows.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* 7. INTERESTS */}
            <section
              id="interests"
              className="py-24 px-6 md:px-12 max-w-6xl mx-auto w-full relative z-10"
            >
              <div className="text-center max-w-xl mx-auto mb-16">
                <span className="font-sans text-xs tracking-[0.3em] text-[#B76E79] uppercase mb-3 block">
                  Pinterest boards
                </span>
                <h2 className="font-serif text-4xl sm:text-5xl font-light tracking-wide text-gray-800">
                  Interests &amp; Inspiration
                </h2>
                <div className="w-16 h-[1px] bg-gradient-to-r from-[#B76E79] to-[#FFCFE0] mx-auto mt-5" />
              </div>

              {/* Pinterest Mosaic grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                {INTERESTS.map((interest) => (
                  <motion.div
                    key={interest.name}
                    className="relative rounded-3xl p-6 flex flex-col justify-between border border-[#FFCFE0]/20 bg-[#FFF9FB]/30 backdrop-blur-md cursor-pointer overflow-hidden shadow-sm h-32"
                    onClick={() =>
                      setActiveInterest(
                        activeInterest === interest.name ? null : interest.name
                      )
                    }
                    whileHover={{ scale: 1.03 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <div
                      className="absolute inset-0 opacity-10 -z-10"
                      style={{ backgroundColor: interest.color }}
                    />

                    <AnimatePresence>
                      {activeInterest === interest.name && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="absolute inset-0 bg-white/95 backdrop-blur-sm p-4 flex flex-col justify-between z-10"
                        >
                          <span className="text-xl">{interest.icon}</span>
                          <div>
                            <h4 className="font-serif text-sm text-gray-800 font-semibold mb-0.5">
                              {interest.name}
                            </h4>
                            <p className="font-sans text-[9px] text-gray-500 font-light leading-snug">
                              Shree&apos;s passion facet. Spark of daily inspiration.
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    <span className="text-2xl">{interest.icon}</span>
                    <div className="flex justify-between items-end">
                      <h3 className="font-serif text-sm sm:text-base text-gray-700 font-medium">
                        {interest.name}
                      </h3>
                      <span className="text-[10px] text-[#B76E79] opacity-40 font-serif">✦</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* 8. INSTAGRAM EXPERIENCE (Updated: post grid replaced with a Polaroid layout) */}
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

              <div className="bg-[#FFF9FB]/30 backdrop-blur-md rounded-[40px] border border-[#FFCFE0]/30 p-8 sm:p-10 shadow-lg shadow-pink-100/5 max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
                {/* Profile Header on Left */}
                <div className="md:col-span-6 flex flex-col justify-between h-full space-y-8">
                  <div className="flex items-center gap-6">
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

                  <p className="font-sans text-sm font-light text-gray-500 leading-relaxed">
                    Connecting tech solutions with lifestyle visual styling on social media. Check out my daily balance and beach snaps.
                  </p>

                  <div>
                    <a
                      href="https://www.instagram.com/shhrree94/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 font-sans text-xs tracking-widest uppercase px-6 py-4 rounded-full bg-gradient-to-r from-[#B76E79] to-[#FFCFE0] text-white hover:shadow-lg hover:shadow-pink-200/50 hover:scale-105 transition-all duration-300"
                    >
                      <Instagram size={14} />
                      Follow @shhrree94
                    </a>
                  </div>
                </div>

                {/* Polaroid Placeholder on Right (Cute replacement for photo grids) */}
                <div className="md:col-span-6 flex justify-center">
                  <motion.div
                    whileHover={{ scale: 1.02, rotate: -1 }}
                    className="w-full max-w-[280px] aspect-[4/5] bg-white border border-[#FFCFE0]/30 rounded-3xl p-5 shadow-lg shadow-pink-100/5 flex flex-col justify-between relative overflow-hidden"
                  >
                    {/* Inner image container */}
                    <div className="w-full h-[78%] bg-gradient-to-tr from-[#FFDDEB] to-[#F2E9FF] rounded-2xl flex flex-col items-center justify-center relative p-6 text-center">
                      <div className="w-12 h-12 rounded-full bg-white/40 backdrop-blur-sm flex items-center justify-center text-[#B76E79] mb-4">
                        <Heart size={20} fill="#FFCFE0" stroke="#B76E79" />
                      </div>
                      <span className="font-serif italic text-xs text-[#B76E79] mb-1">Coming Soon</span>
                      <p className="font-sans text-[10px] text-gray-400 leading-normal max-w-[160px]">
                        Instagram posts feed is clearing for upcoming editorial collections.
                      </p>
                    </div>

                    {/* Polaroid handwritten caption */}
                    <div className="text-center pt-2 select-none">
                      <span className="font-serif italic text-base text-gray-700 tracking-wider">
                        Shree&apos;s Lens 📸
                      </span>
                    </div>
                  </motion.div>
                </div>
              </div>
            </section>

            {/* 9. CONTACT SECTION */}
            <section
              id="contact"
              className="py-24 px-6 md:px-12 max-w-6xl mx-auto w-full relative z-10"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start relative">
                <HeartBurst active={burstActive} onComplete={() => setBurstActive(false)} />

                {/* Contact coordinates */}
                <div className="lg:col-span-5 flex flex-col items-start lg:sticky lg:top-32">
                  <span className="font-sans text-xs tracking-[0.3em] text-[#B76E79] uppercase mb-3">
                    Start a Conversation
                  </span>
                  <h2 className="font-serif text-4xl sm:text-5xl font-light tracking-wide text-gray-800 mb-8">
                    Contact Shree
                  </h2>
                  <div className="w-20 h-[1px] bg-gradient-to-r from-[#B76E79] to-[#FFCFE0] mb-12" />

                  <div className="w-full space-y-6">
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

                {/* Form Card */}
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

            {/* 10. FOOTER */}
            <footer className="relative border-t border-pink-100/50 bg-gradient-to-b from-transparent to-[#FFDDEB]/15 pt-16 pb-8 px-6 md:px-12 z-10 overflow-hidden">
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
              <div className="text-center mt-6 text-[8px] font-sans text-gray-400/50 font-light tracking-widest uppercase">
                Created by Saman
              </div>
            </footer>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
