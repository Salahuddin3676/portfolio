import React, { useEffect, useRef, useState } from "react";
import { contactItems } from "../data";
import Aos from "aos";
import "aos/dist/aos.css";
import { PiClipboardThin } from "react-icons/pi";

const Contact = () => {
  const [alert, setAlert] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert(false);
    }, [3000]);
    return () => clearTimeout(timeout);
  }, [alert]);

  useEffect(() => {
    Aos.init({
      duration: 1200,
      once: true,
    });
  }, []);

  return (
    <section
      id="contact"
      className=" pt-20 flex items-center justify-center w-full"
    >
      <div className="flex flex-col items-center md:items-start w-full">
        <div className="flex flex-col items-center md:items-start">
          <h1
            data-aos="fade-up"
            className="text-4xl lg:text-6xl font-bold dark:text-cyan-200 text-indigo-950 font-Poppins mb-5 md:text-left "
          >
            Contact Me
          </h1>

          <h3
            data-aos="fade-up"
            className="lg:text-3xl text-2xl  mb-4 font-bold font-Montserrat text-center md:text-left"
          >
            Feel free to hit me up!
          </h3>
        </div>

        <div className="flex flex-col items-center gap-12 flex-wrap w-full md:flex-row my-14">
          {contactItems.map((item) => {
            const { id, title, icon, info } = item;
            return (
              <div
                data-aos="zoom-in"
                key={id}
                className="flex items-center md:w-[45%] md:justify-start justify-center gap-3.5 flex-col md:flex-row "
              >
                <div className=" rounded-full p-6 border border-gray-300 flex items-center justify-center text-3xl lg:text-4xl bg-white  text-red-600">
                  {icon}
                </div>
                <div className="flex items-center gap-2 md:items-start justify-center flex-col">
                  <h2 className="text-xl tracking-wide font-Poppins font-bold dark:text-white text-gray-600">
                    {title}
                  </h2>
                  <p
                    onClick={(e) => {
                      navigator.clipboard.writeText(e.target.textContent);
                      setAlert(true);
                    }}
                    className=" flex hover:opacity-80 items-center gap-2 cursor-pointer font-Montserrat tracking-wide text-sm"
                  >
                    {info}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Contact;
