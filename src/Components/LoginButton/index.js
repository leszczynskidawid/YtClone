import { Box } from "@mui/system";
import { IconButton } from "@mui/material";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
export const LoginButton = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        border: "1px solid white",
        borderRadius: "40px",
      }}
    >
      <IconButton
        color="info"
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          padding: "5px 10px",
        }}
      >
        <AccountCircleOutlinedIcon />

        <span style={{ fontSize: "20px" }}>Zaloguj się</span>
      </IconButton>
    </Box>
  );
};
