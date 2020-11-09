import React, { useState } from 'react';
import Navbar from '../components/navbar.js';
import Head from 'next/head';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from '../src/theme.js';
import Paper from '@material-ui/core/Paper';

export default function MyApp(props) {
   const { Component, pageProps } = props;

   // React.useEffect(() => {
   //    // Remove the server-side injected CSS.
   //    const jssStyles = document.querySelector('#jss-server-side');
   //    if (jssStyles) {
   //       jssStyles.parentElement.removeChild(jssStyles);
   //    }
   // }, []);

   // let [darkMode, setDarkMode] = useState('light');

   // const changee = () => {
   //    (!darkMode || darkMode === 'light') ?
   //       setDarkMode('dark') :
   //       setDarkMode('light');
   // }

   const [darkMode, setDarkMode] = useState(false);

   const darkModeHandler = (darkMode) => {
      setDarkMode(darkMode);
      localStorage.darkMode = darkMode;
   }

   return (
      <React.Fragment>
         <Head>
            <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
         </Head>
         <ThemeProvider theme={theme(darkMode)}>
            <Paper>
               <Navbar themeChanger={darkModeHandler}></Navbar>
               <CssBaseline />
               <Component />
               {/* <Component {...pageProps} /> */}
            </Paper>
         </ThemeProvider >
      </React.Fragment >
   );
}

// MyApp.propTypes = {
//    Component: PropTypes.elementType.isRequired,
//    pageProps: PropTypes.object.isRequired,
// };
