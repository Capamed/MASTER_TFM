import { NotFound } from "http-errors";
import { DatabaseRepository, Id, Query } from "../../commons/declarations";
import { Users } from "../../entity/Users";
import database from "../../config/database";


export class UserRepository implements DatabaseRepository<Users>{
    validateUser(username: String, password: String): Promise<Users> {
        const repository = database.getRepository(Users);
        const user = repository.findOne({
            where: {
                username: username as any,
                password: password as any
            }
        });
        if (!user) {
            throw new NotFound("User does not exist");
        }
        return user as any;
    }
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
    async getById(id: Id, query?: Query | undefined): Promise<Users> {
        const repository = database.getRepository(Users);
        const user = repository.findOne({
            where: {
                identificationNumber: id as any
            },
            relations: {
                consultationsUsers: {
                    doctor: true,
                    medication: true
                },
            }
        });
        if (!user) {
            throw new NotFound("User does not exist");
        }
        return user as any;
    }
    updateById(id: Id, data: Users, query?: Query | undefined): Promise<Users> {
        throw new Error("Method not implemented.");
    }
    deleteById(id: Id, query?: Query | undefined): Promise<Users> {
        throw new Error("Method not implemented.");
    }
}