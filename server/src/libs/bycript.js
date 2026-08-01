import bycript from "bcryptjs"

const SALT_ROUNDS = 10

async function hashed(pass){
    const hashedPass = await bycript.hash(pass, SALT_ROUNDS)
    return hashedPass
}
async function comparePass(pass, hash){
    return await bycript.compare(pass, hash)
}

const libBcrypt = {hashed, comparePass}
export default libBcrypt