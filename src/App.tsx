import { theme } from "./theme";
import { Box, ThemeProvider } from "@mui/material";
import Landing from "./Landing";

const App = () => {
  console.log("theme", theme);
  return (
    <ThemeProvider theme={theme}>
      <Box
        minHeight="100vh"
        style={{
          backgroundColor: theme.palette.background.default,
          color: theme.palette.text.primary,
        }}
      >
        <Landing />
      </Box>
    </ThemeProvider>
  );
};

export default App;
