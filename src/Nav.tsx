import * as React from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "@mui/material";

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

  return (
    <Container maxWidth="xl">
      <Toolbar disableGutters>
        <Box sx={{ display: { xs: "none", sm: "flex" } }}>
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
        </Box>
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
      </Toolbar>
    </Container>
  );
}
export default Nav;
