import { Router } from "express";
import * as controllers from "../controllers/users_ctrl.js"
import authMiddleware from "../middlewares/auth.js";

const userRoutes = Router()
userRoutes.use(authMiddleware)

/**
 * @openapi
 * /users/{id}:
 *   get:
 *    tags:
 *     - Users
 *    parameters:
 *     - name: id
 *       in: path
 *       description: Id of user
 *       required: true
 *       schema:
 *          type: string
 *    responses:
 *     "200":
 *       description: success get users
 *     "404":
 *       description: user not found
 *    security:
 *      - token: []
 * 
*/
userRoutes.get("/:id", controllers.getUserDetail)

export default userRoutes