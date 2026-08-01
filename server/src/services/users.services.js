import * as userRepository from "../repository/users.repo.js"

export async function getAllUsers() {
    const users = await userRepository.findAll()
    return users
}

export async function getUserDetail(id) {
    const users = await userRepository.findUserDetail(parseInt(id))
    return users
}