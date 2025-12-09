import {
  Box,
  Button,
  Stack,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import lolaCover from "/lola-cover.png";
import { ArrowRightAltRounded } from "@mui/icons-material";

import bluerose from "/blue-rose.png";

import sparkle1 from "/sparkle-1.png";
import sparkle2 from "/sparkle-2.png";

import "./Landing.css";

const Landing = () => {
  const theme = useTheme();

  const isMd = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Stack
      alignSelf="center"
      pt={{ xs: 0, md: 8 }}
      pb={8}
      spacing={8}
      sx={{
        background: `linear-gradient(to bottom, ${theme.palette.primary.dark} 25%,  ${theme.palette.secondary.dark} 75%, ${theme.palette.primary.dark})`,
      }}
    >
      <Stack>
        <Box
          sx={{
            display: { xs: "flex", md: "none" },
            alignSelf: "center",
          }}
        >
          <img
            src={bluerose}
            alt="blue rose"
            style={{
              height: 50,
              objectFit: "contain",
              padding: 12,
            }}
          />
        </Box>

        <Box position="relative" alignSelf="center">
          <img
            src={sparkle1}
            style={{
              height: 14,
              objectFit: "contain",
              position: "relative",
              bottom: !isMd ? 10 : 20,
              left: !isMd ? 30 : 100,
            }}
          />
        </Box>

        <Stack direction="row" alignSelf="center">
          <img
            src={sparkle1}
            style={{
              height: 10,
              objectFit: "contain",
              position: "relative",
              top: 72,
              left: 32,
            }}
          />
          <img
            src={sparkle2}
            style={{
              height: 30,
              objectFit: "contain",
              marginRight: 12,
              position: "relative",
              top: 74,
              left: 34,
            }}
          />
          <Stack>
            <Typography
              variant="h5"
              textAlign="center"
              letterSpacing={4}
              fontFamily="American Typewriter"
            >
              blue rose studios
            </Typography>
            <Typography
              variant="h6"
              textAlign="center"
              letterSpacing={9}
              fontFamily="American Typewriter"
            >
              presents
            </Typography>
          </Stack>

          <img
            src={sparkle1}
            style={{
              height: 30,
              objectFit: "contain",
              position: "relative",
              top: 72,
              right: 32,
            }}
          />
          <img
            src={sparkle2}
            style={{
              height: 10,
              objectFit: "contain",
              marginRight: 12,
              position: "relative",
              top: 74,
              right: 34,
            }}
          />
        </Stack>
      </Stack>

      <Stack>
        <Box alignSelf="center">
          {/* Lola Cover Sparkles */}
          {isMd && (
            <>
              <img
                src={sparkle2}
                style={{
                  height: 10,
                  objectFit: "contain",
                  position: "relative",
                  zIndex: 100,
                  left: "-10%",
                  bottom: 300,
                }}
              />
              <img
                src={sparkle1}
                style={{
                  height: 30,
                  objectFit: "contain",
                  position: "relative",
                  zIndex: 100,
                  left: "-10%",
                  bottom: 300,
                }}
              />

              <img
                src={sparkle2}
                style={{
                  height: 30,
                  objectFit: "contain",
                  position: "relative",
                  zIndex: 100,
                  left: "-20%",
                  bottom: 350,
                }}
              />
            </>
          )}

          {/* Lola Cover */}
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

          {/* More Sparkles */}
          {isMd && (
            <>
              <img
                src={sparkle1}
                style={{
                  height: 10,
                  objectFit: "contain",
                  position: "relative",
                  zIndex: 100,
                  right: "-10%",
                  bottom: 200,
                }}
              />
              <img
                src={sparkle2}
                style={{
                  height: 30,
                  objectFit: "contain",
                  position: "relative",
                  zIndex: 100,
                  right: "-10%",
                  bottom: 200,
                }}
              />

              <img
                src={sparkle1}
                style={{
                  height: 30,
                  objectFit: "contain",
                  position: "relative",
                  zIndex: 100,
                  right: "-12%",
                  bottom: 250,
                }}
              />
            </>
          )}
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
