import React from "react";
import { useNavigate, Link } from "react-router-dom";
import Wrapper from "../../components/Wrapper";
import sidebarData from "../../data/sidebar-data";
import SubTitle from "../../components/SubTitle";

interface HomeType {
  handleSetActive: (index: number) => void;
  homeSubTitle: string;
}
const Home: React.FC<HomeType> = ({ handleSetActive, homeSubTitle }) => {
  const navigate = useNavigate();

  const handleGetInTouchClick = () => {
    const contactIndex = sidebarData.findIndex(
      (data) => data.text === "contact"
    );
    handleSetActive(contactIndex);
    navigate("/contact");
  };
  return (
    <section className="min-h-[calc(100vh-5rem)] flex items-center text-center">
      <Wrapper>
        <h1 className="lg:text-8xl text-4xl font-bold">
          Hello! I'm Mark Alexis Posadas
        </h1>
        <SubTitle
          subTitleText={homeSubTitle}
          classNames="mb-4 font-light text-2xl lg:text-3xl text-slate-900 my-8"
        />
        <div className="flex flex-col md:flex-row items-center justify-center gap-5">
          <Link to="/contact">
            <button
              className="text-white rounded bg-black p-3 min-w-[200px]"
              onClick={handleGetInTouchClick}
            >
              Get In Touch!
            </button>
          </Link>
          <button className="text-black border-dashed border-2 border-black rounded p-3 min-w-[200px]">
            Resume
          </button>
        </div>
      </Wrapper>
    </section>
  );
};

export default Home;
