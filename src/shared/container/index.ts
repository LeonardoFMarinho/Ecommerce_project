import { container } from "tsyringe";

import { ICustomerRepository } from "../../repository/ICustomerRepository";
import { CustomerRepository } from "../../repository/implementations/CustomerRepository";
import { OrderRepository } from "../../repository/implementations/OrderRepository";
import { ProductsRepository } from "../../repository/implementations/ProductsRepository";
import { IOrderRepository } from "../../repository/IOrderRepository";
import { IProductsRepository } from "../../repository/IProductsRepository";

container.registerSingleton<ICustomerRepository>(
  "CustomerRepository",
  CustomerRepository,
);

container.registerSingleton<IProductsRepository>(
  "ProductsRepository",
  ProductsRepository,
);

container.registerSingleton<IOrderRepository>(
  "OrderRepository",
  OrderRepository,
);
