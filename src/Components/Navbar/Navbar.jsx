import React, { useState, useEffect } from "react";
import LogoDefault from "../../assets/logo.webp";
import { HiMenuAlt1, HiX } from "react-icons/hi";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const NavLinks = [
  { id: 1, name: "Home", link: "/" },
  { id: 2, name: "Explore", link: "/explore" },
  { id: 3, name: "Missions", link: "/mission" },
  { id: 4, name: "Learn", link: "/learn" },
  { id: 5, name: "Contact Us", link: "/contact" },
];

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setShowMenu((prev) => !prev);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = showMenu ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [showMenu]);

  const mobileNav = (
    <motion.div
      initial={{ x: "-100%" }}
      animate={{ x: showMenu ? 0 : "-100%" }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className="fixed top-0 left-0 h-full w-64 bg-black z-[9999] p-6 pt-20 text-white md:hidden"
    >
      <nav className="flex flex-col gap-6">
        {NavLinks.map(({ id, name, link }) => (
          <Link
            key={id}
            to={link}
            onClick={() => setShowMenu(false)}
            className="text-xl font-semibold hover:text-primary"
          >
            {name}
          </Link>
        ))}
      </nav>
    </motion.div>
  );

  const overlay = (
    <div
      className="fixed inset-0 bg-black/50 z-[9998]"
      onClick={toggleMenu}
    />
  );

  return (
    <div className={`fixed top-0 w-full h-[65px] shadow-lg bg-[#03001417] backdrop-blur-md z-50 px-10 ${scrolled ? "backdrop-blur-md" : ""}`}>
      <div className="container flex items-center justify-between py-2 mx-auto md:py-0">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <img src={LogoDefault} alt="Logo" className="relative w-16 h-16" />
          <p className="text-3xl">
            GALA
            <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400">
              XO
            </span>
          </p>
        </Link>

        {/* Desktop Nav */}
        <nav className="items-center hidden gap-6 md:flex">
          {NavLinks.map(({ id, name, link }) => (
            <Link
              key={id}
              to={link}
              className="py-2 text-xl font-semibold transition-colors duration-500 hover:text-primary hover:border-b-2 hover:border-secondary"
            >
              {name}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          {showMenu ? (
            <HiX onClick={toggleMenu} className="cursor-pointer" size={30} />
          ) : (
            <HiMenuAlt1 onClick={toggleMenu} className="cursor-pointer" size={30} />
          )}
        </div>
      </div>

      {/* Conditional Render */}
      {showMenu && overlay}
      {mobileNav}
    </div>
  );
};

export default Navbar;
