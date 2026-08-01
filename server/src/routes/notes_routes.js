import { Router } from "express";
import * as controllers from "../controllers/notes_ctrl.js"
import authMiddleware from "../middlewares/auth.js";

const notesRoutes = Router()
notesRoutes.use(authMiddleware)

/**
 * @openapi
 * /notes/all:
 *  get:
 *   description: Get all availables notes
 *   tags:
 *   - Notes
 *   responses:
 *    "200": 
 *      description: Success get all available notes
 *    "404": 
 *      description: Notes are empty
 *   security:
 *     - token: []
 *   
*/
notesRoutes.get("/all", controllers.GetAllnotes)

/**
 * @openapi
 * /notes/{idUser}:
 *  get:
 *   description: Get all user's available notes
 *   tags:
 *   - Notes
 *   parameters:
 *     - name: idUser
 *       in: path
 *       description: Id of user
 *       required: true
 *       schema:
 *          type: string
 *   responses:
 *    "200": 
 *      description: Success get all user's available notes
 *    "404": 
 *      description: Notes are empty
 *   security:
 *     - token: []
 *   
*/
notesRoutes.get("/:idUser", controllers.GetUserNotes)

/**
 * @openapi
 * /notes/{idUser}:
 *   post:
 *    tags:
 *     - Notes
 *    parameters:
 *     - name: idUser
 *       in: path
 *       description: Id of user
 *       required: true
 *       schema:
 *          type: integer
 *    requestBody:
 *      description: Create new note
 *      content:
 *        application/x-www-form-urlencoded:
 *           schema:
 *            type: object
 *            properties:
 *               pin:
 *                 description: Only accept 0 and 1 (false | true)
 *                 type: integer
 *               title:
 *                 type: string
 *               plan:
 *                 type: string
 *                 example: Wrinting something cool..
 *    responses:
 *     "200":
 *       description: Success get note
 *     "404":
 *       description: Note not found
 *    security:
 *      - token : []
 * 
*/
notesRoutes.post("/:idUser", controllers.CreateNote)

/**
 * @openapi
 * /notes/{idUser}/{id}:
 *   patch:
 *    description: Put note by id
 *    tags:
 *     - Notes
 *    parameters:
 *     - name: idUser
 *       in: path
 *       description: Id of user
 *       required: true
 *       schema:
 *          type: integer
 *     - name: id
 *       in: path
 *       description: Id of note
 *       required: true
 *       schema:
 *          type: integer
 *    requestBody:
 *      description: Update note
 *      content:
 *        application/x-www-form-urlencoded:
 *           schema:
 *            type: object
 *            properties:
 *              pin:
 *                description: Only accept 0 and 1 (false | true)
 *                type: integer
 *              title:
 *                type: string
 *              plan:
 *                type: string
 *                example: Wrinting something cool..
 *    responses:
 *     "200":
 *       description: success get note
 *     "404":
 *       description: note not found
 *    security:
 *       - token: []
 * 
*/
notesRoutes.patch("/:idUser/:id", controllers.UpdateNote)

/**
 * @openapi
 * /notes/{idUser}/{id}:
 *   delete:
 *    description: Delete notes by id
 *    tags:
 *     - Notes
 *    parameters:
 *     - name: idUser
 *       in: path
 *       description: Id of user
 *       required: true
 *       schema:
 *          type: string
 *     - name: id
 *       in: path
 *       description: Id of note
 *       required: true
 *       schema:
 *          type: string
 *    responses:
 *     "200":
 *       description: Success delete note
 *     "404":
 *       description: User nor note not found
 *    security:
 *      - token: []
 * 
*/
notesRoutes.delete("/:idUser/:id", controllers.DeleteNote)



export default notesRoutes