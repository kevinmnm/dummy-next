import { createMuiTheme } from '@material-ui/core';

const theme = darkMode => createMuiTheme({
   palette: {
      type: darkMode ? 'dark' : 'light'
   }
});

export default theme;