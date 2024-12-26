import { Router } from 'express';

import { PropertyController } from '../controllers/property.controller';
import { checkValidators } from '../middleware/checkValidators.middleware';
import { propertyValidations } from '../validators/property.validator';
// import { createPropertyValidator } from '../validators/property.validator';

const router = Router();

router.get('/all', PropertyController.getAllProperties);

router.get('/:id', PropertyController.getPropertyById);

router.post('/create', propertyValidations, checkValidators , PropertyController.createProperty);

router.put('/update', propertyValidations, checkValidators , PropertyController.updateProperty);

router.delete('/delete/all/:ownerId', PropertyController.deleteAllProperties);

router.delete('/delete/:id/:ownerId', PropertyController.deleteProperty);

export default router;