import { Router } from 'express';
import { DashboardReservationController } from '../../controllers/dashboard/dashboard.reservation.controller';

const router = Router();


router.put('/:token', DashboardReservationController.cancelReservation);

router.post('/:token', DashboardReservationController.createReservation);

router.put('/:token', DashboardReservationController.updateReservation);

export default router