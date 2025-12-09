import * as React from "react";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { Link, Stack, useMediaQuery, useTheme } from "@mui/material";

import bluerose from "/blue-rose.png";

function Nav() {
  const [anchorElBooks, setAnchorElBooks] = React.useState<null | HTMLElement>(
    null
  );
  const handleOpenBooksMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElBooks(event.currentTarget);
  };
  const handleCloseBooksMenu = () => {
    setAnchorElBooks(null);
  };

  const theme = useTheme();
  const isSm = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Container maxWidth="xl">
      <Toolbar disableGutters>
        {/* Separate home link from other buttons */}
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          flexGrow={1}
        >
          {/* Home link */}
          <Stack direction="row" alignItems="center">
            <Link href="/">
              <img
                src={bluerose}
                alt="blue rose"
                style={{
                  height: 50,
                  objectFit: "contain",
                  padding: 12,
                }}
              />
            </Link>

            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: "none", sm: "flex" },
                fontFamily: "American Typewriter",
                fontWeight: 400,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              blue rose studios
            </Typography>
          </Stack>

          {/* Buttons */}
          <Stack
            direction="row"
            justifyContent={isSm ? "space-evenly" : "flex-start"}
          >
            {/* Books Menu */}
            <Button
              onClick={handleOpenBooksMenu}
              sx={{ my: 2, color: "white", display: "block" }}
              aria-controls="menu-books"
            >
              Books
            </Button>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-books"
              anchorEl={anchorElBooks}
              anchorOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElBooks)}
              onClose={handleCloseBooksMenu}
            >
              <MenuItem
                onClick={handleCloseBooksMenu}
                component="a"
                href="#/books/lola"
              >
                <Typography>Lola and the Lost Ring</Typography>
              </MenuItem>
              <MenuItem disabled aria-disabled>
                <Typography>Stay tuned for more!</Typography>
              </MenuItem>
            </Menu>

            {/* Games Button */}
            <Button
              sx={{ my: 2, color: "white", display: "block" }}
              // href="#/games"
            >
              Games
            </Button>

            {/* About Button */}
            <Button
              sx={{ my: 2, color: "white", display: "block" }}
              // href="#/about"
            >
              About
            </Button>
          </Stack>
        </Stack>
      </Toolbar>
    </Container>
  );
}
export default Nav;
