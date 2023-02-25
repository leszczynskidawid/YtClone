import { Box } from "@mui/system";
import MenuIcon from "@mui/icons-material/Menu";
import { Logo } from "../../Logo";
import { SearchInput } from "../SearchInput";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { IconButton, Typography } from "@mui/material";
import { AppBarContainer, AppBarFragmentsContainer } from "./Style/style";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { LoginButton } from "../LoginButton";

export const NavbarDesktop = ({ matches }) => {
  return (
    <AppBarContainer>
      <AppBarFragmentsContainer>
        <MenuIcon color="primary" />
        <Logo />
      </AppBarFragmentsContainer>
      <AppBarFragmentsContainer sx={{ flex: "2" }}>
        <SearchInput matches={matches} />
      </AppBarFragmentsContainer>
      <AppBarFragmentsContainer>
        <MoreVertIcon color="primary" />
        <LoginButton />
      </AppBarFragmentsContainer>
    </AppBarContainer>
  );
};
