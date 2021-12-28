import { inject, injectable } from "tsyringe";

import { ICreateCustomerDTO } from "../../dtos/ICreateCustomerDTO";
import { Customer } from "../../entities/customer";
import { ICustomerRepository } from "../../repository/ICustomerRepository";
import { AppError } from "../../shared/error/appError";

@injectable()
class CreateCustomerUseCase {
  constructor(
    @inject("CustomerRepository")
    private customerRepository: ICustomerRepository,
  ) {}
  async execute({ name, email, phone }: ICreateCustomerDTO): Promise<Customer> {
    const customerAlreadyExist = await this.customerRepository.findByEmail(
      email,
    );
    if (customerAlreadyExist) {
      throw new AppError("Customer Already Exist", 401);
    }

    const customerCreated = await this.customerRepository.create({
      name,
      email,
      phone,
    });

    return customerCreated;
  }
}

export { CreateCustomerUseCase };
