import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import HomeIcon from '@material-ui/icons/Home';
import AssignmentIcon from '@material-ui/icons/Assignment';
import SpeedIcon from '@material-ui/icons/Speed';
import { Link } from 'react-router-dom';
import LockIcon from '@material-ui/icons/Lock';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function LinkList(props) {
  const classes = useStyles();
  for(let i=0; i<props.linksArray.length; i++){
    console.log(props.linksArray[i]);
  }
  return (
    <div className={classes.root}>
      <List component="nav" aria-label="main mailbox folders">
        {}
      </List>
      <Divider />
    </div>
  );
}
