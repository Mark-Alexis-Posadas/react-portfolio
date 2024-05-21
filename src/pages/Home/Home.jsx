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
        <h1 className="text-4xl font-bold">Hello! I'm Mark Alexis Posadas</h1>
        <SubTitle
          subTitleText="I am a passionate Front-End Developer with several years of experience in
          building dynamic and responsive web applications. My journey began with
          mastering the basics of web development, including HTML, CSS, and JavaScript.
          Over the years, I have expanded my expertise to include jQuery, Bootstrap, and
          Sass/SCSS, which have allowed me to create more complex and visually appealing
          interfaces."
        />
        <SubTitle
          subTitleText="In my previous roles, I have been responsible for designing and implementing
          user interfaces that are not only visually engaging but also highly functional
          and user-friendly. I have extensive experience with Laravel Blade, integrating
          front-end designs with back-end systems to create seamless and efficient web
          applications. My work often involves close collaboration with back-end
          developers, ensuring that the front-end code is compatible and well-integrated
          with the server-side logic."
        />
        <SubTitle
          subTitleText="I pride myself on staying current with the latest trends and technologies in
          front-end development. Although I have not yet had professional experience
          with React.js, I have been actively learning and experimenting with this
          powerful library in my personal projects. I am eager to bring this knowledge
          into a professional setting and contribute to innovative projects that push
          the boundaries of what is possible on the web."
        />
        {/* <Link to="/contact">
          <button
            className="text-white rounded bg-black p-3 min-w-[500px]"
            onClick={handleGetInTouchClick}
          >
            Get In Touch!
          </button>
        </Link> */}
      </Wrapper>
    </section>
  );
}
