import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion, AnimatePresence } from "framer-motion";

const faqItems = [
  {
    question: "What is Three.js and how does it enhance web experiences?",
    answer:
      "Three.js is a JavaScript library that allows us to create stunning 3D graphics and animations that run directly in your web browser. It enhances web experiences by adding depth, interactivity, and immersion that traditional 2D websites can't achieve. Our Three.js implementations can include interactive 3D models, animated scenes, product showcases, and immersive storytelling experiences that make your brand stand out from competitors.",
  },
  {
    question: "What technologies do you use for web development?",
    answer:
      "At OneUp, we use modern technologies including React.js, Next.js, Three.js, Tailwind CSS, TypeScript, Node.js, and Express.js. For e-commerce, we implement secure payment gateways, and for real-time applications, we utilize WebRTC and WebSockets. We also use AWS for hosting and deployment, ensuring your website is fast, secure, and reliable.",
  },
  {
    question: "Do you offer maintenance after website launch?",
    answer:
      "Yes! Free maintenance is included in all our packages. Silver and Gold packages include regular maintenance to ensure your site remains functional and secure. Our Diamond package offers weekly updates and dedicated support resources for more complex applications.",
  },
  {
    question: "What makes 3D websites different from regular websites?",
    answer:
      "3D websites utilize technologies like Three.js to create immersive, interactive experiences that standard websites can't offer. They feature depth, perspective, and animation capabilities that engage users more deeply. While they require more development expertise and resources, they provide memorable user experiences that significantly increase engagement and conversion rates.",
  },
  {
    question: "How does your shared hosting work?",
    answer: "Our shared hosting is powered by AWS cloud infrastructure, providing exceptional reliability and performance. All hosting packages include unlimited bandwidth, SSD storage, free SSL certificates, daily backups, and 24/7 monitoring. We manage all technical aspects so you can focus on your business."
  },
  {
    question: "Do your websites work well on mobile devices?",
    answer:
      "Absolutely! All our websites are built with a mobile-first approach using responsive design principles. We rigorously test on multiple devices and screen sizes to ensure your site looks and functions perfectly on smartphones, tablets, laptops, and desktop computers.",
  },
];

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
};

const FAQ = () => {
  const [openFaq, setOpenFaq] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 900, easing: "ease-in-out", once: true });
  }, []);

  const toggleFaq = (index) => {
    setOpenFaq((prev) => (prev === index ? null : index));
  };

  // Split FAQs for two columns
  const leftFAQs = faqItems.slice(0, 3);
  const rightFAQs = faqItems.slice(3, 6);

  return (
    <div className="flex justify-center py-10 text-gray-900 bg-transparent sm:py-16 dark:text-white">
      <div className="flex flex-col items-center w-full gap-12 px-6 max-w-7xl">
        {/* Gradient heading like Services page */}
        <div
          data-aos="fade-down"
          className="max-w-4xl mx-auto text-center"
          style={{ maxWidth: "46rem" }}
        >
        <h1 className="mb-4 text-4xl font-semibold leading-tight uppercase" data-aos="fade-up">
  FREQUENTLY ASKED{" "}
  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-pink-500 dark:from-blue-400 dark:to-pink-400">
    QUESTIONS
  </span>
</h1>

          <p className="max-w-3xl mx-auto text-base text-gray-700 dark:text-gray-300 sm:text-lg">
            Find answers to the most common questions about our services and solutions.
          </p>
        </div>

        {/* Two-column FAQ */}
        <div className="grid w-full max-w-6xl grid-cols-1 gap-8 sm:grid-cols-2">
          {/* Left column */}
          <div>
            {leftFAQs.map((faq, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                data-aos="fade-up"
                data-aos-delay={index * 200}
                className="mb-6 overflow-hidden border border-gray-300 cursor-pointer dark:border-gray-700 rounded-xl bg-white/40 dark:bg-white/10 backdrop-blur-lg"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="flex items-center justify-between w-full p-5 text-left"
                  aria-expanded={openFaq === index}
                  aria-controls={`faq-answer-${index}`}
                >
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white sm:text-xl" data-aos="fade-up">
                    {faq.question}
                  </h4>
                  <svg
                    className={`w-6 h-6 text-blue-500 dark:text-blue-400 transform transition-transform duration-300 ${
                      openFaq === index ? "rotate-180" : ""
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                <AnimatePresence>
                  {openFaq === index && (
                    <motion.div
                      id={`faq-answer-${index}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-5 pb-5 text-base text-gray-700 border-t border-gray-300 dark:text-gray-300 sm:text-lg dark:border-gray-700">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          {/* Right column */}
          <div>
            {rightFAQs.map((faq, index) => {
              const actualIndex = index + 3;
              return (
                <motion.div
                  key={actualIndex}
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                  data-aos="fade-up"
                  data-aos-delay={actualIndex * 200}
                  className="mb-6 overflow-hidden border border-gray-300 cursor-pointer dark:border-gray-700 rounded-xl bg-white/40 dark:bg-white/10 backdrop-blur-lg"
                >
                  <button
                    onClick={() => toggleFaq(actualIndex)}
                    className="flex items-center justify-between w-full p-5 text-left"
                    aria-expanded={openFaq === actualIndex}
                    aria-controls={`faq-answer-${actualIndex}`}
                  >
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white sm:text-xl" data-aos="fade-up">
                      {faq.question}
                      
                    </h4>
                    <svg
                      className={`w-6 h-6 text-blue-500 dark:text-blue-400 transform transition-transform duration-300 ${
                        openFaq === actualIndex ? "rotate-180" : ""
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  <AnimatePresence>
                    {openFaq === actualIndex && (
                      <motion.div
                        id={`faq-answer-${actualIndex}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="px-5 pb-5 text-base text-gray-700 border-t border-gray-300 dark:text-gray-300 sm:text-lg dark:border-gray-700">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
