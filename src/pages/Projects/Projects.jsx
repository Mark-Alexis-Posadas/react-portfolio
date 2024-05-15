import React, { useContext } from "react";
import { MyContext } from "../../context/MyContextProvider";

export default function Projects() {
  const { projectsTitle } = useContext(MyContext);
  return (
    <section>
      <h1 className="font-bold text-4xl">{projectsTitle}</h1>
    </section>
  );
}
