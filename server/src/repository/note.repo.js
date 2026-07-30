import { pool } from "../config/db.js";

export async function findAllNotes() {
    const res = await pool.query(`SELECT * FROM "notes"`)
    return res.rows
}

export async function findUserNotes(idUser) {
    const res = await pool.query(`SELECT * FROM "notes" WHERE "id_user" = $1`, [idUser])
    return res.rows
}