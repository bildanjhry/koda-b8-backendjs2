import { pool } from "../config/db.js"

export async function findAll() {
    const result = await pool.query(`
        SELECT * FROM "users"`)
    return result.rows[0]
}