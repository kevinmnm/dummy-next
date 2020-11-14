import React, { useState } from 'react';
import Navbar from '../components/navbar.js';
import Head from 'next/head';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from '../src/theme.js';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
// For Redux + next setup.
import { Provider } from 'react-redux';
import withRedux from 'next-redux-wrapper';
import store from '../redux/store.js';
import App from 'next/app';

const makeStore = () => store;

const useStyle = makeStyles({
   mainPaper: {
      position: 'relative',
      top: '48px',
      height: 'calc(100vh - 48px)'
   }
});

// class MyApp extends App {
//    render() {
//       <React.Fragment>
//          <Head>
//             <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
//          </Head>
//          <Provider store={store}>
//             <ThemeProvider theme={theme(darkMode)}>
//                <Paper className={classes.mainPaper}>
//                   <Navbar themeChanger={darkModeHandler}></Navbar>
//                   <CssBaseline />
//                   <Component />
//                   {/* <Component {...pageProps} /> */}
//                </Paper>
//             </ThemeProvider >
//          </Provider>
//       </React.Fragment >
//    }
// }

// export default withRedux(makeStore)(MyApp);

function MyApp(props) {
   const { Component, pageProps } = props;
   const classes = useStyle();
   console.log(Component);

   // React.useEffect(() => {
   //    // Remove the server-side injected CSS.
   //    const jssStyles = document.querySelector('#jss-server-side');
   //    if (jssStyles) {
   //       jssStyles.parentElement.removeChild(jssStyles);
   //    }
   // }, []);

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
         <Provider store={store}>
            <ThemeProvider theme={theme(darkMode)}>
               <Paper className={classes.mainPaper}>
                  <Navbar themeChanger={darkModeHandler}></Navbar>
                  <CssBaseline />
                  <Component />
                  {/* <Component {...pageProps} /> */}
               </Paper>
            </ThemeProvider >
         </Provider>
      </React.Fragment >
   );
}

console.log(store);
// MyApp.propTypes = {
//    Component: PropTypes.elementType.isRequired,
//    pageProps: PropTypes.object.isRequired,
// };

export default withRedux(makeStore)(MyApp);
