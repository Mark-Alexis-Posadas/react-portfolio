import { v4 as uuidv4 } from "uuid";

const data = [
  {
    id: uuidv4(),
    logo: "/assets/images/ipsum-logo.png",
    title: "Front-End Developer",
    company: "Ipsum.ph",
    date: "June 2021 - January 2023",
    address: " 18B Marilag Street Brgy. U.P. Village Quezon City 1101",
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
    logo: "/assets/images/olit-logo.png",
    title: "Front-End Developer",
    company: "Online IT Solutions",
    date: "December 2018 - July 2020",
    address: "56 Conchu St. Project 4, Cubao, Quezon City, Metro Manila",
    jobDescriptions: [
      "Implementing web design and development principles to build stable software.",
      "Bringing mock-ups to life using HTML, CSS, BEM, JAVASCRIPT and other PLUGINS.",
      "Collaborating closely with the team to support projects during all phases of delivery.",
      "Building websites and apps that are responsive and usable.",
      "Building reusable code for future use.",
      "Maintaining brand consistency throughout design.",
      "Ensuring web design is optimized for smartphones.",
    ],
  },
];

export default data;
