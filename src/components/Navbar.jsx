import React, { useState } from "react";
import { AiOutlineAppstore, AiOutlineClose } from "react-icons/ai";
import { BsMoon, BsSun } from "react-icons/bs";
import { menuLinks } from "../data";

const Navbar = ({ theme, setTheme }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [active, setActive] = useState("#home");

  return (
    <>
      <nav
        className={`fixed hidden z-50 bg-white duration-800 delay-200 dark:bg-teal-950 dark:text-white top-0 ${
          isMenuOpen ? "showMenu" : "autoHeight"
        } h-16 left-0 w-full shadow-md dark:shadow-slate-900 py-4 px-6 md:px-16 lg:px-28 md:flex md:flex-col lg:flex-row justify-between items-center`}
      >
        <div className="flex items-center justify-between w-full">
          <h2 className="text-xl font-bold text-transparent delay-200 font-Poppins bg-clip-text bg-gradient-to-br from-red-700 to-black duration-800 dark:bg-gradient-to-br dark:from-white dark:to-indigo-400">
            Salahuddin.
            <span className="text-teal-900 dark:text-teal-400">dev</span>
          </h2>

          <div className="items-center hidden gap-24 lg:flex">
            <ul className="items-center hidden gap-10 font-medium lg:flex font-Montserrat">
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
      </nav>

      {/* ---Mobile--Section--- */}
      <ul
        className={`flex dark:bg-teal-900 dark:text-white bg-[#f5f5f5] fixed top-0 left-0 z-20 flex-col w-full ${
          isMenuOpen ? "showMenu" : "hideMenu"
        } justify-center duration-700 delay-100 lg:hidden items-center gap-3 font-Montserrat font-medium`}
      >
        {menuLinks.map((links) => {
          const { id, title, url, icon } = links;
          return (
            <li
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              key={id}
              className="py-2  w-full cursor-pointer justify-center flex duration-700 delay-100 items-center gap-4 hover:bg-[#f5f5f5] dark:hover:bg-teal-900"
            >
              <div className=" flex lg:hidden items-center gap-4 w-[125px]">
                <div className="p-2 text-lg bg-white rounded-full drop-shadow-md dark:bg-teal-700 dark:border-none">
                  {icon}
                </div>
                <a href={url}>{title}</a>
              </div>
            </li>
          );
        })}
      </ul>

      <div
        className="fixed z-50 flex items-center lg:hidden justify-center w-10 h-10 bg-[#f5f5f5] drop-shadow-lg dark:bg-teal-700 dark:text-white rounded-full cursor-pointer top-2.5 right-3.5 "
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? (
          <AiOutlineClose className="text-2xl lg:hidden " />
        ) : (
          <AiOutlineAppstore className="text-2xl lg:hidden " />
        )}
      </div>

      <div
        onClick={() => {
          setTheme(theme === "dark" ? "light" : "dark");
        }}
        className={`lg:hidden fixed bottom-2.5 right-3.5 flex items-center justify-center h-10 w-10 z-50 rounded-full text-md cursor-pointer duration-300 delay-100 drop-shadow-lg bg-[#f5f5f5] dark:bg-teal-700 dark:text-white`}
      >
        {theme === "dark" ? (
          <div className="flex items-center gap-2">
            <BsSun />
          </div>
        ) : (
          <div className="flex items-center gap-2">
            <BsMoon />
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
