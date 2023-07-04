import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Grade } from "./Grade";

@Entity("students")
export class Student {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ type: 'text' })
    name: string

    @Column({ type: 'int' })
    age: number


    @ManyToOne(() => Grade, grades => grades.id)
    @JoinColumn({ name: 'grade_id' })
    grades: Grade[]

}