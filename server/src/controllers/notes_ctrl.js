import { constants } from "http2"
import { addNote, deleteNote, getNotes, patchNote } from "../models/notes_models.js"
import * as notesServices from "../services/note.services.js"

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
    const idUser = req.params.idUser
    const id = req.params.id
    const { title, pin, plan } = req.body

    const response = patchNote(idUser, id, {
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

// export function GetAllnote(req, res){   
//     const response = getNotes()
//     if(!response.success){
//         res.status(constants.HTTP_STATUS_BAD_REQUEST).json({
//             success:false,
//             message: response.message
//         })
//     }
//     res.status(constants.HTTP_STATUS_OK).json({
//         success: true,
//         message: "Success Get All Notes",
//         results: response.result
//     })
// }   

export async function GetAllnotes(req, res){   
    try{
        const response = await notesServices.getAllNotes()
        res.status(constants.HTTP_STATUS_OK).json({
            success: true,
            message: "Success Get All Notes",
            results: response
        })
        
    } catch(err){
        res.status(constants.HTTP_STATUS_BAD_REQUEST).json({
            success:false,
            message: err.message
        })
    }
}

export async function GetUserNotes(req, res){   
    try{
        const id = req.params.id
        const response = await notesServices.getUserNotes(id)
        res.status(constants.HTTP_STATUS_OK).json({
            success: true,
            message: "Success Get Notes",
            results: response
        })
        
    } catch(err){
        res.status(constants.HTTP_STATUS_BAD_REQUEST).json({
            success:false,
            message: err.message
        })
    }
}   