import { ReactNode } from "react";

export interface MainTypes {
  children: ReactNode;
  handleToggleSidebar: () => void;
  toggleSidebar: boolean;
  isDark: boolean;
}
