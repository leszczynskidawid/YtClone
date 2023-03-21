import Menu from "@mui/material/Menu";

import { Divider } from "@mui/material";

import { HeaderMenuAccount } from "./headerMenu";
import { MenuItemAccount } from "./MenuItem";
import { Settings } from "@mui/icons-material";

export const MenuAccout = ({ anchorEl, handleClose, open, children }) => {
  return (
    <Menu
      anchorEl={anchorEl}
      id="account-menu"
      open={open}
      onClose={handleClose}
      onClick={handleClose}
      PaperProps={{
        elevation: 0,
        sx: {
          overflow: "auto",
          filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
          mt: 1.5,
          borderRadius: "20px",
          "&:before": {
            content: '""',
            display: "block",
            position: "absolute",
            top: 0,
            right: 14,
            width: 10,
            height: 10,
            bgcolor: "background.paper",
            transform: "translateY(-50%) rotate(45deg)",
            zIndex: 0,
          },
        },
      }}
      transformOrigin={{ horizontal: "right", vertical: "top" }}
      anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
    >
      {children}
      {/* <HeaderMenuAccount />
      <MenuItemAccount label={"Twoj Kanał "} icon={<Settings />} />
      <MenuItemAccount label={"YouTube Studio "} icon={<Settings />} />
      <MenuItemAccount
        label={"Przełącz konto "}
        icon={<Settings />}
        switchedTo
      />
      <MenuItemAccount label={"Wyloguj się "} icon={<Settings />} />
      <Divider />
      <MenuItemAccount label={"Zakupy i subskrypcje "} icon={<Settings />} />
      <MenuItemAccount label={"Twoje dane YouTube"} icon={<Settings />} />
      <Divider />
      <MenuItemAccount
        label={`wyglad ${localStorage.getItem("theme")}`}
        icon={<Settings />}
        switchedTo
      />
      <MenuItemAccount label={"Język polski "} icon={<Settings />} switchedTo />
      <MenuItemAccount
        label={"Tryb ograniczonej widoczności:wył"}
        icon={<Settings />}
      />
      <MenuItemAccount
        label={"lokalizacja Polska  "}
        icon={<Settings />}
        switchedTo
      />
      <MenuItemAccount label={"Skróty klawiszowe"} icon={<Settings />} />
      <Divider />
      <MenuItemAccount label={"Ustawienia  "} icon={<Settings />} />
      <Divider />
      <MenuItemAccount label={"Pomoc "} icon={<Settings />} />
      <MenuItemAccount label={"Prześlij opinie"} icon={<Settings />} /> */}
    </Menu>
  );
};
