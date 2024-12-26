import { Router } from 'express';
import { UserController } from '../../controllers/user.controller';

const router = Router();

router.get("/all", UserController.getUsers);

export default router