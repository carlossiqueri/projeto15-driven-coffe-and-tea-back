import { Router } from "express";
import authRouter from "./auth.routes.js";
import catalogRouter from "./catalog.routes.js";

const routes = Router();
routes.use(authRouter);
routes.use(catalogRouter);

export default routes;
