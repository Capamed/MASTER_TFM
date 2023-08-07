import { DatabaseRepository, Id, Query } from "../../commons/declarations";
import { User } from "../../entity/User";
import database from "../../config/database";

export class UserRepository implements DatabaseRepository<User>{
    create(data: Partial<User>, query?: Query | undefined): Promise<User> {
        throw new Error("Method not implemented.");
    }
    async list(query?: Query | undefined): Promise<User[]> {
        const repository = database.getRepository(User)
        return repository.find();
    }
    getById(id: Id, query?: Query | undefined): Promise<User> {
        throw new Error("Method not implemented.");
    }
    updateById(id: Id, data: User, query?: Query | undefined): Promise<User> {
        throw new Error("Method not implemented.");
    }
    deleteById(id: Id, query?: Query | undefined): Promise<User> {
        throw new Error("Method not implemented.");
    }
}