import { v4 as uuidv4 } from "uuid";
import { Project } from "../types/Project";

const projectsData: Project[] = [
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
    pageTitle: "Color Picker",
    description:
      "This is a color picker project built using React JS, Tailwind CSS, and React Hooks.",
    features: [
      { text: "Color Selection: Easily select and preview colors" },
      {
        text: "Responsive Layout: Designed with Tailwind CSS for a responsive and adaptive user interface.",
      },
      {
        text: "State Management: Utilizes React Hooks for efficient state management.",
      },
      {
        text: "Dynamic Rendering: Dynamically renders color options and previews.",
      },
      { text: "Customizable styles and components" },
    ],
    source:
      "https://github.com/Mark-Alexis-Posadas/react-typescript-mini-projects/blob/main/src/pages/ColorPicker/index.tsx",
    demo: "https://color-picker.vercel.app/",
    buttons: ["Demo", "Source"],
    tags: ["react", "typescript", "tailwind CSS"],
  },
  {
    id: uuidv4(),
    pageTitle: "Simple Quiz",
    description:
      "This project is a simple quiz application built using React, Tailwind CSS, and React Hooks. Users can take quizzes and see their scores.",
    features: [
      { text: "Multiple choice questions" },
      { text: "Responsive layout with Tailwind CSS" },
      { text: "State management with React Hooks" },
      { text: "Score calculation and display" },
      { text: "Customizable styles and components" },
    ],
    source:
      "https://github.com/Mark-Alexis-Posadas/vanilla-js-projects/tree/main/quiz",
    demo: "https://simple-quiz.vercel.app/",
    buttons: ["Demo", "Source"],
    tags: ["react", "typescript", "tailwind CSS"],
  },
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
    source:
      "https://github.com/Mark-Alexis-Posadas/react-typescript-mini-projects/blob/main/src/pages/Todo/index.tsx",
    demo: "https://lq6hgj.csb.app/",
    buttons: ["Demo", "Source"],
    tags: ["react", "typescript", "tailwind CSS"],
  },
  {
    id: uuidv4(),
    pageTitle: "Form Inputs",
    description:
      "This project showcases various form input components built using React, Tailwind CSS, and React Hooks.",
    features: [
      { text: "Different input types (text, number, email, etc.)" },
      { text: "Responsive layout with Tailwind CSS" },
      { text: "State management with React Hooks" },
      { text: "Form validation" },
      { text: "Customizable styles and components" },
    ],
    source:
      "https://github.com/Mark-Alexis-Posadas/vanilla-js-projects/tree/main/form-inputs",
    demo: "https://form-inputs.vercel.app/",
    buttons: ["Demo", "Source"],
    tags: ["react", "typescript", "tailwind CSS"],
  },

  {
    id: uuidv4(),
    pageTitle: "Toggle Switch",
    description:
      "This project demonstrates a toggle switch component built using React, Tailwind CSS, and React Hooks.",
    features: [
      { text: "Toggle on/off functionality" },
      { text: "Responsive layout with Tailwind CSS" },
      { text: "State management with React Hooks" },
      { text: "Customizable styles and components" },
    ],
    source:
      "https://github.com/Mark-Alexis-Posadas/vanilla-js-projects/tree/main/toggle-switch",
    demo: "https://toggle-switch.vercel.app/",
    buttons: ["Demo", "Source"],
    tags: ["react", "typescript", "tailwind CSS"],
  },
  {
    id: uuidv4(),
    pageTitle: "Modal",
    description:
      "This project showcases a modal component built using React, Tailwind CSS, and React Hooks.",
    features: [
      { text: "Open/close modal functionality" },
      { text: "Responsive layout with Tailwind CSS" },
      { text: "State management with React Hooks" },
      { text: "Dynamic content rendering" },
      { text: "Customizable styles and components" },
    ],
    source:
      "https://github.com/Mark-Alexis-Posadas/vanilla-js-projects/tree/main/modal",
    demo: "https://modal-component.vercel.app/",
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
  {
    id: uuidv4(),
    pageTitle: "Search Filtering",
    description:
      "This project demonstrates a search filtering component built using React, Tailwind CSS, and React Hooks. It allows users to filter a list of items based on their search input.",
    features: [
      { text: "Search and filter functionality" },
      { text: "Responsive layout with Tailwind CSS" },
      { text: "State management with React Hooks" },
      { text: "Dynamic content rendering" },
      { text: "Customizable styles and components" },
    ],
    source:
      "https://github.com/Mark-Alexis-Posadas/vanilla-js-projects/tree/main/search-filter",
    demo: "https://search-filter.vercel.app/",
    buttons: ["Demo", "Source"],
    tags: ["react", "typescript", "tailwind CSS"],
  },
  {
    id: uuidv4(),
    pageTitle: "Star Ratings",
    description:
      "This project showcases a star rating component built using React, Tailwind CSS, and React Hooks. Users can rate items using a star-based rating system.",
    features: [
      { text: "Star-based rating system" },
      { text: "Responsive layout with Tailwind CSS" },
      { text: "State management with React Hooks" },
      { text: "Dynamic content rendering" },
      { text: "Customizable styles and components" },
    ],
    source:
      "https://github.com/Mark-Alexis-Posadas/vanilla-js-projects/tree/main/star-ratings",
    demo: "https://star-ratings.vercel.app/",
    buttons: ["Demo", "Source"],
    tags: ["react", "typescript", "tailwind CSS"],
  },

  {
    id: uuidv4(),
    pageTitle: "Counter App",
    description:
      "This project is a counter application built using React, Tailwind CSS, and React Hooks. Users can increment and decrement a counter value.",
    features: [
      { text: "Increment and decrement functionality" },
      { text: "Responsive layout with Tailwind CSS" },
      { text: "State management with React Hooks" },
      { text: "Dynamic content rendering" },
      { text: "Customizable styles and components" },
    ],
    source:
      "https://github.com/Mark-Alexis-Posadas/vanilla-js-projects/tree/main/counter-app",
    demo: "https://counter-app.vercel.app/",
    buttons: ["Demo", "Source"],
    tags: ["react", "typescript", "tailwind CSS"],
  },
];

export default projectsData;
