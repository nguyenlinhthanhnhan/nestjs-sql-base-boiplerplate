import { MigrationInterface, QueryRunner } from "typeorm";

export class InitDatabase1681706993359 implements MigrationInterface {
    name = 'InitDatabase1681706993359'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "users" ("id" SERIAL NOT NULL, "username" character varying(200) NOT NULL, "password" text NOT NULL, "email" character varying(200), "refresh_token" text, CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "users"`);
    }

}
