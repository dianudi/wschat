import { NextFunction, Request, Response } from "express";
import { v4 } from "uuid";

function setChatId(req: Request, res: Response, next: NextFunction) {
  if (!req.cookies?.chat_id) res.cookie("chat_id", v4());
  next();
}

export { setChatId };
