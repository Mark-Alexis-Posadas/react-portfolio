import { v4 as uuidv4 } from "uuid";
import { ProjectType } from "../types/projects";

const aiWorkflow = "AI-assisted development supports rapid exploration, implementation refinement, and maintainability reviews. Project-specific agent activity is not separately recorded.";
const projectsData: ProjectType[] = [
  {
    id: uuidv4(), pageTitle: "Employee Management System",
    objective: "Streamline employee record maintenance with a responsive CRUD interface and persistence between visits.",
    architecture: [
      { label: "Frontend UI", detail: "React interface styled with Tailwind CSS; responsive employee list and edit flows." },
      { label: "Backend / API", detail: "Client-side prototype; no REST API is documented." },
      { label: "Data model", detail: "Employee records stored in browser localStorage; no server database is documented." },
      { label: "State", detail: "React component state with local persistence." },
    ], aiWorkflow,
    source: "https://github.com/Mark-Alexis-Posadas/employee-list", demo: "https://employee-management-system-ruby.vercel.app/", tags: ["React", "CRUD", "localStorage", "Tailwind CSS"],
  },
  {
    id: uuidv4(), pageTitle: "TodoList App",
    objective: "Make everyday task capture and updates quick through a focused, responsive task manager.",
    architecture: [
      { label: "Frontend UI", detail: "React and TypeScript components styled with Tailwind CSS." },
      { label: "Backend / API", detail: "Client-side application; no REST API is documented." },
      { label: "Data model", detail: "In-memory task records; no persistent database is documented." },
      { label: "State", detail: "React Hooks manage add, edit, and delete interactions." },
    ], aiWorkflow,
    source: "https://github.com/Mark-Alexis-Posadas/todo-list-app", demo: "https://todo-list-app-omega-murex.vercel.app/", tags: ["React", "TypeScript", "Task management", "Tailwind CSS"],
  },
  {
    id: uuidv4(), pageTitle: "React UI Patterns",
    objective: "Explore reusable interaction patterns through accessible, focused examples for common interface needs.",
    architecture: [
      { label: "Frontend UI", detail: "A collection of React and TypeScript demos including tabs, accordions, and carousels." },
      { label: "Backend / API", detail: "Static client-side demos; no REST API is documented." },
      { label: "Data model", detail: "Component-local example data; no database is documented." },
      { label: "State", detail: "React Hooks drive local interaction state." },
    ], aiWorkflow,
    source: "https://github.com/Mark-Alexis-Posadas/react-typescript-mini-projects", demo: "https://react-typescript-projects-three.vercel.app/", tags: ["React", "TypeScript", "UI patterns", "Tailwind CSS"],
  },
];
export default projectsData;

