import { Router } from 'express';

import { PropertyController } from '../controllers/property.controller';

const router = Router();

router.get('/all', PropertyController.getAllProperties);

router.get('/:id', PropertyController.getPropertyById);

router.post('/create', PropertyController.createProperty);

export default router;