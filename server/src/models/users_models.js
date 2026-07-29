import fs from "node:fs"

export function findUserDetail(id) {
    let formated = []
    try {
        if (!(fs.existsSync("./server/src/models/users.json"))) {
            throw new Error("Users are empty")
        }
        const file = fs.readFileSync("./server/src/models/users.json", 'utf-8')
        formated = JSON.parse(file)
        let found = formated.filter((item) => item.id === parseInt(id))

        if (found.length < 1) {
            throw new Error("User not found")
        }
        return {
            success: true, 
            message: "Success Login", 
            result:found
        }
    } catch (err) {
        console.error(err.message)
        return { 
            success: false, 
            message: err.message, 
            result: formated }
    }
}