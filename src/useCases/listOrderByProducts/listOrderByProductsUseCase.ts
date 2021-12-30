import { inject, injectable } from "tsyringe";

import { Order } from "../../entities/orders";
import { Products } from "../../entities/products";
import { IOrderRepository } from "../../repository/IOrderRepository";

interface IRequest {
  product: Products;
}
@injectable()
class ListOrderByProductUseCase {
  constructor(
    @inject("OrderRepository")
    private oderderRepository: IOrderRepository,
  ) {}
  async execute({ product }: IRequest): Promise<Order[]> {
    // const productOfOrder = productid.productid;
    const listOrders = await this.oderderRepository.listOrderByProduct({
      product,
    });
    return listOrders;
  }
}

export { ListOrderByProductUseCase };
