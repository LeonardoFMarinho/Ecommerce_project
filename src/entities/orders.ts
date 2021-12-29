import {
  Column,
  CreateDateColumn,
  Double,
  Entity,
  JoinColumn,
  OneToMany,
  PrimaryColumn,
} from "typeorm";
import { v4 as uuidv4 } from "uuid";

import { Products } from "./products";

@Entity("orders")
class Order {
  @PrimaryColumn()
  id?: string;

  @Column()
  customerId: string;

  @Column("int")
  totalprice: number;

  @OneToMany(type => Products, order => Order)
  products: Products[];
  // @Column()
  // quantity: number;

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
