import { pool } from "../config/db.js";

export async function findAllNotes() {
    const res = await pool.query(`SELECT * FROM "notes"`)
    return res.rows
}

export async function findUserNotes(idUser) {
    const res = await pool.query(`SELECT * FROM "notes" WHERE "id_user" = $1 ORDER BY updated_at DESC`, [idUser])
    return res.rows
}

export async function addNote(idUser, data) {
    const res = await pool.query(`INSERT INTO "notes" ("id_user", "title", "pin", "plan") VALUES
    ($1, $2, $3, $4) RETURNING id_user, title, pin, plan, created_at`,
        [idUser, data.title, parseInt(data.pin), data.plan])
    return res.rows[0]
}

export async function deleteNote(idUser, id) {
    const res = await pool.query(`DELETE FROM "notes" WHERE id_user=$1 AND id=$2`,
        [idUser, id]
    )
    return res.rowCount
}

export async function updateNote(idUser, id, data) {
    let val = [], quer = [], index = 1

    for (const key in data) {
        if (data[key] !== "") {
            val.push(`${key} = $${index++}`)
            if (key === 'pin') quer.push(parseInt(data[key]))
            else quer.push(data[key])
        }
    }

    quer.push(idUser)
    quer.push(id)

    const res = await pool.query(`UPDATE "notes" SET ${val.join(", ")
        }, updated_at = NOW() WHERE id_user = $${quer.length-1} AND id = $${quer.length} 
   RETURNING id_user, id, plan, title, updated_at`, quer)

    return res.rows
}