import { ICreateCustomerDTO } from "../dtos/ICreateCustomerDTO";
import { Customer } from "../entities/customer";

interface ICustomerRepository {
  findByName(name: string): Promise<Customer>;
  findByEmail(email: string): Promise<Customer>;
  create(data: ICreateCustomerDTO): Promise<Customer>;
  listCustomer(): Promise<Customer[]>;
}

export { ICustomerRepository };
