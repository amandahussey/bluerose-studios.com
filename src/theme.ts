import { createTheme } from "@mui/material/styles";

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
      light: "#9E48B9",
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
