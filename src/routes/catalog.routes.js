import { Router } from "express";
import { catalog, getStock } from "../controllers/catalogControllers.js";

const catalogRouter = Router();

catalogRouter.post("/products", catalog);
catalogRouter.get("/stock", getStock);
export default catalogRouter;
