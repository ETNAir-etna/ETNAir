import { Router } from 'express';
import { ReservationController } from '../../../controllers/reservation.controller';


const AccountReservationRouter = Router();


AccountReservationRouter.put('/:token', ReservationController.cancelReservation);

AccountReservationRouter.post('/:token', ReservationController.createReservation);

AccountReservationRouter.put('/:token', ReservationController.updateReservation);

export default AccountReservationRouter