import React, { useState } from "react";
import { motion } from "framer-motion";
// import GalaxyModel from "../GalaxyModel";
// Planet data with image paths and additional facts
const planetData = [
   {
    name: "Mercury",
    img: "/assets/mercury2.webp",
    fact: "Mercury is the closest planet to the Sun and has no atmosphere.",
    more: `Despite being the smallest planet, Mercury has a massive iron core that generates a magnetic field. Due to its lack of atmosphere, temperatures swing drastically from scorching highs to freezing lows. It completes a trip around the Sun in just 88 Earth days.`,
  },
  {
    name: "Venus",
    img: "/assets/Venus1.webp",
    fact: "Venus is hotter than Mercury due to its thick, toxic atmosphere.",
    more: `Venus has a surface hot enough to melt lead, thanks to its dense carbon dioxide atmosphere that traps heat in a runaway greenhouse effect. Covered in clouds of sulfuric acid, Venus is often called Earth’s “evil twin.”`,
  },
  {
    name: "Earth",
    img: "/assets/earthp.webp",
    fact: "Earth is the only known planet to support life.",
    more: `Earth has a protective atmosphere, magnetic field, liquid water, and diverse ecosystems that support life in all forms. It orbits the Sun once every 365.25 days and rotates on a tilted axis, which causes our seasons.`,
  },
  {
    name: "Mars",
    img: "/assets/marsp.webp",
    fact: "Mars is called the 'Red Planet' due to iron oxide on its surface.",
    more: `Mars has polar ice caps, ancient riverbeds, and massive volcanoes like Olympus Mons. Scientists believe Mars may have once supported microbial life and continue to explore its surface via rovers and orbiters.`,
  },
  {
    name: "Jupiter",
    img: "/assets/jupiter.webp",
    fact: "Jupiter is the largest planet with a Great Red Spot storm.",
    more: `Jupiter’s immense gravity protects the inner solar system by deflecting comets and asteroids. It’s a gas giant made mostly of hydrogen and helium, and it has dozens of moons, including Ganymede, which is larger than Mercury.`,
  },
  {
    name: "Saturn",
    img: "/assets/saturn1.webp",
    fact: "Saturn is famous for its beautiful ring system.",
    more: `Its rings are made of ice and rock, ranging from tiny grains to boulders. Saturn is less dense than water — it would float in a giant bathtub! It's home to many moons, including Titan, which has a thick atmosphere.`,
  },
  {
    name: "Uranus",
    img: "/assets/uranus.webp",
    fact: "Uranus rotates on its side, unlike other planets.",
    more: `This sideways spin likely resulted from a massive collision long ago. Uranus has a pale blue color due to methane gas in its atmosphere, and it experiences extreme seasons that last over 20 Earth years each.`,
  },
  {
    name: "Neptune",
    img: "/assets/Neptune.webp",
    fact: "Neptune is the windiest planet in the solar system.",
    more: `Winds on Neptune can reach over 1,200 miles per hour! It's a cold, blue gas giant with a dynamic atmosphere, dark storms, and faint rings. Its moon Triton is one of the few in the solar system with geysers.`,
  },

];

const Explore = () => {
  const [expanded, setExpanded] = useState({});

  const toggleExpand = (planetName) => {
    setExpanded((prev) => ({
      ...prev,
      [planetName]: !prev[planetName],
    }));
  };

  return (
    <section
      id="explore"
      className="relative min-h-screen px-6 py-20 text-white bg-gradient-to-b from-black via-gray-900 to-black"
    >
      <div className="absolute inset-0 -z-20">
        <canvas id="stars" className="w-full h-full"></canvas>
      </div>

      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="mb-16 text-5xl font-extrabold tracking-wide text-center text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-pink-500 to-blue-400 animate-pulse"
      >
        Explore the Planets
        {/* <GalaxyModel /> */}
      </motion.h2>

      <div className="grid max-w-6xl gap-10 mx-auto md:grid-cols-2 lg:grid-cols-3">
        {planetData.map((planet, i) => (
          <motion.div
            key={planet.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="p-6 text-center transition-transform shadow-xl bg-gradient-to-tr from-indigo-900 via-purple-900 to-pink-900 rounded-xl hover:scale-105"
          >
            <img
              src={planet.img}
              alt={planet.name}
              className="object-cover w-32 h-32 mx-auto mb-4 border-2 border-indigo-300 rounded-full shadow-md"
            />
            <h3 className="mb-2 text-3xl font-semibold text-indigo-300">
              {planet.name}
            </h3>
            <p className="text-sm text-gray-200">{planet.fact}</p>
            {expanded[planet.name] && (
              <p className="mt-2 text-sm text-pink-200">{planet.more}</p>
            )}
            <button
              className="mt-2 text-sm font-medium text-blue-300 hover:underline"
              onClick={() => toggleExpand(planet.name)}
            >
              {expanded[planet.name] ? "Read Less" : "Read More"}
            </button>
          </motion.div>
        ))}
      </div>

     {/* YouTube video section */}
<motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 1 }}
  className="max-w-5xl px-4 mx-auto mt-24"
>
  <h3 className="mb-6 text-3xl font-semibold text-center text-indigo-400">
    Watch Planet Overview
  </h3>

  <div className="relative overflow-hidden shadow-2xl rounded-xl bg-black/30 backdrop-blur-lg">
    <div
         style={{
              width: "100%",
              height: "90vh",
              maxWidth: "1000px",
              margin: "0 auto",
              position: "relative",
            }}
          >
    
      <iframe
        className="w-full h-full rounded-xl"
        src="https://www.youtube.com/embed/libKVRa01L8?controls=0&modestbranding=1&rel=0&showinfo=0"
        title="Planet Overview"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        style={{
          filter: "contrast(1.05) brightness(1.1)",
          borderRadius: "1rem",
        }}
      ></iframe>

      {/* Fake Controls Overlay (Optional for deception) */}
      <div className="absolute bottom-0 left-0 right-0 h-12 pointer-events-none bg-gradient-to-t from-black/80 to-transparent rounded-b-xl"></div>
    </div>
  </div>
</motion.div>

    </section>
  );
};

export default Explore;
