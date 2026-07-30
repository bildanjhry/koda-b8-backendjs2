import { pool } from "../config/db.js";
import libBcrypt from "../libs/bycript.js";

export async function register(data) {
    const hashed = await libBcrypt.hashed(data.password)
    const res = await pool.query(`INSERT INTO "users" ("name", "email", "password")
        VALUES($1, $2, $3) RETURNING id, name, created_at `, 
        [data.name, data.email, hashed])
    return res.rows[0]
}

export async function login(data) {
    const res = await pool.query(`SELECT "id", "email", "password" FROM "users" WHERE email=$1`, 
        [data.email])
    return res.rows[0]
}