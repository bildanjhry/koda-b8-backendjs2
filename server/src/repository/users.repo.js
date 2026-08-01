import { pool } from "../config/db.js"

export async function findAll() {
    const result = await pool.query(`
        SELECT "id", "name", "email", "created_at", "updated_at" FROM "users"`)
    return result.rows
}

export async function findUserDetail(id) {
    const result = await pool.query(`
        SELECT "users"."id", "users"."name", "users"."email", "users"."created_at", "users"."updated_at", "notes"."id" AS "id_note", "notes"."title" FROM "users" JOIN "notes" ON "notes"."id_user" = "users"."id" WHERE id_user=$1`,
        [id])
    return result.rows
}
