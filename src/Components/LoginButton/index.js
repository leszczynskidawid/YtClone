import { Box } from "@mui/system";
import { IconButton, styled } from "@mui/material";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Borders } from "../../Style/Theme";

const SLoginButtonContainer = styled(Box)`
  display: flex;
  align-items: center;
  border: ${Borders.border.standartDarkMode};
  border-radius: ${Borders.borderRadius.normal};
`;

export const LoginButton = ({ action }) => {
  return (
    <SLoginButtonContainer>
      <IconButton onClick={action} color="info">
        <AccountCircleOutlinedIcon />
        <Box component={"span"}>Zaloguj się</Box>
      </IconButton>
    </SLoginButtonContainer>
  );
};
