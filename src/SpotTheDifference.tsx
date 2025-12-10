import {
  Stack,
  Typography,
  useTheme,
  useMediaQuery,
  Box,
  Modal,
  Skeleton,
  CircularProgress,
} from "@mui/material";
import { useEffect, useState } from "react";

const spotTheDifference1 = "/spot-the-difference-1.png";
const spotTheDifference2 = "/spot-the-difference-2.png";

const SpotTheDifference = () => {
  const theme = useTheme();

  const isMd = useMediaQuery(theme.breakpoints.down("md"));
  const isSm = useMediaQuery(theme.breakpoints.down("sm"));

  const [numDiffsFound, setNumDiffsFound] = useState(0);

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setNumDiffsFound(0);
    setIsReloading(true);
  };
  const [isReloading, setIsReloading] = useState(false);

  useEffect(() => {
    if (numDiffsFound === 7) {
      handleOpen();
    }
  }, [numDiffsFound]);

  useEffect(() => {
    if (isReloading) {
      const timer = setTimeout(() => {
        setIsReloading(false);
      }, 2000); // Short delay to simulate reload
      return () => clearTimeout(timer);
    }
  }, [isReloading]);

  const gameSpace = (
    <Stack>
      {isMd && (
        <Typography variant="h6" mb={2} mt={1} textAlign="center">
          <b>Differences found:</b> {numDiffsFound}/7
        </Typography>
      )}
      <Stack
        direction={isMd ? "column" : "row"}
        justifyContent="center"
        spacing={3}
      >
        <img
          src={spotTheDifference1}
          alt={`Spot the Difference - Lola's Messy Room - Image 1`}
          style={{
            width: isMd ? "80vw" : "35vw",
            maxWidth: 500,
            objectFit: "contain",
            borderRadius: 4,
          }}
        />
        <img
          src={spotTheDifference2}
          alt={`Spot the Difference - Lola's Messy Room - Image 2`}
          style={{
            width: isMd ? "80vw" : "35vw",
            maxWidth: 500,
            objectFit: "contain",
            borderRadius: 4,
          }}
        />
      </Stack>
      {!isMd && (
        <Box>
          <Typography variant="h6" textAlign="right" mt={3}>
            <b>Differences found:</b> {numDiffsFound}/7
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
      <Stack flexGrow={1} justifyContent="center">
        <Stack spacing={1} textAlign="center" pt={3}>
          <Typography variant="h4">Spot the Difference</Typography>
          <Typography variant="h6">Lola's Messy Room</Typography>
          <Typography variant="h6">Tap all 7 differences to win!</Typography>
        </Stack>

        <Stack
          mt={4}
          mb={8}
          onClick={() => {
            setNumDiffsFound((prev) => (prev < 7 ? prev + 1 : prev));
          }}
          justifyContent="center"
          alignItems="center"
          height="100%"
        >
          {isReloading ? (
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
                  <Typography>Reloading...</Typography>
                </Stack>
              </Box>
            </Box>
          ) : (
            <Stack
              width="fit-content"
              alignSelf="center"
              p={isMd ? 1 : 3}
              style={{
                background: `linear-gradient(to bottom, ${theme.palette.primary.main}, ${theme.palette.secondary.dark})`,
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
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Congratulations!
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            You win!
          </Typography>
        </Box>
      </Modal>
    </Stack>
  );
};

export default SpotTheDifference;
