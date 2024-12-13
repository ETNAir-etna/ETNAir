import { Router } from "express";
import { UserController } from "../controllers/user.controller";

const router = Router();

router.get("/all", UserController.getUsers);

router.get("/:id", UserController.getUser);

router.put("/:id", UserController.updateUser);

router.delete("/:id", UserController.deleteUser);

//router.post('/', UserController.addUser)

export default router;
