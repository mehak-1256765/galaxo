import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const planets = [
  {
    name: "Mercury",
    image: "/assets/mercury2.webp",
    fact: "Mercury is the smallest planet and closest to the Sun.",
    diameter: "4,879 km",
    distance: "57.9 million km from the Sun",
    funFact: "A year on Mercury lasts just 88 Earth days!",
  },
  {
    name: "Venus",
    image: "/assets/Venus1.webp",
    fact: "Venus is the hottest planet with a surface temp of 475°C.",
    diameter: "12,104 km",
    distance: "108.2 million km from the Sun",
    funFact: "Venus spins backwards compared to most planets.",
  },
  {
    name: "Earth",
    image: "/assets/earthp.webp",
    fact: "Earth is the only known planet with life.",
    diameter: "12,742 km",
    distance: "149.6 million km from the Sun",
    funFact: "Earth's atmosphere protects us from harmful solar radiation.",
  },
  {
    name: "Mars",
    image: "/assets/marsp.webp",
    fact: "Mars is known as the Red Planet and may have once had water.",
    diameter: "6,779 km",
    distance: "227.9 million km from the Sun",
    funFact: "Mars has the tallest volcano in the solar system — Olympus Mons!",
  },
  {
    name: "Jupiter",
    image: "/assets/jupiter.webp",
    fact: "Jupiter is the largest planet and has a giant red storm.",
    diameter: "139,820 km",
    distance: "778.5 million km from the Sun",
    funFact: "Jupiter has at least 79 moons!",
  },
  {
    name: "Saturn",
    image: "/assets/saturn1.webp",
    fact: "Saturn is famous for its beautiful ring system.",
    diameter: "116,460 km",
    distance: "1.43 billion km from the Sun",
    funFact: "Saturn's rings are mostly made of ice particles.",
  },
  {
    name: "Uranus",
    image: "/assets/uranus.webp",
    fact: "Uranus rotates on its side and has a faint ring system.",
    diameter: "50,724 km",
    distance: "2.87 billion km from the Sun",
    funFact: "Uranus is known as the 'ice giant' because of its icy composition.",
  },
  {
    name: "Neptune",
    image: "/assets/Neptune.webp",
    fact: "Neptune is the windiest planet with supersonic winds.",
    diameter: "49,244 km",
    distance: "4.5 billion km from the Sun",
    funFact: "Neptune has a dark storm similar to Jupiter’s Great Red Spot!",
  },
];

function PlanetCard({ planet, active }) {
  return (
    <AnimatePresence mode="wait">
      {active && (
        <motion.section
          key={planet.name}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.8 }}
          className="glass-card"
          style={{
            height: "60vh",
            maxWidth: "720px",
            width: "90%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            padding: "2rem",
            backdropFilter: "blur(16px)",
            backgroundColor: "rgba(255, 255, 255, 0.05)",
            borderRadius: "24px",
            margin: "auto",
            boxShadow: "0 8px 32px rgba(255, 255, 255, 0.1)",
            color: "white",
            userSelect: "none",
            textAlign: "center",
          }}
        >
          <motion.img
            src={planet.image}
            alt={planet.name}
            style={{
              width: 200,
              height: 200,
              borderRadius: "50%",
              objectFit: "cover",
              marginBottom: "1.5rem",
              background: "transparent",
              boxShadow: "0 0 15px rgba(255, 255, 255, 0.25)",
            }}
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            loading={planet.name === "Mercury" ? "eager" : "lazy"}
          />
          <h2 style={{ fontSize: "3rem", marginBottom: "1rem" }}>{planet.name}</h2>
          <p style={{ fontSize: "1.3rem", marginBottom: "1rem", opacity: 0.85 }}>{planet.fact}</p>
          <p style={{ fontSize: "1rem", marginBottom: "0.8rem", fontStyle: "italic", opacity: 0.7 }}>
            Diameter: {planet.diameter}
          </p>
          <p style={{ fontSize: "1rem", marginBottom: "0.8rem", fontStyle: "italic", opacity: 0.7 }}>
            Distance from Sun: {planet.distance}
          </p>
          <p style={{ fontSize: "1rem", marginBottom: "2rem", opacity: 0.75 }}>
            Fun Fact: {planet.funFact}
          </p>
          <a
            href="/explore"
            style={{
              padding: "0.75rem 2.2rem",
              borderRadius: "9999px",
              border: "none",
              background: "linear-gradient(90deg, #4f46e5 0%, #3b82f6 50%, #ec4899 100%)",
              color: "white",
              fontWeight: "bold",
              fontSize: "1.1rem",
              userSelect: "none",
              textDecoration: "none",
              transition: "transform 0.2s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            Learn More
          </a>
        </motion.section>
      )}
    </AnimatePresence>
  );
}

export default function SolarSystemCards() {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const refs = React.useRef([]);

  React.useEffect(() => {
    refs.current = refs.current.slice(0, planets.length);

    const observers = refs.current.map((ref, i) => {
      if (!ref) return null;
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setCurrentIndex(i);
            }
          });
        },
        { threshold: 0.6 }
      );
      observer.observe(ref);
      return observer;
    });

    return () => {
      observers.forEach((observer) => observer && observer.disconnect());
    };
  }, []);

  return (
    <div
      className="no-scrollbar"
      style={{
        height: "100vh",
        overflowY: "scroll",
        overflowX: "hidden",
        scrollSnapType: "y mandatory",
        background: "transparent",
        scrollbarWidth: "none", // Firefox
        msOverflowStyle: "none", // IE
      }}
    >
      {planets.map((planet, idx) => (
        <div
          key={planet.name}
          ref={(el) => (refs.current[idx] = el)}
          style={{
            scrollSnapAlign: "start",
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <PlanetCard planet={planet} active={currentIndex === idx} />
        </div>
      ))}
      <style>
        {`
          .no-scrollbar::-webkit-scrollbar {
            display: none;
          }
        `}
      </style>
    </div>
  );
}
