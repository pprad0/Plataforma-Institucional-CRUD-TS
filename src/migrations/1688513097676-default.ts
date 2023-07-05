import { MigrationInterface, QueryRunner } from "typeorm";

export class default1688513097676 implements MigrationInterface {
    name = 'default1688513097676'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "students" DROP CONSTRAINT "FK_b897d4f53136c467a0bb790b54d"`);
        await queryRunner.query(`ALTER TABLE "students" RENAME COLUMN "gradeId" TO "grade_id"`);
        await queryRunner.query(`ALTER TABLE "students" ADD CONSTRAINT "FK_beeea37708310f584621c6338e7" FOREIGN KEY ("grade_id") REFERENCES "grades"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "students" DROP CONSTRAINT "FK_beeea37708310f584621c6338e7"`);
        await queryRunner.query(`ALTER TABLE "students" RENAME COLUMN "grade_id" TO "gradeId"`);
        await queryRunner.query(`ALTER TABLE "students" ADD CONSTRAINT "FK_b897d4f53136c467a0bb790b54d" FOREIGN KEY ("gradeId") REFERENCES "grades"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
