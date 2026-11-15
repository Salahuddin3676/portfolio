import { experience } from "../data";

const Experience = () => {
  return (
    <section id="experience" className="border-t border-[#e7e7e2] py-16 sm:py-20">
      <h2 className="mb-8 text-2xl font-medium sm:text-3xl">Experience</h2>
      <div className="flex flex-col gap-4">
        {experience.map((job) => (
          <article
            key={job.id}
            className="rounded-3xl border border-[#e7e7e2] bg-white p-5 sm:p-8"
          >
            <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <h3 className="text-lg font-medium sm:text-xl">{job.role}</h3>
                <p className="mt-1 text-[#3f3f3f]">{job.company}</p>
              </div>
              <p className="text-sm text-[#6d6d68] sm:text-right">
                {job.dates}
                <span className="block">{job.location}</span>
              </p>
            </div>
            <p className="mt-5 max-w-3xl text-[15px] leading-7 text-[#4f4f4b]">
              {job.summary}
            </p>
            <ul className="mt-5 flex max-w-3xl flex-col gap-3 border-t border-[#efefeb] pt-5">
              {job.points.map((point) => (
                <li
                  key={point}
                  className="text-[15px] leading-7 text-[#3d3d3a] before:mr-2 before:text-[#b0b0aa] before:content-['–']"
                >
                  {point}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Experience;
