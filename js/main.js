const html = document.documentElement;
const toggle = document.getElementById("themeToggle");

const savedTheme = localStorage.getItem("theme");

if (savedTheme) {
  html.classList.toggle("dark", savedTheme === "dark");
}

function updateIcon() {
  toggle.textContent = html.classList.contains("dark") ? "☀️" : "🌙";
}

updateIcon();

toggle.addEventListener("click", () => {
  html.classList.toggle("dark");
  localStorage.setItem(
    "theme",
    html.classList.contains("dark") ? "dark" : "light",
  );
  updateIcon();
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

document.addEventListener("mousemove", (e) => {
  let x = (e.clientX / window.innerWidth - 0.5) * 30;
  let y = (e.clientY / window.innerHeight - 0.5) * 30;

  blob1.style.transform = `translate(${x}px, ${y}px)`;
  blob2.style.transform = `translate(${-x}px, ${-y}px)`;
});

// EXPERIENCE DATA
const experienceData = [
  {
    id: 1,
    title: "Freelance Developer",
    company: "Self-Employed",
    date: "April 2023 – Present",
    address: "Remote",
    jobDescriptions: [
      "Developing responsive and SEO-friendly websites using React, JavaScript, and modern front-end practices.",
      "Building scalable components with React and Tailwind CSS.",
      "Collaborating with clients and delivering tailored solutions.",
      "Optimizing performance and speed.",
    ],
  },
  {
    id: 2,
    title: "Front-End Developer",
    company: "Ipsum.ph",
    date: "June 2021 - January 2023",
    address: "Quezon City",
    jobDescriptions: [
      "Developed SEO-friendly responsive websites.",
      "Maintained and improved website performance.",
      "Optimized pages for speed and scalability.",
      "Handled debugging and fixes.",
    ],
  },
  {
    id: 3,
    title: "Junior Front-End Developer",
    company: "Online IT Solutions",
    date: "December 2018 - July 2020",
    address: "Cubao, QC",
    jobDescriptions: [
      "Converted designs into real web apps.",
      "Worked with HTML, CSS, JS, SCSS.",
      "Built responsive and accessible UI.",
      "Collaborated with team.",
    ],
  },
];

// RENDER FUNCTION
const container = document.getElementById("experienceContainer");

experienceData.forEach((exp, index) => {
  const isLeft = index % 2 === 0;

  const item = document.createElement("div");
  item.className = "mb-16 flex justify-between items-center w-full reveal";

  item.innerHTML = `
    ${
      isLeft
        ? `<div class="w-5/12"></div>`
        : `
        <div class="w-5/12 glass p-6 rounded-2xl hover:shadow-xl transition text-right">
          <h3 class="font-semibold text-lg">${exp.title}</h3>
          <p class="text-sm text-blue-400">${exp.company}</p>
          <span class="text-xs text-gray-400">${exp.date}</span>

          <ul class="text-gray-600 dark:text-gray-400 text-sm mt-3 space-y-1">
            ${exp.jobDescriptions.map((desc) => `<li>• ${desc}</li>`).join("")}
          </ul>
        </div>
      `
    }

    <!-- DOT -->
    <div class="z-10 w-4 h-4 ${
      isLeft ? "bg-purple-500" : "bg-blue-500"
    } rounded-full border-4 border-[#020617]"></div>

    ${
      isLeft
        ? `
        <div class="w-5/12 glass p-6 rounded-2xl hover:shadow-xl transition">
          <h3 class="font-semibold text-lg">${exp.title}</h3>
          <p class="text-sm text-purple-400">${exp.company}</p>
          <span class="text-xs text-gray-400">${exp.date}</span>

          <ul class="text-gray-600 dark:text-gray-400 text-sm mt-3 space-y-1">
            ${exp.jobDescriptions.map((desc) => `<li>• ${desc}</li>`).join("")}
          </ul>
        </div>
      `
        : `<div class="w-5/12"></div>`
    }
  `;

  container.appendChild(item);
  observer.observe(item);
});
