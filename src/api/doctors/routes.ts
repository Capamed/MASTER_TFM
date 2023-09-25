import { Router } from "express";
import { DoctorsController } from "./controller";
import { DoctorRepository } from "./repository";

const router = Router();
const userController = new DoctorsController(new DoctorRepository);

router.get('/', userController.getDoctors.bind(userController));

export default router;