import { createContext, useContext, useState } from "react";

const HamburgerContext = createContext();

const HamburgerProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleHamburger = () => setIsOpen((prev) => !prev);
  const closeSidebar = () => setIsOpen(false);

  return (
    <HamburgerContext.Provider
      value={{ isOpen, toggleHamburger, closeSidebar }}
    >
      {children}
    </HamburgerContext.Provider>
  );
};

const useHamburger = () => {
  return useContext(HamburgerContext);
};

export { HamburgerProvider, useHamburger };
