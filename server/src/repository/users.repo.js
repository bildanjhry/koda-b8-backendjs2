import { pool } from "../config/db.js"

export async function findAll() {
    const result = await pool.query(`
        SELECT "id", "name", "email", "created_at", "updated_at" FROM "users"`)
    return result.rows
}

export async function findUserDetail(id) {
    const result = await pool.query(`
        SELECT "id", "name", "email", "created_at", "updated_at" FROM "users" WHERE id=$1`,
        [id])
    return result.rows
}