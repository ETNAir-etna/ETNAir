import { Router } from 'express';
import { UserController } from '../../controllers/user.controller';
import { checkRole } from '../../middleware/checkRole';
import { checkValidators } from '../../middleware/checkValidators.middleware';
import { editUser } from '../../validators/user.validator';

const router = Router();

router.put("/update/:id", editUser, checkValidators, UserController.updateUser);

router.delete("/:id", checkRole(['ADMIN']), UserController.deleteUser);

export default router