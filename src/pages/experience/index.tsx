import experienceData from "../../data/experience";

export default function Experience() {
  return (
    <section className="py-10" id="experience">
      {experienceData.map((data) => (
        <article className="mb-5" key={data.id}>
          <header className="mb-3">
            <h3 className="text-md text-[#666]">{data.title}</h3>
            <h2 className="font-bold text-xl mb-2 dark:text-white">
              {data.company}
            </h2>
            <span className="dark:text-[#999] italic text-sm mr-2">
              {data.date}
            </span>
            <span className="dark:text-[#999] text-sm">{data.address}</span>
          </header>
          <ul className="list-none py-2 px-7 text-[#666]">
            {data.jobDescriptions.map((description, index) => (
              <li key={index}>- {description}</li>
            ))}
          </ul>
        </article>
      ))}
    </section>
  );
}
