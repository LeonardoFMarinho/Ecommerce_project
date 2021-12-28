import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateProduct1640631244835 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "products",
        columns: [
          {
            name: "productid",
            type: "uuid",
          },
          {
            name: "name",
            type: "varchar",
          },
          {
            name: "price",
            type: "varchar",
          },
          {
            name: "quantity",
            type: "varchar",
          },
          {
            name: "created_at",
            type: "timestamp",
            default: "now()",
          },
          {
            name: "updated_at",
            type: "timestamp",
            default: "now()",
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("products");
  }
}
