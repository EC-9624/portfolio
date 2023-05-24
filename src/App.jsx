import React, { useEffect, useState, createContext } from "react";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import About from "./components/About";
import Timeline from "./components/Timeline";
import Sun from "./components/Sun";
import Moon from "./components/Moon";

export const LangContext = createContext();

function App() {
  //darkMode
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  //lang
  const [lang, setLang] = useState("EN");

  const handleLangSwitch = () => {
    setLang(lang === "EN" ? "JP" : "EN");
  };
  //context

  return (
    <div className="App bg-white dark:bg-stone-900 text-stone-900 dark:text-stone-300 min-h-screen font-inter ">
      <button
        type="button"
        onClick={handleThemeSwitch}
        className="fixed p-2 z-10 right-2 md:right-20 top-4   bg-violet-300 dark:bg-orange-300 text-lg  rounded-md "
      >
        {theme === "dark" ? <Sun /> : <Moon />}
      </button>
      <button
        className="fixed p-2 z-10 right-14 md:right-32 top-4 border rounded-md border-stone-900 dark:border-white font-semibold w-10 h-10"
        onClick={handleLangSwitch}
      >
        {lang}
      </button>

      <About></About>
      <LangContext.Provider value={lang}>
        <Projects />
      </LangContext.Provider>
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
