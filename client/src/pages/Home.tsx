import { useEffect, useState } from 'react';
import { Property } from '@etnair-etna/shared';
import { Alert, Container, List, ListItem, Typography } from '../components/muiComponents';

function Home() {
    const [properties, setProperties] = useState<Property[]>([]);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        fetch(`api-etnair/property/all`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Erreur lors de la récupération des données');
                }
                return response.json();
            })
            .then(response => {
                setProperties(response.data);
            })
            .catch(error => {
                console.error("ERROR : ", error);
                setError(error.message);
            });
    }, []);

    return (
        <Container sx={{ backgroundColor: 'background.paper' }}>
            <Typography variant="h1" sx={{ color: 'text.primary' }}>
                Welcome to the Home Page
            </Typography>

            {error && (
                <Alert severity="error" sx={{ marginBottom: 2 }}>
                    {error}
                </Alert>
            )}

            {properties.length > 0 ? (
                <List>
                    {properties.map(user => (
                        <ListItem sx={{ color: 'text.primary' }} key={user.id}>{user.title}</ListItem>
                    ))}
                </List>
            ) : (
                <Typography variant="body1">No properties found</Typography>
            )}
        </Container>
    );
}

export default Home;
