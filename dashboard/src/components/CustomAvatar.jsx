import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import { 
  Typography, 
  Link, 
  Dialog, 
  AppBar, 
  Toolbar, 
  IconButton, 
  Button,
  Slide
} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';


const useStyles = makeStyles(theme => ({
  avatar: {
    margin: 10,
  },
  bigAvatar: {
    margin: 10,
    width: 120,
    height: 120,
  },
  infoAvatar: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: theme.spacing(5)
  },
  appBar: {
    position: 'relative',
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
  titleInfo: {
    textAlign: 'center',
    marginTop: theme.spacing(2)
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function CustomAvatar(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(!open)
  return (
    <>
      <Grid container justify="flex-start" alignItems="center">
        <Avatar alt={props.hint} src={props.avatar} className={classes.avatar} />
        <Link component="button" variant="body2" color="inherit" onClick={() => handleOpen()}>
          <Typography>{props.displayName}</Typography>
        </Link>
      </Grid>
      <Dialog fullScreen open={open} onClose={handleOpen} TransitionComponent={Transition}>
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={handleOpen} aria-label="Close">
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              Info
            </Typography>
            <Button color="inherit" onClick={handleOpen}>
              Done
            </Button>
          </Toolbar>
        </AppBar>
          <div className={classes.infoAvatar}>
            <Avatar alt={props.hint} src={props.avatar} className={classes.bigAvatar} />
          </div>
          <div className={classes.titleInfo}>
            <Typography variant="h2" className={classes.title}>{props.displayName}</Typography>
          </div>
          <div>
            <Typography className={classes.titleInfo} variant="subtitle1">E-mail: {props.subText}</Typography>
          </div>
      </Dialog>
    </>
  );
};



export default CustomAvatar;