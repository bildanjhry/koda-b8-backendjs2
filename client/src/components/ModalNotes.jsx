import { IoClose } from "react-icons/io5";
import { AiOutlineDelete } from "react-icons/ai";
import { LuPin } from "react-icons/lu";
import { VscSaveAs } from "react-icons/vsc";
import { RiDeleteBin6Line } from "react-icons/ri";

import { useState } from "react";

export default function ModalNotes({ handleSubmit, dataNote, setNotePin, handleDelete, setShowPop }) {
	const [pin, setPin] = useState(dataNote?.pin || 0)

	return (
		<div className="h-screen w-screen bg-(--base)/60 cent-content z-100 fixed">
			<div className="w-145 bg-white rounded-xl h-120 shadow-md p-7">
				<form
					onSubmit={handleSubmit}
					action="" className="w-full h-full flex flex-col gap-4 relative">
					<button
						type="button"
						onClick={handleDelete}
						className={`absolute bg-(--base) cent-content 
						shadow-md h-9 w-9 cursor-pointer rounded-full right-24`}
					>
						<RiDeleteBin6Line/>
					</button>
					<button
						type="button"
						onClick={() => {
							setPin(prev => !prev)
							setNotePin(prev => prev === 1 ? prev = 0 : prev = 1 )
						}}
						className={`absolute ${pin ? 'bg-(--primary)' : 'bg-(--base)'} cent-content 
						shadow-md h-9 w-9 cursor-pointer rounded-full right-12`}
					>
						<LuPin className={`${pin && 'text-(--light)'}`} />
					</button>
					<button
						type="button"
						onClick={() => setShowPop((prev) => !prev)}
						className="absolute cent-content bg-(--orange)
            text-(--light) shadow-md rounded-full h-9 w-9 right-0  cursor-pointer">
						<IoClose />
					</button>
					<input
						placeholder="Title"
						autoFocus
						defaultValue={dataNote.title || ""}
						type="text" id="title" name="title"
						className="border-b py-4 border-(--gray)/40 text-2xl outline-none w-full font-semibold" />
					<textarea
						placeholder="Your plan..."
						defaultValue={dataNote.plan || ""}
						name="plan" id="plan" className="w-full outline-none" rows={11} cols="20"></textarea>
					<div className="flex w-full items-center justify-end gap-3">
						<button
							className="bg-(--primary) w-15 rounded-full cursor-pointer 
							mt-5 h-15 cent-content shadow-md text-(--light)"
							type="submit">
							<VscSaveAs />
						</button>

					</div>
				</form>
			</div>
		</div>
	)
}