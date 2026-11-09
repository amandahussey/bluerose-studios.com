import {
  Box,
  SxProps,
  Theme,
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

import { keyframes } from "@emotion/react";

import { buyBookUrl } from "./links";
import { theme as appTheme, typewriterFont } from "./theme";

import "./Landing.css";

// ---------- Landing animations ----------
// Timeline on load: header (0-1s) -> pause -> book, glow and sparkles land together (1.2-2.1s)
// -> Buy Now (1.8s) -> ambient loops.

const fadeDown = keyframes`
  from { opacity: 0; transform: translateY(-12px); }
  to { opacity: 1; transform: translateY(0); }
`;

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(16px); }
  to { opacity: 1; transform: translateY(0); }
`;

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const bookRise = keyframes`
  from { opacity: 0; transform: translateY(40px) scale(0.95); }
  to { opacity: 1; transform: translateY(0) scale(1); }
`;

// Cover glow fades in after the book lands, then gently "breathes"
const glowColor = appTheme.palette.secondary.light;
const glowIn = (blur: number) => keyframes`
  from { box-shadow: 0px 0px 0px 0px transparent; }
  to { box-shadow: 0px 0px ${blur}px 6px ${glowColor}; }
`;
const glowBreathe = (blur: number) => keyframes`
  0%, 100% { box-shadow: 0px 0px ${blur}px 6px ${glowColor}; }
  50% { box-shadow: 0px 0px ${Math.round(blur * 0.7)}px 3px ${glowColor}; }
`;
const glowLg = { in: glowIn(50), breathe: glowBreathe(50) };
const glowSm = { in: glowIn(20), breathe: glowBreathe(20) };

// Sparkles pop in with a little spin, then twinkle forever
const sparklePop = keyframes`
  from { opacity: 0; transform: scale(0) rotate(-90deg); }
  to { opacity: 1; transform: scale(1) rotate(0deg); }
`;
const sparkleTwinkle = keyframes`
  0%, 100% { opacity: 1; transform: scale(1) rotate(0deg); }
  50% { opacity: 0.4; transform: scale(0.7) rotate(15deg); }
`;

// Light sweeps across the Buy Now button, then rests for the remainder of the cycle
const shimmer = keyframes`
  0% { transform: translateX(-150%); }
  35%, 100% { transform: translateX(350%); }
`;

// Corner sparkle on Buy Now pops as the shimmer reaches it
const buttonTwinkle = keyframes`
  0%, 20% { opacity: 0; transform: scale(0.4) rotate(0deg); }
  32% { opacity: 1; transform: scale(1.15) rotate(20deg); }
  45% { opacity: 1; transform: scale(1) rotate(0deg); }
  60%, 100% { opacity: 0; transform: scale(0.4) rotate(0deg); }
