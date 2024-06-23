import experienceData from "../../data/experience";
export default function Experience() {
  return (
    <section>
      {experienceData.map((data) => (
        <article className="flex flex-col md:flex-row items-center mb-5 p-7">
          <figure className="mb-5 md:mb-0">
            <img
              src={data.logo}
              alt="logo"
              className="w-[218px] object-cover pr-10"
            />
          </figure>
          <div>
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
          </div>
        </article>
      ))}
    </section>
  );
}
