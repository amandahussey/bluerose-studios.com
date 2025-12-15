import {
  Box,
  Button,
  Stack,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";

import { ArrowRightAltRounded } from "@mui/icons-material";

import bluerose from "/blue-rose.png";
import sparkle1 from "@assets/sparkle-1.png";
import sparkle2 from "@assets/sparkle-2.png";
import lolaCover from "@assets/lola-cover.png";

import "./Landing.css";

const Landing = () => {
  const theme = useTheme();

  const isSm = useMediaQuery(theme.breakpoints.down("sm"));

  const presentsSparklesBottomOffset = isSm ? "-10%" : "-60%";

  return (
    <Stack
      alignSelf="center"
      width="100%"
      flexGrow={1}
      justifyContent="center"
      pb={8}
      spacing={isSm ? 4 : 8}
      sx={{
        background: `linear-gradient(to bottom, ${theme.palette.primary.dark} 25%,  ${theme.palette.secondary.dark} 75%, ${theme.palette.primary.dark})`,
      }}
    >
      <Stack>
        {!isSm && (
          <Box sx={{ alignSelf: "center" }}>
            <img
              src={bluerose}
              alt="blue rose"
              style={{
                height: 50,
                objectFit: "contain",
                padding: 4,
              }}
            />
          </Box>
        )}

        <Stack direction="row" alignSelf="center" position="relative">
          <img
            src={sparkle1}
            style={{
              height: 10,
              objectFit: "contain",
              position: "absolute",
              bottom: presentsSparklesBottomOffset,
              left: "-18%",
            }}
          />
          <img
            src={sparkle2}
            style={{
              height: 30,
              objectFit: "contain",
              marginRight: 12,
              position: "absolute",
              bottom: presentsSparklesBottomOffset,
              left: "-15%",
            }}
          />
          <Stack>
            <Typography
              textAlign="center"
              letterSpacing={4}
              fontFamily="American Typewriter"
            >
              blue rose studios
            </Typography>
            <Typography
              variant="subtitle2"
              textAlign="center"
              letterSpacing={8}
              fontFamily="American Typewriter"
            >
              presents
            </Typography>
          </Stack>
          {/* <img
            src={sparkle1}
            style={{
              height: 14,
              objectFit: "contain",
              position: "absolute",
              bottom: "-15%",
              right: "0%",
            }}
          /> */}
          <img
            src={sparkle1}
            style={{
              height: 30,
              objectFit: "contain",
              position: "absolute",
              bottom: presentsSparklesBottomOffset,
              right: "-10%",
            }}
          />
          <img
            src={sparkle2}
            style={{
              height: 10,
              objectFit: "contain",
              marginRight: 12,
              position: "absolute",
              bottom: presentsSparklesBottomOffset,
              right: "-18%",
            }}
          />
        </Stack>
      </Stack>

      <Stack>
        <Box alignSelf="center" position="relative">
          {/* Lola Cover Sparkles */}
          {!isSm && (
            <>
              <img
                src={sparkle2}
                style={{
                  height: 30,
                  objectFit: "contain",
                  position: "absolute",
                  zIndex: 100,
                  left: "-22%",
                  top: "10%",
                }}
              />
              <img
                src={sparkle2}
                style={{
                  height: 10,
                  objectFit: "contain",
                  position: "absolute",
                  zIndex: 100,
                  left: "-23%",
                  bottom: "42%",
                }}
              />
              <img
                src={sparkle1}
                style={{
                  height: 30,
                  objectFit: "contain",
                  position: "absolute",
                  zIndex: 100,
                  left: "-18%",
                  bottom: "35%",
                }}
              />
            </>
          )}

          {/* Lola Cover */}
          <img
            src={lolaCover}
            alt="Lola and the Lost Ring"
            style={{
              width: isSm ? "90vw" : "auto",
              height: isSm ? "auto" : "50vh",
              objectFit: "contain",
              borderRadius: 6,
              boxShadow: `0px 0px ${isSm ? "20px" : "50px"} 6px ${
                theme.palette.secondary.light
              }`,
              position: "relative",
              zIndex: 99,
            }}
          />

          {/* More Sparkles */}
          {!isSm && (
            <>
              <img
                src={sparkle1}
                style={{
                  height: 30,
                  objectFit: "contain",
                  position: "absolute",
                  zIndex: 100,
                  right: "-22%",
                  top: "25%",
                }}
              />

              <img
                src={sparkle2}
                style={{
                  height: 30,
                  objectFit: "contain",
                  position: "absolute",
                  zIndex: 100,
                  right: "-15%",
                  bottom: "20%",
                }}
              />

              <img
                src={sparkle2}
                style={{
                  height: 10,
                  objectFit: "contain",
                  position: "absolute",
                  zIndex: 100,
                  right: "-18%",
                  bottom: "30%",
                }}
              />

              <img
                src={sparkle1}
                style={{
                  height: 10,
                  objectFit: "contain",
                  position: "absolute",
                  zIndex: 100,
                  right: "-20%",
                  bottom: "18%",
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
        spacing={isSm ? 3 : 4}
      >
        <Button
          variant="contained"
          href="#/books/lola"
          size="large"
          style={{
            background: `linear-gradient(to right, ${theme.palette.secondary.light} 5%, ${theme.palette.secondary.main})`,
          }}
        >
          Read About the Book
        </Button>

        <Button
          variant="contained"
          href="#/games"
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
