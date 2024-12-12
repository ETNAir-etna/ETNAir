import { Router } from 'express';

import { PropertyController } from '../controllers/property.controller';
import { checkValidators } from '../middleware/checkValidators.middleware';
import { createPropertyValidator } from '../validators/property.validator';

const router = Router();

router.get('/all', PropertyController.getAllProperties);

router.get('/:id', PropertyController.getPropertyById);

router.post('/create', createPropertyValidator, checkValidators , PropertyController.createProperty);

export default router;