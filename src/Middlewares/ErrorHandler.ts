import { NextFunction, Request, Response } from 'express';

export default class ErrorHandler {
  public static handle(
    error: Error,
    req: Request,
    res: Response,
    next: NextFunction,
  ) {
    res.status(500).json({ message: error.message });
    next();
  }
}
