"use client";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import MenuItem from "@mui/material/MenuItem";
import me from "../../Images/me.png";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@mui/material";

const navLinks = [
  { name: "About", path: "/about" },
  { name: "Projects", path: "/projects" },
  { name: "Skills", path: "/skills" },
  { name: "Contact", path: "/contact" },
];

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "#1F2937",
        color: "gray",
        boxShadow: 1,
        position: "fixed",
        top: "0",
        zIndex: 1300,
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters className="flex justify-between">
          {/* Logo */}
          <Link href="/" className="w-10 h-10 rounded-full overflow-hidden">
            <Image
              src={me}
              alt="Profile"
              width={40}
              height={40}
              className="object-cover"
            />
          </Link>

          {/* Mobile Menu Button */}
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton onClick={handleOpenNavMenu}>
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={anchorElNav}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              transformOrigin={{ vertical: "top", horizontal: "right" }}
            >
              {navLinks.map((link) => (
                <MenuItem key={link.name} onClick={handleCloseNavMenu}>
                  <Link href={link.path} className="w-full">
                    {link.name}
                  </Link>
                </MenuItem>
              ))}
              <MenuItem>
                <Typography variant="body1">
                  <a
                    href="https://wa.me/201283957041?text=Hello%20Yousef,%20I%20visited%20your%20portfolio"
                    target="_blank"
                    rel="noopener noreferrer"
                    className=" underline text-green-500"
                  >
                    <Button variant="contained" color="success">
                      Contact Me
                    </Button>
                  </a>
                </Typography>
              </MenuItem>
            </Menu>
          </Box>

          {/* Desktop Links */}
          <Box
            sx={{ display: { xs: "none", md: "flex" } }}
            className="gap-10 text-xl"
          >
            {navLinks.map((link) => (
              <Link key={link.name} href={link.path}>
                {link.name}
              </Link>
            ))}
          </Box>

          {/* Desktop WhatsApp */}
          <Box sx={{ display: { xs: "none", md: "block" } }}>
            <a
              className=" underline text-green-500"
              href="https://wa.me/201283957041?text=Hello%20Yousef,%20I%20visited%20your%20portfolio"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="contained" color="success">
                Contact Me
              </Button>
            </a>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
