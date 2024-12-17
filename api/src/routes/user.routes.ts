import { Router } from 'express';
import { UserController } from '../controllers/user.controller';
import { verifyToken } from '../middleware/auth.middleware';

const router = Router();

router.get('/all', UserController.getUsers)

router.get('/:id', UserController.getUser)

router.get('/profil', verifyToken, UserController.getProfile)

// TODO : add createPropertyValidator, checkValidators edit user route

export default router;