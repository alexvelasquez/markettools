import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import Hidden from '@material-ui/core/Hidden';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import BuildIcon from '@material-ui/icons/Build';
import HomeIcon from '@material-ui/icons/Home';
import PeopleIcon from '@material-ui/icons/People';

const useStyles = makeStyles((theme) => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    background:'#CD4D44'
  },
  list: {
    width: 250,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
}));

function ListItemLink(props: ListItemProps<'a', { button?: true }>) {
  return <ListItem button component="a" {...props} />;
}
export default function Header() {
  const classes = useStyles();
  // menu user login
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  // menu sidebar l
  const [anchorElSidebar, setAnchorElSidebar] = React.useState(null);
  const openSidebar = Boolean(anchorElSidebar);
  const handleMenuSidebar = (event) => {
    setAnchorElSidebar(event.currentTarget);
  };
  const handleCloseSidebar = () => {
    setAnchorElSidebar(null);
  };




  const list = () => (
    <div
      className={classes.list}
      role="presentation"
    >
           <List>
             <ListItemLink href="/">
               <ListItemIcon className={classes.topografy} ><HomeIcon/></ListItemIcon>
               <ListItemText primary='Inicio' />
             </ListItemLink>
           </List>
           <Divider/>
           <List>
             <ListItemLink href="/customers">
               <ListItemIcon><PeopleIcon/></ListItemIcon>
               <ListItemText primary='Clientes' />
             </ListItemLink>
           </List>
           <List>
             <ListItemLink href="/tools">
               <ListItemIcon><BuildIcon/></ListItemIcon>
               <ListItemText primary='Herramientas' />
             </ListItemLink>
           </List>
     </div>
)
  return (
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
        <Grid container spacing={3}>
          <Grid item xs={2} >
          <Hidden mdUp>
            <IconButton
             display={{ xs: 'block', md: 'none', lg: 'none' }}
             color="inherit"
             aria-label="open drawer"
             onClick={handleMenuSidebar}
             edge="start"
             >
               <MenuIcon display={{ xs: 'block', md: 'none', lg: 'none' }} />
             </IconButton>
             <SwipeableDrawer
             anchor='left'
             open={openSidebar}
             onClose={handleCloseSidebar}
             onOpen={handleMenuSidebar}
           >
             {list()}
           </SwipeableDrawer>
          </Hidden>
          </Grid>
           <Grid item xs={8}>
             <Typography align="center" variant="h6" noWrap >
               GESTIÓN
             </Typography>
           </Grid>
           <Grid item align="right" xs={2}>
           <div>
             <IconButton
               aria-label="account of current user"
               aria-controls="menu-appbar"
               aria-haspopup="true"
               onClick={handleMenu}
               color="inherit"
             >
               <AccountCircle />
             </IconButton>
             <Menu
               id="menu-appbar"
               anchorEl={anchorEl}
               anchorOrigin={{
                 vertical: 'top',
                 horizontal: 'right',
               }}
               keepMounted
               transformOrigin={{
                 vertical: 'top',
                 horizontal: 'right',
               }}
               open={open}
               onClose={handleClose}
             >
               <MenuItem >Perfil</MenuItem>
               <MenuItem >Cerrar Sesion</MenuItem>
             </Menu>
           </div>
           </Grid>
        </Grid>
        </Toolbar>
      </AppBar>
    );
  }
