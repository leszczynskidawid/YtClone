import { Box } from "@mui/system";
import { styled, useTheme } from "@mui/material";
import logoLigthMode from "../../assets/img/logoLight.png";
import logoDarkMode from "../../assets/img/logoDark.png";

const ImageContainer = styled(Box)`
  position: relative;
  display: flex;
`;

export const Logo = () => {
  const theme = useTheme();

  return (
    <ImageContainer>
      <img
        style={{ width: "150px" }}
        src={theme.palette.mode === "dark" ? logoDarkMode : logoLigthMode}
      />
    </ImageContainer>
  );
};
``;
