import React, { useState } from "react";
import { AiOutlineAppstore, AiOutlineClose } from "react-icons/ai";
import { BsMoon, BsSun } from "react-icons/bs";
import { menuLinks } from "../data";

const Navbar = ({ theme, setTheme }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [active, setActive] = useState("#home");

  return (
    <nav
      className={`fixed z-50 bg-white duration-800 delay-200 dark:bg-teal-950 dark:text-white top-0 ${
        isMenuOpen ? "showMenu" : "autoHeight"
      } h-16 left-0 w-full shadow-md dark:shadow-slate-900 py-4 px-6 md:px-16 lg:px-28 flex flex-col lg:flex-row justify-between items-center`}
    >
      <div className="flex justify-between items-center w-full">
        <h2 className=" font-bold font-Poppins text-xl bg-clip-text bg-gradient-to-br from-red-700 to-black duration-800 delay-200 dark:bg-gradient-to-br dark:from-white dark:to-indigo-400 text-transparent">
          Salahuddin.
          <span className=" text-teal-900 dark:text-teal-400">dev</span>
        </h2>

        <div
          className=" cursor-pointer z-10"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <AiOutlineClose className="lg:hidden text-2xl " />
          ) : (
            <AiOutlineAppstore className="lg:hidden text-2xl " />
          )}
        </div>

        <div className="lg:flex items-center gap-24 hidden">
          <ul className=" hidden lg:flex items-center gap-10 font-Montserrat font-medium">
            {menuLinks.map((links) => {
              const { id, title, url } = links;
              return (
                <li
                  key={id}
                  className={` dark:hover:text-gray-400 hover:text-gray-500 transition-all duration-100`}
                >
                  <a
                    onClick={() => {
                      setActive(`${url}`);
                    }}
                    href={url}
                    className={`${
                      active === url ? "active" : ""
                    } cursor-pointer py-1`}
                  >
                    {title}
                  </a>
                </li>
              );
            })}
          </ul>

          <div
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="hidden hover:scale-105 lg:block p-1.5 text-xl text-blue-900 cursor-pointer border border-gray-300  bg-[#f5f5f5]  rounded-full drop-shadow-lg "
          >
            {theme === "dark" ? <BsSun /> : <BsMoon />}
          </div>
        </div>
      </div>

      <ul
        className={`flex dark:bg-teal-950 dark:text-white z-20 flex-col w-full ${
          isMenuOpen ? "showMenu" : "hideMenu"
        } justify-center duration-700 delay-100 lg:hidden items-center gap-8 font-Montserrat font-medium`}
      >
        <div
          onClick={() => {
            setTheme(theme === "dark" ? "light" : "dark");
            setIsMenuOpen(!isMenuOpen);
          }}
          className={`lg:hidden  px-2 py-1.5 text-md cursor-pointer duration-300 delay-100 drop-shadow-lg bg-[#f5f5f5] dark:bg-teal-700 dark:text-white rounded-md`}
        >
          {theme === "dark" ? (
            <div className="flex items-center gap-2">
              <BsSun />
              <p> Light Mode</p>
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <BsMoon /> <p>Dark Mode</p>
            </div>
          )}
        </div>

        {menuLinks.map((links) => {
          const { id, title, url, icon } = links;
          return (
            <li
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              key={id}
              className="py-2  w-full cursor-pointer justify-center flex duration-700 delay-100 items-center gap-4 hover:bg-[#f5f5f5] dark:hover:bg-teal-900"
            >
              <div className=" flex items-center gap-4 w-[125px]">
                <div className="text-lg p-2 rounded-full border drop-shadow-lg bg-[#f5f5f5] dark:bg-teal-700 dark:border-none">
                  {icon}
                </div>
                <a href={url}>{title}</a>
              </div>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
