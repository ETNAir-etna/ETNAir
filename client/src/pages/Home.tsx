import { useEffect, useState } from 'react';
// import { Result } from '../interfaces/result';
import { Property } from '@etnair-etna/shared';

function Home() {

    const [users, setUsers] = useState<Property[]>([]);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        // const baseUrl = process.env.REACT_APP_API_BASE_URL || ''; // Définit une URL dynamique
        fetch(`api-etnair/property/all`)
            .then(response => {
                console.log("RESPONSE : ", response);
                if (!response.ok) {
                    throw new Error('Erreur lors de la récupération des données');
                }
                return response.json();
            })
            .then(response => {
                setUsers(response.data);
                console.log(response.data);
            })
            .catch(error => {
                console.error("ERROR : ", error);
                setError(error.message);
            });
    }, []);
    

    return (
        <div>
            <h1>Welcome to the Home Page</h1>

            {error && <p style={{ color: 'red' }}>{error}</p>}

            <ul>
                {users.length > 0 ? (
                    users.map(user => (
                        <li key={user.id}>{user.title}</li>
                    ))
                ) : (
                    <p>No users found</p>
                )}
            </ul>
        </div>
    );
}

export default Home;
