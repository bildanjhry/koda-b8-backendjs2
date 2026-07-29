import { constants } from "http2"
import { addNote } from "../models/notes_models"

/**
 * 
 * @param {import("express").Request} req 
 * @param {import("express").Response} res 
 * @returns 
 */
export function CreateNote(req, res){
    const id = req.params.id
    const {title, plan} = req.body

    const response = addNote(id, {
        title:title,
        plan:plan
    })

    if(!response.success){
        res.status(constants.HTTP_STATUS_BAD_REQUEST).json({
            success:false,
            message:response.message
        })
        return
    }
    res.status(constants.HTTP_STATUS_OK).json({
        success:true,
        message:response.message,
        results:response.result
    })
}