import { Box } from "@mui/system";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { styled, Typography } from "@mui/material";
import { Colors } from "../../Style/Theme";

const SLogoContainer = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 1rem;
`;
const ImageContainer = styled(Box)`
  position: relative;
  display: flex;
`;

const SBgroundColor = styled("div")({
  backgroundColor: Colors.lightBlue,
  position: "absolute",
  width: "40%",
  height: "25%",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  zIndex: "-999",
});

export const Logo = () => {
  return (
    <SLogoContainer>
      <ImageContainer>
        <YouTubeIcon color="error" />
        <SBgroundColor />
      </ImageContainer>
      <Typography variant="h6" color="primary">
        YouTube
      </Typography>
    </SLogoContainer>
  );
};
