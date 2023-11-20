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
            objConsultations.symbol = 'H';
            objConsultations.status = '1';
            const consultation = await this.repository.create(objConsultations);
            res.status(200).json({code:200,data:consultation.consultationId});
        } catch (error) {
            res.status(500).json({code:500,data:"Internal Server Error"});
            next(error);
        }
    }


    async getConsultationsById(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const { identificationNumber } = req.params;
            const getConsultations = await this.repository.listById(identificationNumber);
            res.status(200).json(getConsultations);
        } catch (error) {
            res.status(500).json({ error: "Internal Server Error" });
            next(error);
        }
    }

    async getConsultationByIdAndMedication(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const queryParams: any = req.query;
            const id = queryParams.identificationNumber;
            const medication = queryParams.medication;
            console.log(queryParams);
            const getConsultations = await this.repository.getOneRegisterByTwoConditions(id,medication);
            res.status(200).json(getConsultations);
        } catch (error) {
            res.status(500).json({ error: "Internal Server Error" });
            next(error);
        }
    }

    async updateInformationConsultations(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const { consultationId } = req.params;
            const objUpdateConsultations = req.body;
            const objConsultations = new Consultations();
            objConsultations.consultationId = parseInt(consultationId);
            objConsultations.schedule = objUpdateConsultations.schedule;
            objConsultations.observation = objUpdateConsultations.observation;
            objConsultations.status = '1';
            const getConsultations = await this.repository.updateById(consultationId, objConsultations);
            res.status(200).json(getConsultations);
        } catch (error) {
            res.status(500).json({ error: "Internal Server Error" });
            next(error);
        }
    }

    async deleteOneConsultationById(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const { consultationId } = req.params;
            await this.repository.deleteById(consultationId);
            res.status(200).json('true');
        } catch (error) {
            res.status(500).json({ error: "Internal Server Error" });
            next(error);
        }
    }

    async updateStateConsultation(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const { consultationId } = req.params;
            const objConsultations = new Consultations();
            objConsultations.consultationId = parseInt(consultationId);
            objConsultations.status = '0';
            const getConsultations = await this.repository.updateById(consultationId, objConsultations);
            res.status(200).json(getConsultations);
        } catch (error) {
            res.status(500).json({ error: "Internal Server Error" });
            next(error);
        }
    }
}
