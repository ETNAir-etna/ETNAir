import dotenv from "dotenv";
import path from "path";

const env: string = process.env.NODE_ENV || 'production';
const envPath: string = env === "production" ? "" : 'configs/env/';

try {
    switch (env) {
        case 'development':
            dotenv.config({ path: path.resolve(process.cwd(), `${envPath}.env.development`) });
            break;
        case 'production':
            dotenv.config({ path: path.resolve(process.cwd(), `${envPath}.env.production`) });
            break;
        default:
            throw new Error('Unrecognized Environment');
    }
} catch (err) {
    console.error('Error loading environment:', err);
}
