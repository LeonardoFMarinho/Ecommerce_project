import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToOne,
  PrimaryColumn,
} from "typeorm";
import { v4 as uuidv4 } from "uuid";

@Entity("products")
class Products {
  @PrimaryColumn()
  productid?: string;

  @Column()
  name: string;

  @Column()
  price: string;

  @Column()
  quantity: string;

  @CreateDateColumn()
  created_at: Date;

  @CreateDateColumn()
  updated_at: Date;

  constructor() {
    if (!this.productid) {
      this.productid = uuidv4();
    }
  }
}
export { Products };
