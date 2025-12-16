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

  const isSm = useMediaQuery(theme.breakpoints.down("sm"));

  const textWraps = useMediaQuery(theme.breakpoints.down(473));

  return (
    <Stack
      p={4}
      flexGrow={1}
      justifyContent="center"
      style={{
        background: `linear-gradient(to bottom, ${theme.palette.primary.dark}, ${theme.palette.secondary.dark})`,
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
                  width: isSm ? "50vw" : 150,
                  maxWidth: 150,
                  objectFit: "contain",
                  borderRadius: "50%",
                  boxShadow: `0 0 10px 4px ${theme.palette.secondary.main}`,
                  border: `2px solid ${theme.palette.secondary.main}`,
                }}
              />
            </Box>

            {/* Details */}
            <Stack spacing={2}>
              <Stack spacing={2}>
                <Typography>
                  I wrote <i>Lola and the Lost Ring</i> back in high school as a
                  creative writing assignment.
                </Typography>
                <Typography>
                  Fifteen years later, {isSm ? <br /> : ""}here we are!
                </Typography>
                <Typography>💫</Typography>
              </Stack>

              <Stack spacing={1.5}>
                <Typography variant="caption">
                  The name Blue Rose comes from a night in my childhood when I
                  was feeling homesick, and my cousin told me a fairy named Blue
                  Rose was watching over me. I was shocked to see a blue light
                  flicker across the room! It felt like magic.
                </Typography>

                <Typography variant="caption">
                  I later learned there was a logical explanation. However, the
                  magic stayed, and that feeling still lives on in my work.
                </Typography>
              </Stack>

              <Typography>💙</Typography>
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </Stack>
  );
};

export default AboutBlueRose;
