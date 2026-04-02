import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => res.json([]));

router.get('/:id', (req, res) => {
    const { id } = req.params;
//    console.log(`leyendo id:${id}`)
    res.json({id:id});
});


export default router; 