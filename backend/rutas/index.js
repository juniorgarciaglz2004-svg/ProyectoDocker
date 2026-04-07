import { Router } from 'express';
const router = Router();

router.get('/', async (req, res) => {
    res.send('Bienvenidos a la API!!!')
});

export default router; 