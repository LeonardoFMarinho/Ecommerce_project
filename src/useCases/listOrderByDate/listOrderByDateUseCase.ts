import { inject, injectable } from "tsyringe";

import { Order } from "../../entities/orders";
import { IOrderRepository } from "../../repository/IOrderRepository";

interface IRequest {
  lowValue: Date;
  higthValue: Date;
}
@injectable()
class ListOrderByDateUseCase {
  constructor(
    @inject("OrderRepository")
    private oderderRepository: IOrderRepository,
  ) {}
  async execute({ lowValue, higthValue }: IRequest): Promise<Order[]> {
    const fromDay = `${lowValue} 00:00:00.000000`;
    const toDay = `${higthValue} 23:59:59.999999`;
    const listOrders = await this.oderderRepository.listOrderByDate({
      fromDay,
      toDay,
    });
    return listOrders;
  }
}

export { ListOrderByDateUseCase };
