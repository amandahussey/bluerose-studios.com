import {
  Box,
  Button,
  Stack,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import lolaCover from "/lola-cover.png";

import sparkle1 from "/sparkle-1.png";
import sparkle2 from "/sparkle-2.png";

const AboutLola = () => {
  const theme = useTheme();

  const isSm = useMediaQuery(theme.breakpoints.down("sm"));
  const isMd = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Stack
      p={isSm ? 4 : 8}
      flexGrow={1}
      style={{
        background: `linear-gradient(to bottom, ${theme.palette.primary.dark} 5%, ${theme.palette.secondary.main})`,
      }}
    >
      {/* Row Container with book cover + text/buttons */}
      <Stack
        direction={isSm ? "column" : "row"}
        spacing={isSm ? 4 : 8}
        justifyContent="center"
        alignItems="center"
      >
        {/* Image of book cover */}
        <img
          src={lolaCover}
          alt="Cover of Lola and the Lost Ring"
          style={{
            width: isSm ? "70vw" : 300,
            objectFit: "contain",
            borderRadius: 6,
          }}
        />
        {/* Column Container for text with buttons */}
        <Stack spacing={4}>
          {/* "Lola and the Lost Ring" big text */}
          <Typography textAlign={isSm ? "center" : "left"}>
            <Typography variant="h2">Lola and the</Typography>
            <Typography variant="h2">Lost Ring</Typography>
          </Typography>
          {/* Snippet */}
          <Typography textAlign={isSm ? "center" : "left"}>
            A story for all of us with messy rooms
          </Typography>

          {/* Buttons Row Container */}
          <Stack direction="row" spacing={2}>
            <Button variant="contained" color="secondary">
              Read Sample
            </Button>
            <Button variant="contained">Play a Game!</Button>
            <Button variant="contained">Buy Book</Button>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default AboutLola;
