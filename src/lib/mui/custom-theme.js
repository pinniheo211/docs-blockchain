import { createTheme } from "@mui/material";

export const ThemeMdx = createTheme({
  components: {
    MuiAccordion: {
      styleOverrides: {
        // Name of the slot
        root: {
          color: "#FFFFFF",
          backgroundColor: "transparent",
          fontSize: "1rem",
          outline: "none",
          boxShadow: "none",
          padding: "0 0",
          minHeight: "48px !important",
          height: "48px !important",
        },
      },
    },
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          color: "#FFFFFF !important",
          minHeight: "48px !important",
          height: "48px !important",
        },
      },
    },
    MuiButtonBase: {
      styleOverrides: {
        root: {
          minHeight: "48px !important",
          height: "48px !important",

          padding: "0 0 !important",
        },
      },
    },
    MuiExpanded: {
      styleOverrides: {
        root: {
          minHeight: "48px !important",
          height: "48px !important",
        },
      },
    },
  },
});

export const CopyField = createTheme({
  components: {
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          color: "#FFFFFF !important",
        },
      },
    },
  },
});
