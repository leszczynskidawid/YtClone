import { HeaderMenuAccount } from "./headerMenu";
import Settings from "@mui/icons-material/Settings";
import PersonAdd from "@mui/icons-material/PersonAdd";
import Logout from "@mui/icons-material/Logout";
import { PopupMenuItem } from "../PopupMenuItem";
import { useColorModeContex } from "../../../Context/modeContext";
import { useMenuOpenPop } from "../../../Hooks/useMenuOpenPop";
import { PopupMenu } from "..";
import {
  KeyboardArrowLeft,
  KeyboardDoubleArrowDown,
} from "@mui/icons-material";
import { Divider } from "@mui/material";

export const PopupMenuAccoutItems = () => {
  const [value] = useMenuOpenPop();
  const {
    open,
    anchorEl,
    handleClick,
    handleClose,
    handleOpenSubMenu,
    handleCloseSubMenu,
    submenu,
    submenuItems,
  } = value;

  const { colorMode } = useColorModeContex();

  // const openSubMenu = (component) => {
  //   if (!submenu) {
  //     return (
  //       <>
  //         <PopupMenuItem
  //           label={"Uzyj trybu urządzenia "}
  //           onClick={handleCloseSubMenu}
  //         />
  //         <PopupMenuItem label={"Jasny"} onClick={handleCloseSubMenu} />
  //         <PopupMenuItem label={"Ciemny"} onClick={handleCloseSubMenu} />
  //       </>
  //     );
  //   }
  // };

  const SubMenuModeColor = [
    { id: 1, label: "ciemny" },
    { id: 2, label: "jasny" },
  ];
  const SubMenuLanguage = [
    { id: 1, label: "aangielski" },
    { id: 2, label: "niemiecki " },
    { id: 3, label: "aangielski" },
    { id: 4, label: "niemiecki " },
    { id: 5, label: "aangielski" },
    { id: 6, label: "niemiecki " },
    { id: 7, label: "aangielski" },
    { id: 8, label: "niemiecki " },
    { id: 9, label: "aangielski" },
    { id: 10, label: "niemiecki " },
    { id: 11, label: "aangielski" },
    { id: 12, label: "niemiecki " },
    { id: 13, label: "aangielski" },
    { id: 14, label: "niemiecki " },

    { id: 15, label: "aangielski" },
    { id: 16, label: "niemiecki " },
    { id: 17, label: "aangielski" },
    { id: 18, label: "niemiecki " },
    { id: 19, label: "aangielski" },
    { id: 20, label: "niemiecki " },
  ];

  const PopupMenuAccoutItemsArray = [
    {
      id: 1,
      label: "Twój kannał",
      icon: <Settings />,
      action: () => handleOpenSubMenu(SubMenuModeColor),
    },
    {
      id: 2,
      label: "YouTube Studio",
      icon: <PersonAdd />,
      action: () => {},
    },
    {
      id: 3,
      label: "Przełącz konto",
      icon: <Settings />,
      action: () => {},
    },
    {
      id: 4,
      label: "Wyloguj się",
      icon: <Logout />,
      action: () => {},
      hasSubmenu: true,
      hasDivder: true,
    },
    {
      id: 5,
      label: "Zakupy i Subskrybcje",
      icon: <Settings />,
      action: () => {},
    },
    {
      id: 6,
      label: "Twoje dane w YouTube",
      icon: <Settings />,
      action: () => {},
      hasDivder: true,
    },
    {
      id: 7,
      label: "Wygląd",
      icon: <Settings />,
      action: () => {},
      hasSubmenu: true,
    },
    {
      id: 8,
      label: "Język",
      icon: <Settings />,
      action: () => handleOpenSubMenu(SubMenuLanguage),
      hasSubmenu: true,
    },
    {
      id: 9,
      label: "Tryb ograniczenia dostępu: włączone",
      icon: <Settings />,
      action: () => {},
    },
    {
      id: 10,
      label: "Lokalizacja:Polska",
      icon: <Settings />,
      action: () => {},
      hasSubmenu: true,
    },
    {
      id: 11,
      label: "Skróty klawiszowe",
      icon: <Settings />,
      action: () => {},
      hasDivder: true,
    },
    {
      id: 12,
      label: "Ustawienia",
      icon: <Settings />,
      action: () => {},
      hasDivder: true,
    },
    {
      id: 13,
      label: "Pomoc",
      icon: <Settings />,
      action: () => {},
    },
    {
      id: 14,
      label: "Prześli opinie",
      icon: <Settings />,
      action: () => {},
    },
  ];

  return (
    <>
      {submenu ? (
        <>
          <HeaderMenuAccount />

          {PopupMenuAccoutItemsArray.map((items) => (
            <PopupMenuItem
              key={items.id}
              label={items.label}
              icon={items.icon}
              hasSubmenu={items.hasSubmenu}
              hasDivder={items.hasDivder}
              onClick={() => items.action()}
            />
          ))}
        </>
      ) : (
        <>
          <PopupMenuItem
            label={"asdasd"}
            icon={<KeyboardArrowLeft />}
            onClick={handleCloseSubMenu}
          />
          {submenuItems.map((item) => (
            <PopupMenuItem key={item.id} label={item.label} />
          ))}

          <Divider />
        </>
      )}
    </>
  );
};
