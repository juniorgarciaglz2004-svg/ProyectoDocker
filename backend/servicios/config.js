import dotenv from 'dotenv'
import * as path from "node:path";

const entorno = process.env.NODE_ENV || 'development';

dotenv.config({
    path: path.resolve(process.cwd(), `.env-${entorno}`),
    quiet: true
});

export default {
    db: {
        name: process.env.BD_NOMBRE,
        host: process.env.BD_HOST,
        user: process.env.BD_USER,
        pass: process.env.BD_PWD,
        port: process.env.BD_PORT,
    },

    appPort: process.env.APP_PORT
};




