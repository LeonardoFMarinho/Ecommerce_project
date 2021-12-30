import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListOrderByDateUseCase } from "./listOrderByDateUseCase";

class ListOrderByDateController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { lowValue, higthValue } = request.body;

    const listOrderByDateUseCase = container.resolve(ListOrderByDateUseCase);
    const listOrder = await listOrderByDateUseCase.execute({
      lowValue,
      higthValue,
    });
    return response.status(200).json(listOrder);
  }
}

export { ListOrderByDateController };
