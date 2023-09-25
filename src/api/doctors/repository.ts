import { DatabaseRepository, Id, Query } from "../../commons/declarations";
import { Doctors } from "../../entity/Doctors";
import database from "../../config/database";



export class DoctorRepository implements DatabaseRepository<Doctors>{
    getById(id: Id, query?: Query | undefined): Promise<Doctors> {
        throw new Error("Method not implemented.");
    }
    validateUser(username: String, password: String): Promise<Doctors> {
        throw new Error("Method not implemented.");
    }

    create(data: Partial<Doctors>, query?: Query | undefined): Promise<Doctors> {
        throw new Error("Method not implemented.");
    }

    async list(query?: Query | undefined): Promise<Doctors[]> {
        const repository = database.getRepository(Doctors);
        return repository.find();
    }
  
    updateById(id: Id, data: Doctors, query?: Query | undefined): Promise<Doctors> {
        throw new Error("Method not implemented.");
    }
    deleteById(id: Id, query?: Query | undefined): Promise<Doctors> {
        throw new Error("Method not implemented.");
    }
}