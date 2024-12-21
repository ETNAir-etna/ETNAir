import { Router } from 'express';
import { DashboardProfileController } from '../../controllers/dashboard/dashboard.profile.controller';

const router = Router();


router.get('/:token', DashboardProfileController.getProfile);

router.put('/:token', DashboardProfileController.updateProfile);

router.delete('/:token', DashboardProfileController.deleteProfile);

export default router