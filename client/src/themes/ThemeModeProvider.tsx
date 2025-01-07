import { useState, useMemo, ReactNode } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { lightTheme, darkTheme } from './theme';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeModeContext } from './ThemeContext';

export const ThemeModeProvider = ({ children }: { children: ReactNode }) => {

    const [mode, setMode] = useState<'light' | 'dark'>('light');

    const theme = useMemo(() => (mode === 'light' ? lightTheme : darkTheme), [mode]);

    const toggleTheme = () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
    };

    return (
        <ThemeModeContext.Provider value={{ toggleTheme, mode }}>
            <CssBaseline />
            <ThemeProvider theme={theme}>
                {children}
            </ThemeProvider>
        </ThemeModeContext.Provider>
    );
};
