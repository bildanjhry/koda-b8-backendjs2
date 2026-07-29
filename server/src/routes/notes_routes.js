import { Router } from "express";
import * as controllers from "../controllers/notes_ctrl.js"
import authMiddleware from "../middlewares/auth.js";

const notesRoutes = Router()
notesRoutes.use(authMiddleware)
notesRoutes.post("/:id", controllers.CreateNote)
notesRoutes.delete("/:idUser/:id", controllers.DeleteNote)

export default notesRoutes