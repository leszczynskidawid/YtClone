import { useState } from "react";

import { useOpenMenuAnchorElContext } from "../Context/menuOpenContex";

export const useMenuOpenPop = () => {
  const [submenu, setSubmenu] = useState(false);
  const [submenuItems, setSubmenuItem] = useState([]);
  const { changeAnchorEl, anchorEl } = useOpenMenuAnchorElContext();
  const [type, setType] = useState("");
  const open = Boolean(anchorEl);

  const handleClick = (event, type) => {
    changeAnchorEl(event.currentTarget);
    setType(type);
  };
  const handleCloseMenu = () => {
    changeAnchorEl(null);
    setType("");
  };

  const handleOpenSubMenu = (items) => {
    setSubmenu(true);
    setSubmenuItem(items);

    if (submenu) {
      return submenuItems;
    }
  };
  const handleCloseSubMenu = () => {
    setSubmenu(false);
  };

  const value = {
    open,
    anchorEl,
    handleClick,
    handleOpenSubMenu,
    handleCloseSubMenu,
    handleCloseMenu,
    type,
    submenu,
    submenuItems,
  };
  return [value];
};
