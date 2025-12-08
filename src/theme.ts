import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#0f2783",
    },
    secondary: {
      main: "#6c5593",
    },
  },
  typography: {
    fontFamily: ["Comic Neue", "Helvetica", "Arial", "serif"].join(","),
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
