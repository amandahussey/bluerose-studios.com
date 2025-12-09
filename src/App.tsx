import { theme } from "./theme";
import { Stack, ThemeProvider } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Nav from "./Nav";
import Home from "./Home";
import AboutLola from "./AboutLola";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Stack
        minHeight="100vh"
        style={{
          backgroundColor: theme.palette.primary.dark,
          color: theme.palette.text.primary,
        }}
      >
        <Nav />

        <BrowserRouter>
          <Routes>
            <Route path="/books/lola" element={<AboutLola />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </Stack>
    </ThemeProvider>
  );
};

export default App;
