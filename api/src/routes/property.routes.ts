import { Router } from 'express';

import { PropertyController } from '../controllers/property.controller';
import { checkValidators } from '../middleware/checkValidators.middleware';
import { propertyValidations } from '../validators/property.validator';
// import { createPropertyValidator } from '../validators/property.validator';

const router = Router();

/**
 * @swagger
 * /all:
 *   post:
 *     summary: Récupère toutes les propriétés avec un filtre optionnel
 *     tags:
 *       - Properties
 *     requestBody:
 *       required: false
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               filter:
 *                 type: object
 *                 description: Critères de filtrage
 *                 example: { ownerId: "42" }
 *     responses:
 *       200:
 *         description: Liste des propriétés récupérées
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/PropertyResponse"
 */
router.post('/all', PropertyController.getAllProperties);

/**
 * @swagger
 * /{id}:
 *   get:
 *     summary: Récupère une propriété spécifique par ID
 *     tags:
 *       - Properties
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *         description: ID de la propriété
 *     responses:
 *       200:
 *         description: Propriété trouvée
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/PropertyResponse"
 *       404:
 *         description: Prisma error (e.g., email not found).
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/PrismaErrorApiResponse'
 */
router.get('/:id', PropertyController.getPropertyById);

/**
 * @swagger
 * /create:
 *   post:
 *     summary: Crée une nouvelle propriété
 *     tags:
 *       - Properties
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schemas/Property"
 *     responses:
 *       201:
 *         description: Propriété créée
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/PropertyResponse"
 */
router.post('/create', propertyValidations, checkValidators , PropertyController.createProperty);


/**
 * @swagger
 * /update:
 *   put:
 *     summary: Met à jour une propriété existante
 *     tags:
 *       - Properties
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schemas/Property"
 *     responses:
 *       200:
 *         description: Propriété mise à jour
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/PropertyResponse"
 */
router.put('/update', propertyValidations, checkValidators , PropertyController.updateProperty);

/**
 * @swagger
 * /delete:
 *   delete:
 *     summary: Supprime une propriété par ID
 *     tags:
 *       - Properties
 *     parameters:
 *       - name: id
 *         in: query
 *         required: true
 *         schema:
 *           type: string
 *         description: ID de la propriété à supprimer
 *     responses:
 *       200:
 *         description: Propriété supprimée
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/ApiResponse"
 */
router.delete('/delete', PropertyController.deleteProperty);

/**
 * @swagger
 * /delete/all:
 *   delete:
 *     summary: Supprime toutes les propriétés d'un propriétaire
 *     tags:
 *       - Properties
 *     parameters:
 *       - name: ownerId
 *         in: query
 *         required: true
 *         schema:
 *           type: string
 *         description: ID du propriétaire
 *     responses:
 *       200:
 *         description: Toutes les propriétés supprimées
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/ApiResponse"
 */
router.delete('/delete/all', PropertyController.deleteAllProperties);

export default router;