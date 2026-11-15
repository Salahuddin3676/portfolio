import { skills } from "../data";

const About = () => {
  return (
    <section id="about" className="border-t border-[#e7e7e2] py-16 sm:py-20">
      <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <h2 className="text-2xl font-medium sm:text-3xl">Tech stack</h2>
        <p className="max-w-md text-sm leading-6 text-[#6d6d68]">
          Frontend-focused Full-Stack Developer based in Bangalore, India.
        </p>
      </div>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
        {skills.map((skill) => (
          <div
            key={skill.id}
            className="flex min-h-[4.5rem] items-center gap-3 rounded-2xl border border-[#e7e7e2] bg-white px-4 py-3"
          >
            <span className="text-2xl text-[#1c1c1c]">{skill.icon}</span>
            <span className="text-sm leading-5">{skill.title}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
