import { constants } from "http2"
import * as authServices from "../services/auth.services.js"

/**
 * 
 * @param {import("express").Request} req 
 * @param {import("express").Response} res 
 * @returns {void}
 */

export async function Register(req, res) {
    try {
        const data = req.body
        const response = await authServices.register(data)
        res.status(constants.HTTP_STATUS_CREATED).json({
            success: true,
            message: "Success create account",
            results: response
        })
    } catch (err) {
        res.status(constants.HTTP_STATUS_BAD_REQUEST).json({
            success: false,
            message: err.message
        })
    }
}


export async function Login(req, res) {
    try {
        const form = req.body
        const response = await authServices.login(form)
        res.status(constants.HTTP_STATUS_CREATED).json({
            success: true,
            message: "Success Login",
            results: response
        })
        
    } catch (err) {
        res.status(constants.HTTP_STATUS_UNAUTHORIZED).json({
            success: false,
            message: err.message
        })
    }
}