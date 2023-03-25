import { createContext, useContext, useState } from "react";

const openMenuContext = createContext(null);

const OpenMenuContexProvider = ({ children }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const value = { open, handleClick, handleClose, anchorEl };
  return (
    <openMenuContext.Provider value={value}>
      {children}
    </openMenuContext.Provider>
  );
};
export const useOpenMenu = () => {
  return useContext(openMenuContext);
};
export default OpenMenuContexProvider;
