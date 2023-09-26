import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from "typeorm";
import { Medications } from "./Medications";
import { Users } from "./Users";
import { Doctors } from "./Doctors";

@Entity({ name: "CONSULTATIONS" })
export class Consultations {

    @PrimaryGeneratedColumn({ name: "CONSULTATION_ID" })
    consultationId!: number;

    @ManyToOne(() => Medications, (medication) => medication.consultationsMedications)
    @JoinColumn({ name: 'MEDICATION_ID' }) // Clave foránea personalizada
    medication!: Medications

    @ManyToOne(() => Users, (user) => user.consultationsUsers)
    @JoinColumn({ name: 'IDENTIFICATION_NUMBER_USER' }) // Clave foránea personalizada
    user!: Users

    @ManyToOne(() => Doctors, (doctor) => doctor.consultationsDoctors)
    @JoinColumn({ name: 'IDENTIFICATION_NUMBER_DOCTOR' }) // Clave foránea personalizada
    doctor!: Doctors

    @Column({ name: "SCHEDULE" })
    schedule!: number;

    @Column({ name: "OBSERVATION" })
    observation!: number;

    @Column({ name: "SYMBOL" })
    symbol!: string;

    @Column({ name: "STATUS" })
    status!: string;

    @Column({ name: "IDENTIFICATION_NUMBER_USER" })
    identificationNumberUser!: string;
}