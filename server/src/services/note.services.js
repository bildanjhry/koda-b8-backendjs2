import * as noteRepository from "../repository/note.repo.js"

export async function getAllNotes() {
    return await noteRepository.findAllNotes()
}

export async function getUserNotes(idUser) {
    return await noteRepository.findUserNotes(parseInt(idUser, 32))
}