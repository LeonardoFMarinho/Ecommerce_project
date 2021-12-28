import { getRepository, Repository } from "typeorm";

import { ICreateProductDTO } from "../../dtos/ICreateProductDTO";
import { Products } from "../../entities/products";
import { IProductsRepository } from "../IProductsRepository";

class ProductsRepository implements IProductsRepository {
  private repository: Repository<Products>;
  constructor() {
    this.repository = getRepository(Products);
  }

  async create({
    name,
    price,
    quantity,
  }: ICreateProductDTO): Promise<Products> {
    const product = this.repository.create({ name, price, quantity });
    await this.repository.save(product);
    return product;
  }
  async findByName(name: string): Promise<Products> {
    const findbyname = await this.repository.findOne({ name });
    return findbyname;
  }
  async listProducts(): Promise<Products[]> {
    const allProducts = await this.repository.find();
    return allProducts;
  }

  //   async findByPrice(price: number): Promise<Products> {}
}

export { ProductsRepository };