`;

type SparkleProps = {
  src: string;
  height: number;
  /** seconds after page load before it pops in */
  delay: number;
  /** seconds per ambient twinkle cycle; vary so sparkles don't blink in sync */
  twinkle: number;
  sx?: SxProps<Theme>;
};

const Sparkle = ({ src, height, delay, twinkle, sx }: SparkleProps) => (
  <Box
    component="img"
    src={src}
    alt=""
    aria-hidden
    sx={[
      {
        height,
        objectFit: "contain",
        position: "absolute",
        zIndex: 100,
        pointerEvents: "none",
        animation: `${sparklePop} 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) ${delay}s backwards, ${sparkleTwinkle} ${twinkle}s ease-in-out ${
          delay + 0.5
        }s infinite`,
      },
      ...(Array.isArray(sx) ? sx : [sx]),
    ]}
  />
);

const Landing = () => {
  const theme = useTheme();

  const isSm = useMediaQuery(theme.breakpoints.down("sm"));
  const glow = isSm ? glowSm : glowLg;

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
        // Respect "reduce motion": show everything in its final state
        "@media (prefers-reduced-motion: reduce)": {
          "& *, & *::after": { animation: "none !important" },
        },
      }}
    >
      <Stack>
        {!isSm && (
          <Box
            sx={{
              alignSelf: "center",
              animation: `${fadeDown} 0.7s ease-out 0.1s backwards`,
            }}
          >
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
          <Sparkle
            src={sparkle1}
            height={10}
            delay={1.25}
            twinkle={2.6}
            sx={{ bottom: presentsSparklesBottomOffset, left: "-18%" }}
          />
          <Sparkle
            src={sparkle2}
            height={30}
            delay={1.2}
            twinkle={3.4}
            sx={{ bottom: presentsSparklesBottomOffset, left: "-15%" }}
          />
          <Stack
            sx={{ animation: `${fadeDown} 0.7s ease-out 0.3s backwards` }}
          >
            <Typography
              textAlign="center"
              letterSpacing={2}
              fontSize="18px"
              fontFamily={typewriterFont}
            >
              blue rose studios
            </Typography>
            <Typography
              variant="subtitle2"
              textAlign="center"
              letterSpacing={6}
              fontSize="16px"
              fontFamily={typewriterFont}
            >
              presents
            </Typography>
          </Stack>
          <Sparkle
            src={sparkle1}
            height={30}
            delay={1.3}
            twinkle={3.1}
            sx={{ bottom: presentsSparklesBottomOffset, right: "-10%" }}
          />
          <Sparkle
            src={sparkle2}
            height={10}
            delay={1.4}
            twinkle={2.3}
            sx={{ bottom: presentsSparklesBottomOffset, right: "-18%" }}
          />
        </Stack>
      </Stack>

      <Stack>
        <Box alignSelf="center" position="relative">
          {/* Lola Cover Sparkles */}
          {!isSm && (
            <>
              <Sparkle
                src={sparkle2}
                height={30}
                delay={1.2}
                twinkle={3.6}
                sx={{ left: "-22%", top: "10%" }}
              />
              <Sparkle
                src={sparkle2}
                height={10}
                delay={1.45}
                twinkle={2.4}
                sx={{ left: "-23%", bottom: "42%" }}
              />
              <Sparkle
                src={sparkle1}
                height={30}
                delay={1.35}
                twinkle={3.0}
                sx={{ left: "-18%", bottom: "35%" }}
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
              animation: `${bookRise} 0.9s cubic-bezier(0.22, 1, 0.36, 1) 1.2s backwards`,
              transition: "transform 0.25s ease",
              "&:hover": { transform: "translateY(-4px)" },
            }}
          >
            <Box
              component="img"
              src={lolaCover}
              alt="Lola and the Lost Ring"
              sx={{
                display: "block",
                width: isSm ? "85vw" : "auto",
                height: isSm ? "auto" : "50vh",
                objectFit: "contain",
                borderRadius: "6px",
                boxShadow: `0px 0px ${isSm ? "20px" : "50px"} 6px ${
                  theme.palette.secondary.light
                }`,
                animation: `${glow.in} 0.9s ease-out 1.2s backwards, ${glow.breathe} 5s ease-in-out 2.1s infinite`,
              }}
            />
          </Box>

          {/* More Sparkles */}
          {!isSm && (
            <>
              <Sparkle
                src={sparkle1}
                height={30}
                delay={1.25}
                twinkle={3.3}
                sx={{ right: "-22%", top: "25%" }}
              />
              <Sparkle
                src={sparkle2}
                height={30}
                delay={1.4}
                twinkle={2.8}
                sx={{ right: "-15%", bottom: "20%" }}
              />
              <Sparkle
                src={sparkle2}
                height={10}
                delay={1.5}
                twinkle={2.2}
                sx={{ right: "-18%", bottom: "30%" }}
              />
              <Sparkle
                src={sparkle1}
                height={10}
                delay={1.55}
                twinkle={3.8}
                sx={{ right: "-20%", bottom: "18%" }}
              />
            </>
          )}
        </Box>
        <Box
          sx={{
            display: { xs: "none", md: "block" },
            animation: `${fadeIn} 0.6s ease-out 1.1s backwards`,
          }}
        >
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
        alignItems="center"
        spacing={2}
        sx={{ animation: `${fadeUp} 0.7s ease-out 1.8s backwards` }}
      >
        {/* Main call to action: crisp gradient with a periodic shimmer + twinkling sparkle */}
        <Box sx={{ position: "relative" }}>
          <Button
            variant="contained"
            href={buyBookUrl}
            size="large"
            sx={{
              px: 6,
              position: "relative",
              overflow: "hidden",
              background: `linear-gradient(to right, ${theme.palette.secondary.light}, ${theme.palette.primary.light})`,
              boxShadow: "none",
              "&:hover": { boxShadow: "none" },
              // Soft band of light that sweeps across every few seconds
              "&::after": {
                content: '""',
                position: "absolute",
                top: 0,
                left: 0,
                width: "40%",
                height: "100%",
                background:
                  "linear-gradient(110deg, transparent, rgba(255,255,255,0.45), transparent)",
                transform: "translateX(-150%)",
                animation: `${shimmer} 4s ease-in-out 2.7s infinite`,
                pointerEvents: "none",
              },
              "@media (prefers-reduced-motion: reduce)": {
                "&::after": { animation: "none", display: "none" },
              },
            }}
          >
            Buy Now
          </Button>

          {/* Sparkle that twinkles as the shimmer passes */}
          <Box
            component="img"
            src={sparkle1}
            alt=""
            aria-hidden
            sx={{
              position: "absolute",
              top: -10,
              right: -10,
              height: 22,
              pointerEvents: "none",
              opacity: 0,
              animation: `${buttonTwinkle} 4s ease-in-out 2.7s infinite`,
              "@media (prefers-reduced-motion: reduce)": {
                animation: "none",
                opacity: 1,
              },
            }}
          />
        </Box>

        <Link
          href="#/books/lola"
          variant="body2"
          underline="hover"
          sx={{ color: "common.white" }}
        >
          About the book
        </Link>
      </Stack>
    </Stack>
  );
};

export default Landing;
