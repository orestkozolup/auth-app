import { Request, Response, NextFunction } from "express";
import { RequestValidationError } from "../errors/request-validation-error";
import { DatabaseConnectionError } from "../errors/database-connection-error";

export const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof RequestValidationError) {
    const formattedErrors = err.serializeErrors();

    res.status(err.statusCode).send({
      errors: formattedErrors
    });
    return;
  }

  if (err instanceof DatabaseConnectionError) {
    res.status(err.statusCode).send({
      errors: err.serializeErrors()
    });
    return;
  }

  res.status(500).send({
    errors: [
      {
        message: "Something went wrong"
      }
    ]
  })
}