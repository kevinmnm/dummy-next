import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Grid from '@material-ui/core/Grid';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import BrightnessHighIcon from '@material-ui/icons/BrightnessHigh';
import Badge from '@material-ui/core/Badge';
import IconButton from '@material-ui/core/IconButton';
import NotificationsIcon from '@material-ui/icons/Notifications';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Toolbar from '@material-ui/core/Toolbar';
import { Typography } from '@material-ui/core';
import PublicIcon from '@material-ui/icons/Public';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import { makeStyles } from '@material-ui/core/styles';
import theme from '../src/theme.js';

const useStyle = makeStyles( comp => ({
   hideOnXS: {
      [comp.breakpoints.down('xs')]: {
         display: 'none'
      }
   }
}));

const Navbar = (props) => {
   const classes = useStyle(props);

   const [localS, setLocalS] = useState(false);

   const darkModeHandler = () => {
      localStorage.darkMode === 'true' ?
         props.themeChanger(false) :
            props.themeChanger(true);
   }

   useEffect( () => {
      localStorage.darkMode === 'true' ? setLocalS(true) : setLocalS(false);
   });

   return (
      <AppBar position="fixed" color="default">
         <Toolbar variant="dense">
            <Grid container>
               <Grid item container justify="flex-start" xs={4}>
                  <Button>
                     <Typography>LOGO</Typography>
                  </Button>
               </Grid>
               <Grid className={classes.hideOnXS} item container justify="center" sm={4}>
                  <IconButton>
                     <PublicIcon />
                  </IconButton>
                  <IconButton>
                     <SupervisedUserCircleIcon />
                  </IconButton>
               </Grid>
               <Grid item container justify="flex-end" xs={8} sm={4}>
                  <IconButton>
                     <Badge badgeContent={1}>
                        <NotificationsIcon />
                     </Badge>
                  </IconButton>
                  <IconButton onClick={ darkModeHandler }>
                     {
                        localS ? <BrightnessHighIcon /> : <Brightness4Icon />
                     }
                     {/* { 

                        (localStorage.darkMode == 'true') ? <BrightnessHighIcon /> : <Brightness4Icon />
                     } */}
                  </IconButton>
                  <IconButton>
                     <AccountCircle />
                  </IconButton>
               </Grid>
            </Grid>
         </Toolbar>
      </AppBar>
   );
}

export default Navbar;