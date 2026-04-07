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
