import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import projectsData from "../../data/projects";

export default function Projects() {
  return <section className="scroll-mt-20 py-12" id="projects" aria-labelledby="projects-title">
    <p className="section-kicker">Selected work</p><h2 id="projects-title" className="section-title">Projects built for real interactions</h2>
    <p className="mt-3 max-w-2xl text-sm leading-7 text-zinc-600 dark:text-zinc-400">A selection of shipped web projects. Each entry makes the current architecture explicit and highlights the decisions behind the experience.</p>
    <div className="mt-7 grid grid-cols-1 gap-5">
      {projectsData.map((project) => <article key={project.id} className="group rounded-2xl border border-zinc-200 bg-white p-6 transition hover:border-cyan-500/50 hover:shadow-xl dark:border-zinc-800 dark:bg-[#141416]">
        <header className="flex flex-wrap items-start justify-between gap-4">
          <div><h3 className="text-xl font-bold tracking-tight text-zinc-900 dark:text-white">{project.pageTitle}</h3><p className="mt-2 max-w-3xl text-sm leading-6 text-zinc-600 dark:text-zinc-400"><strong className="text-zinc-800 dark:text-zinc-200">Objective: </strong>{project.objective}</p></div>
          <div className="flex gap-2">
            <a href={project.source} target="_blank" rel="noopener noreferrer" aria-label={`View ${project.pageTitle} source on GitHub`} className="project-link"><FontAwesomeIcon icon={faGithub} /> <span>Code</span></a>
            <a href={project.demo} target="_blank" rel="noopener noreferrer" aria-label={`View ${project.pageTitle} live demo`} className="project-link"><FontAwesomeIcon icon={faArrowUpRightFromSquare} /> <span>Live demo</span></a>
          </div>
        </header>
        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          {project.architecture.map((item) => <div key={item.label} className="rounded-xl bg-zinc-50 p-4 dark:bg-zinc-900"><h4 className="text-xs font-bold uppercase tracking-wider text-cyan-700 dark:text-cyan-300">{item.label}</h4><p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">{item.detail}</p></div>)}
        </div>
        <div className="mt-3 rounded-xl border border-violet-200/70 bg-violet-50/60 p-4 dark:border-violet-900 dark:bg-violet-950/20"><h4 className="text-xs font-bold uppercase tracking-wider text-violet-700 dark:text-violet-300">AI-assisted workflow</h4><p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">{project.aiWorkflow}</p></div>
        <ul className="mt-4 flex flex-wrap gap-2">{project.tags.map((tag) => <li key={tag} className="rounded-full border border-zinc-200 px-3 py-1 text-xs text-zinc-500 dark:border-zinc-700 dark:text-zinc-400">{tag}</li>)}</ul>
      </article>)}
    </div>
  </section>;
}
