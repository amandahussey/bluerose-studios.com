import { theme } from "./theme";
import { Box, ThemeProvider } from "@mui/material";
import Landing from "./Landing";
import Nav from "./Nav";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box
        minHeight="100vh"
        style={{
          backgroundColor: theme.palette.primary.dark,
          color: theme.palette.text.primary,
        }}
      >
        <Nav />
        <Landing />
      </Box>
    </ThemeProvider>
  );
};

export default App;
