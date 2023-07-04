import { appDataSource } from "../data-source";
import { Student } from "../entities/Student";

export const StudentRepository = appDataSource.getRepository(Student)