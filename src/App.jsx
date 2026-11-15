import About from "./components/About";
import Experience from "./components/Experience";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-[#f4f4f1] text-[#1c1c1c]">
      <Navbar />
      <main className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <Home />
        <Experience />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
