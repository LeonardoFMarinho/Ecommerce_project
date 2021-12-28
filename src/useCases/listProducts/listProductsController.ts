import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListProductsUseCase } from "./listProductsUseCase";

class ListProductsController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listProductsUseCase = container.resolve(ListProductsUseCase);
    const listProducts = await listProductsUseCase.execute();

    return response.json(listProducts);
  }
}

export { ListProductsController };
