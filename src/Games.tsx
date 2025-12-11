import { ArrowRightAltRounded } from "@mui/icons-material";
import {
  Stack,
  Typography,
  useTheme,
  useMediaQuery,
  Button,
  Box,
} from "@mui/material";

const spotTheDiff1a = "src/assets/spot-the-difference-1a.png";
const spotTheDiff1b = "src/assets/spot-the-difference-1b.png";
const foldedClothes = "src/assets/folded-clothes.png";
const toyBox = "src/assets/toy-box.png";
const sparkle1 = "src/assets/sparkle-1.png";
const sparkle2 = "src/assets/sparkle-2.png";

const Games = () => {
  const theme = useTheme();
  const isSm = useMediaQuery(theme.breakpoints.down("sm"));
  const isMd = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Stack
      flexGrow={1}
      sx={{
        background: `linear-gradient(to bottom, ${theme.palette.primary.dark}, ${theme.palette.secondary.dark})`,
      }}
      alignItems="center"
      justifyContent="center"
      pb={8}
      pt={isMd ? 4 : 0}
    >
      <Stack justifyContent="center" alignItems="center" spacing={1} mb={4}>
        <Typography variant="h4">Lola's Games</Typography>
        <Typography variant="subtitle1">Having fun with the mess!</Typography>
      </Stack>
      <Stack direction={isMd ? "column" : "row"} alignSelf="center" spacing={4}>
        <GameCard
          heading1="Spot the Difference:"
          heading2="Lola's Messy Room"
          subtext="Find all the differences!"
          button={{
            text: "Play Now",
            href: "#/games/lola/spot-the-difference",
          }}
          preview={
            <Stack
              direction="row"
              justifyContent="center"
              alignItems="center"
              spacing={1}
            >
              <img
                src={spotTheDiff1a}
                alt="Spot the Difference Game Preview - Image 1"
                style={{
                  width: isSm ? "37vw" : "45%",
                  height: "auto",
                  objectFit: "contain",
                  borderTopLeftRadius: 4,
                  borderBottomLeftRadius: 4,
                }}
              />
              <img
                src={spotTheDiff1b}
                alt="Spot the Difference Game Preview - Image 2"
                style={{
                  width: isSm ? "37vw" : "45%",
                  height: "auto",
                  objectFit: "contain",
                  borderTopRightRadius: 4,
                  borderBottomRightRadius: 4,
                }}
              />
            </Stack>
          }
        />
        <GameCard
          heading1="Coming Soon:"
          heading2="Lola's Mobile Adventure"
          subtext={
            <Typography>
              Swipe to fold, tap to tidy! <br />
              Help Lola clean her room!
            </Typography>
          }
          // button={{ text: "Learn More", href: "#" }}
          secondarySubtext="In development for iOS and Android"
          preview={
            <Stack direction="row" justifyContent="center">
              <Box position="relative">
                <img
                  src={sparkle2}
                  style={{
                    width: 24,
                    height: "auto",
                    objectFit: "contain",
                    position: "absolute",
                    bottom: 0,
                  }}
                />
                <img
                  src={sparkle1}
                  style={{
                    width: 10,
                    height: "auto",
                    objectFit: "contain",
                    position: "absolute",
                    bottom: 0,
                    left: -12,
                  }}
                />
              </Box>
              <img
                src={foldedClothes}
                alt="Folded clothes"
                style={{
                  width: isSm ? "10vw" : 70,
                  height: "auto",
                  objectFit: "contain",
                  marginRight: 8,
                }}
              />

              <Box position="relative">
                <img
                  src={sparkle2}
                  style={{
                    width: 10,
                    height: "auto",
                    objectFit: "contain",
                    position: "absolute",
                    top: 24,
                  }}
                />
              </Box>

              <img
                src={toyBox}
                alt="Toy box"
                style={{
                  width: isSm ? "30vw" : 170,
                  height: "auto",
                  objectFit: "contain",
                  marginLeft: 16,
                }}
              />

              <Box>
                <img
                  src={sparkle2}
                  style={{
                    width: 10,
                    height: "auto",
                    objectFit: "contain",
                  }}
                />
                <img
                  src={sparkle1}
                  style={{
                    width: 24,
                    height: "auto",
                    objectFit: "contain",
                  }}
                />
              </Box>
            </Stack>
          }
        />
      </Stack>
    </Stack>
  );
};

const GameCard = ({
  heading1,
  heading2,
  preview,
  subtext,
  button,
  secondarySubtext,
}: {
  heading1?: string;
  heading2?: string;
  preview?: JSX.Element;
  subtext?: string | JSX.Element;
  button?: {
    text: string;
    href: string;
  };
  secondarySubtext?: string;
}) => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Stack
      onClick={() => {
        if (!button) return;
        window.location.href = button.href;
      }}
      sx={{
        background: `linear-gradient(to bottom, ${theme.palette.primary.dark} 70%, ${theme.palette.secondary.dark})`,
        textAlign: "center",
        border: `2px solid ${theme.palette.secondary.light}`,
        borderRadius: 4,
        boxShadow: `0 0 10px ${theme.palette.secondary.light}`,
        width: !isMd ? "33vw" : "80vw",
        maxWidth: 400,
        cursor: button ? "pointer" : "default",
      }}
      p={2}
      width="fit-content"
      justifyContent="space-between"
      alignSelf={isMd ? "center" : undefined}
    >
      <Stack spacing={2} flexGrow={1}>
        <Stack>
          <Typography variant="h5">{heading1}</Typography>
          <Typography variant="h6">{heading2}</Typography>
        </Stack>

        {preview}
        <Stack flexGrow={1} spacing={1.5}>
          <Typography variant="subtitle2">{subtext}</Typography>

          <Typography variant="caption" fontSize={12}>
            {secondarySubtext}
          </Typography>
        </Stack>
      </Stack>

      <Stack>
        {button && (
          <Box mt={1} mb={2}>
            <Button
              variant="contained"
              color="secondary"
              href={button?.href}
              endIcon={<ArrowRightAltRounded />}
            >
              {button?.text}
            </Button>
          </Box>
        )}
      </Stack>
    </Stack>
  );
};

export default Games;
