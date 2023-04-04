import { createContext } from "react";
import { useState } from "react";
import { useContext } from "react";

const MenuOpenAnchorElContext = createContext();

const MenuOpenAnchorElProvider = ({ children }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const changeAnchorEl = (currentTarget) => {
    setAnchorEl(currentTarget);
  };
  return (
    <MenuOpenAnchorElContext.Provider value={{ anchorEl, changeAnchorEl }}>
      {children}
    </MenuOpenAnchorElContext.Provider>
  );
};
export const useOpenMenuAnchorElContext = () => {
  return useContext(MenuOpenAnchorElContext);
};

export default MenuOpenAnchorElProvider;
