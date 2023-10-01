import { DatabaseRepository, Id, Query } from "../../commons/declarations";
import { Medications } from "../../entity/Medications";
import database from "../../config/database";
import { NotFound } from "http-errors";

export class MedicationRepository implements DatabaseRepository<Medications>{
    getOneRegisterByTwoConditions(id: String, medication: number): Promise<Medications> {
        throw new Error("Method not implemented.");
    }
    listById(id: Id, query?: Query | undefined): Promise<Medications[]> {
        throw new Error("Method not implemented.");
    }

    async getByIdWithoutRelations(id: Id, query?: Query | undefined): Promise<Medications> {
        const parts = id.toString().split("_");
        const onlyName = parts[1];
        const repository = database.getRepository(Medications);
        const consultationByIdVuforia = repository.findOneBy({
            nameMedication: onlyName as any
        })

    
        if (!consultationByIdVuforia) {
            throw new NotFound("Medication does not exist");
        }
        return consultationByIdVuforia as any;
    }
    async getById(id: Id, query?: Query | undefined): Promise<Medications> {
        const repository = database.getRepository(Medications);
        const medication = repository.findOne({
            where: {
                medicationId: id as any
            }
        });
        if (!medication) {
            throw new NotFound("Medication does not exist");
        }
        return medication as any;
    }
    validateUser(username: String, password: String): Promise<Medications> {
        throw new Error("Method not implemented.");
    }

    create(data: Partial<Medications>, query?: Query | undefined): Promise<Medications> {
        throw new Error("Method not implemented.");
    }

    async list(query?: Query | undefined): Promise<Medications[]> {
        const repository = database.getRepository(Medications);
        return repository.find();
    }

    updateById(id: Id, data: Medications, query?: Query | undefined): Promise<Medications> {
        throw new Error("Method not implemented.");
    }
    deleteById(id: Id, query?: Query | undefined) {
        throw new Error("Method not implemented.");
    }
}