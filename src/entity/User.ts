import {Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, PrimaryColumn} from "typeorm";


@Entity()
export class User {

    @PrimaryColumn()
    identification_number!: number;

    @Column()
    first_name!: string;

    @Column()
    second_name!: string;

    @Column()
    last_name!: string;

    @Column()
    second_lastname!: string;

    @Column()
    date_birth!: Date;

    @Column()
    email!: string;

    @Column()
    phone!: string;

    @Column()
    cellphone!: string;

    @Column()
    gender!: string;

    @Column()
    username!: string;

    @Column()
    password!: string;
}