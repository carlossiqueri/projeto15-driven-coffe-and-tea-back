import { Router } from "express";
import {validateSchema} from '../middlewares/validateSchema.middleware.js'
import { signin, signup } from "../controllers/authController.js";
import { signInSchema, signUpSchema } from "../schemas/auth.schema.js";

const authRouter = Router();

authRouter.post('/login', validateSchema(signInSchema), signin)

authRouter.post('/register', validateSchema(signUpSchema), signup)

authRouter.post('/password-reset',)


export default authRouter;