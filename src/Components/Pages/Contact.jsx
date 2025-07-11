import { useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import AOS from "aos";
import "aos/dist/aos.css";
import React from 'react';
const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section
      ref={ref}
      className="pt-[140px] pb-[140px] relative text-white bg-gradient-to-br from-black via-[#0a0a2a] to-black overflow-hidden"
    >
      {/* Starry Background */}
      <div className="absolute inset-0 z-0 bg-[url('/src/assets/stars.gif')] bg-cover opacity-20"></div>

      <div className="container px-4 mx-auto md:px-6 relative z-10">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="max-w-4xl px-4 mx-auto mb-16 text-center"
        >
          <span className="text-[#00E5FF] uppercase font-medium mb-2 block tracking-widest">
            Get in Touch
          </span>
          <h2 className="mb-6 text-4xl font-semibold leading-normal md:leading-[1.3] uppercase text-transparent md:text-5xl bg-gradient-to-r from-blue-400 via-cyan-400 to-pink-500 bg-clip-text" data-aos="fade-up">
            Let's Build Something Great Together
          </h2>
          <p className="text-lg text-gray-300 dark:text-gray-400" data-aos="fade-up">
            Got a stellar idea? Let’s make it shine like the stars.
          </p>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-white/5 backdrop-blur-md rounded-xl p-8 border border-blue-500/20 shadow-xl hover:shadow-blue-500/30 transition-all duration-300">
            <form data-aos="fade-up">
              <div className="grid grid-cols-1 gap-6 mb-6 md:grid-cols-2">
                <div>
                  <label htmlFor="name" className="block mb-2 text-sm font-medium text-blue-200">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full bg-black/30 border border-blue-500/20 rounded-md py-3 px-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00E5FF]"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm font-medium text-blue-200">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full bg-black/30 border border-blue-500/20 rounded-md py-3 px-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00E5FF]"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div className="mb-6">
                <label htmlFor="subject" className="block mb-2 text-sm font-medium text-blue-200">Subject</label>
                <input
                  type="text"
                  id="subject"
                  className="w-full bg-black/30 border border-blue-500/20 rounded-md py-3 px-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00E5FF]"
                  placeholder="Project Inquiry"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block mb-2 text-sm font-medium text-blue-200">Message</label>
                <textarea
                  id="message"
                  rows="5"
                  className="w-full bg-black/30 border border-blue-500/20 rounded-md py-3 px-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00E5FF]"
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-[#00E5FF] to-[#8A2BE2] text-black font-bold rounded-md hover:shadow-xl hover:shadow-[#00E5FF]/40 transition-all duration-300 transform hover:scale-105"
                >
                  Send Message
                  <svg
                    className="w-4 h-4 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </button>
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
