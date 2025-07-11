import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
// import GalaxyModel from "../GalaxyModel";

const Learn = () => {
  const navigate = useNavigate();

  const cardClass =
    "flex flex-col justify-between p-6 bg-gradient-to-tr from-indigo-900 via-purple-900 to-pink-900 rounded-xl shadow-xl hover:scale-[1.05] transform transition-transform cursor-pointer";

  return (
    <section
      id="learn"
      className="relative min-h-screen px-6 py-16 overflow-hidden text-white bg-gradient-to-b from-black via-gray-900 to-black"
    >
      <div className="absolute inset-0 bg-black -z-20">
        <canvas id="stars" className="w-full h-full"></canvas>
      </div>

      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="mb-20 text-5xl font-extrabold tracking-wide text-center text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-pink-500 to-blue-400 animate-pulse"
      >
        {/* <GalaxyModel /> */}
        Learn About the Universe
      </motion.h2>

      <div className="grid gap-16 mx-auto max-w-7xl md:grid-cols-2">
        {/* Card 1: Galaxy Types */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className={cardClass}
        >
          <div>
            <h3 className="flex items-center gap-3 mb-4 text-3xl font-semibold text-indigo-300">
              {/* <img
                src="https://cdn-icons-png.flaticon.com/512/187/187999.png"
                alt="Galaxy Icon"
                className="w-10 h-10"
              /> */}
              Galaxy Types
            </h3>
            <p className="mb-6 leading-relaxed text-gray-300">
              Discover the three main galaxy types: Spiral, Elliptical, and Irregular. Each galaxy has unique shapes and fascinating stories.
            </p>
            <img
              src="/assets/spiral.webp"
              alt="Spiral Galaxy"
              style={{ width: "500px", height: "500px" }}
              className="mx-auto mb-6 border border-indigo-600 rounded-lg shadow-lg"
            />
          </div>
          <a
            href="https://science.nasa.gov/universe/galaxies/types/"
            target="_blank"
            rel="noopener noreferrer"
            className="self-start inline-block px-6 py-3 font-bold text-indigo-900 transition bg-indigo-400 rounded-lg hover:bg-indigo-500"
          >
            Learn More on NASA
          </a>
        </motion.div>

        {/* Card 2: Black Holes & Time */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className={cardClass}
        >
          <div>
            <h3 className="mb-6 text-4xl font-semibold text-indigo-400">Black Holes & Time</h3>
            <p className="mb-6 text-lg leading-relaxed text-gray-300">
              Black holes warp time and space. Near them, time passes slower—a mind-bending effect known as time dilation.
            </p>
            <img
              src="/assets/blackhole.webp"
              alt="Black Hole"
              style={{ width: "500px", height: "500px" }}
              className="mx-auto mb-6 border border-indigo-600 rounded-lg shadow-lg"
            />
          </div>
          <a
            href="https://www.nasa.gov/black-holes"
            target="_blank"
            rel="noopener noreferrer"
            className="self-start inline-block px-6 py-3 font-bold text-indigo-900 transition bg-indigo-400 rounded-lg hover:bg-indigo-500"
          >
            Learn More on NASA
          </a>
        </motion.div>

        {/* Card 3: Nebulae */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className={cardClass}
        >
          <div>
            <h3 className="mb-6 text-3xl font-semibold text-indigo-300">Nebulae</h3>
            <p className="mb-6 text-gray-300">
              Nebulae are colorful clouds of gas where stars are born. They’re among the most beautiful celestial phenomena.
            </p>
            <img
              src="/assets/nebulae.webp"
              alt="Nebula"
              style={{ width: "500px", height: "500px" }}
              className="mx-auto mb-6 border border-indigo-600 rounded-lg shadow-lg"
            />
          </div>
          <a
            href="https://www.nasa.gov/nebulae"
            target="_blank"
            rel="noopener noreferrer"
            className="self-start inline-block px-6 py-3 font-bold text-indigo-900 transition bg-indigo-400 rounded-lg hover:bg-indigo-500"
          >
            Learn More on NASA
          </a>
        </motion.div>

        {/* Card 4: Space Facts */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className={cardClass}
        >
          <div>
            <h3 className="mb-6 text-3xl font-semibold text-indigo-300">Space Facts</h3>
            <p className="mb-6 text-gray-300">
              Did you know a day on Venus is longer than its year? The universe is full of mind-blowing facts!
            </p>
            <img
              src="/assets/space.webp"
              alt="Space Facts"
              style={{ width: "500px", height: "500px" }}
              className="mx-auto mb-6 border border-indigo-600 rounded-lg shadow-lg"
            />
          </div>
          <a
            href="https://www.nasa.gov/stem-content/extreme-space-facts/"
            target="_blank"
            rel="noopener noreferrer"
            className="self-start inline-block px-6 py-3 font-bold text-indigo-900 transition bg-indigo-400 rounded-lg hover:bg-indigo-500"
          >
            Learn More on NASA
          </a>
        </motion.div>

        {/* Card 5: Time Dilation & Wormholes */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className={cardClass}
        >
          <div>
            <h3 className="mb-6 text-3xl font-semibold text-indigo-300">Time Dilation & Wormholes</h3>
            <p className="mb-6 text-gray-300">
              Time slows down near a black hole. Wormholes could be tunnels through space-time, connecting distant parts of the universe.
            </p>
            <img
              src="/assets/wormholes.webp"
              alt="Wormhole"
              style={{ width: "500px", height: "500px" }}
              className="mx-auto mb-6 border border-indigo-600 rounded-lg shadow-lg"
            />
          </div>
          <a
            href="https://science.nasa.gov/universe/what-happens-when-something-gets-too-close-to-a-black-hole/"
            target="_blank"
            rel="noopener noreferrer"
            className="self-start inline-block px-6 py-3 font-bold text-indigo-900 transition bg-indigo-400 rounded-lg hover:bg-indigo-500"
          >
            Learn More on NASA
          </a>
        </motion.div>

        {/* Card 6: Exoplanets & Life Possibility */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className={cardClass}
        >
          <div>
            <h3 className="mb-6 text-3xl font-semibold text-indigo-300">Exoplanets & Life</h3>
            <p className="mb-6 text-gray-300">
              Scientists have discovered thousands of planets outside our solar system. Could one of them support life?
            </p>
            <img
              src="/assets/exo.webp"
              alt="Exoplanet"
              style={{ width: "500px", height: "500px" }}
              className="mx-auto mb-6 border border-indigo-600 rounded-lg shadow-lg"
            />
          </div>
          <a
            href="https://exoplanets.nasa.gov/"
            target="_blank"
            rel="noopener noreferrer"
            className="self-start inline-block px-6 py-3 font-bold text-indigo-900 transition bg-indigo-400 rounded-lg hover:bg-indigo-500"
          >
            Learn More on NASA
          </a>
        </motion.div>
      </div>
     <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="max-w-5xl mx-auto mt-24"
      >
        <h3 className="mb-6 text-3xl font-semibold text-center text-indigo-400">
          Watch: The Most Astounding Fact About Space
        </h3>
        <div className="overflow-hidden rounded-lg shadow-lg aspect-w-16 aspect-h-9 ">
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
              style={{
                width: "100%",
                height: "100%",
                borderRadius: "12px",
                boxShadow: "0 10px 15px rgba(0,0,0,0.3)",
              }}
              src="https://www.youtube.com/embed/9D05ej8u-gU?controls=0&showinfo=0&rel=0&modestbranding=1&autohide=1&iv_load_policy=3"
              title="The Most Astounding Fact - Neil deGrasse Tyson"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </motion.div>

    </section>
  );
};

export default Learn;
