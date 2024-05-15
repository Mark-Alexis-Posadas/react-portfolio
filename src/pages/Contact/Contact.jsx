import { useContext } from "react";
import { MyContext } from "../../context/MyContextProvider";
export default function Contact() {
  const { contactTitle } = useContext(MyContext);
  return (
    <section>
      <h1 className="font-bold text-4xl">{contactTitle}</h1>
    </section>
  );
}
