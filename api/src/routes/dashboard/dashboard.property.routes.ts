import { Router } from 'express';
import { PropertyController } from '../../controllers/property.controller';
import { checkValidators } from '../../middleware/checkValidators.middleware';
import { propertyValidations } from '../../validators/property.validator';

const router = Router();

router.post('/create', propertyValidations, checkValidators , PropertyController.createProperty);

router.put('/update', propertyValidations, checkValidators , PropertyController.updateProperty);

router.delete('/delete/all/:ownerId', PropertyController.deleteAllProperties);

router.delete('/delete/:propertyId/:ownerId', PropertyController.deleteProperty);

export default router