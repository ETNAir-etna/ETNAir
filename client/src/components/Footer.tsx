import React from 'react';
import { Box, Typography, Stack } from '@mui/material';
import { ThemeSwitcherButton } from './Button';
import { LanguagesSelect } from './Select';

const Footer: React.FC = () => {
    return (
        <Box
            component="footer"
            sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '0.6rem 3rem',
                backgroundColor: 'background.paper',
                borderTop: '1px solid',
                borderColor: 'divider',
                marginTop: "30px;"

            }}
        >
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                © 2024 ETNAir, Inc
            </Typography>

            

            <Stack direction="row" spacing={2}>
                <ThemeSwitcherButton />
                <LanguagesSelect />
            </Stack>
        </Box>
    );
};

export default Footer;
