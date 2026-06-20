"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const NAV_ITEMS = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Vision", href: "#personality" },
  { name: "Modeling", href: "#modeling" },
  { name: "Skills", href: "#skills" },
  { name: "Interests", href: "#interests" },
  { name: "Lens", href: "#lens" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.8 }}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          scrolled
            ? "py-4 px-6 md:px-12"
            : "py-6 px-6 md:px-16"
        }`}
      >
        <div
          className={`max-w-6xl mx-auto flex items-center justify-between px-6 py-3 rounded-full border transition-all duration-500 ${
            scrolled
              ? "bg-[#FFF9FB]/60 backdrop-blur-md border-[#FFCFE0]/30 shadow-md shadow-pink-100/10"
              : "bg-transparent border-transparent"
          }`}
        >
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, "#home")}
            className="font-serif text-xl md:text-2xl font-semibold tracking-wider text-gray-800 hover:text-[#B76E79] transition-colors duration-300"
          >
            Shree <span className="text-[#FFCFE0]">🎀</span>
          </a>

          {/* Desktop Nav Items */}
          <div className="hidden md:flex items-center space-x-6">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="font-sans text-xs tracking-widest text-gray-600 hover:text-[#B76E79] uppercase transition-colors duration-300 relative py-1 group"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-[#B76E79] to-[#FFCFE0] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
              </a>
            ))}
          </div>

          {/* Call To Action - Contact shortcut */}
          <div className="hidden md:block">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
              className="font-sans text-xs tracking-widest uppercase px-5 py-2.5 rounded-full bg-gradient-to-r from-[#B76E79] to-[#FFCFE0] text-white hover:shadow-lg hover:shadow-pink-200/50 hover:scale-105 transition-all duration-300"
            >
              Get In Touch
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-1.5 rounded-full border border-pink-100 bg-[#FFF9FB]/80 hover:bg-[#FFF9FB] text-gray-700 transition-all duration-300"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="fixed inset-x-0 top-20 z-30 mx-6 p-6 rounded-3xl bg-[#FFF9FB]/95 backdrop-blur-lg border border-[#FFCFE0]/30 shadow-xl shadow-pink-100/20 md:hidden"
          >
            <div className="flex flex-col space-y-4">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="font-sans text-sm tracking-widest text-gray-700 hover:text-[#B76E79] uppercase transition-colors duration-200 py-1.5 border-b border-pink-50/50"
                >
                  {item.name}
                </a>
              ))}
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, "#contact")}
                className="font-sans text-xs text-center tracking-widest uppercase mt-4 px-5 py-3 rounded-full bg-gradient-to-r from-[#B76E79] to-[#FFCFE0] text-white shadow-md shadow-pink-200/50 block"
              >
                Get In Touch 💌
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
