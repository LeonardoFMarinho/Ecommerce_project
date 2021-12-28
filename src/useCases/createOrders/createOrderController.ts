import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateOrderUseCase } from "./createOrderUseCase";

class CreateOrderController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { customerId, totalprice, products } = request.body;
    const createOrderUseCase = container.resolve(CreateOrderUseCase);

    const createOrder = await createOrderUseCase.execute({
      customerId,
      totalprice,
      products,
    });
    return response.status(201).json(createOrder);
  }
}

export { CreateOrderController };
