import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { socialLinks } from "../data";
import { FiDownload } from "react-icons/fi";
import img from "../assets/images/home-img.png";
import resume from "../assets/resume.pdf";

const Home = () => {
  useEffect(() => {
    Aos.init({
      duration: 1500,
    });
  }, []);

  return (
    <section
      id="home"
      className=" min-h-screen items-center flex justify-center lg:items-center w-full "
    >
      <div className="w-full min-h-screen md:h-auto flex flex-col items-center justify-center lg:flex-row-reverse lg:items-center lg:justify-between">
        <div className="w-full lg:w-[45%] mb-10 lg:mb-0">
          <img
            src={img}
            data-aos="fade-left"
            className=" rounded-full bg-white  dark:bg-slate-800 dark:border-blue-950 dark:border w-44 h-44 md:w-52 md:h-52 lg:w-80 lg:h-80 object-cover mx-auto bg-center"
          />
        </div>
        <div data-aos="fade-right" className="w-full lg:w-1/2">
          <h1 className=" dark:text-yellow-50 text-4xl text-center lg:text-left leading-[48px] lg:leading-[70px] lg:text-6xl lg:max-w-max max-w-sm mx-auto lg:mx-0 font-bold font-Poppins mb-7">
            Front-End React Developer
          </h1>
          <p className="dark:text-gray-200 font-Montserrat tracking-wide lg:max-w-md max-w-md mx-auto lg:mx-0 mb-10 text-center lg:text-left">
            Hi, I'm{" "}
            <span className=" bg-clip-text bg-gradient-to-br from-black to-indigo-600 duration-800 delay-200 dark:bg-gradient-to-br dark:from-white dark:to-yellow-400 text-transparent font-semibold ">
              Ghazi Salahuddin
            </span>
            . A passionate Front-end React Developer based in Karnataka, India.
          </p>
          <div className="flex flex-col items-center gap-8 max-w-md lg:mx-0 mx-auto lg:flex-row lg:justify-between lg:items-center">
            <div className="flex items-center gap-5 lg:gap-4 ">
              {socialLinks.map((link) => {
                const { id, title, url, icon } = link;
                return (
                  <div key={id}>
                    <a
                      href={url}
                      target="_blank"
                      className=" hover:text-indigo-900 dark:hover:text-gray-300 text-3xl"
                    >
                      {icon}
                    </a>
                  </div>
                );
              })}
            </div>
            <a
              href={resume}
              target="_blank"
              className=" flex items-center font-Montserrat tracking-wide gap-2 px-4 h-10 lg:px-4 bg-slate-800 hover:bg-slate-900 dark:hover:bg-slate-50  text-white dark:bg-slate-200 dark:font-semibold lg:mr-2 dark:text-black rounded-md cursor-pointer"
            >
              Resume <FiDownload />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
