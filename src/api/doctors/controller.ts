import { DatabaseRepository } from "../../commons/declarations";
import { Request, Response, NextFunction } from 'express';
import { Doctors } from "../../entity/Doctors";

export class DoctorsController {

    constructor(private repository: DatabaseRepository<Doctors>) { }

    async getDoctors(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const getDoctors = await this.repository.list();
            res.status(200).json(getDoctors);
        } catch (error) {
            res.status(500).json({ error: "Internal Server Error" });
            next(error);
        }
    }
}