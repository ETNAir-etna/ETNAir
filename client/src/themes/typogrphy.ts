const typography = {
    fontFamily: 'NunitoVariable, Arial, sans-serif', // Police globale
    h1: {
        fontSize: '2.5rem',
        lineHeight: 1.2,
        fontWeight: 700,
        marginBottom: 2,
    },
    h2: {
        fontSize: '2rem',
        lineHeight: 1.3,
        fontWeight: 600,
    },
    h3: {
        fontSize: '1.75rem',
        lineHeight: 1.4,
        fontWeight: 500,
    },
    body1: {
        fontSize: '1rem',
        lineHeight: 1.5,
        fontWeight: 400,
    },
    a: {
        fontSize: '1rem',
        lineHeight: 1.5,
        fontWeight: 400,
        color: 'primary.main',
        textDecoration: 'none',
        '&:hover': {
            textDecoration: 'underline',
        },
    },
    list: {
        ul: {
            paddingLeft: '1.5rem',
            marginBottom: '1rem',
            listStyle: 'disc',
        },
        ol: {
            paddingLeft: '1.5rem',
            marginBottom: '1rem',
            listStyle: 'decimal',
        },
        li: {
            fontSize: '1rem',
            lineHeight: 1.5,
            marginBottom: '0.5rem',
        },
    },
    
};

export default typography;
