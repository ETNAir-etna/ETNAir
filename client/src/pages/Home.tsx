import { useEffect, useState } from 'react';
import { Property } from '@etnair-etna/shared';
import { SEO } from '../components/SEO';
import { PropretyCard } from '../components/Card';
import { useTranslation } from 'react-i18next';
import HeroHeader from '../components/HeroHeader';
import { Button } from '../components/Button';
import { Container, Stack, Typography, Box } from '@mui/material';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import { useNavigate } from 'react-router-dom';
import { PropertyAndHost } from '../interfaces/PropertyAndHost';

function Home() {

    const [properties, setProperties] = useState<PropertyAndHost[]>([]);

    const navigate = useNavigate();

    const { t } = useTranslation('common')
    useEffect(() => {
        const fetchData = async () => {
            try {
                const propertyResponse = await fetch('api-etnair/property/all');
                if (!propertyResponse.ok) throw new Error('Erreur lors de la récupération des propriétés');
                const propertyData: Property[] = (await propertyResponse.json()).data[1];
                const hostIds = [...new Set(propertyData.map((property) => property.ownerId))];

                const userPromises = hostIds.map((id) =>
                    fetch(`api-etnair/user/${id}`)
                        .then((res) => {
                            if (!res.ok) {throw new Error(`Erreur lors de la récupération de l'utilisateur ${id}`);}
                            return res.json();
                        })
                        .then((data) => data.data)
                );

                const users = await Promise.all(userPromises);

                const mergedProperties = propertyData.map((property) => ({
                    ...property,
                    host: users.find((user) => user.id === property.ownerId) || null,
                }));

                setProperties(mergedProperties);
            } catch (error) {
                const typedError = error as Error;
                console.error('ERROR:', typedError.message);
                
            }
        };

        fetchData();
    }, []);

    return (
        <>
            <SEO title={t('SEO.homepage.title')} description={t('SEO.homepage.description')} />

            <Container maxWidth="xl" sx={{
                backgroundColor: 'primary',
                width: '100%',
                textAlign: "center"
            }}>

                <HeroHeader imageUrl={'https://images.unsplash.com/photo-1619317190381-643a6b28d6e6?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'} />

                <Stack direction="row" spacing={2}>
                    <FavoriteRoundedIcon color='error' />
                    <Typography variant='h6' fontWeight="bold">{t('homepage.subtitle')}</Typography>
                </Stack>

                {properties.length > 0 ? (
                    <Box
                        sx={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            justifyContent: 'center',

                            gap: 2,
                            mt: 3,
                        }}
                    >
                        {properties.map(property => (
                            <PropretyCard key={property.id} onClick={() => navigate(`/property/${property.id}`)} imgUrl={property.mainImgUrl} title={property.title} rating={property.rating} host={`${property.host.firstName} ${property.host.lastName}`} price={property.pricePerNight} isSuperhost={property.host.isSuperHost ? true : false} />
                        ))}
                    </Box>
                ) : (
                    <Typography variant="body1">No properties found</Typography>
                )}

                <Button
                    onClick={() => navigate('/search')}
                    fullWidth={false}
                    size="large"
                    color="secondary"
                    sx={{
                        fontWeight: "bold",
                        padding: { xs: '10px 40px', sm: '15px 100px', md: '15px 150px' },
                        borderRadius: "30px",
                        mt: 10,
                        width: { xs: '100%', sm: 'auto' },
                    }}
                >
                    {t('homepage.bottomButton')}
                </Button>


            </Container>
        </>
    );
}

export default Home;
