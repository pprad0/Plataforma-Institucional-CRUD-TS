import { appDataSource } from "../data-source";
import { Grade } from "../entities/Grade";

export const GradeRepository = appDataSource.getRepository(Grade)