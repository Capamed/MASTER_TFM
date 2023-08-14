import { NotFound } from "http-errors";
import { DatabaseRepository, Id, Query } from "../../commons/declarations";
import { Users } from "../../entity/Users";
import database from "../../config/database";


export class UserRepository implements DatabaseRepository<Users>{
    create(data: Partial<Users>, query?: Query | undefined): Promise<Users> {
        throw new Error("Method not implemented.");
    }
    async list(query?: Query | undefined): Promise<Users[]> {
        const repository = database.getRepository(Users);
        return repository.find({
            relations: {
                consultationsUsers: {
                    doctor: true,
                    medication: true
                },
            },
        });
    }
    getById(id: Id, query?: Query | undefined): Promise<Users> {
        throw new Error("Method not implemented.");
    }
    updateById(id: Id, data: Users, query?: Query | undefined): Promise<Users> {
        throw new Error("Method not implemented.");
    }
    deleteById(id: Id, query?: Query | undefined): Promise<Users> {
        throw new Error("Method not implemented.");
    }
}