import { Router } from 'express';
import { HomeController } from '../controllers/home.controller';

const router = Router();

/**
 * @swagger
 * /:
 *   get:
 *     summary: Ping the server
 *     responses:
 *       200:
 *         description: Pong!
 */
router.get('/', HomeController.getHome);

export default router;
