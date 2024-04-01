
"use client"
import { ReactNode, createContext, useState } from "react";

export type MenuContextType = {
  menuOpen: boolean;
  setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export const menuContext = createContext<MenuContextType | undefined>(undefined);

export const MenuContextProvider = ({ children }: { children: ReactNode }) => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  return (
    <menuContext.Provider value={{ menuOpen, setMenuOpen }}>
      {children}
    </menuContext.Provider>
  );
};
