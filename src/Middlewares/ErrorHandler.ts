import { NextFunction, Request, Response } from 'express';
import Exception from '../Exception';

export default class ErrorHandler {
  public static handle(
    error: Error,
    _req: Request,
    res: Response,
    next: NextFunction,
  ) {
    if (error instanceof Exception) {
      const { status = 500, message } = error;
      return res.status(status).json({ message });
    }

    const { message } = error;
    res.status(500).json({ message });
    next();
  }
}
