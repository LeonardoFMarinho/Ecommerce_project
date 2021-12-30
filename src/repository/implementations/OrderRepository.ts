import { getManager, getRepository, Repository } from "typeorm";

import { ICreateOrderDTO } from "../../dtos/ICreateOrderDTO";
import { Order } from "../../entities/orders";
import { Products } from "../../entities/products";
import { IOrderRepository } from "../IOrderRepository";

interface IRequest {
  product: Products;
}
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
    await this.repository.save(order);
    return order;
  }

  // listOrders({ customerId }): Promise<Order[]> {
  //   const allOrders = this.repository.find({ customerId });
  //   return allOrders;
  // }
  async listByOrderTotalPrice(): Promise<Order[]> {
    const orderByTotalPrice = await this.repositoryManager.query(
      `SELECT totalprice, * FROM orders ORDER BY totalprice `,
    );
    return orderByTotalPrice;
  }
  async listOrderByDate({ fromDay, toDay }): Promise<Order[]> {
    console.log(fromDay);
    console.log(toDay);
    const listOrderByDate = await this.repositoryManager.query(
      `SELECT created_at, * FROM orders WHERE created_at BETWEEN '${fromDay}%' AND '${toDay}%'`,
    );
    return listOrderByDate;
  }
  async listOrderByProduct({ product }: IRequest): Promise<Order[]> {
    const idOfThisProduct = product.productid;
    console.log(idOfThisProduct);
    const listOrderProduct = await this.repositoryManager.query(
      `SELECT id FROM orders WHERE productid = ${idOfThisProduct}`,
    );
    return listOrderProduct;
  }
}

export { OrderRepository };
