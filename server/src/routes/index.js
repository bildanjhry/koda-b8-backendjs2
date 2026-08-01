import { Router } from "express";
import swaggerUi from "swagger-ui-express"
import swaggerJsdoc from "swagger-jsdoc"

import auth from "./auth_routes.js"
import users from "./users_routes.js"
import notes from "./notes_routes.js"

const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info : {
       title: "Pulse Notes Manager Backend",
       version: "1.0.0",
       description:'API Documentation for Pulse note manager web app.',
    },
    components: {
     securitySchemes:{
      token: {
        type: "apiKey",
        name: "Authorization",
        in: "header"
      }
     }
    }
  },
  apis:["./server/src/routes/*routes.js"],
}

const swagger = swaggerJsdoc(swaggerOptions)

const routes = Router()
routes.use("/auth", auth)
routes.use("/users", users)
routes.use("/notes", notes)
routes.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swagger))

export default routes