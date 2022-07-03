import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import routes from "../routes/routes";
import { NavLink } from "react-router-dom";
import { Grid, ListItemIcon } from "@mui/material";
import ThemeSwitch from "../ThemeSwitch";
import "./navbar.css";
import logo from "../../assets/hk-logo.png";
import HSvg from "./HSvg";
import { motion } from "framer-motion";

const drawerWidth = 240;

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box
      className="side-drawer"
      onClick={handleDrawerToggle}
      bgcolor="background.default"
    >
      <HSvg />
      <Divider />
      <List>
        {routes.map((item, i) => (
          <NavLink to={item.path} key={i}>
            {({ isActive }) => (
              <ListItem disablePadding>
                <ListItemButton
                  sx={{ textAlign: "center" }}
                  selected={isActive}
                >
                  <ListItemIcon>
                    <FontAwesomeIcon icon={item.icon} color={item.color} />
                  </ListItemIcon>
                  <ListItemText primary={item.name} />
                </ListItemButton>
              </ListItem>
            )}
          </NavLink>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window.document.body : undefined;
  return (
    <Box className="navbar">
      <AppBar color="secondary" component="nav">
        <Toolbar>
          <Grid container item alignItems="center">
            <Grid item sm={1} xs={1} sx={{ mr: 2, display: { sm: "none" } }}>
              <IconButton
                size="large"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
              >
                <FontAwesomeIcon icon={faBars} size="xs" />
              </IconButton>
            </Grid>
            <Grid item sm={1} xs={8} className="navbar-logo">
              <HSvg />
              {/* <img src={logo} width="40" height="25" /> */}
            </Grid>
            <Grid
              item
              sx={{
                display: { xs: "none", sm: "block" },
              }}
              sm={9.5}
              xs={0}
            >
              <Grid container item spacing={3} direction="row">
                {routes.map((item, i) => (
                  <Grid item key={i}>
                    <NavLink to={item.path}>
                      {({ isActive }) => (
                        <Button
                          variant={isActive ? "outlined" : "text"}
                          sx={{ px: 2 }}
                        >
                          {item.name}
                        </Button>
                      )}
                    </NavLink>
                  </Grid>
                ))}
              </Grid>
            </Grid>

            <Grid item sm={0.5} xs={2}>
              <ThemeSwitch />
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
};

export default Navbar;
