import { useState } from "react";

export const useMenuOpenPop = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const value = { open, anchorEl, handleClick, handleClose };
  return [value];
};
