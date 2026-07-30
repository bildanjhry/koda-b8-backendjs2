import jwt from "jsonwebtoken"

const SECRET = process.env.JWT_KEY || "secretkey"

function sign(payload){
    return jwt.sign(payload, SECRET)
}

function verify(payload){
    return jwt.verify(payload, SECRET)
}

const libJwt = {sign, verify}
export default libJwt