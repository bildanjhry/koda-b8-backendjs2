import { CiSearch } from "react-icons/ci";
import { LuCalendarClock } from "react-icons/lu";
import { FaRegStickyNote } from "react-icons/fa";
import { IoMdLogOut } from "react-icons/io";
import { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";
import { useNavigate } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { userLogout } from "../redux/reducer/session.js";
import { api, apiNO_PAY } from "../libs/fetch/fetch";
import libsDate from "../libs/date/id_times.js";

import ModalNotes from "../components/ModalNotes.jsx";

export default function Dashboard() {
	const [data, setData] = useState([])
	const [notes, setNotes] = useState([])
	const [showPop, setShowPop] = useState(false)
	const [refresh, setRefresh] = useState(false)
	const [notePin, setNotePin] = useState(0)
	const [username, setUsername] = useState("User	")
	const [dataNote, setDataNote] = useState({
		title: "",
		plan: ""
	})
	const dataSession = useSelector(state => state.session)
	const id = dataSession.id
	const navigate = useNavigate()
	const dispatch = useDispatch()

	useEffect(() => {
		if (!dataSession.token) {
			navigate("/login")
		}
	}, [dataSession])

	useEffect(() => {
		async function getData() {
			try {
				const res = await apiNO_PAY(`http://localhost:8080/users/${id}`, dataSession.token, "GET")
				setData(res.results)
			} catch (err) {
				console.error(err.message)
			} finally {
				if (refresh) setRefresh(false)
			}
		}

		async function getNotes() {
			try {
				const res = await apiNO_PAY(`http://localhost:8080/notes/${id}`, dataSession.token, "GET")
				const data = res.results
				const pinned = data.filter((item) => item.pin === 1)
				if(pinned.length > 0){
					const rest = data.filter((item) => item.pin === 0)
					setNotes([...pinned, ...rest])
				} else {
					setNotes(data)
				}
			} catch (err) {
				console.error(err.message)
			} finally {
				if (refresh) setRefresh(false)
			}
		}

		getData()
		getNotes()
	}, [refresh, setRefresh])

	async function handleSubmit(e) {
		try {
			e.preventDefault()
			const data = new FormData(e.target)
			let urlPath = `http://localhost:8080/notes/${id}`, method = "POST"
			data.append("pin", notePin)

			if (dataNote.id) {
				urlPath = `http://localhost:8080/notes/${id}/${dataNote.id}`
				method = 'PATCH'
			}
			const formated = new URLSearchParams(data)
			const res = await api(urlPath, method, dataSession.token, formated.toString())
			setRefresh(true)
			setShowPop(false)
			setDataNote({})
			setNotePin(0)

		} catch (err) {
			console.error(err.message)
		}
	}

	function handleChooseCard(item) {
		setNotePin(item.pin)
		setDataNote({ id: item.id, title: item.title, plan: item.plan, pin: item.pin })
		setShowPop(true)
	}

	async function handleDelete() {
		const res = await apiNO_PAY(`http://localhost:8080/notes/${id}/${dataNote.id}`, dataSession.token, "DELETE")
		if (res.success) {
			setRefresh(true)
			setShowPop(false)
			setDataNote({})
		}
	}

	return (
		<div className="w-screen flex relative overflow-x-hidden ">
			{showPop &&
				<ModalNotes
					handleSubmit={handleSubmit}
					dataNote={dataNote}
					setNotePin={setNotePin}
					setShowPop={setShowPop}
					handleDelete={handleDelete}
				/>
			}

			<aside
				className="w-[10%] flex flex-col fixed z-index-15 left-0 border-r h-screen border-(--base)">
				<header className="h-20 w-full border-b border-(--base) cent-content">
					<div className="cent-content w-full flex-col">
						<p className="text-3xl font-black"><span className="">p</span>ulse.</p>
					</div>
				</header>
				<div className="flex pt-10 flex-1 items-center flex-col">
					<button
						onClick={() => {
							setShowPop((prev) => !prev)
							setDataNote({
								title: "",
								plan: ""
							})
						}}
						className="w-20 gap-2 text-(--gray)/60 h-20 
						border-2 cent-content cursor-pointer flex-col rounded-md border-dashed border-(--gray)/40 ">
						<FaRegStickyNote />
						<p className="text-sm">Add</p>
					</button>
					<button
						type="button"
						onClick={() => {
							dispatch(userLogout())
							navigate("/login")
						}}
						className="cursor-pointer 
						mt-auto w-full px-9 pb-10 bet-content text-(--gray)/80 gap-1">
						<IoMdLogOut />
						<p>Log out</p>
					</button>
				</div>

			</aside>
			<main className="w-[90%] ml-[10%] flex flex-col relative ">
				<header
					className="w-[90%] left-[10%] fixed bg-white z-10 top-0 
				px-10 bet-content h-20 border-b border-(--base)">
					<form action="" className="relative">
						<div className="absolute cent-content w-12 text-slate-600 text-xl h-full">
							<CiSearch />
						</div>
						<input
							placeholder="Search a note"
							className="bg-(--light) h-12 outline-none w-75 pl-12 rounded-md"
							type="text" />
					</form>
					<div className="bet-content gap-3">
						<div className="w-10 bg-(--base) h-10 rounded-full">
						</div>
						<p>{data[0]?.name.split(" ")[0]}</p>
					</div>
				</header>

				<main className="flex flex-col mt-25 px-10 pb-10 w-full z-1">
					<h5 className="mb-6">All Notes</h5>
					<div className="pb-1 grid grid-cols-4 gap-6 overflow-x-hidden">
						{notes?.map((item) => (
							<div
								key={item.id}
								onClick={() => { handleChooseCard(item) }}
								className={`h-100 
								${item.pin ? 'bg-(--primary) text-(--light) hover:bg-(--primary)/90' : 'bg-(--light) hover:bg-(--gray)/20'} 
								shadow-[0px_4px_18px_-13px_rgba(0,0,0,0.1)] cursor-pointer  rounded-xl px-4`}>
								<header className={`bet-content h-[15%] w-full border-b 
									${item.pin ? 'border-(--light)/40' : 'border-(--gray)/20'}`}>
									<h6>{item.title.substring(0, 20)}</h6>
									<div className="bet-content gap-1">
										<span className="w-2.5 h-2.5 rounded-full bg-(--orange)/80"></span>
										<span className="w-2.5 h-2.5 rounded-full bg-(--orange)/80"></span>
										<span className="w-2.5 h-2.5 rounded-full bg-(--orange)/80"></span>
									</div>
								</header>
								<main className="h-[70%] py-3">
									<p>{item.plan.substring(0, 310)}</p>
								</main>
								<footer className={`h-[15%] bet-content border-t 
									${item.pin ? 'border-(--light)/40' : 'border-(--gray)/20'}`}>
									<div className="w-fit gap-2 bet-content">
										<LuCalendarClock />
										<p>{libsDate.getTimeDateSimple(item.updated_at)}</p>
									</div>
								</footer>
							</div>

						))}
					</div>
				</main>
			</main>

		</div>
	)
}