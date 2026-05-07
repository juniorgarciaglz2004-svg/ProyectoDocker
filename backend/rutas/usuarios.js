import { Router } from 'express';
import db from '../servicios/db.js'
import seguridad from '../servicios/seguridad.js';
const router = Router();
// endpoint 
router.get('/',
    seguridad.verifyToken, async (req, res) => {
        const users = await db.users.findAll();
        res.json(users);
    });

export default router; 