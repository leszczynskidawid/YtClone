import { HeaderMenuAccount } from "./headerMenu";
import Settings from "@mui/icons-material/Settings";
import PersonAdd from "@mui/icons-material/PersonAdd";
import Logout from "@mui/icons-material/Logout";
import { PopupMenuItem } from "../PopupMenuItem";
import { useColorModeContex } from "../../../Context/modeContext";
import { useMenuOpenPop } from "../../../Hooks/useMenuOpenPop";
import { Anchor, KeyboardArrowLeft } from "@mui/icons-material";
import DoneIcon from "@mui/icons-material/Done";

export const PopupMenuAccoutItems = () => {
  const [value] = useMenuOpenPop();
  const { handleOpenSubMenu, handleCloseMenu, submenu, submenuItems } = value;

  const { colorMode } = useColorModeContex();

  const SubMenuModeColor = [
    {
      id: 1,
      label: "jasny",
      action: () => {
        colorMode.toggleColorMode(true);
        handleCloseMenu();
      },
      icon: localStorage.getItem("theme") !== "dark" ? <DoneIcon /> : null,
    },
    {
      id: 2,
      label: "ciemny",
      action: () => {
        colorMode.toggleColorMode(false);
        handleCloseMenu();
      },
      icon: localStorage.getItem("theme") !== "light" ? <DoneIcon /> : null,
    },
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
  ];

  const PopupMenuAccoutItemsArray = [
    {
      id: 1,
      label: "Twój kannał",
      icon: <Settings />,
      action: () => handleCloseMenu(),
    },
    {
      id: 2,
      label: "YouTube Studio",
      icon: <PersonAdd />,
      action: () => handleCloseMenu(),
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
      action: () => handleOpenSubMenu(SubMenuModeColor),
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
      {!submenu ? (
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
            label={"Wyglad"}
            icon={<KeyboardArrowLeft />}
            onClick={handleCloseMenu}
          />
          {submenuItems.map((item, index) => (
            <PopupMenuItem
              key={item.id}
              label={item.label}
              onClick={item.action}
              icon={item.icon}
            />
          ))}
        </>
      )}
    </>
  );
};
