import { Router } from 'express';

import { AccommodationController } from '../controllers/accomodation.controller';

const router = Router();

router.get('/', AccommodationController.getAllAccommodations);

router.get('/:id', AccommodationController.getAccommodationById);

router.get('/create', AccommodationController.createAccommodation);

export default router;