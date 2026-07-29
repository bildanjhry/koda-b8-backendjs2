import { constants } from "http2"
import { create, findUser } from "../models/auth_models.js"

/**
 * 
 * @param {import("express").Request} req 
 * @param {import("express").Response} res 
 * @returns {void}
 */
export function Register(req, res){
    const {name, email, password} = req.body
    const responses = create({
        name:name,
        email:email,
        password:password
    })
    if (!responses.success){
        res.status(constants.HTTP_STATUS_BAD_REQUEST).json({
            success:false,
            message:responses.message
        })
        return
    }
    res.status(constants.HTTP_STATUS_CREATED).json({
        success:true,
        message:"Success create account",
        results:responses.result
    })
}

export function Login(req, res){
    const {name, email, password} = req.body
    const responses = findUser({
        email:email,
        password:password
    })
    if (!responses.success){
        res.status(constants.HTTP_STATUS_BAD_REQUEST).json({
            success:false,
            message:responses.message
        })
        return
    }
    res.status(constants.HTTP_STATUS_CREATED).json({
        success:true,
        message:responses.message,
        results:responses.result
    })
}