import { Router } from "express";
import * as controller from "../controllers/auth_ctrl.js"

const authRouter = Router()

/**
 * @swagger
 * /auth/register:
 *   post:
 *    description: Register
 *    tags:
 *     - Auth
 *    requestBody:
 *      description: Create new account
 *      content:
 *        application/x-www-form-urlencoded:
 *           schema:
 *            type: object
 *            properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                  type: string
 *    responses:
 *      "200":
 *         description: Success create account
 *      "404":
 *         description: Email already being used
 *    
*/
authRouter.post("/register", controller.Register)


/**
 * @swagger
 * /auth/login:
 *   post:
 *    description: Login
 *    tags:
 *     - Auth
 *    requestBody:
 *      description: Login into system
 *      content:
 *        application/x-www-form-urlencoded:
 *           schema:
 *            type: object
 *            properties:
 *               email:
 *                 type: string
 *               password:
 *                  type: string
 *    responses:
 *      "200":
 *        description: Success Login
 *      "401":
 *        description: Unauthorized
 *    
*/
authRouter.post("/login", controller.Login)

export default authRouter