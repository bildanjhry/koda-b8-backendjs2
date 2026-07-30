import fs from "node:fs"

export function addNote(id, data) {
	let formated = []
	try {
		const date = new Date()
		const newDate = `${date.getDate()} ${date.getMonth()} ${date.getFullYear()}, ${date.getHours()}:${date.getMinutes()}`

		if (!(fs.existsSync("./server/src/models/users.json"))) {
			throw new Error("Users are empty")
		}
		const file = fs.readFileSync("./server/src/models/users.json", 'utf-8')
		formated = JSON.parse(file)
		const user = formated.filter((item) => item.id === parseInt(id))
		let user_noteTemp = user[0].notes.filter((item) => item.id === parseInt(data.id))
		console.log(user_noteTemp)
		if (user_noteTemp.length > 0) {
			const idx = user[0].notes.findIndex((item) => item.id === parseInt(data.id))
			user_noteTemp = user[0].notes
			user_noteTemp.splice(idx, 1, {
				id: parseInt(data.id),
				id_user: parseInt(id),
				title: data.title,
				plan: data.plan,
				pin: data.pin,
				cteated_at: newDate,
				updated_at: newDate
			})
		} else {
			user_noteTemp = [...user[0].notes, {
				id: user[0].notes.length + 1,
				id_user: parseInt(id),
				title: data.title,
				plan: data.plan,
				pin: data.pin,
				cteated_at: newDate,
				updated_at: newDate
			}]
		}
		const idx = formated.findIndex((item) => item.id === parseInt(id))
		formated.splice(idx, 1, {
			...user[0],
			notes: [...user_noteTemp]
		})

		fs.writeFileSync("./server/src/models/users.json", JSON.stringify(formated))
		fs.writeFileSync("./server/src/models/users_note.json", JSON.stringify(user_noteTemp))
		return { success: true, message: "Success Create Note", result: user_noteTemp }
	} catch (err) {
		console.error(err.message)
		return { success: false, message: err.message, result: formated }
	}

}

export function deleteNote(id_user, id) {
	let formated = []
	try {
		if (!(fs.existsSync("./server/src/models/users.json"))) {
			throw new Error("Users are empty")
		}
		const file = fs.readFileSync("./server/src/models/users.json", 'utf-8')
		formated = JSON.parse(file)
		const user = formated.filter((item) => item.id === parseInt(id_user))
		if(user.length < 1){
			throw new Error("User not found")
		}

		const user_notes = user[0].notes.filter((item) => item.id !== parseInt(id))
		const idx = formated.findIndex((item) => item.id === parseInt(id_user))
		formated.splice(idx, 1, {
			...user[0],
			notes: [...user_notes]
		})

		fs.writeFileSync("./server/src/models/users.json", JSON.stringify(formated))
		fs.writeFileSync("./server/src/models/users_note.json", JSON.stringify(user_notes))
		return { success: true, message: "Success Deleted note", result: user_notes }
	} catch (err) {
		console.error(err.message)
		return { success: false, message: err.message, result: formated }
	}
}

export function getNotes(){
	let result = []
	try{
		if(!(fs.existsSync("./server/src/models/users_note.json"))){
			throw new Error("Notes are empty")
		}
		const file = fs.readFileSync("./server/src/models/users_note.json", 'utf-8')
		result = JSON.parse(file)
		return{success:true, result:result}

	} catch(err){
		console.error(err.message)
		return {success: false, message:err.message, result:result}
	}
}

export function patchNote(idUser, id, data) {
	let formated = []
	try {
		const date = new Date()
		const minute = date.getMinutes() > 9 ? date.getMinutes() : `0${date.getMinutes()}`
		const newDate = `${date.getDate()} ${date.getMonth()} ${date.getFullYear()}, ${date.getHours()}:${minute}`

		if (!(fs.existsSync("./server/src/models/users.json"))) {
			throw new Error("Users are empty")
		}
		const file = fs.readFileSync("./server/src/models/users.json", 'utf-8')
		formated = JSON.parse(file)
		const user = formated.filter((item) => item.id === parseInt(idUser))
		let user_noteTemp = user[0].notes.filter((item) => item.id === parseInt(id))
		
		if (user_noteTemp.length > 0) {
			const idx = user[0].notes.findIndex((item) => item.id === parseInt(id))
			const oldOne = user_noteTemp
			user_noteTemp = user[0].notes
			user_noteTemp.splice(idx, 1, {
				...oldOne[0],
				title: data.title,
				plan: data.plan,
				pin: data.pin,
				updated_at: newDate
			})
		} else {
			throw new Error("Note not found")
		}
		const idx = formated.findIndex((item) => item.id === parseInt(id))
		formated.splice(idx, 1, {
			...user[0],
			notes: [...user_noteTemp]
		})

		fs.writeFileSync("./server/src/models/users.json", JSON.stringify(formated))
		fs.writeFileSync("./server/src/models/users_note.json", JSON.stringify(user_noteTemp))
		return { success: true, message: "Success Update Note", result: user_noteTemp }
	} catch (err) {
		console.error(err.message)
		return { success: false, message: err.message, result: formated }
	}

}
