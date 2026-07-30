import { Router } from "express";
import * as controllers from "../controllers/notes_ctrl.js"
import authMiddleware from "../middlewares/auth.js";

const notesRoutes = Router()
notesRoutes.use(authMiddleware)

/**
 * @openapi
 * /notes/{id}:
 *   post:
 *    tags:
 *     - Notes
 *    parameters:
 *     - name: id
 *       in: path
 *       description: Id of user
 *       required: true
 *       schema:
 *          type: string
 *    requestBody:
 *      description: Create new note
 *      content:
 *        application/x-www-form-urlencoded:
 *           schema:
 *            type: object
 *            properties:
 *               id:
 *                 description: Optional for "PUT" data note
 *                 type: integer
 *               Pin:
 *                 description: Only accept 0 and 1 (false | true)
 *                 type: integer
 *                 example: 1
 *               Title:
 *                 type: string
 *                 example: Coding for a weekend
 *               Plan:
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
notesRoutes.post("/:id", controllers.CreateNote)

/**
 * @openapi
 * /notes/{id}:
 *   put:
 *    description: Put note by id
 *    tags:
 *     - Notes
 *    parameters:
 *     - name: id
 *       in: path
 *       description: Id of user
 *       required: true
 *       schema:
 *          type: string
 *    requestBody:
 *      description: Update note
 *      content:
 *        application/x-www-form-urlencoded:
 *           schema:
 *            type: object
 *            properties:
 *               Id:
 *                 type: integer
 *               Pin:
 *                 type: integer
 *               Title:
 *                 type: string
 *               Plan:
 *                  type: string
 *    responses:
 *     "200":
 *       description: success get note
 *     "404":
 *       description: note not found
 *    security:
 *       - token: []
 * 
*/
notesRoutes.put("/:id", controllers.UpdateNote)

/**
 * @openapi
 * /notes/{idUser}/{idNote}:
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
 *          type: integer
 *          format: int64
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