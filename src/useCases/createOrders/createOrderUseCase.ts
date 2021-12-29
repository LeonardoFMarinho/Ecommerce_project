import { inject, injectable } from "tsyringe";

import { Customer } from "../../entities/customer";
import { Order } from "../../entities/orders";
import { Products } from "../../entities/products";
import { IOrderRepository } from "../../repository/IOrderRepository";
import { IProductsRepository } from "../../repository/IProductsRepository";

interface IRequest {
  products: Products[];
  customerId: string;
  price: number;
}
@injectable()
class CreateOrderUseCase {
  constructor(
    @inject("OrderRepository")
    private createorderRepository: IOrderRepository,
  ) {}
  async execute({ products, customerId, price }: IRequest): Promise<Order> {
    const totalProductInOrderValue = products.map(value => {
      return value.quantity * value.price;
    });

    const totalprice = totalProductInOrderValue.reduce((acumulator, value) => {
      return acumulator + value;
    }, 0);

    const orderCreated = await this.createorderRepository.create({
      products,
      customerId,
      price,
      totalprice,
    });

    return orderCreated;
  }
}

export { CreateOrderUseCase };
