import { useMediaQuery } from "@mui/material";

import { useTheme } from "@mui/material/styles";

import { SearchInput } from "../SearchInput";
import { NavbarMobile } from "./NavbarMobile";
import { NavbarDesktop } from "./NavbarDesktop";
import { useEffect } from "react";

export const Navbar = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("tablet"));

  return (
    <>
      {matches ? (
        <NavbarMobile matches={matches} />
      ) : (
        <NavbarDesktop matches={matches} />
      )}
    </>
  );
};
