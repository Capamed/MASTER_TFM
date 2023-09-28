import { DatabaseRepository } from "../../commons/declarations";
import { Request, Response, NextFunction } from 'express';
import { Medications } from "../../entity/Medications";

export class MedicationsController {

    constructor(private repository: DatabaseRepository<Medications>) { }

    async getMedications(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const getMedications = await this.repository.list();
            res.status(200).json(getMedications);
        } catch (error) {
            res.status(500).json({ error: "Internal Server Error" });
            next(error);
        }
    }
}