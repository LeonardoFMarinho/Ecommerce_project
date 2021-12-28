// import { json, NextFunction, Request } from "express";
// import { body, validationResult } from "express-validator";

// class Validator {
//   async validation(request: Request, response: Response, next: NextFunction) {
//     const check = body("name")
//       .isLength({ min: 4 })
//       .withMessage("Nome muito pequeno");
//     body("email").isEmail().withMessage("email no formato incorreto");
//     body("phone")
//       .isNumeric()
//       .withMessage("Necessário preencher campos apenas com numeros");

//       const errors = validationResult(request)
//       if(check) {
//           return response.status(400).json({errors: errors.array()})

//           )
//       }
//   }

// }

// export { Validator };
