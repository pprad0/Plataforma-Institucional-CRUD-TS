import { MigrationInterface, QueryRunner } from "typeorm";

export class default1688425569959 implements MigrationInterface {
    name = 'default1688425569959'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "grades" DROP CONSTRAINT "FK_fcfc027e4e5fb37a4372e688070"`);
        await queryRunner.query(`ALTER TABLE "grades" DROP COLUMN "studentId"`);
        await queryRunner.query(`ALTER TABLE "students" ADD "grade_id" integer`);
        await queryRunner.query(`ALTER TABLE "students" ADD CONSTRAINT "FK_beeea37708310f584621c6338e7" FOREIGN KEY ("grade_id") REFERENCES "grades"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "students" DROP CONSTRAINT "FK_beeea37708310f584621c6338e7"`);
        await queryRunner.query(`ALTER TABLE "students" DROP COLUMN "grade_id"`);
        await queryRunner.query(`ALTER TABLE "grades" ADD "studentId" integer`);
        await queryRunner.query(`ALTER TABLE "grades" ADD CONSTRAINT "FK_fcfc027e4e5fb37a4372e688070" FOREIGN KEY ("studentId") REFERENCES "students"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
