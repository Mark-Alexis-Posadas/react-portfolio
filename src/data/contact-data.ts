import { v4 as uuidv4 } from "uuid";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

interface Types {
  id: string;
  icon: IconProp;
}

const contactData: Types[] = [
  { id: uuidv4(), icon: ["fab", "linkedin-in"] },
  { id: uuidv4(), icon: ["fab", "github"] },
];

export default contactData;
