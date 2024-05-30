import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { ContactItem } from "./Contact";
export interface SidebarItem {
  id: string;
  text: string;
  icon: IconProp;
}

export interface SidebarType {
  sidebarData: SidebarItem[];
  contactData: ContactItem[];
  active: number;
  handleSetActive: (index: number) => void;
  toggleSidebar: boolean;
  toggleTheme: () => void;
  isDark: boolean;
}
