import { Router } from "express";
import { UserController } from "../controllers/user.controller";
import { checkValidators } from "../middleware/checkValidators.middleware";
import { editUser } from "../validators/user.validator";
import { checkRole } from "../middleware/checkRole";

const router = Router();

router.get("/all", UserController.getUsers);

router.get("/:id", UserController.getUser);

router.put("/update/:id", editUser, checkValidators, UserController.updateUser);

router.delete("/:id", checkRole(['ADMIN']), UserController.deleteUser);

export default router;
