import { Router } from 'express';
import { PropertyController } from '../controllers/property.controller';

const router = Router();

router.get('/all', PropertyController.getAllProperties);

// TODO : Finir l'implémentation de la route
router.get('/:id/all', PropertyController.getAllUserProperties)

router.get('/:id', PropertyController.getPropertyById);

export default router;