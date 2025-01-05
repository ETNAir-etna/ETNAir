import { Router } from 'express';
import { UserController } from '../../../controllers/user.controller';
import { checkRole } from '../../../middleware/checkRole';

const UserRouter = Router();

UserRouter.get("/all", UserController.getUsers);

UserRouter.delete("/:id", checkRole(['ADMIN']), UserController.deleteUser);

export default UserRouter