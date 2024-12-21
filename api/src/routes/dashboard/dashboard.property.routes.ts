import { Router } from 'express';
import { DashboardPropertyController } from '../../controllers/dashboard/dashboard.property.controller';

const router = Router();


router.put('/:token', DashboardPropertyController.createProperty);

router.delete('/:token/:propertyId', DashboardPropertyController.deleteUserProperty);

router.get('/:token', DashboardPropertyController.getAllUserProperty);

router.put('/:token', DashboardPropertyController.updateProperty);

export default router