import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import React from "react";

const Footer = () => {
  const footerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.2,
        duration: 0.5,
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.footer 
      className="px-4 py-12 text-white bg-black"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={footerVariants}
    >
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          
          {/* GalaXO Info */}
          <motion.div variants={itemVariants} className="space-y-4">
            <div className="mb-6 text-2xl font-bold">
              <span className="text-white">GALA</span>
              <span className="text-[#00E5FF]">XO</span>
            </div>
            <p className="text-[#CCCCCC] text-sm max-w-xs">
              Explore galaxies, stars, and cosmic wonders through curiosity and knowledge.
            </p>
          </motion.div>

          {/* Navigation */}
          <motion.div variants={itemVariants} className="space-y-2">
            <h3 className="text-xl font-semibold mb-2 text-[#00E5FF]">Quick Links</h3>
            <ul className="space-y-1">
              <li><Link to="/" className="hover:text-[#00E5FF]">Home</Link></li>
              <li><Link to="/galaxies" className="hover:text-[#00E5FF]">Galaxy Types</Link></li>
              <li><Link to="/solar-system" className="hover:text-[#00E5FF]">Solar System</Link></li>
              <li><Link to="/learn" className="hover:text-[#00E5FF]">Learn</Link></li>
              <li><Link to="/contact" className="hover:text-[#00E5FF]">Contact</Link></li>
            </ul>
          </motion.div>

          {/* Space Resources */}
          <motion.div variants={itemVariants} className="space-y-2">
            <h3 className="text-xl font-semibold mb-2 text-[#00E5FF]">Resources</h3>
            <ul className="space-y-1">
              <li><a href="https://www.nasa.gov" target="_blank" rel="noreferrer" className="hover:text-[#00E5FF]">NASA</a></li>
              <li><a href="https://esa.int" target="_blank" rel="noreferrer" className="hover:text-[#00E5FF]">ESA</a></li>
              <li><a href="https://hubblesite.org" target="_blank" rel="noreferrer" className="hover:text-[#00E5FF]">Hubble Site</a></li>
            </ul>
          </motion.div>

          {/* Quote */}
          <motion.div variants={itemVariants} className="space-y-2">
            <h3 className="text-xl font-semibold mb-2 text-[#00E5FF]">Inspiration</h3>
            <p className="text-[#CCCCCC] text-sm italic">
              "Somewhere, something incredible is waiting to be known." – Carl Sagan
            </p>
          </motion.div>
        </div>
        <div className="text-center text-[#888] text-sm mt-10">
          Made with ❤️ by Mehak
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
