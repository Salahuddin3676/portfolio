import { alsoBuilt, selectedWork } from "../data";

const caseStudy = [
  { key: "problem", label: "Problem" },
  { key: "built", label: "What I built" },
  { key: "result", label: "Outcome" },
];

const WorkCard = ({ work }) => {
  return (
    <article
      className={`flex h-full flex-col rounded-3xl border border-[#e7e7e2] bg-white p-5 sm:p-7 ${
        work.lead ? "md:col-span-2" : ""
      }`}
    >
      <h3 className={`font-medium ${work.lead ? "text-2xl sm:text-3xl" : "text-xl sm:text-2xl"}`}>
        {work.title}
      </h3>
      <p className="mt-2 text-sm font-medium leading-6 text-[#1c1c1c] sm:text-base">
        {work.outcome}
      </p>
      <p className="mt-3 text-sm leading-7 text-[#5c5c57]">{work.description}</p>
      <div className="mt-5 flex flex-wrap gap-2">
        {work.tags.map((tech) => (
          <span
            key={tech}
            className="rounded-full border border-[#e7e7e2] bg-[#f7f7f4] px-2.5 py-1 text-xs text-[#3d3d3a]"
          >
            {tech}
          </span>
        ))}
      </div>
      <div
        className={`mt-6 grid gap-5 border-t border-[#efefeb] pt-5 ${
          work.lead ? "md:grid-cols-3" : ""
        }`}
      >
        {caseStudy.map((item) => (
          <div key={item.key}>
            <h4 className="text-xs font-medium uppercase tracking-wide text-[#8a8a84]">
              {item.label}
            </h4>
            <p className="mt-2 text-sm leading-6 text-[#3d3d3a]">{work[item.key]}</p>
          </div>
        ))}
      </div>
    </article>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="border-t border-[#e7e7e2] py-16 sm:py-20">
      <div className="mb-8">
        <h2 className="text-2xl font-medium sm:text-3xl">Selected work</h2>
        <p className="mt-2 max-w-xl text-sm leading-6 text-[#6d6d68]">
          Product work at Zithara Technologies, Bangalore. Dec 2023–Present.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {selectedWork.map((work) => (
          <WorkCard key={work.id} work={work} />
        ))}
      </div>

      <div className="mt-4 rounded-3xl border border-dashed border-[#d5d5d0] bg-white/60 p-5 sm:p-7">
        <h3 className="text-lg font-medium">Also built</h3>
        <p className="mt-1 text-sm text-[#6d6d68]">Not in production.</p>
        <ul className="mt-4 flex flex-col gap-3">
          {alsoBuilt.map((item) => (
            <li key={item} className="text-sm leading-6 text-[#3d3d3a]">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Projects;
