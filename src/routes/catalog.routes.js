import { Router } from "express";
import { catalog, getStock, cart  } from "../controllers/catalogControllers.js";

const catalogRouter = Router();

catalogRouter.post("/products", catalog);
catalogRouter.get("/stock", getStock);
catalogRouter.post("/cart", cart);

export default catalogRouter;
