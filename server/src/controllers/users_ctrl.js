import { constants} from "http2"
import * as userService from "../services/users.services.js"

/**
 * @param {import("express").Request} req 
 * @param {import("express").Response} res 
 */

export async function getUserDetail(req, res){
    try{
        const id = req.params.id
        const response = await userService.getUserDetail(id)
        res.status(constants.HTTP_STATUS_OK).json({
            success:true,
            message:"Success Get User",
            results:response
        })
        
    } catch(err){
        res.status(constants.HTTP_STATUS_INTERNAL_SERVER_ERROR).json({
            success:false,
            message:err.message
        })
    }
}

export async function getAllUsers(req, res){
    try{
        const response = await userService.getAllUsers()
        res.status(constants.HTTP_STATUS_OK).json({
            success:true,
            message:response.message,
            results:response
        })
    } catch(err){
        console.error(err.message)
        res.status(constants.HTTP_STATUS_INTERNAL_SERVER_ERROR).json({
            success:false,
            message:err.message
        })
    }
}