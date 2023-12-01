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
      className="flex flex-col items-center w-full min-h-screen pt-20 lg:items-start"
    >
      <h1 className="mb-4 text-4xl font-bold lg:text-5xl dark:text-yellow-100 text-indigo-950 font-Poppins lg:text-left ">
        Projects
      </h1>
      <p
        data-aos="fade-right"
        className="max-w-4xl mb-12 leading-7 text-center font-Montserrat lg:text-left dark:text-gray-300"
      >
        Here are the projects that I developed 👇
      </p>

      <div className="flex flex-col items-center justify-between w-full gap-10">
        {projects.map((project) => {
          const { id, img, title, info, techUsed, githubLink, demoLink } =
            project;
          return (
            <div
              key={id}
              className="flex flex-col items-center justify-between p-3 bg-white border border-gray-300 rounded-md lg:flex-row lg:px-10 lg:py-5 dark:border-slate-600 dark:bg-teal-950"
            >
              <div className=" w-[95%] rounded-sm lg:w-[48%] mb-5 lg:mb-0">
                <img src={img} className="rounded-sm " alt="" />
              </div>
              <div
                data-aos="fade-left"
                className=" w-full lg:w-[45%] h-full py-5"
              >
                <h3 className="mb-5 text-2xl font-bold text-center lg:text-3xl font-Poppins">
                  {title}
                </h3>
                <p className="mb-6 text-[15px] leading-7 text-center font-Montserrat dark:text-gray-300">
                  {info}
                </p>
                <div className="flex items-center justify-center gap-3 mx-auto mb-8 rounded-sm w-44">
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
                <div className="flex flex-col items-center justify-center gap-4 p-2 lg:gap-4 lg:flex-row">
                  <a
                    data-aos="fade-right"
                    href={githubLink}
                    target="_blank"
                    className="flex items-center justify-center w-32 h-10 gap-2 text-sm font-semibold text-white duration-200 rounded-sm cursor-pointer hover:shadow-md hover:shadow-green-400 hover:bg-slate-900 font-Montserrat bg-slate-800 dark:bg-blue-400 dark:text-black"
                  >
                    Code <BsGithub className="text-xl" />
                  </a>
                  <a
                    data-aos="fade-left"
                    href={demoLink}
                    target="_blank"
                    className="flex items-center justify-center w-32 h-10 gap-2 text-sm font-semibold text-white duration-200 rounded-sm cursor-pointer hover:shadow-md hover:shadow-green-400 hover:bg-slate-900 font-Montserrat bg-slate-800 dark:bg-blue-400 dark:text-black"
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
