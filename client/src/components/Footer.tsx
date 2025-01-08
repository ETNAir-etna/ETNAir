import React from 'react';
import { Box, Typography, Stack } from '@mui/material';
import { Facebook, Twitter, Instagram } from '@mui/icons-material';

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
                <Facebook />
                <Twitter />
                <Instagram />
            </Stack>
        </Box>
    );
};

export default Footer;
