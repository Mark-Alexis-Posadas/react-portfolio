// import { v4 as uuidv4 } from "uuid";

// interface Types {
//   id: string;
//   icon: string[];
// }
// const contactData: Types[] = [
//   { id: uuidv4(), icon: ["fab", "fa-linkedin-in"] },
//   { id: uuidv4(), icon: ["fab", "fa-github"] },
// ];

// export default contactData;

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
