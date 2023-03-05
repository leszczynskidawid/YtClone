import { createTheme } from "@mui/material/styles";

export const Colors = {
  powderWhite: "#FFFDF9",
  persianGreen: "#06B41A",
  lightBlue: "#FFFFFF",
  onyx: "#36313D",
  red: "#F00",
  blue: "#3EA6FF",
  grey: "#FFFFFF14",
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
    grey: {
      main: Colors.grey,
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        disableRipple: true,
        disableElevation: true,
      },
    },
    MuiInputAdornment: {
      styleOverrides: {
        root: {
          color: Colors.lightBlue,
        },
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

export const Borders = {
  border: {
    standartDarkMode: `.5px solid ${theme.palette.grey.main}`,
    standartligthMode: ` .5px solid ${theme.palette.secondary.main} `,
  },
  borderRadius: {
    normal: "20px",
  },
};
