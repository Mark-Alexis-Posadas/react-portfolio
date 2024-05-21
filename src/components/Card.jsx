export default function Card({ projectsCardLayout, skillsCardLayout }) {
  return (
    <li className="bg-zinc-50 shadow-md rounded transition transform duration-300 hover:shadow-lg hover:scale-105">
      {projectsCardLayout ? projectsCardLayout : skillsCardLayout}
    </li>
  );
}
