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
  IconButton,
  Popover,
} from "@mui/material";
import {
  ArrowBackIosRounded,
  ArrowForwardIosRounded,
  ArrowRightAltRounded,
  CloseRounded,
  Search,
} from "@mui/icons-material";

import lolaCover from "@assets/lola-cover.png";
import activityPage1 from "@assets/activity-page-1.png";
import activityPage2 from "@assets/activity-page-2.png";

const AboutLola = () => {
  const theme = useTheme();

  const isSm = useMediaQuery(theme.breakpoints.down(800));

  const [currentActivityPage, setCurrentActivityPage] = useState(activityPage1);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setCurrentActivityPage(activityPage1);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [anchorElPopover, setAnchorElPopover] =
    useState<HTMLButtonElement | null>(null);

  const handleClickPopover = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorElPopover(event.currentTarget);
  };

  const handleClosePopover = () => {
    setAnchorElPopover(null);
  };

  const popoverIsOpen = Boolean(anchorElPopover);
  const popoverId = popoverIsOpen ? "simple-popover" : undefined;

  const comingSoonPopover = (
    <Popover
      id={popoverId}
      open={popoverIsOpen}
      anchorEl={anchorElPopover}
      onClose={handleClosePopover}
      anchorOrigin={{
        vertical: isSm ? "top" : "bottom",
        horizontal: "left",
      }}
      transformOrigin={{
        vertical: isSm ? "bottom" : "top",
        horizontal: "left",
      }}
      slotProps={{
        paper: {
          sx: {
            backgroundColor: theme.palette.secondary.main,
          },
        },
      }}
    >
      <Typography sx={{ py: 1, px: 2 }}>Coming soon!</Typography>
    </Popover>
  );

  const bonusActivityText =
    "Bonus activity included at the end of the book that turns room cleaning into into a game of discovery!";

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
                  A story for all of us
                  <br />
                  with messy rooms
                </Typography>
              </Stack>

              {/* Buttons Row Container - Desktop */}
              {!isSm && (
                <Stack
                  direction="row"
                  spacing={2}
                  justifyContent={isSm ? "center" : "flex-start"}
                >
                  {/* Buy Book Button */}
                  <Button
                    variant="contained"
                    color="secondary"
                    aria-describedby={popoverId}
                    onClick={handleClickPopover}
                    // style={{
                    //   background: `linear-gradient(to right, ${theme.palette.secondary.dark}, ${theme.palette.secondary.main})`,
                    // }}
                  >
                    Buy Book
                  </Button>

                  {/* Coming soon! Popover */}
                  {comingSoonPopover}

                  <Button
                    variant="contained"
                    href="#/games"
                    endIcon={<ArrowRightAltRounded />}
                    color="primary"
                    // style={{
                    //   background: `linear-gradient(to right bottom, ${theme.palette.secondary.main} 30%, ${theme.palette.primary.light})`,
                    // }}
                  >
                    Play Games
                  </Button>
                </Stack>
              )}
            </Stack>
          </Stack>

          {/* Buttons Row Container - Mobile */}
          {isSm && (
            <Stack spacing={3}>
              <Stack
                direction="row"
                spacing={2}
                justifyContent={isSm ? "center" : "flex-start"}
              >
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={handleClickPopover}
                  // style={
                  //   !isSm
                  //     ? {}
                  //     : {
                  //         background: `linear-gradient(to right, ${theme.palette.secondary.main}, ${theme.palette.primary.main})`,
                  //       }
                  // }
                >
                  Buy Book
                </Button>

                {/* Coming soon! Popover */}
                {comingSoonPopover}

                <Button
                  variant="contained"
                  href="#/games"
                  endIcon={<ArrowRightAltRounded />}
                  color="primary"
                  // style={
                  //   !isSm
                  //     ? {}
                  //     : {
                  //         background: `linear-gradient(to right bottom, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                  //       }
                  // }
                >
                  Play Games
                </Button>
              </Stack>
              <Stack
                justifyContent="space-between"
                alignItems="center"
                spacing={isSm ? 3 : 0}
              >
                {/* Preview Bonus Activity - Button */}
                <Box>
                  <Button
                    variant="contained"
                    onClick={handleOpen}
                    startIcon={<Search />}
                    style={
                      !isSm
                        ? {}
                        : {
                            background: `linear-gradient(to bottom, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                          }
                    }
                  >
                    Preview Bonus Activity
                  </Button>
                </Box>
              </Stack>
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

              {isSm ? (
                <Typography>
                  A story about feeling stuck in a mess, having someone there to
                  help, and finding what was once lost.
                  <br />
                  <br />
                  💫
                </Typography>
              ) : (
                <Typography>
                  A story about feeling stuck, having someone there to help, and
                  finding what was once lost.
                </Typography>
              )}
            </Stack>

            {isSm && (
              <Typography variant="caption" fontWeight="bold" flexBasis="60%">
                {bonusActivityText}
              </Typography>
            )}

            {!isSm && (
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                spacing={isSm ? 3 : 0}
                pt={1}
              >
                <Typography variant="subtitle2" flexBasis="60%">
                  💫 {bonusActivityText}
                </Typography>

                {/* Preview Bonus Activity - Button */}
                <Box>
                  <Button variant="contained" onClick={handleOpen}>
                    Preview Bonus Activity
                  </Button>
                </Box>
              </Stack>
            )}

            {/* Preview Bonus Activity - Modal */}
            <Modal open={open} onClose={handleClose}>
              <Box
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  boxShadow: 4,
                  background: theme.palette.background.paper,
                  borderRadius: 4,
                  py: 6,
                }}
              >
                <IconButton
                  size={isSm ? "small" : "medium"}
                  sx={{
                    position: "absolute",
                    top: 4,
                    right: 4,
                  }}
                  onClick={handleClose}
                >
                  <CloseRounded />
                </IconButton>
                <Stack direction="row" alignItems="center">
                  <IconButton
                    size={isSm ? "small" : "medium"}
                    sx={{
                      visibility:
                        currentActivityPage === activityPage1
                          ? "hidden"
                          : "visible",
                    }}
                    onClick={() => {
                      setCurrentActivityPage(activityPage1);
                    }}
                  >
                    <ArrowBackIosRounded />
                  </IconButton>

                  <img
                    src={currentActivityPage}
                    alt={`Activity page ${
                      currentActivityPage === activityPage1 ? "1" : "2"
                    } from Lola and the Lost Ring`}
                    style={{
                      height: isSm ? "auto" : "80vh",
                      width: isSm ? "80vw" : "auto",
                      objectFit: "contain",
                      borderRadius: 4,
                    }}
                  />
                  <Box>
                    <IconButton
                      size={isSm ? "small" : "medium"}
                      sx={{
                        visibility:
                          currentActivityPage === activityPage2
                            ? "hidden"
                            : "visible",
                      }}
                      onClick={() => {
                        setCurrentActivityPage(activityPage2);
                      }}
                    >
                      <ArrowForwardIosRounded />
                    </IconButton>
                  </Box>
                </Stack>
              </Box>
            </Modal>
          </Stack>
        </Stack>
      </Container>
    </Stack>
  );
};

export default AboutLola;
