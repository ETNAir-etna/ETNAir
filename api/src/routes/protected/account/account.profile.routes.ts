import { Router } from 'express';
import { UserController } from '../../../controllers/user.controller';
import { checkValidators } from '../../../middleware/checkValidators.middleware';
import { editUser } from '../../../validators/user.validator';

const AccountProfileRouter = Router();

AccountProfileRouter.put("/update/:id", editUser, checkValidators, UserController.updateUser);

// AccountProfileRouter.delete("/:id", checkRole(['ADMIN']), UserController.deleteUser);

export default AccountProfileRouter