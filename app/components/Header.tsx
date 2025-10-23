"use client";

import React from "react";
import Link from "next/link";
import { Vortex } from "@/components/ui/vortex";
import ColourfulText from "@/components/ui/colourful-text";

const Header: React.FC = () => {
  return (
    
    <header className="bg-blue-50 text-gray-800 py-16">
      <Vortex
        backgroundColor="black"
        className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
      >
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
        
        {/* Left: Text Content */}
        <div className="md:w-1/2 space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-700 leading-tight">
          <ColourfulText text ='Welcome to' /> <span className="text-blue-500">Vincent Learning Hub</span>
          </h1>
          <p className="text-lg text-white">
            Empowering young minds to innovate, lead, and make a lasting impact in the community.
          </p>
          <div className="flex space-x-4">
            <Link
              href="/about"
              className="bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors duration-300"
            >
              Learn More
            </Link>
            <li className="border border-blue-700 text-blue-700 px-6 py-3 rounded-lg 
            font-semibold hover:bg-blue-700 hover:text-white transition-colors duration-300"><a 
            href="#contact" className="hover:text-blue-400">Contact Me</a></li>
          </div>
        </div>

        {/* Right: Image */}
        <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
          <img
              src="/learn.png"
            alt="Learning illustration"
            width={450}
            height={450}
            className="rounded-2xl shadow-lg object-cover"
          />
        </div>
      </div>
      </Vortex>
    </header>
   
  );
};

export default Header;
