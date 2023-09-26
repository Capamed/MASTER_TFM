import { DatabaseRepository, Id, Query } from "../../commons/declarations";
import { Doctors } from "../../entity/Doctors";
import database from "../../config/database";
import { NotFound } from "http-errors";


export class DoctorRepository implements DatabaseRepository<Doctors>{
    getByIdWithoutRelations(id: Id, query?: Query | undefined): Promise<Doctors> {
        throw new Error("Method not implemented.");
    }
    async getById(id: Id, query?: Query | undefined): Promise<Doctors> {
        const repository = database.getRepository(Doctors);
        const medication = repository.findOne({
            where: {
                identificationNumber: id as any
            }
        });
        if (!medication) {
            throw new NotFound("Doctor does not exist");
        }
        return medication as any;
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