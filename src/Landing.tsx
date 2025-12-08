import { Box, Button, Stack, Typography } from "@mui/material";
import lolaCover from "/lola-cover.png";
import { ArrowRightAltRounded } from "@mui/icons-material";

const Landing = () => {
  return (
    <Stack alignSelf="center" mt={8} spacing={6}>
      <Stack>
        {/* <img
          src={bluerose}
          alt="blue rose"
          style={{ height: 30, objectFit: "contain" }}
        /> */}
        <Typography variant="h5" textAlign="center" letterSpacing={4}>
          blue rose studios
        </Typography>

        <Typography variant="h6" textAlign="center" letterSpacing={9}>
          presents
        </Typography>
      </Stack>

      <Box alignSelf="center">
        <img
          src={lolaCover}
          alt="Lola and the Lost Ring"
          style={{ height: "50vh", objectFit: "contain", borderRadius: 6 }}
        />
      </Box>

      <Stack direction="row" justifyContent="center" spacing={4}>
        <Button
          variant="contained"
          // href="/books/lola"
          size="large"
          style={{
            background: "linear-gradient(to right bottom, #430089, #82ffa1)",
          }}
        >
          Read About the Book
        </Button>

        <Button
          variant="contained"
          // href="/books/lola/games"
          size="large"
          endIcon={<ArrowRightAltRounded />}
          style={{
            background: "linear-gradient(to right bottom, #430089, #82ffa1)",
          }}
        >
          Play Games
        </Button>
      </Stack>
    </Stack>
  );
};

export default Landing;
