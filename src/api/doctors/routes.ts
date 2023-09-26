import { Router } from "express";
import { DoctorsController } from "./controller";
import { DoctorRepository } from "./repository";

const router = Router();
const doctorController = new DoctorsController(new DoctorRepository);

router.get('/', doctorController.getDoctors.bind(doctorController));

export default router;