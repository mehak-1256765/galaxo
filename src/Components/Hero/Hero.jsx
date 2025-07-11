import React, { Suspense, lazy } from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
// import heroImg from "@/assets/hero2.webp?w=600;1200&format=webp&as=src";

const Model3D = lazy(() => import("../model3D"));

const Hero = () => {
  return (
    <div
      className="relative min-h-screen overflow-hidden bg-black pt-[65px] sm:pt-20 lg:pt-24"
      role="main"
    >
      <Helmet>
        <title>Welcome to The Galaxy | Your 3D Universe</title>
        <meta
          name="description"
          content="Embark on a cosmic journey with immersive 3D experiences. Explore the universe through design, creativity, and interactive models."
        />
      </Helmet>

      {/* Starry background placeholder */}
      <div className="absolute inset-0 -z-10">{/* Starry BG */}</div>

      {/* Main container */}
      <div className="container relative z-10 flex flex-col items-center justify-center px-6 mx-auto text-center sm:flex-row sm:text-left sm:justify-between sm:gap-10 lg:px-20">
        {/* Left: Text Content */}
        <motion.div
          className="max-w-xl space-y-6 text-white"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-3xl font-bold leading-snug uppercase sm:text-4xl md:text-5xl lg:text-4xl">
            Welcome to{" "}
            <span className="text-transparent uppercase bg-clip-text bg-gradient-to-r from-indigo-400 via-pink-500 to-blue-400 animate-pulse">
              The Galaxy
            </span>
          </h1>

          <p className="text-lg text-gray-300 sm:text-xl">
            Embark on a cosmic journey where creativity meets the stars. Dive
            into immersive 3D experiences and explore the universe through code,
            design, and imagination.
          </p>

          <div className="flex flex-wrap justify-center gap-4 sm:justify-start">
            <a
              href="/mission"
              className="px-6 py-3 font-semibold text-white transition-transform transform rounded-full shadow-lg hover:scale-105"
              style={{
                background:
                  "linear-gradient(90deg, #4f46e5 0%, #ec4899 50%, #3b82f6 100%)",
              }}
            >
              Start Your Journey
            </a>
            <a
              href="/contact"
              className="px-6 py-3 font-medium text-gray-300 transition-all border border-gray-600 rounded-full hover:bg-white/10 backdrop-blur-sm"
            >
              Launch Contact
            </a>
          </div>
        </motion.div>

        {/* Right: 3D Model and Image */}
        <Suspense
          fallback={
            <div className="w-full max-w-md mx-auto  rounded-lg h-96 animate-pulse sm:max-w-lg" />
          }
        >
          <motion.div
            className="w-full max-w-md mx-auto mt-12 sm:mt-0 sm:max-w-lg"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.2 }}
          >
            <img
              src="assets/hero2.webp"
              alt="Galaxy"
              loading="lazy"
              width="600"
              height="400"
              className="object-cover w-full h-auto mt-6 rounded-lg shadow-lg"
            />
         
          </motion.div>
             <Model3D />
        </Suspense>
      </div>
    </div>
  );
};

export default Hero;
