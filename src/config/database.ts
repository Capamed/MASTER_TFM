import { DataSource } from "typeorm"
import { Users } from "../entity/Users";
import { Doctors } from "../entity/Doctors";
import { Medications } from "../entity/Medications";
import { Consultations } from "../entity/Consultations";

export default new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "root",
    database: "master_db",
    entities: [Users, Doctors, Medications, Consultations],
    synchronize: false,
    logging: false
});


