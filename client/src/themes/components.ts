
export const components = {
    MuiButton: {
        styleOverrides: {
            root: {
                borderRadius: '8px', // Boutons légèrement arrondis
                padding: '8px 16px',
            },
        },
    },
    MuiCard: {
        styleOverrides: {
            root: {
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)', // Ombres douces
                borderRadius: '12px', // Coins des cartes arrondis
                padding: '16px',
            },
        },
    },
    MuiAppBar: {
        styleOverrides: {
            root: {
                backgroundColor: '#FFFFFF', // AppBar clair
                color: '#333333',
                boxShadow: '0 1px 4px rgba(0, 0, 0, 0.1)', // Ombre subtile
            },
        },
    },
    MuiTextField: {
        styleOverrides: {
            root: {
                '& .MuiInputBase-root': {
                    borderRadius: '8px', // Champs de texte arrondis
                    backgroundColor: '#FFFFFF',
                },
            },
        },
    },
}
