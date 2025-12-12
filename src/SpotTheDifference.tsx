import { MouseEventHandler, useEffect, useState } from "react";
import {
  Stack,
  Typography,
  useTheme,
  useMediaQuery,
  Box,
  Modal,
  Skeleton,
  CircularProgress,
  Button,
  Container,
} from "@mui/material";
import { ArrowBackRounded } from "@mui/icons-material";

import spotTheDifference1a from "@assets/spot-the-difference-1a.png";
import spotTheDifference1b from "@assets/spot-the-difference-1b.png";

import spotTheDifference2a from "@assets/spot-the-difference-2a.png";
import spotTheDifference2b from "@assets/spot-the-difference-2b.png";

const DIFFERENCES_1 = [
  {
    id: "turkey-drawing",
    x: 0.105,
    y: 0.19,
    aspectRatio: 1.1,
  },
  {
    id: "drawer",
    x: 0.8,
    y: 0.31,
    aspectRatio: 1.5,
  },
  {
    id: "bed-sweater",
    x: 0.6,
    y: 0.48,
    aspectRatio: 0.8,
  },
  {
    id: "tissue-box",
    x: 0.075,
    y: 0.425,
    aspectRatio: 1,
  },
  {
    id: "sock",
    x: 0.79,
    y: 0.48,
    aspectRatio: 1.5,
  },
];

const DIFFERENCES_2 = [
  {
    id: "sailboat",
    x: 0.078,
    y: 0.41,
    aspectRatio: 0.9,
  },
  {
    id: "bird",
    x: 0.67,
    y: 0.045,
    aspectRatio: 1.5,
  },
  {
    id: "ball",
    x: 0.935,
    y: 0.72,
    aspectRatio: 0.9,
  },
  {
    id: "pencil-ground",
    x: 0.565,
    y: 0.745,
    aspectRatio: 1.5,
  },
  {
    id: "coloring-book",
    x: 0.2,
    y: 0.74,
    aspectRatio: 0.9,
  },
  {
    id: "sweater-chair",
    x: 0.42,
    y: 0.35,
    aspectRatio: 0.8,
  },
  {
    id: "pencil-desk",
    x: 0.655,
    y: 0.375,
    aspectRatio: 1.5,
  },
];

