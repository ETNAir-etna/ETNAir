import { Router } from "express";
import { UserController } from "../controllers/user.controller";
import { checkValidators } from "../middleware/checkValidators.middleware";
import { editUser } from "../validators/user.validator";

const router = Router();

router.get("/all", UserController.getUsers);

router.get("/:id", UserController.getUser);

router.put("/update", UserController.updateUser);

router.delete("/:id", UserController.deleteUser);

export default router;
