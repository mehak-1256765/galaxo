import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const questions = [
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Venus", "Mars", "Jupiter", "Saturn"],
    answer: "Mars",
  },
  {
    question: "Which planet is the largest in our Solar System?",
    options: ["Earth", "Saturn", "Jupiter", "Neptune"],
    answer: "Jupiter",
  },
  {
    question: "What is the hottest planet in our Solar System?",
    options: ["Mercury", "Venus", "Mars", "Earth"],
    answer: "Venus",
  },
  {
    question: "Which planet has the most moons?",
    options: ["Jupiter", "Saturn", "Uranus", "Neptune"],
    answer: "Saturn",
  },
];

const badges = [
  { label: "Trivia Titan", icon: "🧠" },
  { label: "Cosmic Whiz", icon: "🌟" },
  { label: "Planet Genius", icon: "🪐" },
];

const TriviaTime = () => {
  const [currentQ, setCurrentQ] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selected, setSelected] = useState(null);

  const handleAnswer = (option) => {
    setSelected(option);
    if (option === questions[currentQ].answer) {
      setScore((prev) => prev + 1);
    }
    setTimeout(() => {
      if (currentQ + 1 === questions.length) {
        setShowResult(true);
      } else {
        setCurrentQ((prev) => prev + 1);
        setSelected(null);
      }
    }, 1000);
  };

  const progressPercent = ((currentQ + (showResult ? 1 : 0)) / questions.length) * 100;

  return (
    <section className="min-h-screen px-6 py-16 text-white bg-gradient-to-b from-black to-gray-900 flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-6 text-indigo-400">🧠 Trivia Time</h1>

      {/* Progress Bar */}
      <div className="w-full max-w-xl mb-10 bg-gray-800 h-4 rounded-full overflow-hidden">
        <div
          className="bg-indigo-500 h-4 transition-all duration-500"
          style={{ width: `${progressPercent}%` }}
        />
      </div>

      <AnimatePresence mode="wait">
        {!showResult ? (
          <motion.div
            key={currentQ}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="w-full max-w-xl flex flex-col items-center"
          >
            <div className="text-xl text-center mb-6 text-gray-200">
              {questions[currentQ].question}
            </div>
            <div className="w-full flex flex-col gap-4">
              {questions[currentQ].options.map((option) => (
                <button
                  key={option}
                  onClick={() => !selected && handleAnswer(option)}
                  className={`py-3 rounded-lg font-semibold text-lg w-full
                    ${
                      selected === option
                        ? option === questions[currentQ].answer
                          ? "bg-green-600"
                          : "bg-red-600"
                        : "bg-indigo-700 hover:bg-indigo-600"
                    }
                    transition`}
                  disabled={!!selected}
                >
                  {option}
                </button>
              ))}
            </div>
            <div className="mt-6 text-indigo-300 font-semibold">
              Question {currentQ + 1} of {questions.length}
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="result"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold mb-4 text-indigo-300">🎉 Quiz Complete!</h2>
            <p className="text-xl text-gray-200 mb-6">
              Your Score: {score} / {questions.length}
            </p>

            <div className="flex justify-center gap-4 flex-wrap mb-6">
              {badges.map((badge, i) => (
                <motion.div
                  key={badge.label}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.4 + i * 0.2 }}
                  className="bg-indigo-700 px-4 py-2 rounded-xl font-bold text-white border-2 border-indigo-400"
                >
                  {badge.icon} {badge.label}
                </motion.div>
              ))}
            </div>

            <button
              onClick={() => {
                setCurrentQ(0);
                setScore(0);
                setShowResult(false);
                setSelected(null);
              }}
              className="bg-indigo-600 hover:bg-indigo-500 text-white py-3 px-6 rounded-lg font-semibold transition"
            >
              🔄 Restart Quiz
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default TriviaTime;
