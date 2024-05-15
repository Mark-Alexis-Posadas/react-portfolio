import { useContext } from "react";
import { MyContext } from "../../context/MyContextProvider";

export default function Experience() {
  const { experienceTitle } = useContext(MyContext);
  return (
    <section>
      <h1 className="font-bold text-4xl">{experienceTitle}</h1>
    </section>
  );
}
