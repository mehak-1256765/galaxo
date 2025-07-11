// AboutSpace.jsx
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export const AboutSpace = () => {
  const [apod, setApod] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(
      "https://api.nasa.gov/planetary/apod?api_key=owDZfeLgdwfWSI6AhkQcM8dO1Dlw5bE7qYbltbYh"
    )
      .then((res) => {
        if (!res.ok) {
          if (res.status === 429) {
            throw new Error("Rate limit exceeded. Please try again later.");
          }
          throw new Error("Failed to fetch data");
        }
        return res.json();
      })
      .then((data) => {
        setApod(data);
        setError(null);
      })
      .catch((err) => {
        setError(err.message);
        setApod(null);
      });
  }, []);

  return (
    <section className="min-h-screen px-6 py-20 text-white bg-gradient-to-b from-gray-900 to-black">
      <h2 className="mb-12 text-4xl font-bold text-center uppercase sm:text-4xl">
        🛰️ About{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400">
          Space
        </span>
      </h2>
      <div className="max-w-4xl mx-auto space-y-6 text-lg">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h3 className="text-2xl font-semibold">What is a Light Year?</h3>
          <p>It’s the distance that light travels in one year — about 9.46 trillion kilometers!</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h3 className="text-2xl font-semibold">Black Holes</h3>
          <p>These are regions in space where gravity is so strong that not even light can escape.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h3 className="text-2xl font-semibold">Time Dilation</h3>
          <p>Einstein’s theory shows that time moves slower near massive objects or at high speeds!</p>
        </motion.div>

        {error && (
          <div className="p-4 mt-10 bg-red-600 rounded">
            <p className="font-semibold text-white">{error}</p>
          </div>
        )}

        {apod && !error && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="mt-10"
          >
            <h3 className="mb-2 text-2xl font-semibold">NASA's Astronomy Picture of the Day</h3>

            {apod.media_type === "image" ? (
              <img
                src={apod.url}
                alt={apod.title}
                className="rounded-xl w-full max-h-[400px] object-cover"
              />
            ) : apod.media_type === "video" ? (
              <div className="aspect-w-16 aspect-h-9">
                <iframe
                  title={apod.title}
                  src={apod.url}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="rounded-xl w-full h-[400px]"
                />
              </div>
            ) : (
              <p>Media type not supported.</p>
            )}

            <p className="mt-2 text-sm opacity-80">{apod.explanation}</p>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default AboutSpace;
