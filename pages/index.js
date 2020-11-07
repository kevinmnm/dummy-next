import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import React, { useState } from 'react';
import theme from '../src/theme';
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';
import { withTheme } from '@material-ui/core/styles';
// import { makeStyles } from '@material-ui/core/styles';
// import { setTheme } from '../src/theme.js';

// setTheme('dark');

function Home(props) {
   return (
      <div>
         <Box>This is jsut like a div.</Box>
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

export default withTheme(Home);