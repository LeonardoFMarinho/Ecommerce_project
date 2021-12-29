import { getManager, getRepository, Repository } from "typeorm";

import { ICreateOrderDTO } from "../../dtos/ICreateOrderDTO";
import { Order } from "../../entities/orders";
import { IOrderRepository } from "../IOrderRepository";

class OrderRepository implements IOrderRepository {
  private repository: Repository<Order>;
  repositoryManager = getManager();

  constructor() {
    this.repository = getRepository(Order);
  }

  async create({
    products,
    customerId,
    price,
    totalprice,
  }: ICreateOrderDTO): Promise<Order> {
    const order = this.repository.create({
      products,
      customerId,
      price,
      totalprice,
    });
    console.log(order);
    await this.repository.save(order);
    return order;
  }

  // listOrders({ customerId }): Promise<Order[]> {
  //   const allOrders = this.repository.find({ customerId });
  //   return allOrders;
  // }
  async listByOrderTotalPrice(): Promise<Order[]> {
    const orderByTotalPrice = await this.repositoryManager.query(
      `SELECT * FROM orders ORDER BY totalprice `,
    );
    return orderByTotalPrice;
  }
}

export { OrderRepository };
