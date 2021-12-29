import { Products } from "../entities/products";

interface ICreateOrderDTO {
  customerId: string;
  products: Products[];
  price: number;
  totalprice: number;
}

export { ICreateOrderDTO };
