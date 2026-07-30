import { constants } from "http2"
import { create, findUser } from "../models/auth_models.js"
import libJwt from "../libs/jwt.js"
import * as authServices from "../services/auth.services.js"

/**
 * 
 * @param {import("express").Request} req 
 * @param {import("express").Response} res 
 * @returns {void}
 */
// export function Register(req, res){
//     const {name, email, password} = req.body
//     const responses = create({
//         name:name,
//         email:email,
//         password:password
//     })
//     if (!responses.success){
//         res.status(constants.HTTP_STATUS_BAD_REQUEST).json({
//             success:false,
//             message:responses.message
//         })
//         return
//     }
//     res.status(constants.HTTP_STATUS_CREATED).json({
//         success:true,
//         message:"Success create account",
//         results:responses.result
//     })
// }

export async function Register(req, res) {
    try {
        const { name, email, password } = req.body
        const response = await authServices.register({
            name: name,
            email: email,
            password: password
        })
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

// export function Login(req, res) {
//     const { name, email, password } = req.body
//     const responses = findUser({
//         email: email,
//         password: password
//     })
//     if (!responses.success) {
//         res.status(constants.HTTP_STATUS_BAD_REQUEST).json({
//             success: false,
//             message: responses.message
//         })
//         return
//     }
//     const token = libJwt.sign({ id: responses.result.id })
//     res.status(constants.HTTP_STATUS_CREATED).json({
//         success: true,
//         message: responses.message,
//         results: {
//             id: responses.result.id,
//             token: token
//         }
//     })
// }

export async function Login(req, res) {
    try {
        const { name, email, password } = req.body
        const response = await authServices.login({
            email: email,
            password: password
        })
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