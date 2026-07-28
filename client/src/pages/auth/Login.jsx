import { Link, useNavigate } from "react-router"
import { HiOutlineMail } from "react-icons/hi";
import { MdLockOutline } from "react-icons/md";

export default function Login(){
    const navigate = useNavigate()
    function handleLogin(e){
        e.preventDefault()
        const data = new FormData(e.target)
        const formated = Object.fromEntries(data.entries())
        navigate("/")
    }

    return(
      <div className="w-screen bg-(--light) cent-content h-screen">
        <div className="rounded-xl bg-white shadow-md flex p-8 px-11 w-105 flex-col gap-1">
            <h6>pulse.</h6>
            <h4 className="mt-4 text-center">Login</h4>
            <p className="text-(--gray)/50 text-center">Welcome back!</p>
            <form 
            onSubmit={handleLogin}
            className="flex mt-5 flex-col gap-3 w-full">
                <div className="flex flex-col gap-1 relative">
                    <div className="h-12 cent-content text-(--gray)/50 w-11 text-md absolute">
                        <HiOutlineMail/>
                    </div>
                    <input 
                    placeholder="Enter your email"
                    className="bg-(--light) outline-none pt-1 rounded-md text-md pl-12 h-12"
                    type="email" required name="email" id="email" />
                </div>
                    <div className="flex flex-col gap-1 relative">
                    <div className="h-12 cent-content text-(--gray)/50 w-11 text-md absolute">
                        <MdLockOutline/>
                    </div>
                    <input 
                    placeholder="Your Password"
                    className="bg-(--light) outline-none pt-1 rounded-md text-md  pl-12 h-12"
                    type="password" required name="password" id="password" />
                </div>
                <button 
                type="submit"
                className="w-full mt-5 h-12 rounded-md cent-content border-none 
                text-(--text-light) bg-(--primary) cursor-pointer">
                    Login
                </button>
                <div className="text-(--gray)/50 text-sm cent-content mt-3 gap-2">
                    <p>Dont have Account?</p>
                    <Link to={"/register"} className="text-blue-700">
                    Create One
                    </Link>
                </div>
            </form>
        </div>
      </div>
    )
}