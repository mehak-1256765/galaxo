import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const constellations = [
  // same constellation data as before
  {
    name: "Orion",
    question: "Which constellation is known as The Hunter?",
    options: ["Orion", "Ursa Major", "Cassiopeia", "Lyra"],
    answer: "Orion",
    img: "/assets/orion.webp",
  },
  {
    name: "Ursa Major",
    question: "Which constellation contains the Big Dipper asterism?",
    options: ["Orion", "Ursa Major", "Cassiopeia", "Lyra"],
    answer: "Ursa Major",
    img: "/assets/ursa.webp",
  },
  {
    name: "Cassiopeia",
    question: "Which constellation is shaped like a W or M and named after a queen?",
    options: ["Lyra", "Cassiopeia", "Andromeda", "Pegasus"],
    answer: "Cassiopeia",
    img: "/assets/cassiopeia.webp",
  },
  {
    name: "Lyra",
    question: "Which constellation contains the bright star Vega?",
    options: ["Lyra", "Draco", "Taurus", "Cepheus"],
    answer: "Lyra",
    img: "/assets/lyra.webp",
  },
  {
    name: "Scorpius",
    question: "Which constellation represents a scorpion?",
    options: ["Scorpius", "Orion", "Leo", "Aquarius"],
    answer: "Scorpius",
    img: "/assets/scorpus2.webp",
  },
];

const StarLocator = () => {
  const [currentQ, setCurrentQ] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const resultRef = useRef(null);

  const handleAnswer = (option) => {
    if (selected) return;
    setSelected(option);
    if (option === constellations[currentQ].answer) {
      setScore(score + 1);
    }
    setTimeout(() => {
      if (currentQ + 1 === constellations.length) {
        setShowResult(true);
      } else {
        setCurrentQ(currentQ + 1);
        setSelected(null);
      }
    }, 1200);
  };

  useEffect(() => {
    if (showResult && resultRef.current) {
      resultRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [showResult]);

  const getBadge = () => {
    if (score === constellations.length) return "🏅 Gold Star";
    if (score >= constellations.length - 1) return "🥈 Silver Star";
    return "🥉 Bronze Star";
  };

  const questionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
  };

  const optionsContainerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.1 } },
    exit: { opacity: 0, y: -20 },
  };

  const optionVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 10 },
  };

  return (
    <section className="flex flex-col items-center min-h-screen px-6 py-16 text-white bg-gradient-to-b from-black via-gray-900 to-black">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-8 text-4xl font-extrabold text-indigo-400"
      >
        ✨ Star Locator Quiz
      </motion.h1>

      {!showResult ? (
        <>
          <AnimatePresence mode="wait" initial={false}>
            <motion.img
              key={constellations[currentQ].name}
              src={constellations[currentQ].img}
              alt={constellations[currentQ].name}
              className="object-cover w-64 h-64 mb-6 rounded-lg shadow-lg"
              title={constellations[currentQ].name}
              variants={questionVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            />
          </AnimatePresence>

          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={constellations[currentQ].question}
              className="max-w-2xl mb-6 text-lg text-center text-gray-300"
              variants={questionVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <p>{constellations[currentQ].question}</p>
            </motion.div>
          </AnimatePresence>

          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={`options-${currentQ}`} // Important: change key when question changes
              className="flex flex-col w-full max-w-md gap-4"
              variants={optionsContainerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              layout
            >
              {constellations[currentQ].options.map((option) => {
                const isSelected = selected === option;
                const isCorrect = option === constellations[currentQ].answer;

                return (
                  <motion.button
                    key={option}
                    onClick={() => handleAnswer(option)}
                    disabled={!!selected}
                    whileHover={!selected ? { scale: 1.05 } : {}}
                    whileTap={!selected ? { scale: 0.95 } : {}}
                    animate={
                      isSelected
                        ? isCorrect
                          ? { scale: [1, 1.1, 1], backgroundColor: "#16a34a" }
                          : { scale: [1, 0.9, 1], backgroundColor: "#dc2626" }
                        : {}
                    }
                    transition={{ duration: 0.3 }}
                    variants={optionVariants}
                    className={`py-3 rounded-lg font-semibold text-lg border text-white
                    ${
                      isSelected
                        ? isCorrect
                          ? "border-green-400 bg-green-600"
                          : "border-red-400 bg-red-600"
                        : "border-indigo-500 bg-indigo-700 hover:bg-indigo-600"
                    }`}
                  >
                    {option}
                  </motion.button>
                );
              })}
            </motion.div>
          </AnimatePresence>

          <motion.div
            className="mt-6 font-semibold text-indigo-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            Question {currentQ + 1} of {constellations.length}
          </motion.div>
        </>
      ) : (
        <motion.div
          ref={resultRef}
          className="max-w-md p-6 mt-10 text-center bg-gray-800 shadow-xl rounded-xl"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="mb-4 text-3xl font-bold text-green-400">🎉 Quiz Complete!</h2>
          <p className="mb-4 text-xl text-indigo-300">
            Your Score: <span className="font-bold text-white">{score}</span> / {constellations.length}
          </p>
          <p className="mb-6 text-lg font-semibold text-yellow-300">{getBadge()}</p>
          <button
            onClick={() => {
              setCurrentQ(0);
              setScore(0);
              setShowResult(false);
              setSelected(null);
            }}
            className="px-6 py-3 font-semibold text-white transition bg-indigo-600 rounded-lg hover:bg-indigo-500"
          >
            🔁 Restart Quiz
          </button>
        </motion.div>
      )}
    </section>
  );
};

export default StarLocator;
