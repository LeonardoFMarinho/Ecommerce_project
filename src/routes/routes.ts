import { Router } from "express";
import { body } from "express-validator";

import { CreateCustomerController } from "../useCases/createCustomer/CreateCustomerController";
import { CreateOrderController } from "../useCases/createOrders/createOrderController";
import { CreateProductController } from "../useCases/createProducts/createProductsController";
import { ListCustomerController } from "../useCases/listCustomers/listCustomerController";
import { ListOrderByDateController } from "../useCases/listOrderByDate/listOrderByDateController";
import { ListOrderByProductController } from "../useCases/listOrderByProducts/listOrderByProductsController";
import { ListOrderController } from "../useCases/listordersByTotalPrice/listOrderController";
import { ListProductsController } from "../useCases/listProducts/listProductsController";

const router = Router();

const createCustomerController = new CreateCustomerController();
const createProductController = new CreateProductController();
const createOrderController = new CreateOrderController();
const listCustomerController = new ListCustomerController();
const listProductsController = new ListProductsController();
const listOrderController = new ListOrderController();
const listOrderByDateController = new ListOrderByDateController();
const listOrderByProduct = new ListOrderByProductController();

router.post(
  "/customer",
  [
    body("name")
      .isString()
      .isLength({ min: 4 })
      .withMessage("Não coloque seu apelido, e sim seu nome"),
    body("email")
      .isEmail()
      .withMessage("Revise seu email, esta no formato incorreto"),
    body("phone")
      .isNumeric()
      .withMessage("Necessário preencher campos apenas com numeros"),
  ],
  createCustomerController.handle,
);

router.post("/products", createProductController.handle);

router.post("/orders", createOrderController.handle);

router.get("/customer", listCustomerController.handle);

router.get("/products", listProductsController.handle);

router.get("/ordersByTotalPrice", listOrderController.handle);

router.get("/orderByDate", listOrderByDateController.handle);

router.get("/orderbyproduct", listOrderByProduct.handle);
export { router };
