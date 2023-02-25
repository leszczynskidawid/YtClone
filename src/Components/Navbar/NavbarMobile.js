import { Box } from "@mui/system";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";

import { Tooltip } from "@mui/material";
import { IconButton } from "@mui/material";
import { Avatar } from "@mui/material";
import { Logo } from "../../Logo";
import MenuIcon from "@mui/icons-material/Menu";
import { AppBarContainer, AppBarFragmentsContainer } from "./Style/style";
import { LoginButton } from "../LoginButton";
import { SearchInput } from "../SearchInput";
import { useState } from "react";
export const NavbarMobile = ({ matches }) => {
  const { searchIsActive, setSearchIsActive } = useState(false);
  return (
    <AppBarContainer>
      <AppBarFragmentsContainer>
        <MenuIcon color="primary" />
        <Logo />
      </AppBarFragmentsContainer>
      <AppBarFragmentsContainer>
        {/* <VideoCallIcon color="primary" />
        <NotificationsNoneIcon color="primary" /> */}
        {/* <Tooltip title="Open settings">
          <IconButton sx={{ p: 0 }}>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
          </IconButton>
        </Tooltip> */}

        <SearchInput matches={matches} />
        <LoginButton />
      </AppBarFragmentsContainer>
    </AppBarContainer>
  );
};
