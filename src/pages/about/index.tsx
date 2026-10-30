const groups = [
  { title: "Front-End", skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Zustand", "Redux", "TanStack Query"] },
  { title: "Back-End & Data", skills: ["Node.js", "Express", "RESTful APIs", "MongoDB", "PostgreSQL"] },
  { title: "AI & Agentic Development", skills: ["Cursor", "Claude Code", "AI-driven prototyping", "AI-assisted test generation", "ESLint / Prettier automation"] },
  { title: "Tools & Delivery", skills: ["Git", "GitHub", "Vite", "npm", "Chrome DevTools"] },
];

export default function About() {
  return <>
    <section className="scroll-mt-20 py-12 md:py-16" id="about" aria-labelledby="about-title">
      <p className="section-kicker">About</p>
      <h2 id="about-title" className="section-title">Build fast. Ship thoughtfully.</h2>
      <div className="mt-6 max-w-3xl space-y-4 text-zinc-600 dark:text-zinc-400">
        <p>I’m Mark Alexis Posadas, a web developer with 3+ years of professional experience building responsive, SEO-conscious experiences. I started building for the web in 2017 and have since focused on performance, maintainability, and useful product experiences.</p>
        <p>I bring a front-end foundation to full-stack problem solving: shaping clear interfaces, connecting services through REST APIs, and using AI-assisted workflows to move from idea to implementation with speed and care.</p>
      </div>
    </section>
    <section className="scroll-mt-20 py-10" id="skills" aria-labelledby="skills-title">
      <p className="section-kicker">Toolkit</p><h2 id="skills-title" className="section-title">Skills & workflow</h2>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {groups.map((group) => <article key={group.title} className="rounded-2xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-[#141416]">
          <h3 className="font-semibold text-zinc-900 dark:text-white">{group.title}</h3>
          <ul className="mt-4 flex flex-wrap gap-2">{group.skills.map((skill) => <li key={skill} className="rounded-full bg-zinc-100 px-3 py-1.5 text-xs text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300">{skill}</li>)}</ul>
        </article>)}
      </div>
      <p className="mt-4 text-xs leading-6 text-zinc-500">My current portfolio projects primarily demonstrate client-side React and TypeScript work; backend, database, and AI workflow skills are listed as capabilities and working tools.</p>
    </section>
  </>;
}

