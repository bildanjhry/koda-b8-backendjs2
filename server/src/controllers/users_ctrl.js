import { constants} from "http2"
import { findUserDetail } from "../models/users_models.js"

/**
 * @param {import("express").Request} req 
 * @param {import("express").Response} res 
 */
export function getUserDetail(req, res){
    const id = req.params.id
    const response = findUserDetail(id)
    if(!response.success){
        res.status(constants.HTTP_STATUS_INTERNAL_SERVER_ERROR).json({
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