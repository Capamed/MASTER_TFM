import { Router } from "express";
import { UsersController } from "./controller";
import { UserRepository } from "./repository";

const router = Router();
const userController = new UsersController(new UserRepository);

router.get('/', userController.getUsers.bind(userController));
//router.post('/', postUsers);
//router.put('/', putUsers);
//router.delete('/', deleteUsers);

export default router;