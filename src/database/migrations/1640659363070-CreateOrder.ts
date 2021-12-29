import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from "typeorm";
import { QueryExpressionMap } from "typeorm/query-builder/QueryExpressionMap";

import { Products } from "../../entities/products";

export class CreateOrder1640659363070 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "orders",
        columns: [
          {
            name: "id",
            type: "uuid",
          },
          {
            name: "customerId",
            type: "varchar",
          },
          {
            name: "totalprice",
            type: "numeric",
          },
          {
            name: "products",
            type: "numeric",
          },
          // {
          //   name: "quantity",
          //   type: "numeric",
          // },
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

    // await queryRunner.createForeignKey(
    //   "orders",
    //   new TableForeignKey({
    //     name: "FKproductid",
    //     referencedTableName: "products",
    //     referencedColumnNames: ["productid"],
    //     columnNames: ["products"],
    //     onDelete: "SET NULL",
    //     onUpdate: "SET NULL",
    //   }),
    // );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("orders");
  }
}
