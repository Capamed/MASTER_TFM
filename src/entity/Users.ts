import { Entity, Column, PrimaryColumn, OneToMany } from "typeorm";
import { Consultations } from "./Consultations";

@Entity({ name: "USERS" })
export class Users {

    @PrimaryColumn({ name: "IDENTIFICATION_NUMBER" })
    identificationNumber!: string;

    @Column({ name: "FIRST_NAME" })
    firsName!: string;

    @Column({ name: "SECOND_NAME" })
    secondName!: string;

    @Column({ name: "LAST_NAME" })
    lastName!: string;

    @Column({ name: "SECOND_LASTNAME" })
    secondLastName!: string;

    @Column({ name: "DATE_BIRTH" })
    dateBirth!: Date;

    @Column({ name: "EMAIL" })
    email!: string;

    @Column({ name: "PHONE" })
    phone!: string;

    @Column({ name: "CELLPHONE" })
    cellphone!: string;

    @Column({ name: "GENDER" })
    gender!: string;

    @Column({ name: "USERNAME" })
    username!: string;

    @Column({ name: "PASSWORD" })
    password!: string;

    @Column({ name: "PHOTO"})
    photo!: string;

    @OneToMany(() => Consultations, (consultation) => consultation.user) // note: we will create author property in the Photo class below
    consultationsUsers!: Consultations[]
}