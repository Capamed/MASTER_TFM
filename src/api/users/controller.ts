import { DatabaseRepository } from "../../commons/declarations";
import { User } from "../../entity/User";
import {Request, Response, NextFunction} from 'express';

export class UsersController {

    constructor(private repository: DatabaseRepository<User>) { }

    async getUsers(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const getUsers = this.repository.list();
            res.status(200).json(getUsers);
        } catch (error) {
            next(error);
        }
    }
}