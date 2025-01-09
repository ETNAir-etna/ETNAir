
import React, { useState } from "react";
import { Box, TextField, Typography, Button, Link, Container } from "@mui/material";
import Footer from "../components/Footer";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { setUser } from "../store/userSlice";
import { useDispatch } from "react-redux";

const Auth: React.FC = () => {
    const [isSignUp, setIsSignUp] = useState(false); // Détermine si l'utilisateur est en mode "Inscription" ou "Connexion"
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [confirmPassword, setConfirmPassword] = useState<string>("");
    const [error, setError] = useState<string | null>(null);
    const {t} = useTranslation('common');
    const navigate = useNavigate();
    const dispatch = useDispatch();


    const handleSignUp = async () => {
        if (password !== confirmPassword) {
            setError("Les mots de passe ne correspondent pas.");
            return;
        }

        try {
            const response = await fetch('/api-etnair/auth/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            const responseData = await response.json();

            if (response.ok && responseData.success) {
                dispatch(setUser(responseData.data));

                navigate('/authenticated/account/profile');
            } else {
                setError(responseData.message || "Une erreur est survenue lors de l'inscription.");
            }
        } catch (err) {
            console.error("Erreur lors de l'inscription :", err);
            setError("Impossible de terminer l'inscription. Veuillez réessayer.");
        }
    };


    const handleSubmit = () => {
        setError(null);

        if (isSignUp && password !== confirmPassword) {
            setError("Les mots de passe ne correspondent pas.");
            return;
        }

        if (!email || !password) {
            setError("Tous les champs sont obligatoires.");
            return;
        }

        if (isSignUp) {
            console.log("Inscription :", { email, password });
            handleSignUp();
        } else {
            console.log("Connexion :", { email, password });
            // Ajouter la logique pour la connexion ici (ex: appel API)
        }
    };

    return (
        <>
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                height: "100vh",
                textAlign: "center",
            }}
        >
            <Typography color="blackWhite.main" variant="h4" component="h1" gutterBottom>
                {isSignUp ?  t('authpage.title.signUp') : t('authpage.title.signIn')}
            </Typography>

<Container >
            <TextField
                label="email"
                variant="outlined"
                fullWidth
                margin="normal"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />

            <TextField
                label={t('authpage.placeholder.password')}
                type="password"
                variant="outlined"
                fullWidth
                margin="normal"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />

            {isSignUp && (
                <TextField
                    label={t('authpage.placeholder.vPassword')}
                    type="password"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                />
            )}

            {/* Errors */}
            {error && (
                <Typography color="error" sx={{ mt: 2 }}>
                    {error}
                </Typography>
            )}

            <Button
                variant="contained"
                color="primary"
                fullWidth
                sx={{ mt: 3 }}
                onClick={handleSubmit}
            >
                {isSignUp ? t('authpage.submitButton.signUp') : t('authpage.submitButton.signIn')}
            </Button>

            {isSignUp ? (
                <Link
                    sx={{ mt: 2 }}
                    component="button"
                    onClick={() => setIsSignUp(false)}
                >
                    {t('authpage.pagelinks.signUp')}
                </Link>
            ) : (
                <Link
                    sx={{ mt: 2 }}
                    component="button"
                    onClick={() => setIsSignUp(true)}
                >
                    {t('authpage.pagelinks.signIn')}
                </Link>
            )}
            </Container>
        </Box>
        <Footer />
        </>
    );
};

export default Auth;
