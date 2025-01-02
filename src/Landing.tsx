import { Stack, Typography } from "@mui/material";
import bluerose from "/blue-rose.png";

const Landing = () => {
  return (
    <Stack alignSelf="center" justifyContent="center" height="100vh">
      <img
        src={bluerose}
        className="logo"
        alt="a blue rose"
        style={{ height: "50vh", objectFit: "contain" }}
      />
      <Typography variant="h3" textAlign="center" letterSpacing={4} mt={4}>
        blue rose
      </Typography>
      <Typography variant="h6" textAlign="center" letterSpacing={9} mt={1}>
        studios
      </Typography>
    </Stack>
  );
};

export default Landing;
