import { inject, injectable } from "tsyringe";

import { Order } from "../../entities/orders";
import { IOrderRepository } from "../../repository/IOrderRepository";

@injectable()
class ListOrderUseCase {
  constructor(
    @inject("OrderRepository")
    private oderderRepository: IOrderRepository,
  ) {}
  async execute(): Promise<Order[]> {
    const listOrders = await this.oderderRepository.listByOrderTotalPrice();
    return listOrders;
  }
}

export { ListOrderUseCase };
