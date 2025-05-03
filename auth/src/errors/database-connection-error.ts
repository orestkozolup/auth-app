import { ValidationError } from "express-validator";

export class DatabaseConnectionError extends Error {
  constructor(public errors: ValidationError[]) {
    super();

    // Just because we are extending a built-in class
    Object.setPrototypeOf(this, DatabaseConnectionError.prototype)
  }
}
