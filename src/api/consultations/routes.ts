import { Router } from "express";
import { ConsultationsController } from "./controller";
import { ConsultationRepository } from "./repository";
import { MedicationRepository } from "../medications/repository";
import { DoctorRepository } from "../doctors/repository";
import { UserRepository } from "../users/repository";


const router = Router();
const consultationController = new ConsultationsController(new ConsultationRepository, new DoctorRepository, new UserRepository, new MedicationRepository);

router.post('/', consultationController.createConsultation.bind(consultationController));
router.get('/:identificationNumber', consultationController.getConsultationsById.bind(consultationController));

export default router;