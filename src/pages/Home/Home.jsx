import { useNavigate, Link } from "react-router-dom";
import Wrapper from "../../components/Wrapper";
import sidebarData from "../../data/sidebarData";
import SubTitle from "../../components/SubTitle";

export default function Home({ handleSetActive, homeSubTitle }) {
  const navigate = useNavigate();

  const handleGetInTouchClick = () => {
    const contactIndex = sidebarData.findIndex(
      (data) => data.text === "contact"
    );
    handleSetActive(contactIndex);
    navigate("/contact");
  };

  return (
    <section className="min-h-[calc(100vh-5rem)]">
      <Wrapper>
        <h1 className="text-4xl font-bold">
          Hello! I'm Mark <br /> Alexis Posadas
        </h1>
        <SubTitle subTitleText={homeSubTitle} />
        <Link to="/contact">
          <button
            className="text-white rounded bg-black p-3 min-w-[500px]"
            onClick={handleGetInTouchClick}
          >
            Get In Touch!
          </button>
        </Link>
      </Wrapper>
    </section>
  );
}
