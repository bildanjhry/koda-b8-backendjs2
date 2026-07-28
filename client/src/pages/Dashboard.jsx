import { CiSearch } from "react-icons/ci";
import { LuCalendarClock } from "react-icons/lu";
import { FaRegStickyNote } from "react-icons/fa";
import { IoMdLogOut } from "react-icons/io";

export default function Dashboard() {
	return (
		<div className="w-screen flex relative overflow-x-hidden ">
			<aside className="w-[10%] flex flex-col fixed z-index-15 left-0 border-r 
      h-screen border-(--base)">
				<header className="h-20 w-full border-b border-(--base) cent-content">
					<div className="cent-content w-full flex-col">
						<p className="text-3xl font-black"><span className="">p</span>ulse.</p>
					</div>
				</header>
				<div className=" flex pt-10 flex-1 items-center flex-col">
					<button className="w-20 gap-2 text-(--gray)/60 h-20 border-2 cent-content 
            cursor-pointer flex-col rounded-md border-dashed border-(--gray)/40 ">
						<FaRegStickyNote />
						<p className="text-sm">Add</p>
					</button>
					<button className="cursor-pointer mt-auto w-full px-9 pb-10 bet-content 
          text-(--gray)/80 gap-1">
						<IoMdLogOut />
						<p>Log out</p>
					</button>
				</div>

			</aside>
			<main className="w-[90%] ml-[10%] flex flex-col relative ">
				<header className="w-[90%] left-[10%] fixed bg-white z-10 top-0 px-10 
        bet-content h-20 border-b border-(--base)">
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
						<p>My name</p>
					</div>
				</header>

				<main className="flex flex-col mt-25 px-10 pl-12 pb-10 w-full z-1">
					<h5 className="mb-6">All Notes</h5>
					<div className="pb-10 grid grid-cols-4 gap-6">
						<div className="h-100 bg-(--gray) text-(--light) shadow-[0px_4px_18px_-13px_rgba(0,0,0,0.1)] rounded-xl px-4">
							<header className="bet-content h-[15%] w-full border-b border-(--gray)/20">
								<h6>Coding</h6>
								<div className="bet-content gap-2">
									<span className="w-2.5 h-2.5 rounded-full bg-(--orange)/80"></span>
									<span className="w-2.5 h-2.5 rounded-full bg-(--orange)/80"></span>
									<span className="w-2.5 h-2.5 rounded-full bg-(--orange)/80"></span>
								</div>
							</header>
							<main className="h-[70%] py-3">
								<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
									Quia nobis consectetur nostrum error perferendis placeat, quod id possimus iusto aliquid.</p>
							</main>
							<footer className="h-[15%] bet-content border-t border-(--gray)/20 ">
								<div className="w-fit gap-2 bet-content">
									<LuCalendarClock />
									<p>20:00</p>
								</div>
							</footer>
						</div>
						<div className="h-100 bg-(--light) shadow-[0px_4px_18px_-13px_rgba(0,0,0,0.1)] rounded-xl px-4">
							<header className="bet-content h-[15%] w-full border-b border-(--gray)/20">
								<h6>Coding</h6>
								<div className="bet-content gap-2">
									<span className="w-2.5 h-2.5 rounded-full bg-(--orange)/80"></span>
									<span className="w-2.5 h-2.5 rounded-full bg-(--orange)/80"></span>
									<span className="w-2.5 h-2.5 rounded-full bg-(--orange)/80"></span>
								</div>
							</header>
							<main className="h-[70%] py-3">
								<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia nobis 
									consectetur nostrum error perferendis placeat, quod id possimus iusto aliquid.</p>
							</main>
							<footer className="h-[15%] bet-content border-t border-(--gray)/20 ">
								<div className="w-fit gap-2 bet-content">
									<LuCalendarClock />
									<p>20:00</p>
								</div>
							</footer>
						</div>
						<div className="h-100 bg-(--light) shadow-[0px_4px_18px_-13px_rgba(0,0,0,0.1)] rounded-xl px-4">
							<header className="bet-content h-[15%] w-full border-b border-(--gray)/20">
								<h6>Coding</h6>
								<div className="bet-content gap-2">
									<span className="w-2.5 h-2.5 rounded-full bg-(--orange)/80"></span>
									<span className="w-2.5 h-2.5 rounded-full bg-(--orange)/80"></span>
									<span className="w-2.5 h-2.5 rounded-full bg-(--orange)/80"></span>
								</div>
							</header>
							<main className="h-[70%] py-3">
								<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia nobis consectetur 
									nostrum error perferendis placeat, quod id possimus iusto aliquid.</p>
							</main>
							<footer className="h-[15%] bet-content border-t border-(--gray)/20 ">
								<div className="w-fit gap-2 bet-content">
									<LuCalendarClock />
									<p>20:00</p>
								</div>
							</footer>
						</div>
						<div className="h-100 bg-(--light) shadow-[0px_4px_18px_-13px_rgba(0,0,0,0.1)] rounded-xl px-4">
							<header className="bet-content h-[15%] w-full border-b border-(--gray)/20">
								<h6>Coding</h6>
								<div className="bet-content gap-2">
									<span className="w-2.5 h-2.5 rounded-full bg-(--orange)/80"></span>
									<span className="w-2.5 h-2.5 rounded-full bg-(--orange)/80"></span>
									<span className="w-2.5 h-2.5 rounded-full bg-(--orange)/80"></span>
								</div>
							</header>
							<main className="h-[70%] py-3">
								<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia nobis consectetur 
									nostrum error perferendis placeat, quod id possimus iusto aliquid.</p>
							</main>
							<footer className="h-[15%] bet-content border-t border-(--gray)/20 ">
								<div className="w-fit gap-2 bet-content">
									<LuCalendarClock />
									<p>20:00</p>
								</div>
							</footer>
						</div>
						<div className="h-100 bg-(--light) shadow-[0px_4px_18px_-13px_rgba(0,0,0,0.1)] rounded-xl px-4">
							<header className="bet-content h-[15%] w-full border-b border-(--gray)/20">
								<h6>Coding</h6>
							</header>
							<main className="h-[70%] py-3">
								<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia nobis consectetur nostrum 
									error perferendis placeat, quod id possimus iusto aliquid.</p>
							</main>
							<footer className="h-[15%] bet-content border-t border-(--gray)/20 ">
								<div className="w-fit gap-2 bet-content">
									<LuCalendarClock />
									<p>20:00</p>
								</div>
							</footer>
						</div>
					</div>
				</main>
			</main>

		</div>
	)
}