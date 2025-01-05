import { Router } from 'express';
import { PropertyController } from '../../../controllers/property.controller';
import { checkValidators } from '../../../middleware/checkValidators.middleware';
import { propertyValidations } from '../../../validators/property.validator';

const AccountPropertyRouter = Router();

AccountPropertyRouter.post('/create', propertyValidations, checkValidators , PropertyController.createProperty);

AccountPropertyRouter.put('/update', propertyValidations, checkValidators , PropertyController.updateProperty);

AccountPropertyRouter.delete('/delete/all/:ownerId', PropertyController.deleteAllProperties);

AccountPropertyRouter.delete('/delete/:propertyId/:ownerId', PropertyController.deleteProperty);

export default AccountPropertyRouter