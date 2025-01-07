
import { createContext } from 'react';

interface ThemeModeContextType {
    toggleTheme: () => void;
    mode: 'light' | 'dark';
}

export const ThemeModeContext = createContext<ThemeModeContextType>({
    toggleTheme: () => { },
    mode: 'light',
});
