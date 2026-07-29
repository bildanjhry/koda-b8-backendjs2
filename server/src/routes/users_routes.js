import { Router } from "express";
import * as controllers from "../controllers/users_ctrl.js"
import authMiddleware from "../middlewares/auth.js";

const userRoutes = Router()
userRoutes.use(authMiddleware)
userRoutes.get("/:id", controllers.getUserDetail)

export default userRoutes