// Missions.jsx
import React from "react";
import { Link } from "react-router-dom";
import { Rocket, Star, Puzzle, Brain, BookOpen } from "lucide-react";
import { motion } from "framer-motion";

const missions = [
  {
    title: "Planet Matching",
    description: "Match planets to their names and earn cosmic points.",
    icon: <Puzzle size={32} className="text-indigo-400" />,
    src: "/planetmatching",
  },
  {
    title: "Trivia Time",
    description: "Test your space knowledge with quick fun facts!",
    icon: <Brain size={32} className="text-indigo-400" />,
    src: "/trivia",
  },
  {
    title: "Rocket Builder",
    description: "Assemble your own rocket with the correct components.",
    icon: <Rocket size={32} className="text-indigo-400" />,
    src: "/rocket",
  },
  {
    title: "Star Locator",
    description: "Identify constellations and learn their origins.",
    icon: <Star size={32} className="text-indigo-400" />,
    src: "/star",
  },
  {
    title: "NASA Facts & Timelines",
    description:
      "Learn from verified NASA data, timelines of space missions, and milestones in astronomy.",
    icon: <BookOpen size={32} className="text-indigo-400" />,
    src: "/timelines",
  },
];

const Missions = () => {
  return (
    <section
      id="missions"
      className="min-h-screen px-6 py-20 text-white bg-gradient-to-b from-black to-gray-900"
    >
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mb-14 text-4xl font-bold text-center text-indigo-300"
      >
        Your Missions
      </motion.h2>

      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-2 max-w-6xl mx-auto">
        {missions.map((mission, idx) => {
          const CardContent = (
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="p-6 bg-black/30 border border-indigo-800 rounded-2xl shadow-xl backdrop-blur-md hover:scale-105 hover:shadow-indigo-500/40 transition-transform duration-300 cursor-pointer"
            >
              <div className="flex items-center gap-4 mb-4">
                {mission.icon}
                <h3 className="text-2xl font-semibold text-indigo-200">
                  {mission.title}
                </h3>
              </div>
              <p className="text-gray-300">{mission.description}</p>
            </motion.div>
          );

          return mission.src ? (
            <Link to={mission.src} key={idx}>
              {CardContent}
            </Link>
          ) : (
            <div key={idx}>{CardContent}</div>
          );
        })}
      </div>
    </section>
  );
};

export default Missions;
