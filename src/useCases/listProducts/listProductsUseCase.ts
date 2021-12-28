import { inject, injectable } from "tsyringe";

import { Products } from "../../entities/products";
import { IProductsRepository } from "../../repository/IProductsRepository";

@injectable()
class ListProductsUseCase {
  constructor(
    @inject("ProductsRepository")
    private productRepository: IProductsRepository,
  ) {}
  async execute(): Promise<Products[]> {
    const allProducts = await this.productRepository.listProducts();
    return allProducts;
  }
}

export { ListProductsUseCase };
