import { useNavigate, Link } from "react-router-dom";
import Wrapper from "../../components/Wrapper";
import sidebarData from "../../data/sidebarData";

export default function Home({ handleSetActive }) {
  const navigate = useNavigate();

  const handleGetInTouchClick = () => {
    const contactIndex = sidebarData.findIndex(
      (data) => data.text === "contact"
    );
    handleSetActive(contactIndex);
    navigate("/contact");
  };

  return (
    <section className="flex items-center justify-center min-h-[calc(100vh-5rem)] text-center">
      <Wrapper>
        <h1 className="text-9xl font-bold">
          Hello! I'm Mark <br /> Alexis Posadas
        </h1>
        <p className="text-4xl text-slate-600 font-medium  max-w-[739px] m-auto my-7">
          I am a front-end developer with a passion for creating beautiful,
          functional, and user-friendly websites.
        </p>
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
