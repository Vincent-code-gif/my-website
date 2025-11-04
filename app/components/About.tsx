"use client";

import React from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { ArrowDownTrayIcon } from "@heroicons/react/24/outline";

const About: React.FC = () => {
  return (
    <motion.section
      id="about"
      className="bg-gray-200 py-16 px-6 flex flex-col items-center text-center"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Profile Image */}
      <motion.img
        src="/me.jpg"
        alt="Vincent"
        className="w-40 h-40 rounded-full object-cover shadow-lg border-4 border-white mb-6"
        initial={{ scale: 0.9, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
      />

      {/* Dynamic Intro */}
      <h2 className="text-3xl font-bold text-blue-700 mb-2">
        Hello, I’m Vincent Omondi
      </h2>

      <TypeAnimation 
        sequence={[
          "Frontend Developer 🚀",
          1500,
          "Tech Enthusiast 💻",
          1500,
          "Creative Problem Solver 💡",
          1500,
          "Lifelong Learner 📚",
          1500,
        ]}
        wrapper="span"
        speed={50}
        repeat={Infinity}
        className="text-xl text-pink-700 font-semibold mb-6"
      />

      {/* Paragraph */}
      <p className="text-gray-700 max-w-2xl leading-relaxed mb-8">
        I’m passionate about creating intuitive, user-centered digital
        experiences that inspire and empower people. I specialize in clean,
        responsive, and engaging web interfaces using modern technologies. My
        background in administration and accounting adds precision and
        organization to my work.
      </p>

      {/* Buttons */}
      <div className="flex flex-wrap justify-center gap-4">
        <a
          href="/Vincent_CV.pdf"
          download
          className="flex items-center gap-2 bg-blue-700 text-white px-6 py-3 rounded-full shadow-md hover:bg-blue-800 transition-transform transform hover:scale-105"
        >
          <ArrowDownTrayIcon className="w-5 h-5" />
          Download CV
        </a>
        <a
          href="#hire"
          className="bg-white border border-blue-700 text-blue-700 px-6 py-3 rounded-full shadow-md hover:bg-blue-100 transition-transform transform hover:scale-105"
        >
          Hire Me
        </a>
      </div>
    </motion.section>
  );
};

export default About;
