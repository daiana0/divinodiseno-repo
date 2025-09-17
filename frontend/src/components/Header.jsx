import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";
import { useAuth } from "../contexts/Auth.context";
import LoginModal from "./LoginModal";
import logo1 from "../assets/logo1.jpg";

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const { user, logout, isAuthenticated } = useAuth();

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    logout();
    handleMenuClose();
  };

  return (
    <>
      <AppBar position="static" color="secondary">
        <Container>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            {/*Logo y nombre */}
            <Box sx={{ flexGrow: 1, display: "flex", alignItems: "center" }}>
              {
                <img
                  src={logo1}
                  alt="Logo de Divino Diseño"
                  style={{ height: 80, margin: 16 }}
                />
              }
              <Typography variant="h6" component="div">
                Divino Diseño
              </Typography>
            </Box>

            <Box sx={{ display: "flex", alignItems: "center", ml: 2 }}>
              <IconButton color="inherit">
                <ShoppingCartIcon />
              </IconButton>
              
              {isAuthenticated ? (
                <>
                  <IconButton color="inherit" onClick={handleMenuOpen}>
                    <Avatar alt="Usuario" />
                  </IconButton>
                  <Menu
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={handleMenuClose}
                  >
                    <MenuItem onClick={handleMenuClose}>
                      {user?.email}
                    </MenuItem>
                    <MenuItem onClick={handleLogout}>
                      Cerrar Sesión
                    </MenuItem>
                  </Menu>
                </>
              ) : (
                <Button 
                  color="inherit" 
                  onClick={() => setLoginModalOpen(true)}
                >
                  Iniciar Sesión
                </Button>
              )}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      
      <LoginModal 
        open={loginModalOpen} 
        onClose={() => setLoginModalOpen(false)} 
      />
    </>
  );
};

export default Header;
