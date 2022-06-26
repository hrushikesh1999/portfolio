import { PaletteMode, ThemeOptions } from "@mui/material";
import { blueGrey, grey, teal } from "@mui/material/colors";

const getDesignTokens = (mode: PaletteMode): ThemeOptions => ({
  palette: {
    primary: {
      main: teal[500],
      light: teal[300],
      dark: teal[700],
    },
    mode,
    ...(mode === "light"
      ? {
          // palette values for light mode

          secondary: {
            main: "#eff5f8",
            dark: blueGrey[500],
          },
          text: {
            primary: grey[800],
            secondary: grey[600],
          },
          background: {
            default: "#eff5f8",
          },
        }
      : {
          // palette values for dark mode
          // primary: {
          //   main: "#009688",
          // },
          secondary: {
            main: "#2d3748",
            dark: teal[100],
          },
          background: {
            default: " #181923",
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
  },
});

export default getDesignTokens;
