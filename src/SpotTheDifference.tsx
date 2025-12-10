import {
  Container,
  Stack,
  Typography,
  useTheme,
  useMediaQuery,
  Box,
  Modal,
} from "@mui/material";
import { useEffect, useState } from "react";

const spotTheDifference1 = "/spot-the-difference-1.png";
const spotTheDifference2 = "/spot-the-difference-2.png";

const SpotTheDifference = () => {
  const theme = useTheme();

  const isSm = useMediaQuery(theme.breakpoints.down("sm"));

  const [numDiffsFound, setNumDiffsFound] = useState(0);

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setNumDiffsFound(0);
  };

  useEffect(() => {
    if (numDiffsFound === 7) {
      handleOpen();
    }
  }, [numDiffsFound]);

  return (
    <Container maxWidth="xl">
      <Stack spacing={1} textAlign="center" pt={3}>
        <Typography variant="h4">Spot the Difference</Typography>
        <Typography variant="h6">Lola's Messy Room</Typography>
        <Typography variant="h6">Tap all 7 differences to win!</Typography>
      </Stack>
      <Stack
        onClick={() => {
          setNumDiffsFound((prev) => (prev < 7 ? prev + 1 : prev));
        }}
      >
        <Stack
          mt={4}
          width="fit-content"
          alignSelf="center"
          p={3}
          style={{
            background: `linear-gradient(to bottom, ${theme.palette.primary.dark}, ${theme.palette.secondary.main})`,
            border: `2px solid ${theme.palette.secondary.light}`,
            borderRadius: 8,
          }}
        >
          <Stack
            direction={isSm ? "column" : "row"}
            justifyContent="center"
            spacing={3}
          >
            <img
              src={spotTheDifference1}
              alt={`Spot the Difference - Lola's Messy Room - Image 1`}
              style={{
                width: isSm ? "80vw" : "35vw",
                objectFit: "contain",
                borderRadius: 4,
              }}
            />
            <img
              src={spotTheDifference2}
              alt={`Spot the Difference - Lola's Messy Room - Image 2`}
              style={{
                width: isSm ? "80vw" : "35vw",
                objectFit: "contain",
                borderRadius: 4,
              }}
            />
          </Stack>
          <Box>
            <Typography variant="h6" textAlign="right" mt={3}>
              <b>Differences found:</b> {numDiffsFound}/7
            </Typography>
          </Box>
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
            width: 400,
            boxShadow: 24,
            p: 4,
            background: `linear-gradient(to bottom, ${theme.palette.primary.dark}, ${theme.palette.secondary.dark})`,
            color: theme.palette.text.primary,
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
    </Container>
  );
};

export default SpotTheDifference;
