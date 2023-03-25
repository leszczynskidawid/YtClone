import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import PersonAdd from "@mui/icons-material/PersonAdd";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import Avatar from "@mui/material/Avatar";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

import { Icon } from "@mui/material";
import { styled } from "@mui/system";
import { shouldForwardProp } from "@mui/styled-engine";

const SMenuItem = styled(MenuItem)(({ theme, switchedTo }) => ({
  padding: "20px 30px",
  fontSize: "20px",
  display: "flex",
  position: "relative",
  alignItems: "center",

  "& .MuiIcon-root ": {
    display: switchedTo ? "block" : "none",
  },
}));
const SIcon = styled(Icon)(({ theme }) => ({
  position: "absolute",
  right: "10px",
}));
export const PopupMenuItem = ({ icon, label, ...props }) => {
  return (
    <SMenuItem {...props}>
      <ListItemIcon>{icon}</ListItemIcon>
      {label}
      <SIcon>
        <KeyboardArrowRightIcon />
      </SIcon>
    </SMenuItem>
  );
};
