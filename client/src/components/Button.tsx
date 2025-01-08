import { useContext } from 'react';
import { ThemeModeContext } from '../themes/ThemeContext';
import { Button as MuiButton, IconButton as MuiIconButton } from '@mui/material';
import { ButtonProps } from '@mui/material/Button';
import DarkModeRoundedIcon from '@mui/icons-material/DarkModeRounded';
import LightModeRoundedIcon from '@mui/icons-material/LightModeRounded';


/* GLOBAL */

export const IconButton: React.FC<ButtonProps> = ({ children, ...props }) => {
    return (
        <MuiIconButton {...props} >
            {children}
        </MuiIconButton>
    );
};

export const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
    return (
        <MuiButton 
            fullWidth={props.fullWidth ? false : true}
            variant={props.variant ? 'outlined' : 'contained'}
            color={props.color ? 'secondary' : 'primary'}
            {...props}
        >
            {children}
        </MuiButton>
    );
};

/* CUSTOM */

export const ThemeSwitcherButton: React.FC = () => {
    const { toggleTheme, mode } = useContext(ThemeModeContext);
    return (
        <IconButton onClick={toggleTheme}>
            {mode === 'light' ? <DarkModeRoundedIcon /> : <LightModeRoundedIcon />}
        </IconButton>
    );
}; 
