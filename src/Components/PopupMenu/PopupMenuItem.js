import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";

import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { Icon } from "@mui/material";
import { styled } from "@mui/system";

const SMenuItem = styled(MenuItem)(({ theme, switchedTo }) => ({
  padding: "20px 30px",
  fontSize: "20px",
  maxWidth: "400px",
  display: "flex",
  position: "relative",
  alignItems: "center",

  "& .MuiIcon-root ": {
    position: "absolute",
    right: "30px",
  },
}));

export const PopupMenuItem = ({
  onClick,
  icon,
  label,
  hasSubmenu = false,
  hasDivder = false,
  ...props
}) => {
  return (
    <>
      <SMenuItem {...props} onClick={onClick}>
        <ListItemIcon>{icon}</ListItemIcon>
        {label}
        {hasSubmenu && (
          <Icon>
            <KeyboardArrowRightIcon />
          </Icon>
        )}
      </SMenuItem>
      {hasDivder && <Divider />}
    </>
  );
};
