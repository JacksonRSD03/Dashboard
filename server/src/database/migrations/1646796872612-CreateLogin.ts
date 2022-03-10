import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateLogin1646796872612 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"')
        await queryRunner.createTable(
            new Table({
                name: 'users',
                columns: [
                    {
                        name:'id',
                        type: 'uuid',
                        isPrimary: true,
                        generationStrategy: 'uuid',
                        default: 'uuid_generate_v4()'
                        
                        
                    },
                    {
                        name: 'cpf',
                        type: 'varchar(200)',
                        isUnique: true
                    },
                    {
                        name: 'password',
                        type: 'varchar'

                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('users')
        await queryRunner.query('DROP EXTENSION "uuid-ossp"')
    }

}
