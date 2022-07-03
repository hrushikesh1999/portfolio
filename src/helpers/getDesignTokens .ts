import { PaletteMode, ThemeOptions } from "@mui/material";
import { blueGrey, grey, teal } from "@mui/material/colors";

const getDesignTokens = (mode: PaletteMode): ThemeOptions => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          // palette values for light mode
          primary: {
            main: blueGrey[700],
            light: blueGrey[400],
            dark: blueGrey[500],
          },
          secondary: {
            main: "#eff5f8", //for appbar bg
            dark: blueGrey[500],
          },
          text: {
            primary: grey[700],
            secondary: grey[600],
          },
          background: {
            default: "#eff5f8",
          },
        }
      : {
          // palette values for dark mode
          primary: {
            main: teal[200],
            light: teal[100],
            dark: teal[100], //more white
          },
          secondary: {
            main: "#2d3748", //for appbar bg
            dark: teal[100],
          },
          background: {
            default: "#212121",
          },
          text: {
            primary: grey[400],
            secondary: grey[500],
          },
        }),
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        colorPrimary: {
          // backgroundColor: "background.default",
          backdropFilter: "blur(5px)",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: "0.75rem",
          backgroundColor: mode === "light" ? grey[50] : grey[900],
          boxShadow: "none",
          ":hover": {
            boxShadow:
              "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          fontSize: "1rem",
        },
      },
    },
  },
});

export default getDesignTokens;
