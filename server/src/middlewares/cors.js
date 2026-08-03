import { constants } from "http2"

/**
 * 
 * @param {import("express").Request} req 
 * @param {impor("express").Response} res 
 * @param {function()} next 
 */
export function corsMiddlewares(req, res, next){
    const url = process.env.CLIENT_URL
    res.setHeader("Access-Control-Allow-Origin", url)
    res.setHeader("Access-Control-Allow-Methods", "GET, PUT, PATCH, DELETE")
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization")
    if(req.method === "OPTIONS"){
        res.sendStatus(constants.HTTP_STATUS_NO_CONTENT)
        return
    }
    next()

}