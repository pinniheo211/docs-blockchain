import { createTheme } from "@mui/material";

export const mainTheme = createTheme({
  palette: {
    primary: {
      main: "#c4003c",
    },
    // text: {
    //   primary: "#ffffff",
    // },
    // action: {
    //   active: "#c4003c",
    // },
  },
});

export const loginTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#c4003c",
    },
  },
});
