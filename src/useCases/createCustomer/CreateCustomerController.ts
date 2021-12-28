import { Request, Response } from "express";
import "reflect-metadata";
import { validationResult } from "express-validator";
import { container } from "tsyringe";

import { CreateCustomerUseCase } from "./CreateCustomerUseCase";

class CreateCustomerController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, email, phone } = request.body;
    const errors = validationResult(request);
    if (!errors.isEmpty()) {
      return response.status(400).json({ errors: errors.array() });
    }
    const createCustomerUseCase = container.resolve(CreateCustomerUseCase);

    const createCustomer = await createCustomerUseCase.execute({
      name,
      email,
      phone,
    });

    return response.status(201).json(createCustomer);
  }
}

export { CreateCustomerController };
