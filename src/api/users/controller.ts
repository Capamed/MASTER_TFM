import { DatabaseRepository } from "../../commons/declarations";
import { Users } from "../../entity/Users";
import {Request, Response, NextFunction} from 'express';

export class UsersController {

    constructor(private repository: DatabaseRepository<Users>) { }

    async getUsers(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const getUsers = await this.repository.list();
            res.status(200).json(getUsers);
        } catch (error) {
            res.status(500).json({ error: "Internal Server Error" });
            next(error);
        }
    }
}