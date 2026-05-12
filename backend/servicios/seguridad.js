import config from './config.js'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import db from './db.js'

const esValidaCredencial = async (usuario, pass) => {
    const credencial = await db.credenciales.findAll({
        where: {
            usuario: usuario,
        },
    });

    if (!credencial || !credencial.length) {
        return false;
    }

    const hash = credencial[0].pass;
    return bcrypt.compare(pass, hash);
}

export default {
    login: async (usuario, pass) => {
        try {
            if (!usuario || !pass) {
                return {
                    json: { message: "usuario and pass are required" },
                    status: 400
                };
            }
            const esValida = await esValidaCredencial(usuario, pass);

            if (esValida) {
                const token = jwt.sign({ usuario }, config.seguridad.secretKey, { expiresIn: config.seguridad.expiresIn });
                return {
                    json: { token, usuario },
                    status: 200
                };
            } else {
                return {
                    json: { message: "autentificacion fallida" },
                    status: 401
                };

            }
            
        } catch (error) {
            console.log(error)
            return {
                json: { message: "error interno" },
                status: 500
            };
        }

    },

    verifyToken: (req, res, next) => {
        const header = req.header("Authorization") || "";
        const token = header.split(" ")[1];
        if (!token) {
            return res.status(401).json({ message: "Token no encontrado" });
        }
        try {
            const payload = jwt.verify(token, config.seguridad.secretKey);
            req.usuario = payload.usuario;
            next();
        } catch (error) {
            return res.status(403).json({ message: "Token no valido" });
        }
    }
}