import { constants } from "http2"
import * as notesServices from "../services/note.services.js"

/**
 * 
 * @param {import("express").Request} req 
 * @param {import("express").Response} res 
 * @returns 
 */
export async function UpdateNote(req, res) {
    try{
        const idUser = req.params.idUser
        const id = req.params.id
        const data = req.body
        const response = await notesServices.updateNote(idUser, id, data)
        res.status(constants.HTTP_STATUS_OK).json({
            success: true, 
            message:"Success update note",
            result:response
        })
    } catch(err){
        res.status(constants.HTTP_STATUS_BAD_REQUEST).json({
            success: false,
            message: err.message
        })
    }
}

export function DeleteNote(req, res) {
    const id_user = req.params.idUser
    const id = req.params.id
    notesServices.deleteNote(id_user, id).then(() => {
        return res.status(constants.HTTP_STATUS_OK).json({
            success: true,
            message: "Success delete note",
        })
    }).catch(err => {
        return res.status(constants.HTTP_STATUS_BAD_REQUEST).json({
            success: false,
            message: err.message
        })
    })
}

export async function GetAllnotes(req, res) {
    try {
        const response = await notesServices.getAllNotes()
        res.status(constants.HTTP_STATUS_OK).json({
            success: true,
            message: "Success Get All Notes",
            results: response
        })

    } catch (err) {
        res.status(constants.HTTP_STATUS_BAD_REQUEST).json({
            success: false,
            message: err.message
        })
    }
}

export async function GetUserNotes(req, res) {
    try {
        const id = req.params.idUser
        const response = await notesServices.getUserNotes(id)
        res.status(constants.HTTP_STATUS_OK).json({
            success: true,
            message: "Success Get Notes",
            results: response
        })

    } catch (err) {
        res.status(constants.HTTP_STATUS_BAD_REQUEST).json({
            success: false,
            message: err.message
        })
    }
}

export async function CreateNote(req, res) {
    try {
        const id = req.params.idUser
        const data = req.body
        const response = await notesServices.addNote(id, data)
        res.status(constants.HTTP_STATUS_OK).json({
            success: true,
            message: "Success Crate Note",
            results: response
        })

    } catch (err) {
        res.status(constants.HTTP_STATUS_BAD_REQUEST).json({
            success: false,
            message: err.message
        })
    }
}