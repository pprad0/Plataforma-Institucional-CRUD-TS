import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Student } from "./Student";


@Entity("grades")
export class Grade {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ type: 'text' })
    grade: string


    @Column({ type: 'text', nullable: true })
    description: string


    @OneToMany(() => Student, student => student.grades)
    student: Student


}