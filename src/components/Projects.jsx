import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { alsoBuilt, selectedWork } from "../data";

const caseStudy = [
  { key: "problem", label: "Problem" },
  { key: "built", label: "What I built" },
  { key: "result", label: "Outcome" },
];

const WorkCard = ({ work }) => {
  return (
    <article
      className={`w-full bg-white border border-gray-300 rounded-md dark:border-slate-600 dark:bg-teal-950 ${
        work.lead ? "p-5 sm:p-7 lg:p-9" : "p-4 sm:p-5 lg:p-6"
      }`}
    >
      <h3
        className={`font-bold text-left font-Poppins ${
          work.lead ? "mb-3 text-2xl lg:text-4xl" : "mb-2 text-2xl lg:text-3xl"
        }`}
      >
        {work.title}
      </h3>
      <p
        className={`mb-4 font-medium text-left font-Montserrat text-indigo-700 dark:text-yellow-100 ${
          work.lead ? "text-base lg:text-lg" : "text-[15px]"
        }`}
      >
        {work.outcome}
      </p>
      <p
        className={`mb-5 text-left font-Montserrat dark:text-gray-300 ${
          work.lead ? "text-base leading-7" : "text-[15px] leading-7"
        }`}
      >
        {work.description}
      </p>
      <div className="flex flex-wrap items-center justify-start gap-2 mb-6">
        {work.tags.map((tech) => (
          <p
            key={tech}
            className="px-2 py-1 text-xs font-Montserrat odd:text-indigo-600 even:text-green-900 dark:odd:text-indigo-300 dark:even:text-green-400 border border-gray-200 dark:border-slate-600 rounded-sm"
          >
            {tech}
          </p>
        ))}
      </div>
      <div className="grid gap-5 pt-5 border-t border-gray-200 dark:border-slate-600 md:grid-cols-3">
        {caseStudy.map((item) => (
          <div key={item.key}>
            <h4 className="mb-2 text-xs font-semibold tracking-wide uppercase font-Poppins text-indigo-950 dark:text-yellow-100">
              {item.label}
            </h4>
            <p className="text-sm leading-6 text-left font-Montserrat dark:text-gray-300">
              {work[item.key]}
            </p>
          </div>
        ))}
      </div>
    </article>
  );
};

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
      <h1 className="mb-4 text-4xl font-bold text-center lg:text-5xl dark:text-yellow-100 text-indigo-950 font-Poppins lg:text-left">
        Selected work
      </h1>
      <p className="max-w-4xl mb-12 leading-7 text-center font-Montserrat lg:text-left dark:text-gray-300">
        Product work at Zithara Technologies, Bangalore. Dec 2023–Present.
      </p>

      <div className="flex flex-col w-full gap-6">
        {selectedWork.map((work) => (
          <WorkCard key={work.id} work={work} />
        ))}
      </div>

      <div className="w-full p-5 mt-6 border border-dashed rounded-md border-gray-300 dark:border-slate-600">
        <h3 className="mb-1 text-lg font-bold text-left font-Poppins">
          Also built
        </h3>
        <p className="mb-3 text-sm text-left font-Montserrat dark:text-gray-300">
          Not in production.
        </p>
        <ul className="flex flex-col gap-2">
          {alsoBuilt.map((item) => (
            <li
              key={item}
              className="text-sm leading-6 text-left font-Montserrat dark:text-gray-300"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Projects;