const SpotTheDifference = () => {
  const theme = useTheme();

  const isMd = useMediaQuery(theme.breakpoints.down("md"));
  const isSm = useMediaQuery(theme.breakpoints.down("sm"));

  const [round, setRound] = useState(1);
  const images =
    round === 1
      ? [spotTheDifference1a, spotTheDifference1b]
      : [spotTheDifference2a, spotTheDifference2b];
  const differencesToCheck = round === 1 ? DIFFERENCES_1 : DIFFERENCES_2;

  const [diffsFound, setDiffsFound] = useState<string[]>([]);
  const numDiffsFound = diffsFound.length;

  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    setDiffsFound([]);
    setRound((prev) => (prev === 1 ? 2 : 1));
    setIsLoading(true);
  };
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (numDiffsFound === differencesToCheck.length) {
      handleOpen();
    }
  }, [numDiffsFound, differencesToCheck.length]);

  useEffect(() => {
    if (isLoading) {
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 2000); // Short delay to simulate reload
      return () => clearTimeout(timer);
    }
  }, [isLoading]);

  const handleClick: MouseEventHandler<HTMLDivElement> = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left; // x position within the element.
    const clickY = e.clientY - rect.top; // y position within the element.

    const hit = differencesToCheck.find((diff) => {
      const diffX = diff.x * rect.width;
      const diffY = diff.y * rect.height;
      const tolerance = 0.05; // 5% tolerance

      return (
        clickX >= diffX - rect.width * tolerance &&
        clickX <= diffX + rect.width * tolerance &&
        clickY >= diffY - rect.height * tolerance &&
        clickY <= diffY + rect.height * tolerance
      );
    });
    if (hit) {
      setDiffsFound((prev) =>
        prev.includes(hit.id) ? prev : [...prev, hit.id]
      );
    }
  };

  const gameSpace = (
    <Stack>
      {isMd && (
        <Typography variant="h6" mb={2} mt={1} textAlign="center">
          <b>Differences found:</b> {numDiffsFound}/{differencesToCheck.length}
        </Typography>
      )}
      <Stack
        direction={isMd ? "column" : "row"}
        justifyContent="center"
        spacing={3}
      >
        {images.map((src, index) => (
          <Box key={index} position="relative" onClick={handleClick}>
            <img
              src={src}
              alt={`Spot the Difference - Lola's Messy Room - Image ${
                index + 1
              }`}
              style={{
                width: isMd ? "90vw" : "35vw",
                maxWidth: 500,
                objectFit: "contain",
                borderRadius: 4,
              }}
            />

            {differencesToCheck.map(
              (diff) =>
                diffsFound.includes(diff.id) && (
                  <Box
                    key={diff.id}
                    sx={{
                      position: "absolute",
                      top: `${diff.y * 100}%`,
                      left: `${diff.x * 100}%`,
                      transform: "translate(-50%, -50%)",
                      border: `3px solid gold`,
                      width: `${
                        diff.aspectRatio > 1 ? 12 * diff.aspectRatio : 12
                      }%`,
                      height: `${
                        diff.aspectRatio > 1 ? 12 : 12 / diff.aspectRatio
                      }%`,
                      boxShadow: 5,
                      borderRadius: "50%",
                    }}
                  />
                )
            )}
          </Box>
        ))}
      </Stack>
      {!isMd && (
        <Box>
          <Typography variant="h6" textAlign="right" mt={3}>
            <b>Differences found:</b> {numDiffsFound}/
            {differencesToCheck.length}
          </Typography>
        </Box>
      )}
    </Stack>
  );

  return (
    <Stack
      flexGrow={1}
      sx={{
        background: `linear-gradient(to bottom, ${theme.palette.primary.dark} 70%, ${theme.palette.secondary.dark})`,
      }}
    >
      <Container maxWidth="lg">
        <Button
          variant="contained"
          color="primary"
          startIcon={<ArrowBackRounded />}
          href="#/games"
        >
          Back to Games
        </Button>
      </Container>

      <Stack flexGrow={1} justifyContent="center">
        <Stack spacing={isSm ? 3 : 2} textAlign="center" pt={3} mx={2}>
          <Typography variant="h4">Spot the Difference</Typography>
          <Typography variant="h6">Lola's Messy Room</Typography>
          <Typography variant="h6">
            Round {round}: Find all {differencesToCheck.length} differences{" "}
            {round === 1 ? "" : "to win!"}
          </Typography>
        </Stack>

        <Stack
          mt={4}
          mb={8}
          justifyContent="center"
          alignItems="center"
          height="100%"
        >
          {isLoading ? (
            <Box position="relative">
              <Skeleton variant="rounded">{gameSpace}</Skeleton>
              <Box
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                }}
              >
                <Stack justifyContent="center" alignItems="center" spacing={4}>
                  <CircularProgress color="secondary" />
                  <Typography>Loading...</Typography>
                </Stack>
              </Box>
            </Box>
          ) : (
            <Stack
              width="fit-content"
              alignSelf="center"
              p={isMd ? 1 : 3}
              style={{
                background: `linear-gradient(to bottom, ${
                  isMd ? theme.palette.primary.dark : theme.palette.primary.main
                }, ${theme.palette.secondary.dark})`,
                border: isMd
                  ? "none"
                  : `2px solid ${theme.palette.secondary.light}`,
                borderRadius: 8,
                boxShadow: `0 0 10px ${theme.palette.secondary.light}`,
              }}
            >
              {gameSpace}
            </Stack>
          )}
        </Stack>
      </Stack>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: isSm ? "70vw" : 400,
            p: 4,
            background: `linear-gradient(to bottom, ${theme.palette.primary.dark}, ${theme.palette.secondary.dark})`,
            color: theme.palette.text.primary,
            textAlign: "center",
            border: `2px solid ${theme.palette.secondary.light}`,
            borderRadius: 4,
            boxShadow: `0 0 10px ${theme.palette.secondary.light}`,
          }}
        >
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            sx={{ mb: 2 }}
          >
            Congratulations!
          </Typography>
          {round === 1 ? (
            <Stack spacing={3}>
              <Typography id="modal-modal-description" sx={{ my: 2 }}>
                You win the first round! <br /> Are you ready for another
                challenge?
              </Typography>
              <Stack
                direction={isSm ? "column" : "row"}
                justifyContent="center"
                spacing={3}
              >
                <Button
                  variant="contained"
                  color="primary"
                  startIcon={<ArrowBackRounded />}
                  href="#/games"
                >
                  Back to Games
                </Button>

                <Button
                  variant="contained"
                  color="secondary"
                  onClick={handleClose}
                >
                  I'm ready!
                </Button>
              </Stack>
            </Stack>
          ) : (
            <Stack spacing={3}>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                You found all the differences! Great job! <br /> Want to play
                again?
              </Typography>
              <Stack
                direction={isSm ? "column" : "row"}
                justifyContent="center"
                spacing={3}
              >
                <Button
                  variant="contained"
                  color="primary"
                  startIcon={<ArrowBackRounded />}
                  href="#/games"
                >
                  Back to Games
                </Button>

                <Button
                  variant="contained"
                  color="secondary"
                  onClick={handleClose}
                >
                  Play Again!
                </Button>
              </Stack>
            </Stack>
          )}
        </Box>
      </Modal>
    </Stack>
  );
};

export default SpotTheDifference;
