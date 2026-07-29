import { Router } from "express";
import auth from "./auth_routes.js"
import users from "./users_routes.js"
import notes from "./notes_routes.js"

const routes = Router()
routes.use("/auth", auth)
routes.use("/users", users)
routes.use("/notes", notes)

export default routes