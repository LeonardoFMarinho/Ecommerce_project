import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListOrderUseCase } from "./listOrderUseCase";

class ListOrderController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listOrderUseCase = container.resolve(ListOrderUseCase);
    const listOrder = await listOrderUseCase.execute();
    return response.status(200).json(listOrder);
  }
}

export { ListOrderController };
