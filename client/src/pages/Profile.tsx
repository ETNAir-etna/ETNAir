import React from 'react';
import { useSelector } from 'react-redux'; // Pour accéder aux données du Redux
import { Box, TextField, Button, Avatar } from '@mui/material';

import { selectUser } from "../store/userSelector";

function Profile() {
    const user = useSelector(selectUser);

    const {
        email = '',
        firstName = '',
        lastName = '',
        gender = '',
        phoneNumber = '',
        summary = '',
        profileImg = '',
    } = user || {};


    // TODO : géré les bouttons et leurs actions
        const handleSubmit = (event: React.FormEvent) => {
            event.preventDefault();
            console.log('Form submitted');
            console.log(email)
        };
    

        const handleDeleteProfile = () => {
            console.log('Profile deleted');
        };
    
        const handleBecomeHost = () => {
            console.log('Become a host');
        };

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100vh',
                gap: 2,
            }}
        >
            {/* Photo de profil */}
            {/* Photo de profil */}
            <Avatar
                src={profileImg as string}
                alt="Profile Image"
                sx={{
                    width: 120,
                    height: 120,
                    marginBottom: 2,
                }}
            />

            <Button variant="outlined" color="primary" sx={{ marginBottom: 2 }}>
                Upload Profile Image
            </Button>

            {/* Formulaire des inputs */}
            <Box
                component="form"
                sx={{
                    width: '100%',
                    maxWidth: 500,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 2,
                }}
            >
                <TextField
                    label="Email"
                    variant="outlined"
                    fullWidth
                    defaultValue={email}
                />
                <Box
                    sx={{
                        display: 'flex',
                        gap: 2,
                    }}
                >
                    <TextField
                        label="First Name"
                        variant="outlined"
                        fullWidth
                        defaultValue={firstName}
                    />
                    <TextField
                        label="Last Name"
                        variant="outlined"
                        fullWidth
                        defaultValue={lastName}
                    />
                </Box>
                <TextField
                    label="Gender"
                    variant="outlined"
                    fullWidth
                    defaultValue={gender}
                />
                <TextField
                    label="Phone Number"
                    variant="outlined"
                    fullWidth
                    defaultValue={phoneNumber}
                />
                <TextField
                    label="Bio"
                    variant="outlined"
                    multiline
                    rows={4}
                    fullWidth
                    defaultValue={summary}
                />
            </Box>

            {/* Boutons */}
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    width: '100%',
                    maxWidth: 500,
                    gap: 2,
                    marginTop: 3,
                }}
            >
                <Button variant="contained" color="primary" type="submit" onClick={handleSubmit}>
                    Update Profile
                </Button>
                <Button variant="contained" color="error" onClick={handleDeleteProfile}>
                    Delete Profile
                </Button>
                <Button variant="contained" color="secondary" onClick={handleBecomeHost}>
                    Become a Host
                </Button>
            </Box>
        </Box>
    );
}

export default Profile;
