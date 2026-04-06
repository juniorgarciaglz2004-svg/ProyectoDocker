import { Router } from 'express';
import db from '../db.js'
const router = Router();

router.get('/', async (req, res) => {
    const users = await db.getUsers();
    res.json(users);
});

router.get('/:id', (req, res) => {
    const { id } = req.params;
//    console.log(`leyendo id:${id}`)
    res.json({id:id});
});


export default router; 