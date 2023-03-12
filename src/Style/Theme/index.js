import { amber, deepOrange, green, grey } from "@mui/material/colors";

export const Colors = {
  powderWhite: "#FFFDF9",
  persianGreen: "#06B41A",
  lightBlue: "#FFFFFF",
  onyx: "#36313D",
  red: "#F00",
  blue: "#3EA6FF",
  grey: "#FFFFFF14",
  white: "#FFF",
  darkWhite: "#F8F8F8",
  black: "#0f0f0f",
  ligthGrey: "#F8f8f8",
};

export const getDesignTokens = (mode) => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          primary: {
            main: Colors.white,
          },
          secondary: {
            main: grey[500],
          },
          error: {
            main: Colors.red,
          },
          info: {
            main: Colors.blue,
          },
          grey: {
            main: grey[200],
          },
          background: {
            default: Colors.white,
            paper: Colors.grey[900],
          },

          text: {
            primary: Colors.black,
            secondary: grey[500],
          },
        }
      : {
          primary: {
            main: Colors.white,
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
            main: grey[800],
          },
          background: {
            default: Colors.black,
            paper: Colors.black,
          },
          text: {
            primary: Colors.white,
            secondary: grey[800],
          },
        }),
  },

  breakpoints: {
    values: {
      mobile: 0,
      tablet: 640,
      laptop: 1024,
      desktop: 1210,
    },
  },
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          "& fieldset": {
            borderRadius: "20px 0px 0px 20px",
          },
        },
      },
    },

    MuiPaper: {
      styleOverrides: {
        root: {
          "::-webkit-scrollbar": {
            display: "none",
          },

          "&:hover::-webkit-scrollbar": {
            display: "block",
            width: "11px",
            borderRadius: "13px",
            border: "1px solid transparent",
          },
          "&::-webkit-scrollbar-track": {
            boxShadow: "inset 0 0 6px rgba(0,0,0,0.00)",
            webkitBoxShadow: "inset 0 0 6px rgba(0,0,0,0.00)",
            heigth: "10px",
          },
          "&::-webkit-scrollbar-thumb": {
            boxShadow: "inset 0 0 0 10px;",
            width: "25px",
            borderRadius: "13px",
            border: "1px solid transparent",
            color: Colors.ligthGrey,
            height: "20px",
          },
        },
      },
    },
  },
});

// export const theme = createTheme({
//   palette: {
//     primary: {
//       main: Colors.lightBlue,
//     },
//     secondary: {
//       main: Colors.onyx,
//     },
//     error: {
//       main: Colors.red,
//     },
//     info: {
//       main: Colors.blue,
//     },
//     grey: {
//       main: Colors.grey,
//     },
//   },

//   components: {
//     MuiButton: {
//       defaultProps: {
//         disableRipple: true,
//         disableElevation: true,
//       },
//     },

//     MuiInputAdornment: {
//       styleOverrides: {
//         root: {
//           color: Colors.lightBlue,
//         },
//       },
//     },
//   },
//   MuiPaper: {
//     styleOverrides: {
//       root: {
//         "&::-webkit-scrollbar-thumb ": {
//           color: Colors.red,
//         },
//       },
//     },
//   },

//   breakpoints: {
//     values: {
//       mobile: 0,
//       tablet: 640,
//       laptop: 1024,
//       desktop: 1200,
//     },
//   },
// });

// export const Borders = {
//   border: {
//     standartDarkMode: `.5px solid ${theme.palette.grey.main}`,
//     standartligthMode: ` .5px solid ${theme.palette.secondary.main} `,
//   },
//   borderRadius: {
//     normal: "20px",
//   },
// };
