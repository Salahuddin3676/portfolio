import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { skills } from "../data";

const About = () => {
  useEffect(() => {
    Aos.init({
      duration: 1500,
      once: true,
    });
  }, []);

  return (
    <section
      id="about"
      className=" min-h-screen pt-20 lg:pt-0 
       w-full flex items-center justify-center"
    >
      <div className="w-full flex flex-col items-center lg:items-start">
        <h1
          data-aos="fade-up"
          className="text-4xl lg:text-6xl font-bold dark:text-cyan-200 text-indigo-950 font-Poppins mb-8 lg:text-left "
        >
          About Me
        </h1>
        <h3
          data-aos="fade-up"
          className="lg:text-3xl text-2xl  mb-4 font-bold font-Montserrat text-center lg:text-left"
        >
          A dedicated Front-end Developer based in Bangalore, India
        </h3>
        <p
          data-aos="zoom-in"
          className="font-Montserrat leading-7 text-center lg:text-left dark:text-gray-300 max-w-4xl mb-12"
        >
          As a Junior Front-End Developer, I possess an impressive stack of
          skills in HTML, CSS, JavaScript, React, Tailwind and SCSS. I excel in
          designing and maintaining responsive websites that offer a smooth user
          experience. My expertise lies in crafting dynamic, engaging interfaces
          through writing clean and optimized code and utilizing development
          tools and techniques.
        </p>
        <div
          data-aos="fade-right"
          className="flex flex-col lg:items-start  w-full items-center gap-10"
        >
          <h4 className="text-2xl border-black dark:border-white font-Montserrat font-bold border-b-2 pb-5">
            Tech Stack
          </h4>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-8 justify-center gap-3.5 md:gap-5 ">
            {skills.map((skill) => {
              const { id, title, icon } = skill;
              return (
                <div
                  data-aos="zoom-in"
                  key={id}
                  className={`flex w-[102px] relative h-[102px] p-2 dark:odd:text-indigo-700 dark:even:text-green-600 odd:text-indigo-700 even:text-green-600 bg-cyan-100 border border-gray-300 dark:border-slate-600 text-black dark:bg-slate-800 dark:text-white flex-col ${
                    title === "Responsive Design" ? "gap-1.5" : "gap-3"
                  } items-center justify-center  rounded-lg`}
                >
                  <div
                    className={` bg-white border text-4xl rounded-full p-1.5`}
                  >
                    {icon}
                  </div>
                  <p className=" text-black dark:text-white font-Montserrat text-xs text-center leading-3.5">
                    {title}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
