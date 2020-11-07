import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from '../src/theme.js';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/Button';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import BrightnessHighIcon from '@material-ui/icons/BrightnessHigh';
import Badge from '@material-ui/core/Badge';
import IconButton from '@material-ui/core/IconButton';
import NotificationsIcon from '@material-ui/icons/Notifications';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Toolbar from '@material-ui/core/Toolbar';
// import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
// import Fab from '@material-ui/core/Fab';




export default function MyApp(props) {
   const { Component, pageProps } = props;

   // React.useEffect(() => {
   //    // Remove the server-side injected CSS.
   //    const jssStyles = document.querySelector('#jss-server-side');
   //    if (jssStyles) {
   //       jssStyles.parentElement.removeChild(jssStyles);
   //    }
   // }, []);

   let [darkMode, setDarkMode] = useState('light');

   const changee = () => {
      (!darkMode || darkMode === 'light') ?
         setDarkMode('dark') :
         setDarkMode('light');
   }

   return (
      <React.Fragment>
         <Head>
            <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
         </Head>
         <ThemeProvider theme={theme(darkMode)}>

            <AppBar>
               <Toolbar>
                  <IconButton onClick={changee}>
                     <Brightness4Icon />
                  </IconButton>
                  <Badge badgeContent={5}>
                     <NotificationsIcon />
                  </Badge>
                  <AccountCircle />
               </Toolbar>
            </AppBar>

            {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
            <CssBaseline />
            <Component {...pageProps} />

            {/* <Fab>
               <KeyboardArrowUpIcon />
            </Fab> */}

         </ThemeProvider>
      </React.Fragment>
   );
}

MyApp.propTypes = {
   Component: PropTypes.elementType.isRequired,
   pageProps: PropTypes.object.isRequired,
};
