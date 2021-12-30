import { MigrationInterface, QueryRunner } from "typeorm";

export default class RelationsUpdated1640883592068
  implements MigrationInterface
{
  name = "RelationsUpdated1640883592068";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "orders" DROP COLUMN "products"`);
    await queryRunner.query(
      `ALTER TABLE "products" ADD "orderId" character varying`,
    );
    await queryRunner.query(
      `ALTER TABLE "customer" DROP CONSTRAINT "PK_a7a13f4cacb744524e44dfdad32"`,
    );
    await queryRunner.query(`ALTER TABLE "customer" DROP COLUMN "id"`);
    await queryRunner.query(
      `ALTER TABLE "customer" ADD "id" character varying NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "customer" ADD CONSTRAINT "PK_a7a13f4cacb744524e44dfdad32" PRIMARY KEY ("id")`,
    );
    await queryRunner.query(`ALTER TABLE "products" DROP COLUMN "productid"`);
    await queryRunner.query(
      `ALTER TABLE "products" ADD "productid" character varying NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "products" ADD CONSTRAINT "PK_30db402199e2667c88b7309cf15" PRIMARY KEY ("productid")`,
    );
    await queryRunner.query(`ALTER TABLE "products" DROP COLUMN "price"`);
    await queryRunner.query(
      `ALTER TABLE "products" ADD "price" integer NOT NULL`,
    );
    await queryRunner.query(`ALTER TABLE "products" DROP COLUMN "quantity"`);
    await queryRunner.query(
      `ALTER TABLE "products" ADD "quantity" integer NOT NULL`,
    );
    await queryRunner.query(`ALTER TABLE "orders" DROP COLUMN "id"`);
    await queryRunner.query(
      `ALTER TABLE "orders" ADD "id" character varying NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "orders" ADD CONSTRAINT "PK_710e2d4957aa5878dfe94e4ac2f" PRIMARY KEY ("id")`,
    );
    await queryRunner.query(`ALTER TABLE "orders" DROP COLUMN "totalprice"`);
    await queryRunner.query(
      `ALTER TABLE "orders" ADD "totalprice" integer NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "products" ADD CONSTRAINT "FK_261f1322902ba3b21cf883ccddd" FOREIGN KEY ("orderId") REFERENCES "orders"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "products" DROP CONSTRAINT "FK_261f1322902ba3b21cf883ccddd"`,
    );
    await queryRunner.query(`ALTER TABLE "orders" DROP COLUMN "totalprice"`);
    await queryRunner.query(
      `ALTER TABLE "orders" ADD "totalprice" numeric NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "orders" DROP CONSTRAINT "PK_710e2d4957aa5878dfe94e4ac2f"`,
    );
    await queryRunner.query(`ALTER TABLE "orders" DROP COLUMN "id"`);
    await queryRunner.query(`ALTER TABLE "orders" ADD "id" uuid NOT NULL`);
    await queryRunner.query(`ALTER TABLE "products" DROP COLUMN "quantity"`);
    await queryRunner.query(
      `ALTER TABLE "products" ADD "quantity" numeric NOT NULL`,
    );
    await queryRunner.query(`ALTER TABLE "products" DROP COLUMN "price"`);
    await queryRunner.query(
      `ALTER TABLE "products" ADD "price" numeric NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "products" DROP CONSTRAINT "PK_30db402199e2667c88b7309cf15"`,
    );
    await queryRunner.query(`ALTER TABLE "products" DROP COLUMN "productid"`);
    await queryRunner.query(
      `ALTER TABLE "products" ADD "productid" uuid NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "customer" DROP CONSTRAINT "PK_a7a13f4cacb744524e44dfdad32"`,
    );
    await queryRunner.query(`ALTER TABLE "customer" DROP COLUMN "id"`);
    await queryRunner.query(`ALTER TABLE "customer" ADD "id" uuid NOT NULL`);
    await queryRunner.query(
      `ALTER TABLE "customer" ADD CONSTRAINT "PK_a7a13f4cacb744524e44dfdad32" PRIMARY KEY ("id")`,
    );
    await queryRunner.query(`ALTER TABLE "products" DROP COLUMN "orderId"`);
    await queryRunner.query(
      `ALTER TABLE "orders" ADD "products" numeric NOT NULL`,
    );
  }
}
