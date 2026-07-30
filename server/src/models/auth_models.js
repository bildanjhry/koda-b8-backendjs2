import fs from "node:fs"

export function create(data) {
	let formated = []
	try {
		const date = new Date()
		const newDate = `${date.getDate()} ${date.getMonth()} ${date.getFullYear()}, ${date.getHours()}:${date.getMinutes()}`

		if (fs.existsSync("./server/src/models/users.json")) {
			const file = fs.readFileSync("./server/src/models/users.json", 'utf-8')
			formated = JSON.parse(file)
			if (formated.find((item) => item.email === data.email)) {
				throw new Error("Email already being used")
			}
		}
		let users = []
		users = [...formated,
		{
			id: formated.length + 1,
			...data,
			notes: [],
			created_at: newDate,
			updated_at: newDate
		}]
		fs.writeFileSync("./server/src/models/users.json", JSON.stringify(users))
		return {
			success: true, message: "Success Create Account", result: {
				id: formated.length + 1,
				name: data.name,
				emai: data.email
			}
		}
	} catch (err) {
		console.error(err.message)
		return { success: false, message: err.message, result: formated }
	}
}

export function findUser(data) {
	let formated = []
	try {
		if (!(fs.existsSync("./server/src/models/users.json"))) {
			throw new Error("Users are empty")
		}
		const file = fs.readFileSync("./server/src/models/users.json", 'utf-8')
		formated = JSON.parse(file)
		const user = formated.filter((item) => item.email === data.email && item.password === data.password)
		if (!user) {
			throw new Error("Email or password wrong")
		}
		return {
			success: true, message: "Success Login", result: {
				id: user[0].id,
			}
		}
	} catch (err) {
		console.error(err.message)
		return { success: false, message: err.message, result: formated }
	}
}