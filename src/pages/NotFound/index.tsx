import React from "react";
import { useNavigate, Link } from "react-router-dom";
import Wrapper from "../../components/Wrapper";
import { SidebarType } from "../../types/Sidebar";
const NotFound: React.FC<SidebarType> = ({ handleSetActive, sidebarData }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    const homeIndex = sidebarData.findIndex((data) => data.text === "home");
    handleSetActive(homeIndex);
    navigate("/home");
  };
  return (
    <section className="flex items-center justify-center min-h-screen">
      <Wrapper className="text-center">
        <h1 className="text-red-600 text-7xl"> 404 Not Found!!</h1>
        <Link to="/">
          <button
            className="text-white bg-black rounded p-2"
            onClick={handleClick}
          >
            Please go back
          </button>
        </Link>
      </Wrapper>
    </section>
  );
};

export default NotFound;
