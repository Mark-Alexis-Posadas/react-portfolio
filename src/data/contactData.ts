import { v4 as uuidv4 } from "uuid";

interface ContactDataTypes = {
  id: string;
  icon: string[];
};
const contactData: ContactDataTypes[] = [
  { id: uuidv4(), icon: ["fab", "fa-linkedin-in"] },
  { id: uuidv4(), icon: ["fab", "fa-github"] },
];

export default contactData;
