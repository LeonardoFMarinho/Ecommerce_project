import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuidv4 } from "uuid";

@Entity("orders")
class Order {
  @PrimaryColumn()
  id?: string;

  @Column()
  customerId: string;

  @Column()
  totalprice: string;

  @Column()
  products: string;

  // @Column()
  // quantity: string;

  @CreateDateColumn()
  created_at: Date;

  @CreateDateColumn()
  updated_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidv4();
    }
  }
}
export { Order };
