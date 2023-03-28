import { Padding } from "@mui/icons-material";
import Menu from "@mui/material/Menu";
import { styled } from "@mui/system";

const SMenu = styled(Menu)(({ theme }) => ({
  "& .MuiList-root": {
    background: theme.palette.background.default,
  },
}));

export const PopupMenu = ({ anchorEl, handleClose, open, children }) => {
  return (
    <SMenu
      anchorEl={anchorEl}
      open={open}
      onClose={handleClose}
      PaperProps={{
        sx: {
          overflow: "auto",
          borderRadius: "20px",
          minWidth: "416px",
        },
      }}
      transformOrigin={{ horizontal: "right", vertical: "top" }}
      anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
    >
      {children}
    </SMenu>
  );
};
