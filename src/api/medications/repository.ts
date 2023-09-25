import { DatabaseRepository, Id, Query } from "../../commons/declarations";
import { Medications } from "../../entity/Medications";
import database from "../../config/database";

export class MedicationRepository implements DatabaseRepository<Medications>{
    getById(id: Id, query?: Query | undefined): Promise<Medications> {
        throw new Error("Method not implemented.");
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