import { useContext } from 'react';
import { ThemeModeContext } from '../themes/ThemeContext';
import { Button } from './muiComponents';

export const ThemeSwitcherButton = () => {
    const { toggleTheme, mode } = useContext(ThemeModeContext);

    return (
        <Button variant="contained" color="primary" onClick={toggleTheme}>
            mode {mode === 'light' ? 'sombre' : 'clair'}
        </Button>
    );
};
