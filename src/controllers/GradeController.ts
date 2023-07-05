import { Request, Response } from "express";
import { GradeRepository } from "../repositories/GradeRepository";

export class GradeCrontroller {

    async create(req: Request, res: Response) {

        const { grade, description } = req.body

        if (!description || !grade) {
            return res.status(400).json({ mensagem: "Informe os campos 'grade' e 'description'." })
        }

        try {
            const newGrade = GradeRepository.create({ grade, description })
            await GradeRepository.save(newGrade)

            return res.status(201).json(newGrade)

        } catch (error) {
            return res.status(500).json({ mensagem: 'Erro interno do servidor.' })
        }
    }


    async list(req: Request, res: Response) {
        try {
            const Grades = await GradeRepository.find()

            return res.status(200).json({ Grades })

        } catch (error) {
            return res.status(500).json({ mensagem: 'Erro interno do servidor.' })
        }
    }
}
