import * as userRepository from "../repository/users.repo.js"

export async function getAllUsers() {
    const users = await userRepository.findAll()
    return users
}