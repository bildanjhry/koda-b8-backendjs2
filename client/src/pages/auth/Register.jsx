import { Link } from "react-router"
import { HiOutlineMail } from "react-icons/hi";
import { MdLockOutline } from "react-icons/md";

export default function Register(){
    return(
      <div className="w-screen bg-(--light) cent-content h-screen">
        <div className="rounded-xl bg-white shadow-md flex p-8 px-11 w-105 flex-col gap-1">
            <h6>pulse.</h6>
            <h4 className="mt-4 text-center">Register</h4>
            <p className="text-(--gray)/50 text-center">Join and discover cool things!</p>
            <form className="flex mt-5 flex-col gap-3 w-full">
                <div className="flex flex-col gap-1 relative">
                    <div className="h-12 cent-content text-(--gray)/50 w-10 absolute">
                        <HiOutlineMail/>
                    </div>
                    <input 
                    placeholder="Your fullname"
                    className="bg-(--light) outline-none rounded-md text-md pl-10 h-12"
                    type="email" required name="email" id="email" />
                </div>
                <div className="flex flex-col gap-1 relative">
                    <div className="h-12 cent-content text-(--gray)/50 w-10 absolute">
                        <HiOutlineMail/>
                    </div>
                    <input 
                    placeholder="Your email"
                    className="bg-(--light) outline-none rounded-md text-md pl-10 h-12"
                    type="email" required name="email" id="email" />
                </div>
                    <div className="flex flex-col gap-1 relative">
                    <div className="h-12 cent-content text-(--gray)/50 w-10 absolute">
                        <MdLockOutline/>
                    </div>
                    <input 
                    placeholder="Your Password"
                    className="bg-(--light) outline-none rounded-md text-md pl-10 h-12"
                    type="email" required name="email" id="email" />
                </div>
                <button className="w-full mt-5 h-12 rounded-md cent-content border-none 
                text-(--text-light) bg-(--primary) cursor-pointer">
                    Register
                </button>
                <div className="text-(--gray)/50 text-sm cent-content mt-3 gap-2">
                    <Link to={"/login"} className="text-blue-700">
                    Login
                    </Link>
                </div>
            </form>
        </div>
      </div>
    )
}