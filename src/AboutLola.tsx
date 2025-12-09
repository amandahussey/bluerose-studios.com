import {
  Button,
  Stack,
  Typography,
  useTheme,
  useMediaQuery,
  Container,
} from "@mui/material";
import lolaCover from "/lola-cover.png";

const AboutLola = () => {
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
      <Container style={{ maxWidth: 700 }}>
        <Stack spacing={isSm ? 4 : 8}>
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
                    <Typography variant="h2">Lola</Typography>
                    <Typography variant="h4">and the</Typography>
                    <Typography variant="h2">Lost Ring</Typography>
                  </Stack>
                )}

                {/* Snippet */}
                <Typography textAlign={isSm ? "center" : "left"}>
                  A story for all of us with messy rooms
                </Typography>
              </Stack>

              {/* Buttons Row Container */}
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
            </Stack>
          </Stack>

          {/* About the Book */}
          <Stack spacing={4} textAlign={isSm ? "center" : "left"}>
            <Typography variant="h5" fontWeight="bold">
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

            <Typography variant="h5" fontWeight="bold">
              Bonus activity included at the end that turns room cleaning into a
              playful adventure!
            </Typography>
          </Stack>
        </Stack>
      </Container>
    </Stack>
  );
};

export default AboutLola;
