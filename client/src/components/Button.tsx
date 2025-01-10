import { useContext, useState } from 'react';
import { ThemeModeContext } from '../themes/ThemeContext';
import { Box, Button as MuiButton, IconButton as MuiIconButton } from '@mui/material';
import { ButtonProps } from '@mui/material/Button';
import DarkModeRoundedIcon from '@mui/icons-material/DarkModeRounded';
import LightModeRoundedIcon from '@mui/icons-material/LightModeRounded';
import FavoriteTwoToneIcon from '@mui/icons-material/FavoriteTwoTone';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';

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

export const ThemeSwitcherButton: React.FC = () => {
    const { toggleTheme, mode } = useContext(ThemeModeContext);
    return (
        <MuiIconButton onClick={toggleTheme}>
            {mode === 'light' ? <DarkModeRoundedIcon /> : <LightModeRoundedIcon />}
        </MuiIconButton>
    );
}; 

export const FavoriteIcon = () => {
    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
        setIsClicked((prev) => !prev);
    };

    return (
        <Box
            sx={{
                position: 'absolute',
                top: 10,
                right: 10,
                color: isClicked ? 'error.main' : '#FFFFFF',  
                transition: 'all 0.3s ease',
                cursor: 'pointer',
                '&:hover': {
                    transform: 'scale(1.2)', 
                    color: 'error.main', 
                },
            }}
            onClick={handleClick}
        >
            {isClicked ? (
                <FavoriteRoundedIcon aria-label="remove from favorites" />
            ) : (
                <FavoriteTwoToneIcon aria-label="add to favorites" />
            )}
        </Box>
    );
};

