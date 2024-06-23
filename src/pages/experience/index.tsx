import experienceData from "../../data/experience";
export default function Experience() {
  return (
    <section className="min-h-[50vh]" id="experience">
      {experienceData.map((data) => (
        <article className="mb-5 p-7">
          <header className="mb-3">
            <h3>{data.title}</h3>
            <h2 className="font-bold text-rose-600 mb-2">{data.company}</h2>
            <span className="italic text-base mr-2">{data.date}</span>
            <span className="text-base">{data.address}</span>
          </header>
          <ul className="list-disc">
            {data.jobDescriptions.map((description, index) => (
              <li key={index}>{description}</li>
            ))}
          </ul>
        </article>
      ))}
    </section>
  );
}
