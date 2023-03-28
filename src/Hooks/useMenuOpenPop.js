import { useState } from "react";

export const useMenuOpenPop = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [submenu, setSubmenu] = useState(true);
  const [submenuItems, setSubmenuItem] = useState([]);

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
    setSubmenu(false);
  };

  const handleOpenSubMenu = (items) => {
    setSubmenu(false);
    setSubmenuItem(items);
    if (!submenu) {
      return submenuItems;
    }
  };
  const handleCloseSubMenu = () => {
    setSubmenu(true);
  };
  const value = {
    open,
    anchorEl,
    handleClick,
    handleClose,
    handleOpenSubMenu,
    handleCloseSubMenu,
    submenu,
    submenuItems,
  };
  return [value];
};
