import { inject, injectable } from "tsyringe";

import { ICreateProductDTO } from "../../dtos/ICreateProductDTO";
import { Products } from "../../entities/products";
import { IProductsRepository } from "../../repository/IProductsRepository";
import { AppError } from "../../shared/error/appError";

@injectable()
class CreateProductUseCase {
  constructor(
    @inject("ProductsRepository")
    private productRepository: IProductsRepository,
  ) {}

  async execute({
    name,
    price,
    quantity,
  }: ICreateProductDTO): Promise<Products> {
    const productAlreadyExist = await this.productRepository.findByName(name);
    if (productAlreadyExist) {
      throw new AppError("Product Already Exist", 401);
    }
    const productCreated = await this.productRepository.create({
      name,
      price,
      quantity,
    });
    return productCreated;
  }
}

export { CreateProductUseCase };
