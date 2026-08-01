import * as AuthRepository from "../repository/auth.repo.js"
import libJwt from "../libs/jwt.js"
import libBcrypt from "../libs/bycript.js"

export async function register(data) {
    const hashedPass = await libBcrypt.hashed(data.password)
    const res = await AuthRepository.register({
        name:data.name,
        email:data.email,
        password:hashedPass
    })
    return res
}

export async function login(data) {
    const res = await AuthRepository.login(data)
    const isPassMatch = await libBcrypt.comparePass(data.password, res.password)
    if(!isPassMatch){
        throw new Error("Password Does not matches")
    }
    const token = libJwt.sign({ id: res.id })
    return {
        id:res.id,
        token:token
    }
}