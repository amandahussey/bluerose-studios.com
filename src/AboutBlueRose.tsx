import {
  Stack,
  Typography,
  useTheme,
  useMediaQuery,
  Container,
  Box,
} from "@mui/material";

import amanda from "@assets/amanda.jpeg";

const AboutBlueRose = () => {
  const theme = useTheme();

  const textWraps = useMediaQuery(theme.breakpoints.down(473));

  return (
    <Stack
      p={4}
      pb={8}
      flexGrow={1}
      justifyContent="center"
      style={{
        background: `linear-gradient(to bottom, ${theme.palette.primary.dark}, ${theme.palette.secondary.main})`,
      }}
    >
      <Container maxWidth="md">
        {/* Row Container with my image + text */}
        <Stack
          direction="column"
          spacing={4}
          justifyContent="center"
          alignItems="center"
        >
          {/* Column Container for text */}
          <Stack spacing={4} textAlign="center" maxWidth={500}>
            <Stack spacing={2}>
              {/* "Hi, I'm Amanda" big text */}
              <Typography fontWeight="bold" variant="h4">
                Hi! I'm Amanda.
              </Typography>

              {/* Snippet */}
              <Stack spacing={textWraps ? 2 : 0}>
                <Typography>Creator of Blue Rose Studios.</Typography>
                <Typography>
                  Author, illustrator, and software engineer.
                </Typography>
              </Stack>
            </Stack>

            {/* Image of me */}
            <Box alignSelf="center" py={1}>
              <img
                src={amanda}
                alt="Image of Amanda, author of Blue Rose Studios books and games"
                style={{
                  width: 180,
                  objectFit: "contain",
                  borderRadius: "50%",
                  boxShadow: `0 0 16px 4px ${theme.palette.secondary.light}`,
                  border: `2px solid ${theme.palette.secondary.light}`,
                }}
              />
            </Box>

            {/* Details */}
            <Typography>
              Blue Rose Studios is an independent studio for stories and games
              built for play and meant to be felt.
            </Typography>

            <Typography variant="h5">Welcome 🪄</Typography>
          </Stack>
        </Stack>
      </Container>
    </Stack>
  );
};

export default AboutBlueRose;
