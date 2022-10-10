import {createMuiTheme } from '@material-ui/core/styles';


export const theme = createMuiTheme ({
  palette: {
    type: 'light',
    primary: {
        main: '#ED8E34' ,
        light: '#fff',
        dark: '#FFC06A',
        contrastText: '#fff',
    },
    secondary: {
        main:'#ccc',
        light:'rgba(0, 0, 0, 0.5)',
        dark:'#000000',
        contrastText:'#707070',
    },
    black: {
      main:'#000',
      light:'rgba(0, 0, 0, 0.5)',
      dark:'#000000',
      contrastText:'#0000',
  },




    // Used by `getContrastText()` to maximize the contrast between the background and
    // the text.
    contrastThreshold: 3,
    // Used to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: 0.2,
  },

  typography: {
   // Use the system font instead of the default Roboto font.
   fontFamily: [
     "Nexa",
   ].join(','),
   
    useNextVariants: true,

 },

     direction: 'ltr',

});
