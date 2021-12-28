import { getRepository, Repository } from "typeorm";

import { ICreateCustomerDTO } from "../../dtos/ICreateCustomerDTO";
import { Customer } from "../../entities/customer";
import { ICustomerRepository } from "../ICustomerRepository";

class CustomerRepository implements ICustomerRepository {
  private repository: Repository<Customer>;

  constructor() {
    this.repository = getRepository(Customer);
  }

  async create({ name, email, phone }: ICreateCustomerDTO): Promise<Customer> {
    const customer = this.repository.create({ name, email, phone });
    await this.repository.save(customer);
    return customer;
  }
  async findByEmail(email: string): Promise<Customer> {
    const findCustomerByEmail = await this.repository.findOne({ email });
    return findCustomerByEmail;
  }
  async findByName(name: string): Promise<Customer> {
    const findCustomerByName = await this.repository.findOne({ name });
    return findCustomerByName;
  }
  async listCustomer(): Promise<Customer[]> {
    const listCustomers = await this.repository.find();
    return listCustomers;
  }
}

export { CustomerRepository };
