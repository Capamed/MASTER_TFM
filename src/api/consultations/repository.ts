import { DatabaseRepository, Id, Query } from "../../commons/declarations";
import { Consultations } from "../../entity/Consultations";
import database from "../../config/database";



export class ConsultationRepository implements DatabaseRepository<Consultations>{
    getByIdWithoutRelations(id: Id, query?: Query | undefined): Promise<Consultations> {
        throw new Error("Method not implemented.");
    }
    getById(id: Id, query?: Query | undefined): Promise<Consultations> {
        throw new Error("Method not implemented.");
    }
    validateUser(username: String, password: String): Promise<Consultations> {
        throw new Error("Method not implemented.");
    }

    async create(data: Partial<Consultations>, query?: Query | undefined): Promise<Consultations> {
        const repository = database.getRepository(Consultations);
        return repository.save(data);
    }

    async list(query?: Query | undefined): Promise<Consultations[]> {
        const repository = database.getRepository(Consultations);
        return repository.find();
    }
  
    updateById(id: Id, data: Consultations, query?: Query | undefined): Promise<Consultations> {
        throw new Error("Method not implemented.");
    }
    deleteById(id: Id, query?: Query | undefined): Promise<Consultations> {
        throw new Error("Method not implemented.");
    }
}