import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const nasaApiKey = "6bHj8cahC17Iaf2TvXqkddCjLatblk8Ch9maMagw";

const missionMilestones = [
  { year: "1958", event: "NASA was established as a US government agency dedicated to space exploration." },
  { year: "1969", event: "Apollo 11 mission successfully landed humans on the Moon for the first time." },
  { year: "1971", event: "Mars 3 became the first spacecraft to land on Mars." },
  { year: "1990", event: "The Hubble Space Telescope was launched into orbit, revolutionizing astronomy." },
  { year: "1997", event: "Mars Pathfinder landed on Mars and deployed the Sojourner rover." },
  { year: "2012", event: "Curiosity rover successfully landed on Mars and began exploring." },
  { year: "2021", event: "Perseverance rover landed on Mars, continuing the search for signs of past life." },
];

const NASAFactsTimelines = () => {
  const [apod, setApod] = useState(null);
  const [photos, setPhotos] = useState([]);

  // Fetch APOD (Astronomy Picture of the Day)
  useEffect(() => {
    fetch(`https://api.nasa.gov/planetary/apod?api_key=${nasaApiKey}`)
      .then(res => res.json())
      .then(data => setApod(data))
      .catch(err => console.error("APOD Error:", err));
  }, []);

  // Fetch Mars rover photos
  useEffect(() => {
    fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=${nasaApiKey}`)
      .then(res => res.json())
      .then(data => setPhotos(data.photos.slice(0, 6)))
      .catch(err => console.error("Rover Error:", err));
  }, []);

  return (
    <section
      id="nasafacts"
      className="min-h-screen pt-28 pb-20 px-6 bg-gradient-to-b from-black to-gray-900 text-white max-w-7xl mx-auto"
      style={{ scrollMarginTop: "4rem" }}
    >
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-bold text-indigo-400 text-center mb-14"
      >
        NASA Timelines & Facts 🚀
      </motion.h2>

      {/* APOD Top Section */}
      {apod && (
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="max-w-4xl mx-auto mb-16 bg-black/40 border border-indigo-700 rounded-3xl p-6 shadow-lg backdrop-blur-lg"
        >
          <h3 className="text-3xl font-bold mb-3 tracking-wide text-indigo-200 text-center">{apod.title}</h3>
          <p className="text-indigo-400 mb-6 text-center">{apod.date}</p>
          {apod.media_type === "image" ? (
            <img
              src={apod.url}
              alt={apod.title}
              className="rounded-2xl shadow-2xl mx-auto mb-6 max-h-[400px] object-contain"
            />
          ) : (
            <iframe
              title="NASA Video"
              src={apod.url}
              frameBorder="0"
              allowFullScreen
              className="w-full h-64 rounded-2xl shadow-2xl mb-6"
            />
          )}
          <p className="text-gray-300 leading-relaxed text-justify">{apod.explanation}</p>
        </motion.div>
      )}

      {/* Description */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="max-w-3xl mx-auto mb-16 text-center text-gray-300 text-lg leading-relaxed"
      >
        Explore some of the most important milestones in NASA’s history, along with stunning
        images captured by Mars rovers. These events shaped space exploration and our understanding
        of the universe.
      </motion.p>

      {/* Timeline Section */}
      <div className="relative border-l-4 border-indigo-600 max-w-3xl mx-auto mb-20">
        {missionMilestones.map(({ year, event }, idx) => (
          <motion.div
            key={year}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.3 }}
            className="mb-12 ml-12 relative"
          >
            <span className="absolute -left-14 top-0 bg-indigo-600 rounded-full w-12 h-12 flex items-center justify-center text-white font-bold text-lg shadow-lg">
              {year}
            </span>
            <p className="text-indigo-200 text-xl font-semibold leading-snug max-w-lg">{event}</p>
          </motion.div>
        ))}
      </div>

      {/* Mars Rover Photos Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
      >
        {photos.length > 0 ? (
          photos.map((photo) => (
            <div key={photo.id} className="bg-black/40 rounded-lg overflow-hidden shadow-lg border border-indigo-700">
              <img
                src={photo.img_src}
                alt={`Mars rover photo taken by ${photo.rover.name}`}
                className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
              />
              <div className="p-4">
                <h3 className="text-indigo-300 font-semibold text-lg mb-1">{photo.rover.name} Rover</h3>
                <p className="text-gray-300 text-sm">
                  Taken on Sol {photo.sol} ({new Date(photo.earth_date).toLocaleDateString()})
                </p>
                <p className="mt-2 text-indigo-400 italic text-xs">{photo.camera.full_name}</p>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center col-span-full text-gray-400">No photos available</p>
        )}
      </motion.div>
    </section>
  );
};

export default NASAFactsTimelines;
