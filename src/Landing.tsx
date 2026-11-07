import {
  alpha,
  Box,
  Button,
  Link,
  Stack,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";

import bluerose from "/blue-rose.png";
import sparkle1 from "@assets/sparkle-1.png";
import sparkle2 from "@assets/sparkle-2.png";
import lolaCover from "@assets/lola-cover.png";

import { buyBookUrl } from "./links";

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

          {/* Lola Cover (links to the About page) */}
          <Box
            component="a"
            href="#/books/lola"
            aria-label="About Lola and the Lost Ring"
            sx={{
              display: "block",
              position: "relative",
              zIndex: 99,
              transition: "transform 0.25s ease",
              "&:hover": { transform: "translateY(-4px)" },
            }}
          >
            <img
              src={lolaCover}
              alt="Lola and the Lost Ring"
              style={{
                display: "block",
                width: isSm ? "85vw" : "auto",
                height: isSm ? "auto" : "50vh",
                objectFit: "contain",
                borderRadius: 6,
                boxShadow: `0px 0px ${isSm ? "20px" : "50px"} 6px ${
                  theme.palette.secondary.light
                }`,
              }}
            />
          </Box>

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

      <Stack alignItems="center" spacing={2}>
        {/* Main call to action: glowing gradient that echoes the cover's glow */}
        <Button
          variant="contained"
          href={buyBookUrl}
          size="large"
          sx={{
            px: 6,
            background: `linear-gradient(to right, ${theme.palette.secondary.light}, ${theme.palette.primary.light})`,
            boxShadow: `0px 0px 20px 2px ${alpha(
              theme.palette.secondary.light,
              0.7
            )}`,
            transition: "box-shadow 0.2s ease, transform 0.2s ease",
            "&:hover": {
              boxShadow: `0px 0px 32px 6px ${alpha(
                theme.palette.secondary.light,
                0.9
              )}`,
              transform: "translateY(-1px)",
            },
          }}
        >
          Buy Now
        </Button>

        <Link
          href="#/books/lola"
          variant="body2"
          underline="hover"
          sx={{ color: alpha(theme.palette.text.primary, 0.75) }}
        >
          About the book
        </Link>
      </Stack>
    </Stack>
  );
};

export default Landing;
