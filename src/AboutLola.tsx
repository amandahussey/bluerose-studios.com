import { useEffect, useState } from "react";
import {
  Button,
  Stack,
  Typography,
  useTheme,
  useMediaQuery,
  Container,
  Box,
  Modal,
} from "@mui/material";
import lolaCover from "/lola-cover.png";
import activityPage from "/activity-page.png";

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  boxShadow: 4,
};

const AboutLola = () => {
  const theme = useTheme();

  const isSm = useMediaQuery(theme.breakpoints.down(800));

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Stack
      p={isSm ? 4 : 8}
      pb={8}
      flexGrow={1}
      justifyContent="center"
      style={{
        background: `linear-gradient(to bottom, ${theme.palette.primary.dark}, ${theme.palette.secondary.main})`,
      }}
    >
      <Container style={{ maxWidth: 700 }}>
        <Stack spacing={isSm ? 4 : 8}>
          {/* Row Container with book cover + text/buttons */}
          <Stack
            direction={isSm ? "column-reverse" : "row"}
            spacing={isSm ? 4 : 8}
            justifyContent="center"
            alignItems="center"
          >
            {/* Image of book cover */}
            <img
              src={lolaCover}
              alt="Cover of Lola and the Lost Ring"
              style={{
                width: 300,
                objectFit: "contain",
                borderRadius: 6,
              }}
            />
            {/* Column Container for text with buttons */}
            <Stack spacing={4}>
              <Stack spacing={2}>
                {/* "Lola and the Lost Ring" big text */}
                {isSm ? (
                  <Typography textAlign="center" fontWeight="bold" variant="h4">
                    Lola and the Lost Ring
                  </Typography>
                ) : (
                  <Stack textAlign="left">
                    <Typography variant="h3">Lola</Typography>
                    <Typography variant="h4">and the</Typography>
                    <Typography variant="h3">Lost Ring</Typography>
                  </Stack>
                )}

                {/* Snippet */}
                <Typography textAlign={isSm ? "center" : "left"}>
                  A story for all of us with messy rooms
                </Typography>
              </Stack>

              {/* Buttons Row Container - Desktop */}
              {!isSm && (
                <Stack
                  direction="row"
                  spacing={2}
                  justifyContent={isSm ? "center" : "flex-start"}
                >
                  <Button variant="contained" color="secondary">
                    Buy Book
                  </Button>
                  <Button variant="contained">Play Game</Button>
                </Stack>
              )}
            </Stack>
          </Stack>

          {/* Buttons Row Container - Mobile */}
          {isSm && (
            <Stack
              direction="row"
              spacing={2}
              justifyContent={isSm ? "center" : "flex-start"}
            >
              <Button variant="contained" color="secondary">
                Buy Book
              </Button>
              <Button variant="contained">Play Game</Button>
            </Stack>
          )}

          {/* About the Book */}
          <Stack spacing={4} textAlign={isSm ? "center" : "left"}>
            <Typography variant="h6" fontWeight="bold">
              Do you sometimes have a messy room? Lola does!
            </Typography>

            <Stack spacing={2}>
              <Typography>
                When a mysterious and rare purple diamond ring goes missing,
                Lola and Ned must search through her purple tornado of a room to
                find it.
              </Typography>

              <Typography>
                A story about feeling overwhelmed in a mess, and finding comfort
                with someone there to help.
              </Typography>
            </Stack>

            <Stack
              direction={isSm ? "column" : "row"}
              justifyContent="space-between"
              alignItems="center"
              spacing={isSm ? 3 : 0}
            >
              <Typography variant="h6" fontWeight="bold" flexBasis="60%">
                Bonus activity included at the end that turns room cleaning into
                a playful adventure!
              </Typography>

              <Box>
                <Button variant="contained" onClick={handleOpen}>
                  Preview Bonus Activity
                </Button>
                <Modal open={open} onClose={handleClose}>
                  <Box sx={modalStyle}>
                    <img
                      src={activityPage}
                      alt="Activity page from Lola and the Lost Ring"
                      style={{
                        height: isSm ? "auto" : "80vh",
                        width: isSm ? "90vw" : "auto",
                        objectFit: "contain",
                        borderRadius: 4,
                      }}
                    />
                  </Box>
                </Modal>
              </Box>
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </Stack>
  );
};

export default AboutLola;
