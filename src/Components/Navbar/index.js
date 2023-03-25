import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { NavbarMobile } from "./NavbarMobile";
import { NavbarDesktop } from "./NavbarDesktop";
import { useEffect, useState } from "react";
import { SarchNavbar } from "./SarchNavbar";
import { CategorySelectionMenu } from "../CategorySelectionMenu";

export const Navbar = ({ openDrower }) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));
  const [active, setActive] = useState(true);
  const handleOpenSearchNavabr = () => {
    setActive(!active);
  };
  useEffect(() => {
    if (matches) {
      setActive(true);
    }
  }, [matches]);

  return (
    <>
      {matches ? (
        active ? (
          <NavbarMobile
            matches={matches}
            openSerchInput={() => handleOpenSearchNavabr()}
          />
        ) : (
          <SarchNavbar closeAction={() => handleOpenSearchNavabr()} />
        )
      ) : (
        <NavbarDesktop matches={matches} openDrower={openDrower} />
      )}
    </>
  );
};
