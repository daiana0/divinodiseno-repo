import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import logo1 from "../assets/logo1.jpg";

const Header = () => {
  return (
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
            <Avatar alt="Usuario" />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
