import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Toolbar from '@material-ui/core/Toolbar';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import BuildIcon from '@material-ui/icons/Build';
import HomeIcon from '@material-ui/icons/Home';
import PeopleIcon from '@material-ui/icons/People';
const drawerWidth = 210;

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerContainer: {
    overflow: 'auto',
  },
}));
function ListItemLink(props: ListItemProps<'a', { button?: true }>) {
  return <ListItem button component="a" {...props} />;
}
export default function ClippedDrawer() {
  const classes = useStyles();

  return (
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Toolbar />
        <div className={classes.drawerContainer}>
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
      </Drawer>

  );
}
