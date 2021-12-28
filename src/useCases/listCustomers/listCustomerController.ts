import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListCustomerUseCase } from "./listCustomerUseCase";

class ListCustomerController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listCustomerUseCase = container.resolve(ListCustomerUseCase);
    const allCustomers = await listCustomerUseCase.execute();
    return response.json(allCustomers);
  }
}

export { ListCustomerController };
