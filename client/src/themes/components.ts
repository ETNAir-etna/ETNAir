
export const components = {
    MuiButton: {
        styleOverrides: {
            root: {
                borderRadius: '8px', 
                padding: '8px 16px',
            },
        },
    },
    MuiCard: {
        styleOverrides: {
            root: {
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)', 
                borderRadius: '12px', 
                padding: '16px',
            },
        },
    },
    MuiAppBar: {
        styleOverrides: {
            root: {
                backgroundColor: '#FFFFFF',
                color: '#333333',
                boxShadow: '0 1px 4px rgba(0, 0, 0, 0.1)', 
            },
        },
    },
    MuiTextField: {
        styleOverrides: {
            root: {
                '& .MuiInputBase-root': {
                    borderRadius: '8px', 
                    backgroundColor: '#FFFFFF',
                },
            },
        },
    },
}
