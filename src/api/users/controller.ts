import { DatabaseRepository } from "../../commons/declarations";
import { Users } from "../../entity/Users";
import { Request, Response, NextFunction } from 'express';

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

    async getUserById(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const { identificationNumber } = req.params;
            const user = await this.repository.getById(identificationNumber);

            res.status(200).json(user);
        } catch (error) {
            res.status(500).json({ error: "Internal Server Error" });
            next(error);
        }
    }

    async validateUser(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const { username,password } = req.body;
            console.log(username,password);
            
            const user = await this.repository.validateUser(username,password);
            if(user){
                res.status(200).json({user:user});
            }else{
                res.status(200).json({user:null});
            }

        } catch (error) {
            res.status(500).json({ error: "Internal Server Error" });
            next(error);
        }
    }
}