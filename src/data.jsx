import { AiOutlineSend, AiFillHtml5 } from "react-icons/ai";
import { BiHome, BiLogoTailwindCss } from "react-icons/bi";
import { FaCss3Alt, FaReact, FaSass } from "react-icons/fa";
import { RiContactsLine, RiJavascriptFill } from "react-icons/ri";
import { MdWorkOutline, MdScreenShare } from "react-icons/md";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";
import { BsWhatsapp } from "react-icons/bs";
import { BiLogoGmail } from "react-icons/bi";
import img1 from "./assets/images/pbg1.png";
import img2 from "./assets/images/notes.png";
// import img3 from "./assets/images/p3.jpg";

export const menuLinks = [
  {
    id: 1,
    title: "Home",
    url: "#home",
    icon: <BiHome />,
  },
  {
    id: 2,
    title: "About",
    url: "#about",
    icon: <RiContactsLine />,
  },
  {
    id: 3,
    title: "Projects",
    url: "#projects",
    icon: <MdWorkOutline />,
  },
  {
    id: 4,
    title: "Contact",
    url: "#contact",
    icon: <AiOutlineSend />,
  },
];

export const socialLinks = [
  {
    id: 1,
    title: "Linkedin",
    url: "https://www.linkedin.com/in/salahuddin-quasmi-389156176/",
    icon: <BsLinkedin />,
  },
  {
    id: 2,
    title: "Github",
    url: "https://github.com/Salahuddin3676",
    icon: <BsGithub />,
  },
];

export const skills = [
  {
    id: 1,
    title: "HTML5",
    icon: <AiFillHtml5 />,
  },
  {
    id: 2,
    title: "CSS3",
    icon: <FaCss3Alt />,
  },
  {
    id: 3,
    title: "JavaScript",
    icon: <RiJavascriptFill />,
  },
  {
    id: 4,
    title: "Sass",
    icon: <FaSass />,
  },
  {
    id: 5,
    title: "React Js",
    icon: <FaReact />,
  },
  {
    id: 6,
    title: "Tailwind Css",
    icon: <BiLogoTailwindCss />,
  },
  {
    id: 7,
    title: "Responsive Design",
    icon: <MdScreenShare />,
  },
];

export const projects = [
  {
    id: 1,
    img: img1,
    title: "Interior Design Service",
    info: "InDesign an interior design service site, where dream living spaces are turned into reality. This site, powered by React.js, offers a seamless and immersive experience that showcases my passion for creating functional and beautiful designs.",
    techUsed: ["#react", "#tailwind"],
    githubLink: "https://github.com/Salahuddin3676/interior-design",
    demoLink: "https://salahuddin3676.github.io/interior-design/",
  },
  {
    id: 2,
    img: img2,
    title: "Notes Keeper App",
    info: "This Notes Keeper App is a dynamic and user-friendly web application crafted using React. This nifty tool is designed to help users seamlessly jot down and organize their thoughts, ideas, and reminders in a sleek and intuitive interface.",
    techUsed: ["#react", "#tailwind"],
    githubLink: "https://github.com/Salahuddin3676/notes-keeper",
    demoLink: "https://salahuddin3676.github.io/notes-keeper/",
  },
  // {
  //   id: 3,
  //   img: img3,
  //   title: "E-Commerce Furniture",
  //   info: "This is an app built using React, It uses useEffect, useState and useRef hooks, It is an App used to prepare a list for grocery.",
  //   techUsed: ["#react", "#tailwind"],
  //   githubLink: "#",
  //   demoLink: "#",
  // },
];

export const contactItems = [
  {
    id: 1,
    title: "Location",
    icon: <FaLocationDot />,
    info: "Bangalore, India",
  },
  {
    id: 2,
    title: "Contact / Whatsapp",
    icon: <BsWhatsapp />,
    info: "+91 7619153676",
  },
  {
    id: 3,
    title: "Mail",
    icon: <BiLogoGmail />,
    info: "salahuddinqasmi76@gmail.com",
  },
];
