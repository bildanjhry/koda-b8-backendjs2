import { constants } from "http2"
import libJwt from "../libs/jwt.js"

/**
 * @param {import("express").Request} req 
 * @param {import("express").Response} res
 * @param {function()} next  
 */
export default function authMiddleware(req, res, next) {
    if (req.method === "OPTIONS") {
        return next();
    }
    const auth = req.header("Authorization") || ""
    if (auth.startsWith("Bearer ")) {
        const token = auth.split(" ")[1]
        const data = libJwt.verify(token)
        console.log(token)
        console.log(data)
        req.data = data
        return next()
    }
    res.status(constants.HTTP_STATUS_UNAUTHORIZED).json({
        success: false,
        message: "Unauthorized"
    })
}