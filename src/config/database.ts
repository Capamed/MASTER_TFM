import { DataSource } from "typeorm"
import { Users } from "../entity/Users";

export default new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "root",
    database: "master_db",
    entities: [Users],
    synchronize: false,
    logging: false
});


