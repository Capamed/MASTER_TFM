import { DataSource } from "typeorm"
import { User } from "../entity/User";

export default new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "root",
    database: "master_db",
    entities: [User],
    synchronize: true,
    logging: false
});

/*import {createPool} from 'mysql2'

export const conn = createPool({
    host: 'localhost',
    user: 'root',
    password: 'root',
    port: 3306,
    database: 'master_db' 
})*/
