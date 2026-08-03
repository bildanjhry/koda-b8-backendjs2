import * as noteRepository from "../repository/note.repo.js"

export async function getAllNotes() {
    return await noteRepository.findAllNotes()
}

export async function getUserNotes(idUser) {
    return await noteRepository.findUserNotes(parseInt(idUser))
}

export async function addNote(idUser, data) {
    return await noteRepository.addNote(parseInt(idUser), data)
}

export async function deleteNote(idUser, id) {
    const res = await noteRepository.deleteNote(parseInt(idUser), parseInt(id))
    if (res === 0) {
        throw new Error("Note not found")
    }
}

export async function updateNote(idUser, id, data) {
    const res = await noteRepository.updateNote(parseInt(idUser), parseInt(id), data)
    if (res.length < 1) {
        throw new Error("Note not found")
    }
    return res
}