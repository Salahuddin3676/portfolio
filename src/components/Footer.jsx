import React from "react";
import { socialLinks } from "../data";

const Footer = () => {
  return (
    <footer className=" z-[100] px-3 md:px-16 lg:px-28 py-10 flex items-center justify-center font-bold bg-slate-950 text-white w-full">
      <div className="flex flex-col gap-4 w-full lg:flex-row-reverse items-center lg:justify-between ">
        <div className=" flex flex-row-reverse items-center justify-center gap-4 text-3xl">
          {socialLinks.map((link) => {
            const { id, icon, url } = link;
            return (
              <a
                href={url}
                key={id}
                className="cursor-pointer hover:text-gray-300"
              >
                {icon}
              </a>
            );
          })}
        </div>
        <h4 className="text-xs lg:text-base text-center lg:text-left font-semibold font-Montserrat tracking-wide">
          Copyright © 2023, Developed by{" "}
          <a
            className="text-lime-100 underline underline-offset-1"
            href="https://www.linkedin.com/in/salahuddin-quasmi-389156176"
            target="_blank"
          >
            Ghazi Salahuddin
          </a>{" "}
        </h4>
      </div>
    </footer>
  );
};

export default Footer;
