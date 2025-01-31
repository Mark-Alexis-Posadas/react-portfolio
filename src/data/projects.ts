import { v4 as uuidv4 } from "uuid";
import { ProjectType } from "../types/projects";

const projectsData: ProjectType[] = [
  {
    id: uuidv4(),
    pageTitle: "Blog Admin Panel",
    description:
      "The Blog Admin Panel is a robust and user-friendly web application designed for efficient management of blog content. Built with modern web technologies such as React.js, Tailwind CSS, and Redux Toolkit, this platform offers a seamless and interactive interface for administrators to manage blog posts with full CRUD (Create, Read, Update, Delete) functionality.",
    features: [
      {
        text: "Developed a comprehensive Blog Admin Panel with full CRUD functionality (Create, Read, Update, Delete) for managing blog posts.",
      },
      {
        text: "Utilized React.js, React Hooks, and Tailwind CSS to build a responsive and interactive user interface, ensuring state management via localStorage for persistent data storage.",
      },
      {
        text: "Added key features, including an authentication system for secure access, allowing user login and registration.",
      },
      {
        text: "Implemented functionality to view, edit, and delete blog posts with real-time updates using Redux Toolkit Query.",
      },
      {
        text: "Enhanced data integrity and user experience with form validation using Formik and Yup.",
      },
      {
        text: "Used dynamic routing with React Router to navigate between different sections seamlessly.",
      },
      {
        text: "Integrated MySQL2, Node.js, and Express.js for efficient backend development and API integration.",
      },
      {
        text: "Styled the application with Tailwind CSS for a clean and modern design.",
      },
      {
        text: "Implemented robust authentication and authorization to enhance security.",
      },
    ],

    source: "https://github.com/Mark-Alexis-Posadas/blog-admin-panel",
    demo: "https://github.com/Mark-Alexis-Posadas/blog-admin-panel",
    buttons: ["Demo", "Source"],
    tags: ["react", "typescript", "tailwind CSS"],
  },
  {
    id: uuidv4(),
    pageTitle: "Blog Site",
    description:
      "This is a Todo List application built with React, Tailwind CSS, and React Hooks. Users can add, edit, and delete tasks.",
    features: [
      { text: "Task management (add, edit, delete)" },
      { text: "Responsive layout with Tailwind CSS" },
      { text: "State management with React Hooks" },
      { text: "Dynamic content rendering" },
      { text: "Customizable styles and components" },
    ],
    source: "https://github.com/Mark-Alexis-Posadas/blog-site",
    demo: "https://github.com/Mark-Alexis-Posadas/blog-site",
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
    source: "https://github.com/Mark-Alexis-Posadas/todo-list-app",
    demo: "https://todo-list-app-omega-murex.vercel.app/",
    buttons: ["Demo", "Source"],
    tags: ["react", "typescript", "tailwind CSS"],
  },

  {
    id: uuidv4(),
    pageTitle: "Note taking app",
    description:
      "This Note Taking app is built with React, styled with Tailwind CSS, and uses React Hooks for state management. The application provides an efficient way to create, edit, and organize your notes with an intuitive and dynamic interface.",
    features: [
      { text: "Create, delete, and edit notes" },
      { text: "Tabbed Navigation for easy organization" },
      { text: "Responsive design with Tailwind CSS" },
      { text: "Real-time updates with React Hooks" },
      { text: "Dynamic content rendering" },
      { text: "Customizable styles and components" },
      { text: "Alerts for note status notifications" },
    ],
    source: "https://github.com/Mark-Alexis-Posadas/react-notes",
    demo: "https://react-notes-wine.vercel.app/",
    buttons: ["Demo", "Source"],
    tags: ["react", "typescript", "tailwind CSS"],
  },

  {
    id: uuidv4(),
    pageTitle: "Employee Management System",
    description:
      "This project implements a simple Employee Management System where users can add, read, edit, and delete employee records. The application also utilizes local storage to persist employee data across sessions.",
    features: [
      {
        text: "Add Employee: Users can add a new employee with details such as name, position, etc.",
      },
      {
        text: "Read Employee: Users can view a list of all employees currently stored.",
      },
      {
        text: "Edit Employee: Users can update the details of existing employees.",
      },
      { text: "Delete Employee: Users can remove employees from the system." },
      {
        text: "Local Storage Persistence: Employee data is stored locally, allowing the application to maintain state across page refreshes.",
      },
    ],
    source: "https://github.com/Mark-Alexis-Posadas/employee-list",
    demo: "https://employee-management-system-ruby.vercel.app/",
    buttons: ["Demo", "Source"],
    tags: ["react js", "uuid", "fontawesome icon", "tailwind CSS"],
  },
];

export default projectsData;
