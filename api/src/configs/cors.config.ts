export const corsOptions = {
    origin: `${process.env.CORS_ALLOWED_ORIGINS}`,
    methods: 'GET,POST,PUT,DELETE',
    allowedHeaders: 'Content-Type,Authorization'
};