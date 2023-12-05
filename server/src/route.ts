import { Router } from "express";
import { homePage } from "./controller.js";
import { setChatId } from "./middlewares.js";

const r = Router();
// @ts-ignore
r.use(setChatId);
r.route("/").get(homePage);
export default r;
