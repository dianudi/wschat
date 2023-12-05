import { Request, Response } from "express";

function homePage(req: Request, res: Response) {
  const chat_id = req.cookies?.chat_id;
  return res.render("index", { chat_id });
}

export { homePage };
