// AstronautZone.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const questions = [
  {
    question: 'Which planet is known as the Red Planet?',
    options: ['Earth', 'Mars', 'Jupiter', 'Venus'],
    answer: 'Mars',
    explanation: 'Mars is often called the "Red Planet" due to its reddish appearance, caused by iron oxide (rust) on its surface.'
  },
  {
    question: 'What galaxy do we live in?',
    options: ['Andromeda', 'Whirlpool', 'Milky Way', 'Triangulum'],
    answer: 'Milky Way',
    explanation: 'Earth is located in the Milky Way galaxy, a barred spiral galaxy.'
  },
  {
    question: 'Which planet has the most moons?',
    options: ['Earth', 'Saturn', 'Jupiter', 'Neptune'],
    answer: 'Saturn',
    explanation: 'As of recent discoveries, Saturn has overtaken Jupiter as the planet with the most known moons.'
  },
  {
    question: 'What is the name of NASA’s most famous space telescope?',
    options: ['Hubble', 'Kepler', 'Chandra', 'Webb'],
    answer: 'Hubble',
    explanation: 'The Hubble Space Telescope has provided stunning images and critical astronomical data since 1990.'
  },
  {
    question: 'Which celestial body defines a year on Earth?',
    options: ['Moon', 'Mars', 'Sun', 'Jupiter'],
    answer: 'Sun',
    explanation: 'A year is defined by one full orbit of Earth around the Sun.'
  },
  {
    question: 'Which planet is the hottest in our solar system?',
    options: ['Mercury', 'Venus', 'Mars', 'Jupiter'],
    answer: 'Venus',
    explanation: 'Venus has a thick atmosphere of carbon dioxide causing a runaway greenhouse effect, making it hotter than Mercury.'
  },
  {
    question: 'What protects Earth from meteoroids and radiation?',
    options: ['Ozone Layer', 'Clouds', 'Magnetic Field', 'Atmosphere'],
    answer: 'Atmosphere',
    explanation: 'Earth’s atmosphere burns up most meteoroids and filters harmful radiation.'
  },
  {
    question: 'What was the first human-made object to land on the moon?',
    options: ['Apollo 11', 'Luna 2', 'Sputnik', 'Chandrayaan-1'],
    answer: 'Luna 2',
    explanation: 'The Soviet Luna 2 was the first human-made object to impact the Moon in 1959.'
  },
];

export const AstronautZone = () => {
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [userAnswers, setUserAnswers] = useState([]);

  const handleOptionClick = (option) => {
    const isCorrect = option === questions[index].answer;
    if (isCorrect) {
      setScore(score + 1);
    }
    setUserAnswers([...userAnswers, { selected: option, ...questions[index] }]);
    const next = index + 1;
    if (next < questions.length) {
      setIndex(next);
    } else {
      setShowResult(true);
    }
  };

  return (
    <section
      className="min-h-screen px-6 py-20 text-center text-white"
      style={{
        background: 'radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%)',
        backgroundImage: `radial-gradient(white 1px, transparent 1px), radial-gradient(white 1px, transparent 1px)`,
        backgroundSize: '60px 60px',
        backgroundPosition: '0 0, 30px 30px'
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-xl mx-auto"
      >
        <h2 className="mb-12 text-4xl font-bold text-center uppercase sm:text-4xl">
          🚀{' '}
          <span className="mb-6 text-4xl font-extrabold text-transparent bg-gradient-to-r from-pink-500 to-yellow-400 bg-clip-text">
            Astronaut Zone
          </span>
        </h2>
        {!showResult ? (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="p-8 shadow-lg bg-white/10 rounded-2xl backdrop-blur-md"
          >
            <h3 className="mb-4 text-xl font-semibold">{questions[index].question}</h3>
            <div className="space-y-3">
              {questions[index].options.map((opt) => (
                <button
                  key={opt}
                  onClick={() => handleOptionClick(opt)}
                  className="block w-full py-2 font-semibold text-white transition-all bg-indigo-500 rounded-full hover:bg-indigo-700"
                >
                  {opt}
                </button>
              ))}
            </div>
          </motion.div>
        ) : (
          <div className="p-8 mt-8 text-white bg-white/10 rounded-2xl backdrop-blur-lg">
            <h3 className="mb-4 text-3xl font-bold">
              {score >= questions.length * 0.6 ? '🎉 Congratulations!' : '💡 Better Luck Next Time!'}
            </h3>
            <p className="mb-4 text-xl">You scored {score}/{questions.length}</p>

            <div className="mt-10 text-left">
              <h4 className="mb-4 text-2xl font-bold text-pink-400">✅ Check Your Answers</h4>
              <ul className="space-y-6">
                {userAnswers.map((qa, idx) => (
                  <li key={idx} className="p-4 rounded-lg bg-white/5">
                    <p className="mb-2 font-semibold">Q{idx + 1}: {qa.question}</p>
                    <p className={`mb-1 ${qa.selected === qa.answer ? 'text-white' : 'text-red-400'}`}>
                      Your Answer: {qa.selected}
                    </p>
                    <p className="text-green-400">Correct Answer: {qa.answer}</p>
                    <p className="mt-2 italic text-gray-300">{qa.explanation}</p>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-10 text-sm text-gray-300">
              <p>
                Explore more space careers & opportunities:
                <ul className="mt-2 space-y-1 list-disc list-inside">
                  <li>
                    <a
                      href="https://www.nasa.gov/careers"
                      className="underline text-cyan-400 hover:text-cyan-200"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      NASA Careers
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.isro.gov.in/Careers.html"
                      className="underline text-cyan-400 hover:text-cyan-200"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      ISRO Opportunities
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.esa.int/About_Us/Careers_at_ESA"
                      className="underline text-cyan-400 hover:text-cyan-200"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      ESA Careers
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.spacex.com/careers/"
                      className="underline text-cyan-400 hover:text-cyan-200"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      SpaceX Jobs
                    </a>
                  </li>
                </ul>
              </p>
            </div>
          </div>
        )}
      </motion.div>
    </section>
  );
};

export default AstronautZone;
