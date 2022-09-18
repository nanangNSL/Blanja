import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import Avatar from "@mui/material/Avatar";
import { Container, Typography } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import FormEdit from "./organism/FormEdit";

function ResponsiveDrawer() {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary
  }));

  const drawer = (
    <div>
      <Toolbar />
      <List sx={{ marginTop: '10vh'}}>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <Stack direction="row" spacing={2}>
                <Item elevation={0} >
                  <Avatar
                    alt="Remy Sharp"
                    src="https://res.cloudinary.com/dwg17vn35/image/upload/v1661961898/Profile/l3wg4ekqlvsaafnsfjxo.jpg"
                    sx={{ width: 56, height: 56 }}
                  />
                </Item>
                <Item elevation={0} >
                  <Typography
                    variant="h6"
                    sx={{ textAlign: "left", color: "#222222" }}
                  >
                    Johanes Mikael
                  </Typography>
                  <Box
                    flexDirection="row"
                    sx={{ width: "200px", display: "flex" }}
                  >
                    <EditIcon />
                    <Typography variant="body1" sx={{ marginLeft: "1vw" }}>
                      Ubah profile
                    </Typography>
                  </Box>
                </Item>
              </Stack>
            </ListItemIcon>
          </ListItemButton>
        </ListItem>
      </List>
      <List>
          <ListItem>
            <ListItemButton>
              <ListItemIcon>
              <Avatar sx={{ bgcolor: '#456BF3'}}>
                <PermIdentityIcon />
              </Avatar>
              </ListItemIcon>
              <ListItemText>
                <Typography>My account</Typography>
              </ListItemText>
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton>
              <ListItemIcon>
                 <Avatar sx={{ bgcolor: '#F36F45' }}>
                <LocationOnIcon />
              </Avatar>
              </ListItemIcon>
              <ListItemText>
                <Typography>Shipping Adrress</Typography>
              </ListItemText>
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton>
              <ListItemIcon>
                  <Avatar sx={{ bgcolor: '#F3456F' }}>
                <ContentPasteIcon />
              </Avatar>
              </ListItemIcon>
              <ListItemText>
                <Typography>My order</Typography>
              </ListItemText>
          
            </ListItemButton>
          </ListItem>
      
      </List>
    </div>
  );

  return (
    <Container sx={{zIndex: '-2'}}>
      <Box sx={{ display: "flex", zIndex: "-2" }}>
      <CssBaseline />
      <IconButton
        color="inherit"
        aria-label="open drawer"
        edge="start"
        onClick={handleDrawerToggle}
        sx={{ mr: 2, display: { sm: "none" }, marginTop: '-1vh' }}
      >
        <MenuIcon />
      </IconButton>
      <Box
        component="nav"
        sx={{
          flexShrink: { sm: 0 },
          marginTop: "10vh !important",
          zIndex: '-2',
          height: "500px"
        }}
        aria-label="mailbox folders"
      >
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": { boxSizing: "border-box" },
            zIndex: "-2"
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": { boxSizing: "border-box" }
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component="main" sx={{ flexGrow: 1, p: 10 }}>
      <FormEdit/>
      </Box>
    </Box> 
    </Container>
   
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func
};

export default ResponsiveDrawer;
