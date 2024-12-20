import { Router } from 'express';
import { verifyToken } from '../middleware/auth.middleware';
import { UserController } from '../controllers/user.controller';

const router = Router();

router.get('', verifyToken, UserController.getBlacklist);

export default router;