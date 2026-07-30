import bycript from "bcryptjs"

const SALT_ROUNDS = 10

function hashed(pass){
    return bycript.hash(pass, SALT_ROUNDS)
}
function comparePass(pass, hash){
    return bycript.compare(pass, hash)
}

const libBcrypt = {hashed, comparePass}
export default libBcrypt