import { DatabaseRepository } from "../../commons/declarations";
import { Request, Response, NextFunction } from 'express';
import { Consultations } from "../../entity/Consultations";
import { Doctors } from "../../entity/Doctors";
import { Users } from "../../entity/Users";
import { Medications } from "../../entity/Medications";

export class ConsultationsController {

    constructor(private repository: DatabaseRepository<Consultations>,
        private repositoryDoctors: DatabaseRepository<Doctors>,
        private repositoryUsers: DatabaseRepository<Users>,
        private repositoryMedications: DatabaseRepository<Medications>,
    ) { }

    async createConsultation(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const objConsultations = new Consultations();

            const medication = await this.repositoryMedications.getById(req.body.medicationId);
            objConsultations.medication = medication;

            const doctor = await this.repositoryDoctors.getById(req.body.identificacionNumberDoctor);
            objConsultations.doctor = doctor;

            const user = await this.repositoryUsers.getByIdWithoutRelations(req.body.identificationNumber);
            objConsultations.user = user;

            objConsultations.observation = req.body.observation;
            objConsultations.schedule = req.body.schedule;
            objConsultations.symbol = req.body.symbol;
            objConsultations.status = '0';
            const consultation = await this.repository.create(objConsultations);
            res.status(200).json(consultation);
        } catch (error) {
            res.status(500).json({ error: "Internal Server Error" });
            next(error);
        }
    }
}
