import { createTheme } from '@mui/material/styles';
import typography from './typogrphy';

// const shadows = [
//     'none',
//     '0px 1px 3px rgba(0, 0, 0, 0.2)',
//     '0px 1px 5px rgba(0, 0, 0, 0.3)',
// ];

// const shape = {
//     borderRadius: 8,
// };

// const zIndex = {
//     appBar: 1200,
//     drawer: 1100,
//     modal: 1300,
//     tooltip: 1500,
// };


export const lightTheme = createTheme({
    typography,
    palette: {
        mode: 'light',
        primary: {
            main: '#4E4CAFFF',
            contrastText: '#FFFFFF', 
        },
        secondary: {
            main: '#8AAFFFFF',
            contrastText: '#FFFFFF',
        },
        background: {
            default: '#F9FAFB',
            paper: '#FFFFFF',
        },
        text: {
            primary: '#333333', 
            secondary: '#757575', 
            disabled: '#BDBDBD', 
        },
        divider: '#E0E0E0',
    },
});


export const darkTheme = createTheme({
    typography,
    palette: {
        mode: 'dark',
        primary: {
            main: '#4E4CAFFF',
            contrastText: '#FFFFFF',
        },
        secondary: {
            main: '#8AAFFFFF',
            contrastText: '#FFFFFF',
        },
        background: {
            default: '#121212',
            paper: '#1E1E1E',
        },
        text: {
            primary: '#FFFFFF',
            secondary: '#B0BEC5',
            disabled: '#757575',
        },
        divider: '#424242',
    },
});


