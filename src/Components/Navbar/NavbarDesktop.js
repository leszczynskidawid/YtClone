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
import { PopupMenu } from "../PopupMenu";
import { PopupMenuAccoutItems } from "../PopupMenu/PopupMenuAccout";
import { useMenuOpenPop } from "../../Hooks/useMenuOpenPop";
import { ACCOUT_MENU_ID } from "../PopupMenu/Constants/IdPopupMenu";

export const NavbarDesktop = ({ matches, openDrower }) => {
  const { token, LoginUserAction, logOut } = useAuth();
  const [value] = useMenuOpenPop();
  const { open, anchorEl, handleClick, handleCloseMenu, type } = value;

  return (
    <AppBarContainer>
      <AppBarFragmentsContainer>
        <MenuIcon onClick={openDrower} />
        <Logo />
      </AppBarFragmentsContainer>
      <SearchInput matches={matches} />

      {!token ? (
        <AppBarFragmentsContainer>
          <MoreVertIcon
            onClick={(e) => handleClick(e, ACCOUT_MENU_ID)}
            aria-controls={open ? ACCOUT_MENU_ID : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
          />
          <PopupMenu
            id={ACCOUT_MENU_ID}
            open={open && type === ACCOUT_MENU_ID}
            handleClose={handleCloseMenu}
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
