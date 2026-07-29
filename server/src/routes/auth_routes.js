import { Router } from "express";
import * as controller from "../controllers/auth_ctrl.js"

const authRouter = Router()

authRouter.post("/register", controller.Register)
authRouter.post("/login", controller.Login)

export default authRouter