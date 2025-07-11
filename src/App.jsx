import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Quotes from "./Components/Quotes/Quotes";
import GalaxyLearnSection from "./Components/Pages/GalaxyLearnSection";
import Contact from "./Components/Pages/Contact";
import PrivacyPolicy from "./Components/Footer/PrivacyPolicy";
import TermsOfService from "./Components/Footer/TermsOfService";
import Footer from "./Components/Footer/Footer";
import Learn from "./Components/Pages/Learn";
import Mission from "./Components/Pages/Mission";
import Explore from "./Components/Pages/Explore";
import AOS from "aos";
import "aos/dist/aos.css";
import InteractiveGalaxy from "./Components/Pages/InteractiveGalaxy";
import GalaxyTypesSection from "./Components/Pages/GalaxyTypesSection";
import AstronautZone from "./Components/Pages/AstronautZone";
import AboutSpace from "./Components/Pages/AboutSpace";
import PlanetMatching from "./Components/Pages/PlanetMatching";
import TriviaTime from "./Components/Pages/TriviaTime";
import RocketBuilder from "./Components/Pages/RocketBuilder";
import StarLocator from "./Components/Pages/StarLocator";
import NasaFactsTimelines from "./Components/Pages/NasaFactsTimelines";
// import Login from "./Components/Pages/Login";
// import Register from "./Components/Pages/Register";
// import Dashboard from "./Components/Pages/Dashboard";
// import { ProgressProvider } from "./Components/Pages/ProgressContext";

const App = () => {
  const [isPlay, setIsPlay] = useState(false);

  const togglePlay = () => {
    setIsPlay(!isPlay);
  };

  useEffect(() => {
    document.documentElement.classList.add("dark");
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <Router>
      <main className="overflow-hidden duration-300 dark:bg-black dark:text-white">
        <Navbar />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero togglePlay={togglePlay} />
                <Quotes />
                <GalaxyLearnSection togglePlay={togglePlay} />
                <InteractiveGalaxy togglePlay={togglePlay} />
                <GalaxyTypesSection togglePlay={togglePlay} />
              </>
            }
          />
          <Route path="/contact" element={<Contact togglePlay={togglePlay} />} />
          <Route path="/privacy" element={<PrivacyPolicy togglePlay={togglePlay} />} />
          <Route path="/terms" element={<TermsOfService togglePlay={togglePlay} />} />
          <Route path="/explore" element={<Explore togglePlay={togglePlay} />} />
          <Route path="/mission" element={<Mission togglePlay={togglePlay} />} />
          <Route path="/learn" element={<Learn togglePlay={togglePlay} />} />
          <Route path="/planetmatching" element={<PlanetMatching togglePlay={togglePlay} />} />
          <Route path="/trivia" element={<TriviaTime togglePlay={togglePlay} />} />
          <Route path="/rocket" element={<RocketBuilder togglePlay={togglePlay} />} />
          <Route path="/star" element={<StarLocator togglePlay={togglePlay} />} />
          <Route path="/timelines" element={<NasaFactsTimelines togglePlay={togglePlay} />} />
           <Route path="/astronaut" element={<AstronautZone togglePlay={togglePlay} />} />
          {/* <Route path="/login" element={<Login togglePlay={togglePlay} />} />
          <Route path="/register" element={<Register togglePlay={togglePlay} />} /> */}

          {/* Wrap Dashboard inside ProgressProvider */}
          {/* <Route
            path="/dashboard"
            element={
              <ProgressProvider>
                <Dashboard />
              </ProgressProvider>
            }
          />
 */}        </Routes>

        <Footer />
      </main>
    </Router>
  );
};

export default App;
