import { Box } from "@mui/system";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { styled, Typography, useTheme } from "@mui/material";
import { Colors } from "../../Style/Theme";
import logoLigthMode from "../../assets/img/logoLight.png";
import logoDarkMode from "../../assets/img/logoDarks.png";

const ImageContainer = styled(Box)`
  position: relative;
  display: flex;
`;
const SImg = styled("img")``;

export const Logo = () => {
  const thme = useTheme();

  return (
    <ImageContainer>
      <img
        style={{ width: "100px" }}
        src={thme.palette.mode === "dark" ? logoDarkMode : logoLigthMode}
      />
    </ImageContainer>
  );
};
