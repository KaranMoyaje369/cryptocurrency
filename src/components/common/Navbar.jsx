import { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Box,
  Button,
  Menu,
  IconButton,
  Tooltip,
} from "@mui/material";
import { RiMenu3Line } from "react-icons/ri";
import { FaWindowClose } from "react-icons/fa";
import Logo from "../../assets/logo.png";
import { NavLink } from "react-router-dom";

const pages = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Markets", path: "/markets" },
  { label: "News", path: "/news" },
  { label: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [open, setOpen] = useState(true);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
    setOpen(!open);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
    setOpen(!open);
  };

  return (
    <>
      {/* Fixed Navbar */}
      <AppBar
        position="fixed"
        className="!bg-gray-900 !w-full  top-0 left-0 right-0 z-50"
      >
        <Container maxWidth="xl">
          <nav>
            <Toolbar className="flex justify-between items-center flex-wrap !py-4">
              {/* Logo & Title */}
              <NavLink to="/">
                <Box className="flex items-center gap-2">
                  <img
                    src={Logo}
                    alt="Logo"
                    className="h-[30px] w-[30px] md:h-[50px] md:w-[50px]"
                  />
                  <Typography className="!font-bold md:!text-xl">
                    CryptoCurrency
                  </Typography>
                </Box>
              </NavLink>

              {/* Desktop Navigation */}
              <Box className="hidden lg:flex gap-6">
                {pages.map(({ label, path }) => (
                  <NavLink key={label} to={path}>
                    <Button className="!text-white">{label}</Button>
                  </NavLink>
                ))}
              </Box>

              {/* Login Authentication Button */}
              <Box className="hidden lg:block">
                <NavLink to="/login-signup">
                  <Button className="!text-white">Login / Sign Up</Button>
                </NavLink>
              </Box>

              {/* Mobile Menu */}
              <Box className="block lg:hidden">
                <Tooltip title="Open Menu">
                  {open ? (
                    <IconButton
                      onClick={handleOpenUserMenu}
                      className="!text-white"
                    >
                      <RiMenu3Line size={30} />
                    </IconButton>
                  ) : (
                    <IconButton
                      onClick={handleOpenUserMenu}
                      className="!text-white"
                    >
                      <FaWindowClose size={30} />
                    </IconButton>
                  )}
                </Tooltip>
                <Menu
                  sx={{ mt: "45px" }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{ vertical: "top", horizontal: "right" }}
                  keepMounted
                  transformOrigin={{ vertical: "top", horizontal: "right" }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  {pages.map(({ label, path }) => (
                    <NavLink key={label} to={path} className="!w-full">
                      <Button
                        onClick={handleCloseUserMenu}
                        className="!flex !flex-col !mx-auto !w-full"
                      >
                        <Typography className="!text-[14px]">
                          {label}
                        </Typography>
                      </Button>
                    </NavLink>
                  ))}

                  {/* Login Authentication Button */}
                  <Box className="">
                    <NavLink to="/login-signup">
                      <Button className="!m-2">Login / Sign Up</Button>
                    </NavLink>
                  </Box>
                </Menu>
              </Box>
            </Toolbar>
          </nav>
        </Container>
      </AppBar>
    </>
  );
};

export default Navbar;
