import { Box, Stack, Typography } from "@mui/material";
import bluerose from "/blue-rose.png";
import lolaCover from "/lola-cover.png";

const Landing = () => {
  return (
    <Stack alignSelf="center" mt={8} spacing={6}>
      <Stack spacing={1}>
        <img
          src={bluerose}
          alt="blue rose"
          style={{ height: 30, objectFit: "contain" }}
        />
        <Typography variant="subtitle1" textAlign="center" letterSpacing={4}>
          blue rose studios
        </Typography>

        <Typography variant="subtitle2" textAlign="center" letterSpacing={9}>
          presents
        </Typography>
      </Stack>

      <Box alignSelf="center">
        <img
          src={lolaCover}
          alt="Lola and the Lost Ring"
          style={{ height: "50vh", objectFit: "contain" }}
        />
      </Box>
    </Stack>
  );
};

export default Landing;
