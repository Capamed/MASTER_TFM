import { DatabaseRepository, Id, Query } from "../../commons/declarations";
import { Consultations } from "../../entity/Consultations";
import database from "../../config/database";
import { NotFound } from "http-errors";


export class ConsultationRepository implements DatabaseRepository<Consultations>{
    async listById(id: Id, query?: Query | undefined): Promise<Consultations[]> {
        const repository = database.getRepository(Consultations);
        return repository.find({
            where: {
                identificationNumberUser: id as any
            }, relations: {
                medication: true,
                doctor: true
            }
        });
    }
    getByIdWithoutRelations(id: Id, query?: Query | undefined): Promise<Consultations> {
        throw new Error("Method not implemented.");
    }

    async getById(id: Id, query?: Query | undefined): Promise<Consultations> {
        const repository = database.getRepository(Consultations);
        const consultationById = await repository.findOneBy({ consultationId: parseInt(id.toString()) });
        if (!consultationById) {
            throw new NotFound("Consultarion does not exist");
        }
        return consultationById;
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

    async updateById(id: Id, data: Consultations, query?: Query | undefined): Promise<Consultations> {
        const repository = database.getRepository(Consultations);
        await repository.update(id, data);
        return data;
    }
    deleteById(id: Id, query?: Query | undefined): Promise<Consultations> {
        throw new Error("Method not implemented.");
    }
}