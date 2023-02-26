import { IconButton } from "@mui/material";
import { Avatar } from "@mui/material";
import { Logo } from "../Logo";
import MenuIcon from "@mui/icons-material/Menu";
import { AppBarContainer, AppBarFragmentsContainer } from "./Style/style";
import { LoginButton } from "../LoginButton";
import { SearchInput } from "../SearchInput";
import { useAuth } from "../../Context/AuthContext";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import MoreVertIcon from "@mui/icons-material/MoreVert";

export const NavbarMobile = ({ matches, openSerchInput }) => {
  const { token, LoginUserAction, logOut } = useAuth();

  return (
    <AppBarContainer>
      <AppBarFragmentsContainer>
        <MenuIcon color="primary" />
        <Logo />
      </AppBarFragmentsContainer>
      <AppBarFragmentsContainer>
        {!token ? (
          <AppBarFragmentsContainer>
            <SearchInput matches={matches} openSerchInput={openSerchInput} />
            <MoreVertIcon color="primary" />
            <LoginButton action={() => LoginUserAction()} />
          </AppBarFragmentsContainer>
        ) : (
          <AppBarFragmentsContainer>
            <SearchInput matches={matches} openSerchInput={openSerchInput} />
            <VideoCallIcon color="primary" />
            <NotificationsNoneIcon color="primary" />
            <IconButton onClick={() => logOut()}>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
            </IconButton>
          </AppBarFragmentsContainer>
        )}
      </AppBarFragmentsContainer>
    </AppBarContainer>
  );
};
