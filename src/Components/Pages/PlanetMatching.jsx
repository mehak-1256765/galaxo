import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const planets = [
  { name: "Mercury", img: "/assets/mercury2.webp" },
  { name: "Venus", img: "/assets/Venus1.webp" },
  { name: "Earth", img: "/assets/earthp.webp" },
  { name: "Mars", img: "/assets/marsp.webp" },
  { name: "Jupiter", img: "/assets/jupiter.webp" },
  { name: "Saturn", img: "/assets/saturn1.webp" },
];

const badges = [
  { label: "Cosmic Champion", icon: "🚀" },
  { label: "Planet Pro", icon: "🪐" },
  { label: "Galaxy Guru", icon: "🌌" },
];

const shuffledPlanets = planets
  .map(p => ({ ...p, id: Math.random() }))
  .sort(() => Math.random() - 0.5);

const PlanetMatching = () => {
  const [draggedPlanet, setDraggedPlanet] = useState(null);
  const [matches, setMatches] = useState({});
  const [score, setScore] = useState(0);

  const onDragStart = (e, planetName) => {
    setDraggedPlanet(planetName);
  };

  const onDrop = (e, dropTargetName) => {
    e.preventDefault();
    if (draggedPlanet === dropTargetName && !matches[dropTargetName]) {
      setMatches(prev => ({ ...prev, [dropTargetName]: draggedPlanet }));
      setScore(prev => prev + 1);
    }
    setDraggedPlanet(null);
  };

  const onDragOver = e => e.preventDefault();
  const hasWon = score === planets.length;

  return (
    <section className="min-h-screen px-6 py-16 text-white bg-gradient-to-b from-black to-gray-900">
      <h1 className="mb-6 text-4xl font-bold text-center text-indigo-400">Planet Matching</h1>
      <p className="max-w-3xl mx-auto mb-10 text-center text-gray-300">
        Drag the planet image to the matching planet name box. Score points by matching correctly!
      </p>

      {!hasWon && (
        <div className="flex flex-col justify-center max-w-5xl gap-10 mx-auto md:flex-row">
          <div className="flex flex-wrap justify-center gap-6 md:w-1/2">
            {shuffledPlanets.map(({ name, img }) => (
              <img
                key={name}
                src={img}
                alt={name}
                draggable={!matches[name]}
                onDragStart={e => onDragStart(e, name)}
                className={`w-24 h-24 rounded-full border-4 border-indigo-600 cursor-move 
                ${matches[name] ? "opacity-50 pointer-events-none" : "hover:scale-105 transition"}`}
                title={name}
              />
            ))}
          </div>

          <div className="flex flex-col gap-4 md:w-1/2">
            {planets.map(({ name }) => (
              <div
                key={name}
                onDrop={e => onDrop(e, name)}
                onDragOver={onDragOver}
                className={`border-4 border-dashed border-indigo-500 rounded-md h-24 flex items-center justify-center text-lg font-semibold
                ${matches[name] ? "bg-indigo-700 border-solid" : "bg-transparent hover:bg-indigo-800 transition cursor-pointer"}`}
              >
                {matches[name] || `Drop ${name} Here`}
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="mt-10 text-2xl font-semibold text-center text-indigo-300">
        Score: {score} / {planets.length}
      </div>

      {/* 🎉 Congrats Popup */}
      <AnimatePresence>
        {hasWon && (
          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="fixed inset-0 z-50 flex flex-col items-center justify-center px-6 text-center bg-black/80"
          >
            <motion.h2
              className="mb-4 text-4xl font-bold text-indigo-300"
              initial={{ y: -20 }}
              animate={{ y: 0 }}
              transition={{ delay: 0.3 }}
            >
              🎉 Congratulations! 🎉
            </motion.h2>
            <p className="max-w-xl mb-6 text-xl text-gray-200">
              You matched all the planets correctly. You're a true cosmic explorer!
            </p>

            <div className="flex flex-wrap justify-center gap-6">
              {badges.map(({ label, icon }, index) => (
                <motion.div
                  key={label}
                  className="px-4 py-2 text-lg font-bold text-white bg-indigo-700 border-2 border-indigo-400 shadow-lg rounded-xl"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + index * 0.2 }}
                >
                  {icon} {label}
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default PlanetMatching;
