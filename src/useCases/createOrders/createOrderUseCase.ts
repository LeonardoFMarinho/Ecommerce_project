import { inject, injectable } from "tsyringe";

import { IOrderRepository } from "../../repository/IOrderRepository";

@injectable()
class CreateOrderUseCase {
  constructor(
    @inject("OrderRepository")
    private createorderRepository: IOrderRepository,
  ) {}
  async execute({ products, customerId, totalprice }) {
    const orderCreated = await this.createorderRepository.create({
      products,
      customerId,
      totalprice,
    });
    return orderCreated;
  }
}

export { CreateOrderUseCase };
