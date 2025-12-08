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
    fontFamily: ["American Typewriter", "Helvetica", "Arial", "serif"].join(
      ","
    ),
  },
});
