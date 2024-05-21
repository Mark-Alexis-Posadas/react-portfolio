export default function Card({ projectsCardLayout, skillsCardLayout }) {
  return (
    <li className="bg-zinc-50 shadow-md rounded">
      {projectsCardLayout ? projectsCardLayout : skillsCardLayout}
    </li>
  );
}
