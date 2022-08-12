import React from "react";

import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Menu,
  Container,
  Button,
  MenuItem,
  IconButton,
} from "@mui/material";
// ----------------------
import MenuIcon from "@mui/icons-material/Menu";

import HomeIcon from "@mui/icons-material/Home";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

import { NavLink } from "react-router-dom";
import SigninSignup from "./loginSinginComponent/SigninSignup";
import logo from "../images/logo.png";
const pages = [
  { link: "home", icon: <HomeIcon /> },
  { link: "about", icon: <AccountCircleIcon /> },
  { link: "service" },
  { link: "earning" },
  { link: "project" },
  { link: "account" },
  { link: "support" },
  { link: "team" },
];

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    console.log("handleOpenNavMenu");
    console.log(event.currentTarget);
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: "#64B9B9" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            component="img"
            alt="logo"
            src={logo}
            sx={{ width: 190, display: { xs: "none", md: "flex" }, mr: 1 }}
          />
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page, i) => (
                <MenuItem key={i} onClick={handleCloseNavMenu}>
                  <Typography
                    textAlign="center"
                    component={NavLink}
                    to={page.link}
                    sx={{
                      textTransform: "uppercase",
                      textDecoration: "none",
                    }}
                  >
                    {page.link}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box sx={{ backgroudColor: "green", flexGrow: 1 }}>
            <Typography
              component="img"
              alt="logo"
              src={logo}
              sx={{
                display: { xs: "flex", md: "none" },
                width: 150,
              }}
            />
          </Box>
          <Box sx={{ flexGrow: 1 }}>
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              {pages.map((page, i) => (
                <Button
                  key={i}
                  component={NavLink}
                  to={page.link}
                  onClick={handleCloseNavMenu}
                  sx={{
                    color: "white",
                  }}
                >
                  {page.link}
                </Button>
              ))}
            </Box>
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <SigninSignup />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
