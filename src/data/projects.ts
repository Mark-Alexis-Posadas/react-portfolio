import { v4 as uuidv4 } from "uuid";
import { ProjectType } from "../types/projects";

const projectsData: ProjectType[] = [
  {
    id: uuidv4(),
    pageTitle: "TodoList App",
    description:
      "This is a Todo List application built with React, Tailwind CSS, and React Hooks. Users can add, edit, and delete tasks.",
    features: [
      { text: "Task management (add, edit, delete)" },
      { text: "Responsive layout with Tailwind CSS" },
      { text: "State management with React Hooks" },
      { text: "Dynamic content rendering" },
      { text: "Customizable styles and components" },
    ],
    source: "https://github.com/Mark-Alexis-Posadas/todo-list-app",
    demo: "https://todo-list-app-omega-murex.vercel.app/",
    buttons: ["Demo", "Source"],
    tags: ["react", "typescript", "tailwind CSS"],
  },

  {
    id: uuidv4(),
    pageTitle: "Tab",
    description:
      "This project is a tabbed interface built with React, utilizing Tailwind CSS for styling and React Hooks for state management. The project provides a simple and intuitive way to navigate between different sections or content within a single page application.",
    features: [
      { text: "Tabbed Navigation" },
      { text: "Responsive layout with Tailwind CSS" },
      { text: "State management with React Hooks" },
      { text: "Dynamic content rendering" },
      { text: "Customizable styles and components" },
    ],
    source:
      "https://github.com/Mark-Alexis-Posadas/react-typescript-mini-projects/blob/main/src/pages/Tab/index.tsx",
    demo: "https://tjc6fc.csb.app/",
    buttons: ["Demo", "Source"],
    tags: ["react", "typescript", "tailwind CSS"],
  },

  {
    id: uuidv4(),
    pageTitle: "Accordion",

    description:
      "This project demonstrates an accordion component built using React, Tailwind CSS for styling, and React Hooks for state management. It allows users to expand and collapse sections to show and hide content.",
    features: [
      { text: "Expandable and collapsible sections" },
      { text: "Responsive layout with Tailwind CSS" },
      { text: "State management with React Hooks" },
      { text: "Dynamic content rendering" },
      { text: "Customizable styles and components" },
    ],
    source:
      "https://github.com/Mark-Alexis-Posadas/react-typescript-mini-projects/blob/main/src/pages/Accordion/index.tsx",
    demo: "https://kjky7y.csb.app/",
    buttons: ["Demo", "Source"],
    tags: ["react", "typescript", "tailwind CSS"],
  },

  {
    id: uuidv4(),
    pageTitle: "Carousel",
    description:
      "This project is a carousel component built using React, Tailwind CSS, and React Hooks. It allows users to navigate through a set of images or content.",
    features: [
      { text: "Image/content sliding" },
      { text: "Responsive layout with Tailwind CSS" },
      { text: "State management with React Hooks" },
      { text: "Customizable styles and components" },
    ],
    source:
      "https://github.com/Mark-Alexis-Posadas/react-typescript-mini-projects/blob/main/src/pages/Carousel/index.tsx",
    demo: "https://nmqnld.csb.app/",
    buttons: ["Demo", "Source"],
    tags: ["react", "typescript", "tailwind CSS"],
  },
  {
    id: uuidv4(),
    pageTitle: "Theme",
    description:
      "This project demonstrates a theme switcher built using React, Tailwind CSS, and React Hooks. It allows users to switch between different themes.",
    features: [
      { text: "Light/Dark mode switch" },
      { text: "Responsive layout with Tailwind CSS" },
      { text: "State management with React Hooks" },
      { text: "Dynamic content rendering" },
      { text: "Customizable styles and components" },
    ],
    source:
      "https://github.com/Mark-Alexis-Posadas/react-typescript-mini-projects/blob/main/src/pages/Theme/index.tsx",
    demo: "https://z8xq86.csb.app/",
    buttons: ["Demo", "Source"],
    tags: ["react", "typescript", "tailwind CSS"],
  },
];

export default projectsData;
