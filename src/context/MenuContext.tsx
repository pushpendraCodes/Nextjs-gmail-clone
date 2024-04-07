"use client";
import { ReactNode, createContext, useState } from "react";

export type MenuContextType = {
  menuOpen: boolean;
  menuHovered: boolean;
  toggleMenu: () => void;
  handleMouseEnter: () => void;
  handleMouseLeave: () => void;
};

export const menuContext = createContext<MenuContextType>({
  menuOpen: false,
  toggleMenu: () => {},
  handleMouseEnter: () => {},
  handleMouseLeave: () => {},
  menuHovered: false,
});

export const MenuContextProvider = ({ children }: { children: ReactNode }) => {
  const [menuOpen, setMenuOpen] = useState<boolean>(true);
  const [menuHovered, setmenuHovered] = useState<boolean>(false);

  const handleMouseEnter = (): void => {
    setmenuHovered(true);

    console.log("Mouse entered");
  };

  const handleMouseLeave = (): void => {
    setmenuHovered(false);
    console.log("Mouse left");
  };

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <menuContext.Provider
      value={{ menuOpen, toggleMenu, handleMouseEnter,menuHovered, handleMouseLeave }}>
      {children}
    </menuContext.Provider>
  );
};
