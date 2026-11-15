import { socialLinks } from "../data";
import img from "../assets/images/home-img.png";
import resume from "../assets/resume.pdf";

const Home = () => {
  return (
    <section id="home" className="grid items-end gap-10 py-14 sm:py-20 lg:grid-cols-2 lg:gap-16 lg:py-28">
      <div>
        <img
          src={img}
          alt="Ghazi Salahuddin"
          className="mb-6 h-20 w-20 rounded-full object-cover"
        />
        <h1 className="max-w-xl font-display text-[2.4rem] font-medium leading-[1.05] tracking-tight sm:text-6xl lg:text-[4.25rem]">
          Hello! I'm Ghazi Salahuddin
        </h1>
      </div>

      <div className="lg:pb-2">
        <h2 className="max-w-md text-2xl font-medium leading-snug sm:text-3xl">
          A Frontend-focused Full-Stack Developer based in Bangalore, India.
        </h2>
        <p className="mt-4 max-w-md text-base leading-7 text-[#5f5f5a]">
          3 years building SaaS at Zithara with React.js, Next.js, Node.js, and
          Express. Product work covers campaigns, web forms, real-time
          messaging, and CRM.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a
            href={resume}
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-11 items-center rounded-full bg-[#1c1c1c] px-5 text-sm text-white"
          >
            Resume
          </a>
          <a
            href="#projects"
            className="inline-flex h-11 items-center rounded-full border border-[#d9d9d4] bg-white px-5 text-sm"
          >
            See my work
          </a>
          <div className="flex items-center gap-2 pl-1">
            {socialLinks.map((link) => (
              <a
                key={link.id}
                href={link.url}
                target="_blank"
                rel="noreferrer"
                aria-label={link.title}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-[#d9d9d4] bg-white text-lg"
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
