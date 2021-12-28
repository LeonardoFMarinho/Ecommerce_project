import { ICreateProductDTO } from "../dtos/ICreateProductDTO";
import { Products } from "../entities/products";

interface IProductsRepository {
  create(data: ICreateProductDTO): Promise<Products>;
  //   findByPrice(price: number): Promise<Products>;
  findByName(name: string): Promise<Products>;
  listProducts(): Promise<Products[]>;
}

export { IProductsRepository };
