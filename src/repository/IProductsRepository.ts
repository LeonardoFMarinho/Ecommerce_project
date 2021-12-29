import { ICreateProductDTO } from "../dtos/ICreateProductDTO";
import { Products } from "../entities/products";

interface IProductsRepository {
  create(data: ICreateProductDTO): Promise<Products>;
  findById(productid: string): Promise<Products>;
  findByName(name: string): Promise<Products>;
  listProducts(): Promise<Products[]>;
}

export { IProductsRepository };
