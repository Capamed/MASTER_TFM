import { Entity, Column, PrimaryColumn, OneToMany } from "typeorm";
import { Consultations } from "./Consultations";

@Entity({ name: "DOCTORS" })
export class Doctors {

    @PrimaryColumn({ name: "IDENTIFICATION_NUMBER" })
    identificationNumber!: string;

    @Column({ name: "NAME" })   
    nameDoctor!: string;

    @Column({ name: "PHOTO" })
    photo!: string;

    @OneToMany(() => Consultations, (consultation) => consultation.doctor) // note: we will create author property in the Photo class below
    consultationsDoctors!: Consultations[]
}