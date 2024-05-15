import { useContext } from "react";
import { MyContext } from "../../context/MyContextProvider";
export default function About() {
  const { aboutTitle } = useContext(MyContext);
  return (
    <section>
      <h1 className="font-bold text-4xl">{aboutTitle}</h1>
    </section>
  );
}
