import { inject, injectable } from "tsyringe";

import { Customer } from "../../entities/customer";
import { ICustomerRepository } from "../../repository/ICustomerRepository";

@injectable()
class ListCustomerUseCase {
  constructor(
    @inject("CustomerRepository")
    private customerRepository: ICustomerRepository,
  ) {}
  async execute(): Promise<Customer[]> {
    const allCustomers = await this.customerRepository.listCustomer();
    return allCustomers;
  }
}

export { ListCustomerUseCase };
