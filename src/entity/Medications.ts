import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { Consultations } from "./Consultations";

@Entity({ name: "MEDICATIONS" })
export class Medications {

    @PrimaryGeneratedColumn({ name: "MEDICATION_ID" })
    medicationId!: number;

    @Column({ name: "NAME" })   
    nameMedication!: string;
    
    @Column({ name: "AMOUNT" })   
    amount!: string;

    @Column({ name: "PHOTO"})
    photo!: Buffer;
    
    @Column({ name: "ID_VUFORIA"})
    idVuforia!: Buffer;

    @OneToMany(() => Consultations, (consultation) => consultation.medication) // note: we will create author property in the Photo class below
    consultationsMedications!: Consultations[]
}