import React from 'react';

//Material-UI resuable components
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  }
}));

function CustomHeader(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="absolute">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Demo
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};


export default CustomHeader;