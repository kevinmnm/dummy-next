import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Left from '../components/left.js';
import Mid from '../components/mid.js';
import Right from '../components/right.js';
import { makeStyles } from '@material-ui/core/styles';
import theme from '../src/theme.js';
import Card from '@material-ui/core/Card';


const useStyle = makeStyles(theme => ({
   midGrid: {
      textAlign: 'center',
      borderLeft: '1px solid grey',
      borderRight: '1px solid grey',
      height: '100%',
      backgroundColor: 'yellow',
      margin: 'auto'
   },
   hideCompXSLeft: {
      position: 'fixed',
      left: '0',
      textAlign: 'center',
      backgroundColor: 'green',
      height: '100%',
      [theme.breakpoints.down('xs')]: {
         display: 'none'
      }
   },
   hideCompXSRight: {
      position: 'fixed',
      right: '0',
      textAlign: 'center',
      backgroundColor: 'green',
      height: '100%',
      [theme.breakpoints.down('xs')]: {
         display: 'none'
      }
   },
   mainBox: {
   }
}));

function Home() {
   const classes = useStyle();

   return (
      <Box className={classes.mainBox} height='100%'>
         <Grid container>
            <Grid item container direction="column" className={classes.hideCompXSLeft} sm={3}>
               <Left></Left>
            </Grid>
            <Grid item container direction="column" justify="center" className={classes.midGrid} item xs={12} sm={6}>
               <Mid></Mid>
            </Grid>
            <Grid item container direction="column" className={classes.hideCompXSRight} sm={3}>
               <Right></Right>
            </Grid>
         </Grid>
      </Box>

      // <div>adfsd</div>

      // <div>
      //    <Typography>Home Page</Typography>
      //    <Button variant="contained">Default</Button>
      //    <Button variant="contained" color="primary">
      //       Primary
      //    </Button>
      //    <Button variant="contained" color="secondary">
      //       Secondary
      //    </Button>
      //    <Button variant="contained" disabled>
      //       Disabled
      //    </Button>
      //    <Button variant="contained" color="primary" href="#contained-buttons">
      //       Link
      //    </Button>
      //    <AccessAlarmIcon />
      // </div>
   )
}

export default Home