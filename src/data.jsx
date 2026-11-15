import { AiOutlineSend, AiFillHtml5 } from "react-icons/ai";
import { BiHome, BiLogoTailwindCss, BiBroadcast } from "react-icons/bi";
import { FaBriefcase, FaCss3Alt, FaReact, FaSass, FaGitAlt, FaNodeJs } from "react-icons/fa";
import { RiContactsLine, RiJavascriptFill } from "react-icons/ri";
import { MdWorkOutline, MdScreenShare } from "react-icons/md";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { SiNextdotjs, SiExpress, SiRedux } from "react-icons/si";
import { FaLocationDot } from "react-icons/fa6";
import { BsWhatsapp } from "react-icons/bs";
import { BiLogoGmail } from "react-icons/bi";

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
    title: "Experience",
    url: "#experience",
    icon: <FaBriefcase />,
  },
  {
    id: 4,
    title: "Projects",
    url: "#projects",
    icon: <MdWorkOutline />,
  },
  {
    id: 5,
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
    title: "Next.js",
    icon: <SiNextdotjs />,
  },
  {
    id: 7,
    title: "Node.js",
    icon: <FaNodeJs />,
  },
  {
    id: 8,
    title: "Express",
    icon: <SiExpress />,
  },
  {
    id: 9,
    title: "Redux",
    icon: <SiRedux />,
  },
  {
    id: 10,
    title: "WebSockets",
    icon: <BiBroadcast />,
  },
  {
    id: 11,
    title: "Tailwind Css",
    icon: <BiLogoTailwindCss />,
  },
  {
    id: 12,
    title: "Responsive Design",
    icon: <MdScreenShare />,
  },
  {
    id: 13,
    title: "Git",
    icon: <FaGitAlt />,
  },
  {
    id: 14,
    title: "Github",
    icon: <BsGithub />,
  },
];

export const selectedWork = [
  {
    id: 1,
    lead: true,
    title: "Web Forms",
    outcome: "Replaced HubSpot inside Zithara, then sold to external clients.",
    description:
      "I engineered Zithara’s web forms platform. It is a schema-driven visual builder with a styling system, validations, conditional logic, file uploads, and automation workflows, plus an embeddable SDK for inline and popup forms.",
    tags: ["React.js", "Next.js", "JavaScript", "Node.js", "Express.js"],
    problem:
      "Zithara used HubSpot for web forms. The product needed its own forms platform.",
    built: "I engineered a schema-driven visual builder. It includes a styling system, validations, conditional logic, file uploads, and automation workflows. An embeddable SDK runs forms inline or as a popup.",
    result:
      "The platform replaced HubSpot internally. It was later sold to external clients.",
  },
  {
    id: 2,
    title: "Campaign builder",
    outcome: "WhatsApp, SMS, and Email campaigns run from one product.",
    description:
      "I designed and built a multi-channel campaign builder for WhatsApp, SMS, and Email. It handles scheduling, template selection, customer uploads, and delivery analytics.",
    tags: ["React.js", "Next.js", "JavaScript", "Node.js", "Express.js"],
    problem:
      "Outbound marketing for WhatsApp, SMS, and Email needed to run from one product.",
    built: "I designed and built a multi-channel campaign builder. It covers scheduling, template selection, customer uploads, and delivery analytics.",
    result: "WhatsApp, SMS, and Email campaigns run from one product.",
  },
  {
    id: 3,
    title: "WhatsApp Template Builder",
    outcome: "A custom editor for WhatsApp message creation and automation.",
    description:
      "I built a template builder with a custom editor. Dynamic flow logic covers message creation and automation.",
    tags: ["React.js", "Next.js", "JavaScript"],
    problem:
      "WhatsApp message creation and automation needed a custom editor and flow logic.",
    built: "I built a template builder with a custom editor and dynamic flow logic for message creation and automation.",
    result: "Teams create WhatsApp messages and set up automation in the builder.",
  },
  {
    id: 4,
    title: "Meta Comments Manager",
    outcome:
      "Instagram and Facebook comments and DMs are handled in the product.",
    description:
      "I built a comments manager on the Instagram and Facebook APIs. Real-time updates run over WebSockets, with in-app replies and direct messages.",
    tags: ["React.js", "Next.js", "JavaScript", "REST APIs", "WebSockets"],
    problem:
      "Instagram and Facebook comments and direct messages needed to be handled inside the product.",
    built: "I built a comments manager on the Instagram and Facebook APIs. It delivers real-time updates over WebSockets, with in-app replies and direct messages.",
    result: "Social comments and DMs are handled inside the product.",
  },
  {
    id: 5,
    title: "Instagram chatbot builder",
    outcome:
      "Teams design Instagram chat workflows on a canvas instead of in code.",
    description:
      "I built an Instagram chatbot builder with React Flow. Teams design conversational workflows and quick-reply templates on a visual canvas.",
    tags: ["React.js", "Next.js", "JavaScript", "React Flow"],
    problem:
      "Conversational workflows and quick replies for Instagram were written in code.",
    built: "I built an Instagram chatbot builder with React Flow. Teams design conversational workflows and quick-reply templates on a visual canvas.",
    result: "Teams design those workflows on a canvas instead of in code.",
  },
  {
    id: 6,
    title: "Lead management and agent inbox",
    outcome:
      "The conversation sits next to ads, analytics, and the customer journey.",
    description:
      "I rebuilt lead management around one customer record: profile, visits, orders, tasks, and calls. I rebuilt the agent inbox so the conversation sits next to ad interactions, web analytics, and the customer journey.",
    tags: ["React.js", "Next.js", "JavaScript", "Node.js", "Express.js"],
    problem:
      "Lead management and the agent inbox needed one customer record, with the conversation beside how that customer engaged.",
    built: "I rebuilt lead management around one customer record: profile, visits, orders, tasks, and calls. I rebuilt the agent inbox so the conversation sits next to ad interactions, web analytics, and the customer journey.",
    result:
      "The conversation sits next to ad interactions, web analytics, and the customer journey.",
  },
];

export const alsoBuilt = [
  "Visual workflow canvas for triggers, conditions, waits, and actions such as WhatsApp, email, tasks, and webhooks.",
  "AI form builder that creates forms from the merchant’s real attributes and does not invent fields.",
];

export const experience = [
  {
    id: 1,
    role: "Frontend-focused Full-Stack Developer",
    company: "Zithara Technologies",
    dates: "Dec 2023–Present",
    location: "Bangalore",
    summary:
      "Building SaaS with React.js, Next.js, Node.js, and Express. Product work covers campaigns, web forms, real-time messaging, and CRM.",
    points: [
      "Engineered the web forms platform. It replaced HubSpot internally and was later sold to external clients.",
      "Designed and built a campaign builder for WhatsApp, SMS, and Email, with scheduling, template selection, customer uploads, and delivery analytics.",
      "Built a WhatsApp template builder, and a comments manager on the Instagram and Facebook APIs with real-time updates over WebSockets.",
      "Built an Instagram chatbot builder with React Flow so teams design conversational workflows on a visual canvas.",
      "Rebuilt lead management around one customer record, and the agent inbox so the conversation sits next to ad interactions, web analytics, and the customer journey.",
    ],
  },
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
