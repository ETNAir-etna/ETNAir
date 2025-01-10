import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import { Button } from './Button';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

interface HeroHeaderProps {
    imageUrl: string;
}

const HeroHeader: React.FC<HeroHeaderProps> = ({ imageUrl }) => {

    const { t } = useTranslation('components/hero');
    const navigate = useNavigate();

    return (
        <Box
            sx={{
                position: 'relative',
                height: '75vh',
                backgroundImage: `url(${imageUrl})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                marginBottom: "7%",
            }}
        >
            <Container
                sx={{
                    position: 'absolute',
                    bottom: '0',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    textAlign: 'center',
                }}
            >
                <Typography
                    variant="h1"
                    sx={{
                        color: '#FFFF',
                        fontSize: { xs: '1.5rem', sm: '2rem' }
                    }}
                >
                    {t('homepage.title')}
                </Typography>

                <Button
                    onClick={() => navigate('/search?page=1')}
                    fullWidth={false}
                    size="large"
                    color="secondary"
                    sx={{
                        fontWeight: "bold",
                        paddingX: { xs: '20px', sm: '40px', md: '70px' },
                        borderRadius: "30px",
                        fontSize: { xs: '0.9rem', sm: '1rem' },
                        mt: { xs: 2, sm: 5 },
                    }}
                >
                    {t('homepage.button')}
                </Button>

            </Container>
        </Box>
    );
};

export default HeroHeader;
