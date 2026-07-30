import { constants } from "http2"
import { addNote, deleteNote } from "../models/notes_models.js"

/**
 * 
 * @param {import("express").Request} req 
 * @param {import("express").Response} res 
 * @returns 
 */
export function CreateNote(req, res) {
    const idUser = req.params.id
    const { id, title, pin, plan } = req.body

    const response = addNote(idUser, {
        id :id,
        title: title,
        pin:parseInt(pin),
        plan: plan
    })

    if (!response.success) {
        res.status(constants.HTTP_STATUS_BAD_REQUEST).json({
            success: false,
            message: response.message
        })
        return
    }
    res.status(constants.HTTP_STATUS_OK).json({
        success: true,
        message: response.message,
        results: response.result
    })
}

export function UpdateNote(req, res) {
    const idUser = req.params.id
    const { id, title, pin, plan } = req.body

    const response = addNote(idUser, {
        id :id,
        title: title,
        pin:parseInt(pin),
        plan: plan
    })

    if (!response.success) {
        res.status(constants.HTTP_STATUS_BAD_REQUEST).json({
            success: false,
            message: response.message
        })
        return
    }
    res.status(constants.HTTP_STATUS_OK).json({
        success: true,
        message: response.message,
        results: response.result
    })
}

export function DeleteNote(req, res) {
    const id_user = req.params.idUser
    const id = req.params.id
    console.log(id_user+" - "+id)
    const response = deleteNote(id_user, id)
    if (!response.success) {
        res.status(constants.HTTP_STATUS_BAD_REQUEST).json({
            success: false,
            message: response.message
        })
        return
    }
    res.status(constants.HTTP_STATUS_OK).json({
        success: true,
        message: response.message,
        results: response.result
    })
}