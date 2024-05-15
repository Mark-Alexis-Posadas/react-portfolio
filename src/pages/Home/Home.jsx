import Wrapper from "../../components/Wrapper";

export default function Home() {
  return (
    <section className="flex items-center justify-center h-[700px] text-center">
      <Wrapper>
        <h1 className="text-9xl font-bold">
          Hello! I'm Mark <br /> Alexis Posadas
        </h1>
        <p className="text-4xl font-medium  max-w-[739px] m-auto my-7">
          I am a front-end developer with a passion for creating beautiful,
          functional, and user-friendly websites.
        </p>
        <button className="text-white rounded bg-black p-3 min-w-[500px]">
          Get In Touch!
        </button>
      </Wrapper>
    </section>
  );
}
