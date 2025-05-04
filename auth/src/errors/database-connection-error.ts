import { ValidationError } from "express-validator";

export class DatabaseConnectionError extends Error {
  statusCode = 500;
  reason = "Database Failure";

  constructor(public errors: ValidationError[]) {
    super();

    // Just because we are extending a built-in class
    Object.setPrototypeOf(this, DatabaseConnectionError.prototype)
  }

  serializeErrors() {
    return [
      {
        message: this.reason
      }
    ]
  }
}
