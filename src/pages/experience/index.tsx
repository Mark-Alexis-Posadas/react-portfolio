import experienceData from "../../data/experience";

export default function Experience() {
  return (
    <section className="py-10" id="experience">
      <div className="relative border-l border-zinc-200 pl-8 dark:border-zinc-800">
        {experienceData.map((data) => (
          <article
            key={data.id}
            className="
            relative mb-10
            rounded-2xl
            border border-transparent
            p-5
            transition-all duration-300

            hover:border-zinc-200
            hover:bg-white
            hover:shadow-lg

            dark:hover:border-zinc-800
            dark:hover:bg-[#181818]
            "
          >
            {/* Timeline Dot */}
            <span
              className="
              absolute -left-[41px]
              top-8
              flex h-5 w-5
              items-center justify-center
              rounded-full

              border-4
              border-white
              bg-zinc-400

              dark:border-[#111]
              dark:bg-zinc-500
              "
            />

            <header>
              <p
                className="
                text-sm
                font-medium
                text-zinc-500

                dark:text-zinc-400
                "
              >
                {data.title}
              </p>

              <h2
                className="
                mt-1
                text-xl
                font-bold
                text-zinc-900

                dark:text-white
                "
              >
                {data.company}
              </h2>

              <div
                className="
                mt-2
                flex flex-wrap
                gap-2
                text-sm
                text-zinc-500

                dark:text-zinc-400
                "
              >
                <span className="italic">{data.date}</span>

                <span>• {data.address}</span>
              </div>
            </header>

            <ul
              className="
              mt-5
              space-y-3
              text-sm
              leading-7
              text-zinc-600

              dark:text-zinc-400
              "
            >
              {data.jobDescriptions.map((description, index) => (
                <li
                  key={index}
                  className="
                  flex
                  gap-3
                  "
                >
                  <span
                    className="
                    mt-3
                    h-1.5
                    w-1.5
                    shrink-0
                    rounded-full
                    bg-zinc-400
                    "
                  />

                  <span>{description}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
