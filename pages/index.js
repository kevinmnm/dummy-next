import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import React, { useState } from 'react';
import theme from '../src/theme';
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';
import { withTheme } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

// import { setTheme } from '../src/theme.js';

const useStyles = makeStyles({
   helloThereStyle: {
      fontStyle: 'oblique'
   },
   customTypo: {
      fontSize: '50px',
      textAlign: 'center',
      fontWeight: 'bold',
      textDecoration: 'underline',
      textUnderlinePosition: 'under'
   }
});

function Home(props) {
   const classes = useStyles();

   return (
      <div>
         <Typography className={classes.customTypo}>Home Page</Typography>
         <Box className={classes.helloThereStyle}>This is jsut like a div.</Box>
         <Button variant="contained">Default</Button>
         <Button variant="contained" color="primary">
            Primary
         </Button>
         <Button variant="contained" color="secondary">
            Secondary
         </Button>
         <Button variant="contained" disabled>
            Disabled
         </Button>
         <Button variant="contained" color="primary" href="#contained-buttons">
            Link
         </Button>
         <AccessAlarmIcon />
      </div>
   )
}

export default Home