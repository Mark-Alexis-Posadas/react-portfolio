import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export default function Main({ children, handleToggleSidebar }) {
  return (
    <main className="ml-0 lg:ml-[131.33px] 2xl:ml-[350px] w-full min-h-screen p-3 lg:p-10 relative">
      {children}
      <button
        className="lg:hidden p-2 w-10 h-10 rounded-full bg-black absolute top-4 right-4"
        onClick={handleToggleSidebar}
      >
        <FontAwesomeIcon icon={faBars} size="lg" className="text-white" />
      </button>
    </main>
  );
}
