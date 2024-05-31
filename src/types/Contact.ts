import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FormState } from "./Form";
export interface ContactItem {
  id: string;
  icon: IconProp;
}

export interface ContactTypes {
  contactTitle: string;
  contactSubTitle: string;
  forms: FormState;
  setForms: React.Dispatch<React.SetStateAction<FormState>>;
  formRef: React.RefObject<HTMLFormElement>;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  handleNameChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleEmailChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
  isDark: boolean;
}
