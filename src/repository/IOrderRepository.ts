import { ICreateOrderDTO } from "../dtos/ICreateOrderDTO";
import { Order } from "../entities/orders";

interface IOrderRepository {
  create({ products, customerId, totalprice }): Promise<Order>;
  listByOrderTotalPrice(): Promise<Order[]>;
}
export { IOrderRepository };
