const whitelist: string[] = [ process.env.CORS_ALLOWED_ORIGINS_LOCAL, process.env.CORS_ALLOWED_ORIGINS, "http://localhost:5173" ].filter((origin) => origin !== undefined);

export const corsOptions = {
    origin: whitelist,
    methods: 'GET,POST,PUT,DELETE',
    allowedHeaders: 'Content-Type,Authorization'
};

