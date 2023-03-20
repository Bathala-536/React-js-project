
import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import LinearStepper from './LinearStepper';
import Sorting from './Sorting';
import { MenuItem } from '@mui/material';
import { Menu } from '@mui/material';
import { Tooltip } from '@mui/material';
import { Avatar } from '@mui/material';
import Footer from './Footer';
import LoginIcon from '@mui/icons-material/Login';

import DashboardIcon from '@mui/icons-material/Dashboard';
import LogoutIcon from '@mui/icons-material/Logout';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./LayoutRoutes";
// import * as React from 'react';
// import { styled } from '@mui/material/styles';
// import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import CardComponent from './CardComponent';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
const drawerWidth = 240;
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const gridDataofCards = [
  {
    id: 1,
    name: "Wonder Woman",
    alterEgo: "Diana Prince",
    alignment: "hero",
  
  },
  {
    id: 2,
    name: "Poison Ivy",
    alterEgo: "Pamela Lillian Isley",
    alignment: "villain"
  },
  {
    id: 3,
    name: "Black Canary",
    alterEgo: "Dinah Drake",
    alignment: "hero"
  },
  {
    id: 4,
    name: "Catwoman",
    alterEgo: "Selina Kyle",
    alignment: "villain"
  }
];


const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

export default function PersistentDrawerLeft() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const handleCloseUserMenu = (event) => {

    setAnchorElUser(null);
  };



  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (

    <><Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar style={{ backgroundColor: "orange", display: "flex", justifyContent: "space-between" }}>

          <Tooltip title="open settings">
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{ mr: 2, ...(open && { display: 'none' }) }}
            >

              <MenuIcon />
            </IconButton>
          </Tooltip>
          <Typography variant="h6" noWrap component="div">
            Cellworks
          </Typography>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>

                <Avatar alt="Remy Sharp" src='https://portal.cellworks.life/static/img/h1logo.3f6cb9a.jpg' />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >

        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {['Inbox', 'Dashboard', 'LoginIcon', 'LogoutIcon'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {/* {index % 2 === 0 ? <InboxIcon /> : <DashboardIcon />} */}
                  {index === 0 ? <InboxIcon /> : ''}

                  {index === 1 ? <DashboardIcon /> : ''}

                  {index === 2 ? <LoginIcon /> : ''}
                  {index === 3 ? <LogoutIcon /> : ''}
                  {/* <BrowserRouter>
                    <Routes>
                      <Route path="/" element={<Layout />}>
                        <Route path="Sorting" element={<EnhancedTable />} />
                      </Route>

                    </Routes>


                  </BrowserRouter> */}

                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        {/* <List>
          {['All mail', 'Trash', 'Spam','DiAndroid'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <AndroidIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List> */}
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
        <Grid container spacing={2}  >

          {gridDataofCards.map((value) => (
            // <MenuItem key={setting} onClick={handleCloseUserMenu}>
            //   <Typography textAlign="center">{setting}</Typography>
            // </MenuItem>
            <Grid item xs={12} sm={6} md={3}>
              <CardComponent title={value.name} description={value.alterEgo} />
            </Grid>

          ))}
        </Grid>
        {/* <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={3}>
            <CardComponent title="Card 1" description="This is the first card." />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <CardComponent title="Card 1" description="This is the first card." />
          </Grid>
        </Grid> */}
        {/* <Grid container spacing={2}>
          <Grid item xs={3}>
            <Item>xs=4</Item>
          </Grid>
          <Grid item xs={3}>
            <Item>xs=4</Item>
          </Grid>
          <Grid item xs={3}>
            <Item>xs=4</Item>
          </Grid>
          <Grid item xs={3}>
            <Item>xs=4</Item>
          </Grid>
        </Grid> */}
        {/* <LinearStepper /> */}
        <Sorting />


      </Main>
    </Box></>
  );

}