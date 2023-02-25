import { createTheme } from "@mui/material/styles";

export const Colors = {
  powderWhite: "#FFFDF9",
  persianGreen: "#06B41A",
  lightBlue: "#FFFFFF",
  onyx: "#36313D",
  red: "#F00",
  blue: "#3EA6FF",
};

export const theme = createTheme({
  palette: {
    primary: {
      main: Colors.lightBlue,
    },
    secondary: {
      main: Colors.onyx,
    },
    error: {
      main: Colors.red,
    },
    info: {
      main: Colors.blue,
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        disableRipple: true,
        disableElevation: true,
      },
    },
  },
  breakpoints: {
    values: {
      mobile: 0,
      tablet: 640,
      laptop: 1024,
      desktop: 1200,
    },
  },
});
