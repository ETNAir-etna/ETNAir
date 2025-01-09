import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Property, User } from '@etnair-etna/shared';
import { Box, Typography, Paper, Avatar } from '@mui/material';

interface PropertyAndHost extends Property {
    host: User
}

const PropertyPage: React.FC = () => {
    const { propertyId } = useParams<{ propertyId: string }>();
    const [property, setProperty] = useState<PropertyAndHost | null>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchPropertyAndHost = async () => {
            try {
     
                const propertyResponse = await fetch(`/api-etnair/property/${propertyId}`);
                if (!propertyResponse.ok) throw new Error(`Erreur lors de la récupération de la propriété`);
                const propertyResponseData = await propertyResponse.json();
                const propertyData: Property = propertyResponseData.data;


                const hostResponse = await fetch(`/api-etnair/user/${propertyData.ownerId}`);
                if (!hostResponse.ok) throw new Error(`Erreur lors de la récupération de l'hôte`);
                const hostResponseData = await hostResponse.json();
                const hostData: User = await hostResponseData.data;

            
                setProperty({
                    ...propertyData,
                    host: hostData,
                });
            } catch (error) {
                const typedError = error as Error;
                console.error('ERROR:', typedError.message);
                setError(typedError.message);
            }
        };

        if (propertyId) {
            fetchPropertyAndHost();
        }
    }, [propertyId]);



    if (error) {
        return <div>Erreur : {error}</div>;
    }

    if (!property) {
        return <div>Chargement...</div>;
    }

    return (
        <Box sx={{ padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
            {/* Header Section */}
            <Box sx={{ marginBottom: '20px' }}>
                <Typography variant="h4">{property.title}</Typography>
            </Box>

            {/* Main Image Section */}
            <Box sx={{ marginBottom: '20px' }}>
                <img
                    src={property.mainImgUrl}
                    alt={property.title}
                    style={{ width: '100%', maxHeight: '400px', objectFit: 'cover' }}
                />
            </Box>

            {/* Property Description */}
            <Box sx={{ marginBottom: '20px' }}>
                <Typography variant="h6">Description</Typography>
                <Typography variant="body1">{property.description}</Typography>
            </Box>

            {/* Price and Host Info */}
            <Box sx={{ marginBottom: '20px' }}>
                <Typography variant="h6">
                    <strong>Prix par nuit : {property.pricePerNight} €</strong>
                </Typography>
                {property.host && (
                    <Typography variant="body1">
                        <strong>Hôte : </strong>
                        {property.host.firstName} {property.host.lastName}{' '}
                        {property.host.isSuperHost && <span style={{ color: 'gold' }}>(Superhost)</span>}
                    </Typography>
                )}
            </Box>

            {/* Location Section */}
            <Box sx={{ marginBottom: '20px' }}>
                <Typography variant="h6">Localisation</Typography>
                <Typography variant="body1">
                    {property.area} m², {property.city}, {property.country}
                </Typography>
                {/* <Typography variant="body1">
                    Latitude : {property.latitude}, Longitude : {property.longitude}
                </Typography> */}
            </Box>

            {/* Equipment Section */}
            <Box sx={{ marginBottom: '20px' }}>
                <Typography variant="h6">Équipements</Typography>
                <ul>
                    {property.equipments.map((equipment, index) => (
                        <li key={index}>
                            <Typography variant="body1">{equipment}</Typography>
                        </li>
                    ))}
                </ul>
            </Box>

            {/* Ratings Section */}
            <Box sx={{ marginBottom: '20px' }}>
                <Typography variant="h6">Note</Typography>
                <Typography variant="body1">{property.rating} / 5</Typography>
            </Box>

            {/* Host Section */}
            {property.host && (
                <Paper
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        backgroundColor: 'secondary.main', // Couleur secondaire de MUI
                        borderRadius: '8px',
                        padding: '20px',
                        marginTop: '40px',
                        boxShadow: 3,
                        width: '100%',
                    }}
                >

                    <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, alignItems: 'center' }}>
 
                        <Avatar
                            src={property.host.profileImg || '/default-avatar.png'}
                            alt={`${property.host.firstName} ${property.host.lastName}`}
                            sx={{
                                width: 100,
                                height: 100,
                                borderRadius: '50%',
                                border: '2px solid #ccc',
                                marginBottom: { xs: '15px', sm: '0' },
                                marginRight: '20px',
                            }}
                        />

                        <Box sx={{ textAlign: { xs: 'center', sm: 'left' } }}>
                            <Typography variant="h6" component="h3">
                                {property.host.firstName} {property.host.lastName}
                            </Typography>
                            <Typography variant="body1">
                                {property.host.isSuperHost ? 'Superhost' : 'Hôte'}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" sx={{ marginTop: '10px' }}>
                                {property.host.summary}
                            </Typography>

                            <Typography variant="body2">
                                <strong>Note : </strong>
                                {property.host.hostRating} / 5
                            </Typography>
                        </Box>
                    </Box>
                </Paper>
            )}
        </Box>
    );
};

export default PropertyPage;