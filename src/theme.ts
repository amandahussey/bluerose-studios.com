import { createTheme } from "@mui/material/styles";

// "blue rose studios" wordmark font. Cutive (Google Fonts, loaded in index.html)
// is a typewriter-style face that looks the same on every OS.
export const typewriterFont = ["Cutive", '"American Typewriter"', "serif"].join(",");

export const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#131545",
      dark: "#070823",
      light: "#6A88D3",
    },
    secondary: {
      main: "#552B7A",
      light: "#8E52BA",
    },
  },
  typography: {
    fontFamily: ["Delius", "Helvetica", "Arial", "serif"].join(","),
    fontSize: 18,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none", // removes the uppercase transformation,
          fontWeight: "bold",
        },
      },
    },
  },
});
