import { IoClose } from "react-icons/io5";
import { AiOutlineDelete } from "react-icons/ai";

export default function ModalNotes({handleSubmit, dataNote, setShowPop}) {
	return (
		<div className="h-screen w-screen bg-(--base)/60 cent-content z-100 fixed">
			<div className="w-145 bg-white rounded-xl h-120 shadow-md p-7">
				<form
					onSubmit={handleSubmit}
					action="" className="w-full h-full flex flex-col gap-4 relative">
					<button
						onClick={() => setShowPop((prev) => !prev)}
						className="absolute cent-content bg-(--orange)
            text-(--light) shadow-md rounded-full h-6 w-6 right-0 cursor-pointer">
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
							title="Delete"
							className="bg-red-600 w-10 rounded-md cursor-pointer 
							mt-5 h-10 cent-content text-(--light)"
							type="button">
							<AiOutlineDelete/>
						</button>	
						<button
							className="bg-(--primary) w-20 rounded-md cursor-pointer 
							mt-5 h-10 cent-content text-(--light)"
							type="submit">
							Save
						</button>

					</div>
				</form>
			</div>
		</div>
	)
}