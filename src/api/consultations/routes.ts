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
router.post('/edit/:consultationId', consultationController.updateInformationConsultations.bind(consultationController));
router.delete('/:consultationId', consultationController.deleteOneConsultationById.bind(consultationController));
router.get('/updateState/:consultationId', consultationController.updateStateConsultation.bind(consultationController));
router.get('/getOneRegister/consultation', consultationController.getConsultationByIdAndMedication.bind(consultationController));
router.get('/updateStateByState/state/id', consultationController.updateStateConsultationByState.bind(consultationController));
export default router;