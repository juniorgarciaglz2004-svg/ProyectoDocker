import { Router } from 'express';
import seguridad from '../servicios/seguridad.js';
const router = Router();

router.post('/', async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const resultado = await seguridad.login(username,password)
    return res.status(resultado.status).json(resultado.json);

});

export default router; 