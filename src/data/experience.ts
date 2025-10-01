import { v4 as uuidv4 } from "uuid";
import { Experience } from "../types/experience";

const experienceData: Experience[] = [
  {
    id: uuidv4(),
    title: "Freelance Developer",
    company: "Self-Employed",
    date: "April 2023 – Present",
    address: "Remote",
    jobDescriptions: [
      "Developing responsive and SEO-friendly websites using React, JavaScript, and modern front-end practices.",
      "Building scalable components with React and Tailwind CSS to improve reusability and maintainability.",
      "Collaborating with clients to gather requirements, provide technical recommendations, and deliver tailored solutions.",
      "Implementing performance optimization techniques to enhance website speed and user experience.",
      "Integrating APIs and third-party services to extend web application functionality.",
      "Managing end-to-end project lifecycles, including planning, development, testing, and deployment.",
    ],
  },
  {
    id: uuidv4(),
    title: "Front-End Developer",
    company: "Ipsum.ph",
    date: "June 2021 - January 2023",
    address: "18B Marilag Street Brgy. U.P. Village Quezon City 1101",
    jobDescriptions: [
      "Develop SEO-friendly, well-structured responsive website experiences across the home page, landing pages, and unstructured content.",
      "Maintain and update website to ensure it remains SEO-friendly and responsive.",
      "Update website with new content, features, and functionality as needed.",
      "Improve website performance to ensure optimal user experience and page load times.",
      "Troubleshoot and resolve website issues, such as broken links or server errors.",
      "Assist in the design, coding, and testing of technical solutions to improve website functionality and user experience.",
      "Ensure web design is optimized for smartphones, including responsive design and mobile-friendly features.",
      "Create and maintain development documentation to ensure efficient website maintenance and updates.",
      "Optimize web pages for maximum speed and scalability to improve user experience and search engine rankings.",
      "Recommend improvements on e-commerce websites as necessary, including design, functionality, and user experience.",
    ],
  },
  {
    id: uuidv4(),
    title: "Junior Front-End Developer",
    company: "Online IT Solutions",
    date: "December 2018 - July 2020",
    address: "56 Conchu St. Project 4, Cubao, Quezon City, Metro Manila",
    jobDescriptions: [
      "Implementing fundamental web design and development principles to build stable and user-friendly software.",
      "Transforming design mock-ups into interactive web applications using HTML, CSS, and JavaScript, with a focus on modular, scalable, and maintainable code.",
      "Utilizing Sass/SCSS to streamline CSS preprocessing, improving code organization and efficiency.",
      "Collaborating closely with senior developers and designers to support projects throughout all stages of development, from concept to deployment.",
      "Building responsive websites and web applications that deliver an optimal user experience across various devices and browsers.",
      "Creating and maintaining documentation for code and development processes to ensure consistency and facilitate knowledge sharing within the team.",
      "Assisting in the implementation of accessibility best practices to ensure all users can access and interact with web content.",
      "Contributing to code reviews and participating in team discussions to refine technical requirements and specifications.",
      "Troubleshooting and debugging issues to optimize performance and resolve technical problems efficiently.",
      "Staying updated on emerging technologies, trends, and best practices in front-end development to continuously improve skills and stay competitive in the field.",
    ],
  },
];

export default experienceData;
