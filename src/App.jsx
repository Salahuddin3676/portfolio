import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";
import { socialLinks } from "./data";

export default function App() {
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  useEffect(() => {
    const element = document.documentElement;
    if (theme === "dark") {
      element.classList.add("dark");
    } else {
      element.classList.remove("dark");
    }
  }, [theme]);

  return (
    <div>
      <Navbar theme={theme} setTheme={setTheme} />
      <div
        className={`bg-[#f9f9f9e1] dark:bg-[#23252F] dark:text-white  duration-700 delay-100 px-6 md:px-16 lg:px-16 xl:px-40 flex items-center flex-col`}
      >
        <Home />
        <About />
        <Projects />
        <Contact />
      </div>
      <Footer />
    </div>
  );
}
