import React from "react";
import { useNavigate, Link } from "react-router-dom";
import Wrapper from "../../components/Wrapper";
import sidebarData from "../../data/sidebar-data";
import SubTitle from "../../components/SubTitle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { GrDocumentPdf } from "react-icons/gr";

interface HomeType {
  handleSetActive: (index: number) => void;
  homeSubTitle: string;
  isDark: boolean;
}
const Home: React.FC<HomeType> = ({
  handleSetActive,
  homeSubTitle,
  isDark,
}) => {
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
        <h1
          className={`${
            isDark ? "dark:text-white" : "dark:text-black"
          } lg:text-8xl text-4xl font-bold`}
        >
          Hello! I'm Mark Alexis Posadas
        </h1>
        <SubTitle
          subTitleText={homeSubTitle}
          classNames={`${
            isDark ? "dark:text-[#999]" : "dark:text-black"
          }  mb-4 font-light text-2xl lg:text-3xl text-slate-900 my-8`}
        />
        <div className="flex flex-col md:flex-row items-center justify-center gap-5">
          <Link to="/contact">
            <button
              className={`${
                isDark
                  ? "dark:bg-white dark:text-black"
                  : "dark:text-white dark:bg-black"
              } rounded p-3 min-w-[200px] flex items-center justify-center gap-2`}
              onClick={handleGetInTouchClick}
            >
              <FontAwesomeIcon icon={faEnvelope} />
              Get In Touch!
            </button>
          </Link>
          <button
            className={`${
              isDark
                ? "dark:text-[#999] dark:border-[#999]"
                : "dark:text-black dark:border-black"
            } border-dashed border-2 rounded p-3 min-w-[200px] flex items-center justify-center gap-2`}
          >
            <GrDocumentPdf />
            Resume
          </button>
        </div>
      </Wrapper>
    </section>
  );
};

export default Home;
