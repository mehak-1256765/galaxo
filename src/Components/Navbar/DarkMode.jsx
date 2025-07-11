import React, { useState, useEffect } from "react";
import { BiSolidSun, BiSolidMoon } from "react-icons/bi";

const DarkMode = () => {
  // Always start with light mode by default
  const [theme, setTheme] = useState("light");

  const element = document.documentElement;

  useEffect(() => {
    localStorage.setItem("theme", theme);
    if (theme === "dark") {
      element.classList.add("dark");
    } else {
      element.classList.remove("dark");
    }
  }, [theme]);

  return (
    <>
      {theme === "dark" ? (
        <BiSolidSun
          className="text-2xl cursor-pointer"
          onClick={() => setTheme("light")}
        />
      ) : (
        <BiSolidMoon
          className="text-2xl cursor-pointer"
          onClick={() => setTheme("dark")}
        />
      )}
    </>
  );
};

export default DarkMode;
