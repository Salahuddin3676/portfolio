import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { projects } from "../data";
import { BsGithub } from "react-icons/bs";
import { LiaExternalLinkAltSolid } from "react-icons/lia";

const Projects = () => {
  useEffect(() => {
    Aos.init({
      duration: 1200,
      once: true,
    });
  }, []);

  return (
    <section
      data-aos="fade-right"
      id="projects"
      className="pt-20 flex flex-col items-center lg:items-start w-full min-h-screen"
    >
      <h1 className="text-4xl lg:text-5xl font-bold dark:text-yellow-100 text-indigo-950 font-Poppins mb-4 lg:text-left ">
        Projects
      </h1>
      <p
        data-aos="fade-right"
        className="font-Montserrat leading-7 text-center lg:text-left dark:text-gray-300 max-w-4xl mb-12"
      >
        Here are the projects that I developed 👇
      </p>

      <div className="flex flex-col w-full justify-between gap-10 items-center">
        {projects.map((project) => {
          const { id, img, title, info, techUsed, githubLink, demoLink } =
            project;
          return (
            <div
              key={id}
              className="flex flex-col lg:flex-row lg:px-10 lg:py-5 justify-between items-center p-3 border dark:border-slate-600 dark:bg-teal-950 border-gray-300 bg-white rounded-md"
            >
              <div className=" w-[95%] rounded-sm lg:w-[48%] mb-5 lg:mb-0">
                <img src={img} className=" rounded-sm" alt="" />
              </div>
              <div
                data-aos="fade-left"
                className=" w-full lg:w-[45%] h-full py-5"
              >
                <h3 className="font-bold text-2xl lg:text-3xl font-Poppins text-center mb-5">
                  {title}
                </h3>
                <p className="font-Montserrat leading-7 text-center dark:text-gray-300 mb-6">
                  {info}
                </p>
                <div className="flex w-44 mx-auto items-center mb-8 rounded-sm justify-center gap-3">
                  {techUsed.map((tech, index) => {
                    return (
                      <p
                        key={index}
                        className="odd:text-indigo-500 shadow-md shadow-green-400 dark:shadow-slate-600 px-1.5 py-1 font-Montserrat even:text-green-900 dark:even:text-green-500"
                      >
                        {tech}
                      </p>
                    );
                  })}
                </div>
                <div className="flex flex-col gap-4 lg:gap-4 p-2 items-center justify-center lg:flex-row">
                  <a
                    data-aos="fade-right"
                    href={githubLink}
                    className="flex w-32 h-10 hover:shadow-md hover:shadow-green-400 justify-center hover:bg-slate-900 duration-200 items-center font-Montserrat gap-2 text-sm font-semibold bg-slate-800  text-white dark:bg-blue-400 dark:text-black rounded-sm cursor-pointer"
                  >
                    Code <BsGithub className="text-xl" />
                  </a>
                  <a
                    data-aos="fade-left"
                    href={demoLink}
                    className="flex w-32 h-10 hover:shadow-md hover:shadow-green-400 justify-center hover:bg-slate-900 duration-200 items-center font-Montserrat gap-2  text-sm font-semibold  bg-slate-800 text-white dark:bg-blue-400 dark:text-black rounded-sm cursor-pointer"
                  >
                    Live Demo <LiaExternalLinkAltSolid className="text-2xl" />
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
