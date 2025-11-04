"use client";

import React, { useState, useEffect } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("header");

  const NAVIGATION_LINKS = [
    { name: "Home", path: "#header" },
    { name: "Projects", path: "#projects" },
    { name: "Contact", path: "#contact" },
    { name: "About", path: "#about" },
  ];

  useEffect(() => {
    const sections = NAVIGATION_LINKS.map(link =>
      document.querySelector(link.path)
    );

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      { threshold: 0.6 } // Adjust sensitivity (0.6 = 60% visible)
    );

    sections.forEach(section => {
      if (section) observer.observe(section);
    });

    return () => {
      sections.forEach(section => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  return (
    <nav className="bg-gradient-to-r from-blue-400 via-blue-300 to-pink-300 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center py-3">
          {/* Left: Logo + Title */}
          <div className="flex items-center space-x-2">
            <img
              src="/Vin_logo.png"
              alt="Vincent Learning Hub Logo"
              className="h-14 w-14 rounded-full object-cover border-none"
            />
            <div className="flex flex-col leading-tight">
              <span className="text-lg font-bold text-[#FFF8E7]">
                VINCENT LEARNING HUB
              </span>
              <p className="text-xs text-white">Empower, Innovate, Lead</p>
            </div>
          </div>

          {/* Right: Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            {NAVIGATION_LINKS.map(link => (
              <a
                key={link.name}
                href={link.path}
                className={`font-medium transition-colors duration-300 ${
                  activeSection === link.path
                    ? "text-white bg-blue-700 px-3 py-1 rounded-md"
                    : "text-gray-700 hover:text-blue-700"
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-700 focus:outline-none"
            >
              {isOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-blue-100 border-t border-blue-300">
          <div className="px-4 py-3 space-y-2">
            {NAVIGATION_LINKS.map(link => (
              <a
                key={link.name}
                href={link.path}
                onClick={() => setIsOpen(false)}
                className={`block font-medium transition-colors duration-300 ${
                  activeSection === link.path
                    ? "text-blue-700 font-bold"
                    : "text-gray-700 hover:text-blue-700"
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
