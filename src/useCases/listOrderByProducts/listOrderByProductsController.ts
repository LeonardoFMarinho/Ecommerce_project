import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListOrderByProductUseCase } from "./listOrderByProductsUseCase";

class ListOrderByProductController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { product } = request.body;
    const listOrderByProductUseCase = container.resolve(
      ListOrderByProductUseCase,
    );
    const listOrder = await listOrderByProductUseCase.execute({ product });
    return response.status(200).json(listOrder);
  }
}

export { ListOrderByProductController };
