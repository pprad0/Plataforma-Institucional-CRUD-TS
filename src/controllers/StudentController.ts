import { Request, Response } from "express";
import { StudentRepository } from "../repositories/StudentRepository";

export class StudentController {

    async create(req: Request, res: Response) {

        const { name, age, grade_id } = req.body

        if (!name || !age || !grade_id) {
            return res.status(400).json({ mensagem: "Informe os campos 'name', 'age' e 'grade_id." })
        }

        try {
            const newStudent = StudentRepository.create({ name, age, id: grade_id })
            await StudentRepository.save(newStudent)

            return res.status(201).json(newStudent)

        } catch (error) {
            return res.status(500).json({ mensagem: 'Erro interno do servidor.' })
        }
    }

    async list(req: Request, res: Response) {
        try {
            const Students = await StudentRepository.find()

            return res.status(200).json({ Students })

        } catch (error) {
            return res.status(500).json({ mensagem: 'Erro interno do servidor.' })
        }
    }
}