import { Router } from 'express';
import { HomeController } from '../controllers/home.controller';

const router = Router();

/**
 * @swagger
 * /:
 *   get:
 *     summary: Check server status
 *     description: Returns a simple response to confirm the server is running and reachable.
 *     tags:
 *       - Server
 *     responses:
 *       200:
 *         description: The server is up and running.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Pong!
 */

router.get('/', HomeController.getHome);

export default router;
