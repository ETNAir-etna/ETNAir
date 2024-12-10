import { Router } from 'express';
import { UserController } from '../controllers/user.controller';

const router = Router();

router.get('/all', UserController.getUsers)

router.get('/:id', UserController.getUser)

// auth

// router.post('/', UserController.addUser)

export default router;