import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { experience } from "../data";

const Experience = () => {
  useEffect(() => {
    Aos.init({
      duration: 1200,
      once: true,
    });
  }, []);

  return (
    <section
      id="experience"
      className="flex flex-col items-center w-full pt-20 lg:items-start"
    >
      <h1 className="mb-8 text-4xl font-bold text-center lg:text-5xl dark:text-yellow-100 text-indigo-950 font-Poppins lg:text-left">
        Experience
      </h1>

      <div className="flex flex-col w-full gap-6">
        {experience.map((job) => (
          <article
            key={job.id}
            data-aos="fade-up"
            className="w-full p-5 bg-white border border-gray-300 rounded-md sm:p-7 dark:border-slate-600 dark:bg-teal-950"
          >
            <div className="flex flex-col gap-3 mb-5 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <h3 className="text-2xl font-bold text-left font-Poppins lg:text-3xl">
                  {job.role}
                </h3>
                <p className="mt-1 text-base font-semibold text-left font-Montserrat text-indigo-700 dark:text-yellow-100">
                  {job.company}
                </p>
              </div>
              <p className="text-sm leading-6 text-left font-Montserrat dark:text-gray-300 sm:text-right sm:shrink-0">
                <span className="block">{job.dates}</span>
                <span className="block">{job.location}</span>
              </p>
            </div>
            <p className="mb-5 text-[15px] leading-7 text-left font-Montserrat dark:text-gray-300">
              {job.summary}
            </p>
            <ul className="flex flex-col gap-3 pl-5 list-disc">
              {job.points.map((point) => (
                <li
                  key={point}
                  className="text-[15px] leading-7 text-left font-Montserrat dark:text-gray-300"
                >
                  {point}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Experience;
