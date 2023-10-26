import { Box, Button } from "@mui/material";
import { styled } from "@mui/system";

export const SButton = styled(Button)(({ theme }) => ({
  background: theme.palette.grey.main,
  margin: "0 10px",
  fontSize: "14px",
  maxHeight: "50px",

  "&:hover": {
    background: theme.palette.grey.ligthGrey,
  },
}));
