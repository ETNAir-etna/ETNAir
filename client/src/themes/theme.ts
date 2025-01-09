import { createTheme } from '@mui/material/styles';
import typography from './typogrphy';
import '@mui/material/styles';

declare module '@mui/material/styles' {
    interface PaletteOptions {
        blackWhite: {
            main: string, 
            contrastText: string
        },
        whiteBlack: {
            main: string, 
            contrastText: string
        };
    }
}

declare module '@mui/material/Chip' {
    interface ChipPropsColorOverrides {
        blackWhite: true
        whiteBlack: true
    }
}


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
        blackWhite: {
            main: '#000000', 
            contrastText: '#FFFFFF',
        },
        whiteBlack: {
            main: '#FFFFFF', 
            contrastText: '#000000', 
        },
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
        blackWhite: {
            main: '#FFFFFF', 
            contrastText: '#000000', 
        },
        whiteBlack: {
            main: '#000000', 
            contrastText: '#FFFFFF',
        },
    },
});


