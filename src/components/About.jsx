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
      className="flex items-center justify-center w-full min-h-screen pt-20 lg:pt-0"
    >
      <div className="flex flex-col items-center w-full lg:items-start">
        <h1
          data-aos="fade-up"
          className="mb-8 text-4xl font-bold lg:text-5xl dark:text-yellow-100 text-indigo-950 font-Poppins lg:text-left "
        >
          About Me
        </h1>
        <h3
          data-aos="fade-up"
          className="mb-4 text-2xl font-bold text-center lg:text-3xl font-Montserrat lg:text-left"
        >
          A dedicated Front-end Developer based in Bangalore, India
        </h3>
        <p
          data-aos="zoom-in"
          className="max-w-4xl mb-12 leading-7 text-center font-Montserrat lg:text-left dark:text-gray-300"
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
          className="flex flex-col items-center w-full gap-10 lg:items-start"
        >
          <h4 className="pb-5 text-2xl font-bold border-b-2 border-black dark:border-white font-Montserrat">
            Tech Stack
          </h4>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 justify-center gap-3.5 md:gap-5 ">
            {skills.map((skill) => {
              const { id, title, icon } = skill;
              return (
                <div
                  data-aos="zoom-in"
                  key={id}
                  className={`flex w-24 h-24 p-2 border dark:bg-teal-950 bg-white border-gray-300 dark:border-gray-600 text-black  dark:text-white flex-col gap-1 items-center justify-center  rounded-lg`}
                >
                  <div
                    className={` ${
                      title === "Responsive Design"
                        ? "text-3xl md:text-[28px]"
                        : ""
                    } flex items-center justify-center text-4xl md:text-5xl rounded-full p-1.5`}
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
