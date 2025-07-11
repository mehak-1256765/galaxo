import React, { useState, useEffect } from "react";

// Define rocket parts
const parts = [
  { id: "engine", name: "Engine", img: "/assets/engine2.webp" },
  { id: "fuel", name: "Fuel Tank", img: "/assets/fuel.webp" },
  { id: "nav", name: "Navigation System", img: "/assets/navigation.avif" },
];

const smallRocketImg = "/assets/rocket1.webp";

const RocketBuilder = () => {
  const [draggedPart, setDraggedPart] = useState(null);
  const [assembledParts, setAssembledParts] = useState({});
  const [launched, setLaunched] = useState(false);
  const [showCongrats, setShowCongrats] = useState(false);
  const [countdown, setCountdown] = useState(null);

  const onDragStart = (e, id) => setDraggedPart(id);
  const onDrop = (e, id) => {
    e.preventDefault();
    if (!assembledParts[id]) {
      setAssembledParts((prev) => ({ ...prev, [id]: true }));
    }
    setDraggedPart(null);
  };
  const onDragOver = (e) => e.preventDefault();

  const handleLaunch = () => {
    setCountdown(3);
  };

  useEffect(() => {
    if (countdown === null) return;
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      setLaunched(true);
      setCountdown(null);
      setTimeout(() => setShowCongrats(true), 3000);
    }
  }, [countdown]);

  // Save progress in localStorage after launch & congrats shown
  useEffect(() => {
    if (showCongrats) {
      localStorage.setItem("rocketBuilderCompleted", "true");
    }
  }, [showCongrats]);

  const allAssembled = Object.keys(assembledParts).length === parts.length;

  if (launched && showCongrats) {
    return (
      <section className="flex flex-col items-center justify-center min-h-screen text-white bg-black">
        <div className="text-4xl font-bold text-green-400 animate-fade-in">
          🎉 Congrats! Your rocket has launched! 🌍🔥
        </div>
        <style jsx>{`
          .animate-fade-in {
            animation: fadeIn 1.5s ease forwards;
          }
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(10px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}</style>
      </section>
    );
  }

  return (
    <section className="flex flex-col items-center min-h-screen px-6 py-16 text-white bg-black">
      {!allAssembled && (
        <>
          <h1 className="mb-6 text-4xl font-bold text-indigo-400">Rocket Builder</h1>
          <p className="max-w-3xl mb-10 text-center text-gray-300">
            Drag each rocket component and drop it onto the rocket frame to assemble your spacecraft!
          </p>

          <div className="flex flex-col justify-center w-full max-w-5xl gap-10 md:flex-row">
            <div className="flex flex-wrap justify-center gap-6 md:w-1/2">
              {parts.map(({ id, name, img }) => (
                <img
                  key={id}
                  src={img}
                  alt={name}
                  draggable={!assembledParts[id]}
                  onDragStart={(e) => onDragStart(e, id)}
                  className={`w-28 h-28 object-cover rounded-lg border-4 border-indigo-600 cursor-move ${
                    assembledParts[id]
                      ? "opacity-50 pointer-events-none"
                      : "hover:scale-105 transition-transform"
                  }`}
                  title={name}
                />
              ))}
            </div>

            <div className="flex flex-col items-center gap-8 md:w-1/2">
              <div
                onDrop={(e) => onDrop(e, draggedPart)}
                onDragOver={onDragOver}
                className="w-48 h-[28rem] border-4 border-indigo-700 rounded-xl bg-gray-900 flex flex-col justify-end items-center relative"
              >
                {parts.map(({ id, name, img }) => (
                  <div
                    key={id}
                    className={`w-40 h-28 mb-1 rounded-lg border-4 ${
                      assembledParts[id]
                        ? "border-solid border-indigo-500"
                        : "border-dashed border-indigo-500 bg-transparent"
                    } flex justify-center items-center`}
                  >
                    {assembledParts[id] ? (
                      <img
                        src={img}
                        alt={name}
                        className="object-cover w-full h-full rounded-lg"
                        title={name}
                      />
                    ) : (
                      `Drop ${name}`
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </>
      )}

      {/* After assembly - show only rocket and button */}
      {allAssembled && !launched && (
        <div className="flex flex-col items-center mt-32">
          <img
            src={smallRocketImg}
            alt="Rocket Ready"
            className="w-24 h-24 animate-bounceRocket"
          />
          <button
            onClick={handleLaunch}
            className="px-6 py-3 mt-10 font-bold text-black transition bg-green-500 rounded-full hover:bg-green-400"
            disabled={countdown !== null}
          >
            {countdown === null ? "Ready to Launch 🚀" : countdown}
          </button>
        </div>
      )}

      {/* Launching rocket animation (no smoke) */}
      {launched && !showCongrats && (
        <div className="relative mt-32">
          <img
            src={smallRocketImg}
            alt="Rocket Launching"
            className="w-24 h-24 animate-liftOff"
          />
        </div>
      )}

      {/* Custom animations */}
      <style jsx>{`
        @keyframes bounceRocket {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-15px);
          }
        }
        .animate-bounceRocket {
          animation: bounceRocket 2s ease-in-out infinite;
        }

        @keyframes liftOff {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(-600px);
          }
        }
        .animate-liftOff {
          animation: liftOff 2s ease forwards;
        }
      `}</style>
    </section>
  );
};

export default RocketBuilder;
