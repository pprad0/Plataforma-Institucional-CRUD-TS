import { Request, Response } from "express";
import { StudentRepository } from "../repositories/StudentRepository";

export class StudentController {

    async create(req: Request, res: Response) {

        const { name, age, grade_id } = req.body

        if (!name || !age) {
            return res.status(400).json({ mensagem: "Informe os campos 'name' e 'age'." })
        }

        try {
            const newStudent = StudentRepository.create({ name, age })
            await StudentRepository.save(newStudent)

            return res.status(201).json(newStudent)

        } catch (error) {
            return res.status(500).json({ mensagem: 'Erro interno do servidor.' })
        }
    }
}