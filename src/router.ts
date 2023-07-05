import { Router } from "express";
import { StudentController } from "./controllers/StudentController";
import { GradeCrontroller } from "./controllers/GradeController";

const routes = Router()

routes.post('/student', new StudentController().create) //Problema para registrar 'Grade' na chave estrangeira
routes.post('/grade', new GradeCrontroller().create)

routes.get('/students', new StudentController().list)
routes.get('/grades', new GradeCrontroller().list)


export default routes 
