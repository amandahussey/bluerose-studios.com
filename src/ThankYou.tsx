import {
  Button,
  Container,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";

import lolaCover from "@assets/lola-cover.png";

const ThankYou = () => {
  const theme = useTheme();
  const isSm = useMediaQuery(theme.breakpoints.down(800));

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
      <Container style={{ maxWidth: 600 }}>
        <Stack spacing={4} alignItems="center" textAlign="center">
          <img
            src={lolaCover}
            alt="Cover of Lola and the Lost Ring"
            style={{
              width: isSm ? 200 : 240,
              objectFit: "contain",
              borderRadius: 6,
            }}
          />

          <Stack spacing={2}>
            <Typography variant={isSm ? "h4" : "h3"}>Thank you! 💫</Typography>
            <Typography>
              Your order of Lola and the Lost Ring is confirmed.
              <br />
              You'll receive an email receipt from Square shortly.
            </Typography>
          </Stack>

          <Stack direction="row" spacing={2} justifyContent="center">
            <Button variant="contained" color="secondary" href="#/books/lola">
              Back to Book
            </Button>
            <Button variant="contained" href="#/games" color="primary">
              Play Games
            </Button>
          </Stack>
        </Stack>
      </Container>
    </Stack>
  );
};

export default ThankYou;
