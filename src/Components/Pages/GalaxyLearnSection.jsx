import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import GalaxyImg from "../../assets/galaxy.webp";

const galaxyContent = [
  {
    title: "Galaxy Types",
    desc: "Explore different types of galaxies — Spiral, Elliptical, and Irregular — and understand their unique structures in the universe.",
    link: "/learn#galaxies",
  },
  {
    title: "Interactive Solar System",
    desc: "Visualize the Solar System with 3D models and interactive animations for immersive space learning.",
    link: "/explore#solar-system",
  },
  {
    title: "NASA Facts & Timelines",
    desc: "Learn from verified NASA data, timelines of space missions, and milestones in astronomy.",
    link: "/mission#timeline",
  },
  {
    title: "Learn About The Universe",
    desc: "Learn and expand your cosmic knowledge!",
    link: "/learn#resources",
  },
];

const GalaxyLearnSection = () => {
  useEffect(() => {
    AOS.init({ duration: 800, easing: "ease-out-cubic", once: true });
  }, []);

  return (
    <section className="py-10 text-white backdrop-blur-sm dark:text-white">
      <div className="px-6 mx-auto max-w-7xl">
        {/* Title */}
        <div data-aos="fade-up" className="mb-10 text-center">
          <h2 className="text-3xl font-bold uppercase sm:text-4xl">
            Learn About the{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400">
              Cosmos
            </span>
          </h2>
          <p className="max-w-2xl mx-auto mt-2 text-base text-gray-300 sm:text-lg">
            Deepen your knowledge about galaxies, the solar system, and space science with interactive and educational content.
          </p>
        </div>

        {/* Grid Cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {galaxyContent.map((item, idx) => (
            <div
              key={idx}
              data-aos="fade-up"
              data-aos-delay={idx * 150}
              className="p-5 transition-all duration-300 border border-gray-600 rounded-2xl backdrop-blur-md bg-white/5 hover:bg-white/10"
            >
              <h3 className="mb-2 text-xl font-semibold">{item.title}</h3>
              <p className="mb-4 text-sm text-gray-300">{item.desc}</p>
              <a
                href={item.link}
                className="inline-block text-sm text-cyan-400 hover:underline"
              >
                Learn More →
              </a>
            </div>
          ))}
        </div>

        {/* Right side visual */}
        <div className="flex justify-center mt-14" data-aos="zoom-in">
          <img
            src={GalaxyImg}
            alt="Galaxy Visual"
            className="object-contain w-64 sm:w-80 lg:w-full animate-float"
          />
      
        </div>
      </div>
    </section>
  );
};

export default GalaxyLearnSection;
