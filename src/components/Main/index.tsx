import React, { ReactNode } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

interface MainTypes {
  children: ReactNode;
  handleToggleSidebar: () => void;
  toggleSidebar: boolean;
}

const Main: React.FC<MainTypes> = ({
  children,
  handleToggleSidebar,
  toggleSidebar,
}) => {
  return (
    <main className="ml-0 lg:ml-[300px] 2xl:ml-[350px] w-full min-h-screen p-3 lg:p-10 relative">
      {children}
      <button
        className="lg:hidden p-2 w-10 h-10 rounded-full bg-black absolute top-4 right-4"
        onClick={handleToggleSidebar}
      >
        <FontAwesomeIcon
          icon={toggleSidebar ? faTimes : faBars}
          size="lg"
          className="text-white"
        />
      </button>
    </main>
  );
};

export default Main;
