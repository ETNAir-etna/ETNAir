import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Property, User } from '@etnair-etna/shared';

interface PropertyAndHost extends Property {
    host: User
}

const PropertyPage: React.FC = () => {
    const { propertyId } = useParams<{ propertyId: string }>();
    console.log(propertyId)
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
        <div>
            <h1>{property.title}</h1>
            <img src={property.mainImgUrl} alt={property.title} style={{ width: '100%', maxHeight: '400px' }} />
            <p>{property.description}</p>
            <p>
                Prix par nuit : <strong>{property.pricePerNight} €</strong>
            </p>
            {property.host && (
                <p>
                    Hôte : {property.host.firstName} {property.host.lastName}{' '}
                    {property.host.isSuperHost && <span>(Superhost)</span>}
                </p>
            )}
        </div>
    );
};

export default PropertyPage;