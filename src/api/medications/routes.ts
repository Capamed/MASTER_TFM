import { Router } from "express";
import { MedicationsController } from "./controller";
import { MedicationRepository } from "./repository";

const router = Router();
const medicationController = new MedicationsController(new MedicationRepository);

router.get('/', medicationController.getMedications.bind(medicationController));
router.get('/getMedication/:nameMedication', medicationController.getMedicationsByidVuforia.bind(medicationController));

export default router;