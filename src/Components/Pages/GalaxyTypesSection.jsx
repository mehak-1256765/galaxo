import React from 'react';
import { motion } from 'framer-motion';
import AboutSpace from './AboutSpace';
const galaxyTypes = [
  {
    name: 'Spiral Galaxy',
    image: '/assets/spiral.webp',
    fact: 'Spiral galaxies have beautiful arms that spin outward like pinwheels.',
  },
  {
    name: 'Elliptical Galaxy',
    image: '/assets/elliptical.webp',
    fact: 'Elliptical galaxies are smooth, featureless, and range from round to oval-shaped.',
  },
  {
    name: 'Irregular Galaxy',
    image: '/assets/irregular.webp',
    fact: 'Irregular galaxies have no defined shape and are often chaotic in appearance.',
  },
];

export const GalaxyTypesSection = () => (
  <section className="min-h-screen px-6 py-20 text-white bg-gradient-to-b from-black to-gray-900">
 <h2 className="mb-12 text-4xl font-bold text-center uppercase sm:text-4xl">
            TYPES OF {" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400">
            galaxies
            </span>
          </h2>


    <div className="grid max-w-6xl grid-cols-1 gap-12 mx-auto md:grid-cols-3">
      {galaxyTypes.map((type, idx) => (
        <motion.div
          key={type.name}
          whileHover={{ scale: 1.05 }}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: idx * 0.2 }}
          className="p-6 text-center shadow-lg bg-white/10 rounded-2xl backdrop-blur-lg"
        >
          <img
            src={type.image}
            alt={type.name}
            className="object-cover w-48 h-48 mx-auto mb-4 border-4 rounded-full border-white/20"
          />
          <h3 className="mb-2 text-2xl font-semibold">{type.name}</h3>
          <p className="text-sm opacity-80">{type.fact}</p>
        </motion.div>
      ))}
    </div>
      <AboutSpace />

    {/* Astronaut Call-To-Action */}
    <div className="flex flex-col items-center justify-center mt-20 space-y-4 text-center">
      <motion.h3
        className="text-3xl font-extrabold text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-yellow-400 bg-clip-text"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Dream of Becoming an Astronaut?
      </motion.h3>
      <p className="max-w-xl text-lg text-gray-300">
        Test your knowledge with our cosmic quiz and join the mission!
      </p>

      <motion.a
        href="/astronaut"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: 'spring', stiffness: 300 }}
        className="px-8 py-3 mt-4 text-lg font-semibold text-white rounded-full shadow-lg bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 hover:from-pink-500 hover:to-yellow-500"
      >
        🚀 Become an Astronaut
      </motion.a>
    </div>
  </section>
);

export default GalaxyTypesSection;
