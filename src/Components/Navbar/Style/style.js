import { styled } from "@mui/system";
import { Box } from "@mui/system";
import { Toolbar } from "@mui/material";
import MuiAppBar from "@mui/material/AppBar";

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  boxShadow: "none",
  background: theme.palette.background.paper,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));
const AppBarContainer = styled(AppBar)`
  position: fixed;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 16px;
  min-height: 56px;
  gap: 0 20px;
`;

const AppBarFragmentsContainer = styled(Toolbar)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
`;
export { AppBarContainer, AppBarFragmentsContainer };
