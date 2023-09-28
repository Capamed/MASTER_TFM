import { DatabaseRepository, Id, Query } from "../../commons/declarations";
import { Medications } from "../../entity/Medications";
import database from "../../config/database";
import { NotFound } from "http-errors";

export class MedicationRepository implements DatabaseRepository<Medications>{
    listById(id: Id, query?: Query | undefined): Promise<Medications[]> {
        throw new Error("Method not implemented.");
    }
    getByIdWithoutRelations(id: Id, query?: Query | undefined): Promise<Medications> {
        throw new Error("Method not implemented.");
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
    deleteById(id: Id, query?: Query | undefined): Promise<Medications> {
        throw new Error("Method not implemented.");
    }
}