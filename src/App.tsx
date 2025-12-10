import { theme } from "./theme";
import { Stack, ThemeProvider } from "@mui/material";
import { HashRouter, Route, Routes } from "react-router-dom";

import Nav from "./Nav";
import Home from "./Home";
import AboutLola from "./AboutLola";
import SpotTheDifference from "./SpotTheDifference";
import Games from "./Games";
import AboutBlueRose from "./AboutBlueRose";

const App = () => {
  return (
    <HashRouter>
      <ThemeProvider theme={theme}>
        <Stack
          minHeight="100vh"
          width="100%"
          style={{
            backgroundColor: theme.palette.primary.dark,
            color: theme.palette.text.primary,
          }}
        >
          <Nav />
          <Routes>
            <Route path="/books/lola" element={<AboutLola />} />
            <Route path="/games" element={<Games />} />
            <Route path="/about" element={<AboutBlueRose />} />
            <Route
              path="/games/lola/spot-the-difference"
              element={<SpotTheDifference />}
            />
            <Route path="/" element={<Home />} />
          </Routes>
        </Stack>
      </ThemeProvider>
    </HashRouter>
  );
};

export default App;
