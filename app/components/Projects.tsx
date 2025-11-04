"use client";

import { motion } from "framer-motion";
import {
  CodeBracketIcon,
  DevicePhoneMobileIcon,
  AcademicCapIcon,
  CogIcon,
  GlobeAltIcon,
  ChartBarIcon,
  RocketLaunchIcon,
  BanknotesIcon,
} from "@heroicons/react/24/outline";

export default function Projects() {
  const projects = [
    {
      icon: <GlobeAltIcon className="h-10 w-10 text-blue-600 mx-auto" />,
      title: "Web Design",
      description:
        "Creating elegant, responsive, and accessible website experiences.",
    },
    {
      icon: (
        <DevicePhoneMobileIcon className="h-10 w-10 text-blue-600 mx-auto" />
      ),
      title: "Mobile Apps",
      description:
        "Crafting cross-platform apps with React Native and smooth UI/UX.",
    },
    {
      icon: <CodeBracketIcon className="h-10 w-10 text-blue-600 mx-auto" />,
      title: "Full-Stack Development",
      description:
        "Building scalable web apps with Next.js, React, Node.js, and Prisma.",
    },
    {
      icon: <BanknotesIcon className="h-10 w-10 text-green-600 mx-auto" />,
      title: "Accounting & Financial Management",
      description:
        "Providing accurate bookkeeping, financial reporting, and budget management services.",
    },
    {
      icon: <AcademicCapIcon className="h-10 w-10 text-blue-600 mx-auto" />,
      title: "ICT Expertise",
      description:
        "Delivering end-to-end ICT solutions, including troubleshooting, networking, and digital innovation support.",
    },
    {
      icon: <CogIcon className="h-10 w-10 text-blue-600 mx-auto" />,
      title: "Automation Tools",
      description:
        "Custom automation to streamline workflows and improve productivity.",
    },
    {
      icon: <ChartBarIcon className="h-10 w-10 text-blue-600 mx-auto" />,
      title: "Data Analytics",
      description:
        "Turning raw data into actionable insights with dashboards and reports.",
    },
    {
      icon: <RocketLaunchIcon className="h-10 w-10 text-blue-600 mx-auto" />,
      title: "Startup Solutions",
      description:
        "Helping startups prototype, launch, and scale their digital products.",
    },
  ];

  return (
    <section className="py-16 bg-gray-300">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-12">
          My Projects
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{
                scale: 1.05,
                rotateX: 5,
                rotateY: -5,
                boxShadow: "0px 10px 20px rgba(0,0,0,0.15)",
              }}
              transition={{ type: "spring", stiffness: 300 }}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-blue-500"
            >
              <motion.div
                whileHover={{ rotate: 10 }}
                transition={{ duration: 0.3 }}
                className="mb-4"
              >
                {project.icon}
              </motion.div>
              <h3 className="text-lg font-bold text-red-600 mb-2">
                {project.title}
              </h3>
              <p className="text-gray-600 text-sm">{project.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
