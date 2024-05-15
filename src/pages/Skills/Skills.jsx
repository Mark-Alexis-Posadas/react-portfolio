import { useContext } from "react";
import { MyContext } from "../../context/MyContextProvider";
export default function Skills() {
  const { skillsTitle } = useContext(MyContext);
  return (
    <section>
      <h1 className="font-bold text-4xl">{skillsTitle}</h1>
    </section>
  );
}
