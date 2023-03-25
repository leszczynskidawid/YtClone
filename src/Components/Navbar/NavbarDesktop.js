import MenuIcon from "@mui/icons-material/Menu";
import { Logo } from "../Logo";
import { SearchInput } from "../SearchInput";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { AppBarContainer, AppBarFragmentsContainer } from "./Style/style";
import { LoginButton } from "../LoginButton";
import { useAuth } from "../../Context/AuthContext";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import { IconButton } from "@mui/material";
import { Avatar } from "@mui/material";
import { useOpenMenu } from "../../Context/openMenuContext";
import { PopupMenu } from "../PopupMenu";
import { PopupMenuAccoutItems } from "../PopupMenu/PopupMenuAccout";

export const NavbarDesktop = ({ matches, openDrower }) => {
  const { token, LoginUserAction, logOut } = useAuth();
  const { open, anchorEl, handleClose, handleClick } = useOpenMenu();

  return (
    <AppBarContainer>
      <AppBarFragmentsContainer>
        <MenuIcon onClick={openDrower} />
        <Logo />
      </AppBarFragmentsContainer>
      <SearchInput matches={matches} />

      {!token ? (
        <AppBarFragmentsContainer>
          <MoreVertIcon onClick={handleClick} />
          <PopupMenu
            open={open}
            handleClose={handleClose}
            handleClick={handleClick}
            anchorEl={anchorEl}
            children={<PopupMenuAccoutItems />}
          />

          <LoginButton action={() => LoginUserAction()} />
        </AppBarFragmentsContainer>
      ) : (
        <AppBarFragmentsContainer>
          <VideoCallIcon />
          <NotificationsNoneIcon />
          <IconButton onClick={() => logOut()}>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
          </IconButton>
        </AppBarFragmentsContainer>
      )}
    </AppBarContainer>
  );
};
