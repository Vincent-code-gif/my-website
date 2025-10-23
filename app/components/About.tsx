"use client";

import React from "react";
import { ArrowDownTrayIcon } from "@heroicons/react/24/outline";

const About: React.FC = () => {
  return (
    <section
      id="about"
      className="bg-gray-200 py-16 px-6 flex flex-col items-center text-center"
    >
      {/* Profile Image */}
      <div className="mb-6">
        <img
          src="/me.jpg" // Replace with your photo path
          alt="Photo"
          className="w-40 h-40 rounded-full object-cover shadow-lg border-4 border-white"
        />
      </div>

      {/* Title */}
      <h2 className="text-3xl font-bold text-blue-700 mb-4">About Vincent</h2>

      {/* Short Description */}
      <p className="text-gray-700 max-w-2xl leading-relaxed mb-8">
        Hello! I’m <span className="font-semibold text-blue-700">Vincent Omondi</span>,
        a Frontend Web Developer dedicated to creating intuitive, user-centered
        digital experiences that make a meaningful impact. I specialize in developing clean,
        responsive, and visually engaging interfaces using modern web technologies and design principles.
        While my primary focus is on frontend development, I also have foundational knowledge of backend
        technologies, allowing me to approach projects with a holistic understanding of web development.
        Beyond coding, I bring a background in accounting and administration, which has strengthened my
        skills in organization, precision, and accountability. I’m passionate about collaboration, continuous
        learning, and innovation, and I strive to leverage technology as a powerful tool for problem-solving and community growth.
      </p>

      {/* Buttons */}
      <div className="flex flex-wrap justify-center gap-4">
        <a
          href="/Vincent_CV.pdf" // Replace with your CV file path
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

      {/* Optional extra section for resources */}
      <div className="mt-10 max-w-2xl text-gray-600">
        <h3 className="text-lg font-semibold text-blue-700 mb-2">
          Additional Resources
        </h3>
        <ul className="space-y-2">
          <li>
            <a
              href="/portfolio.pdf"
              className="text-blue-600 hover:underline"
              target="_blank"
            >
              View My Portfolio
            </a>
          </li>
          <li>
            <a
              href="https://linkedin.com/in/yourusername"
              className="text-blue-600 hover:underline"
              target="_blank"
            >
              Connect on LinkedIn
            </a>
          </li>
          <li>
            <a
              href="mailto:vincentomondi0041@gmail.com"
              className="text-blue-600 hover:underline"
            >
              Contact Me via Email
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default About;
