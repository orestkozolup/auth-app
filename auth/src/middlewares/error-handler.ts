import { Request, Response, NextFunction } from "express";
import { RequestValidationError } from "../errors/request-validation-error";
import { DatabaseConnectionError } from "../errors/database-connection-error";

export const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof RequestValidationError) {
    const formattedErrors = err.errors.map(error => ({
      message: error.msg,
      field: error.type === "field" ? error.path : ""
    }))

    res.status(400).send({
      errors: formattedErrors
    });
    return;
  }

  if (err instanceof DatabaseConnectionError) {
    res.status(500).send({
      errors: [
        {
          message: err.reason
        }
      ]
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