import { Router } from 'express';
import { ReservationController } from '../../controllers/reservation.controller';


const router = Router();


router.put('/:token', ReservationController.cancelReservation);

router.post('/:token', ReservationController.createReservation);

router.put('/:token', ReservationController.updateReservation);

export default router