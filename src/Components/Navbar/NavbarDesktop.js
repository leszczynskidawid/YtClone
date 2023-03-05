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
export const NavbarDesktop = ({ matches }) => {
  const { token, LoginUserAction, logOut } = useAuth();
  return (
    <AppBarContainer>
      <AppBarFragmentsContainer>
        <MenuIcon color="primary" />
        <Logo />
      </AppBarFragmentsContainer>
      <SearchInput matches={matches} />

      {!token ? (
        <AppBarFragmentsContainer>
          <MoreVertIcon color="primary" />
          <LoginButton action={() => LoginUserAction()} />
        </AppBarFragmentsContainer>
      ) : (
        <AppBarFragmentsContainer>
          <VideoCallIcon color="primary" />
          <NotificationsNoneIcon color="primary" />
          <IconButton onClick={() => logOut()}>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
          </IconButton>
        </AppBarFragmentsContainer>
      )}
    </AppBarContainer>
  );
};
