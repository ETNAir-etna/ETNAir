import { Router } from 'express';
import { UserController } from '../controllers/user.controller';
import { checkValidators } from '../middleware/checkValidators.middleware';
import { editUser } from '../validators/user.validator';
import { verifyToken } from '../middleware/auth.middleware';

const router = Router();

router.get('/all', UserController.getUsers);

router.get('/:id', UserController.getUser);

router.put('/update', UserController.updateUser);

router.delete('/delete', editUser, checkValidators, UserController.deleteUser);

export default router;