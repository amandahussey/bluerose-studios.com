import { Box, Button, Stack, Typography, useTheme } from "@mui/material";
import lolaCover from "/lola-cover.png";
import { ArrowRightAltRounded } from "@mui/icons-material";

import "./Landing.css";

const Landing = () => {
  const theme = useTheme();

  return (
    <Stack
      alignSelf="center"
      py={8}
      spacing={8}
      sx={{
        background: `linear-gradient(to bottom, ${theme.palette.primary.dark} 25%,  ${theme.palette.secondary.dark} 75%, ${theme.palette.primary.dark})`,
      }}
    >
      <Stack>
        <Typography variant="h5" textAlign="center" letterSpacing={4}>
          blue rose studios
        </Typography>

        <Typography variant="h6" textAlign="center" letterSpacing={9}>
          presents
        </Typography>
      </Stack>

      <Stack>
        <Box alignSelf="center">
          <img
            src={lolaCover}
            alt="Lola and the Lost Ring"
            style={{
              height: "50vh",
              objectFit: "contain",
              borderRadius: 6,
              boxShadow: `0px 0px 50px 6px ${theme.palette.secondary.light}`,
              position: "relative",
              zIndex: 99,
            }}
          />
        </Box>
        <Box sx={{ display: { xs: "none", md: "block" } }}>
          <div className="shelf">
            <div className="top"></div>
            <div className="front"></div>
            <div className="back"></div>
            <div className="left-side"></div>
            <div className="right-side"></div>
          </div>
        </Box>
      </Stack>

      <Stack
        direction={{ xs: "column", sm: "row" }}
        justifyContent="center"
        alignItems="center"
        spacing={4}
      >
        <Button
          variant="contained"
          // href="/books/lola"
          size="large"
          style={{
            background: `linear-gradient(to right, ${theme.palette.secondary.light} 5%, ${theme.palette.secondary.main})`,
          }}
        >
          Read About the Book
        </Button>

        <Button
          variant="contained"
          // href="/books/lola/games"
          size="large"
          endIcon={<ArrowRightAltRounded />}
          style={{
            background: `linear-gradient(to right bottom, ${theme.palette.secondary.main} 30%, ${theme.palette.primary.light})`,
          }}
        >
          Play Games
        </Button>
      </Stack>
    </Stack>
  );
};

export default Landing;
