import { createBrowserRouter, RouterProvider} from "react-router"
import Dashboard from "./pages/Dashboard"
import Login from "./pages/auth/Login"
import Register from "./pages/auth/Register"

const router = createBrowserRouter([
  {
    path:"/",
    element:<Dashboard/>
  },
  {
    path:"/login",
    element:<Login/>
  },
  {
    path:"/register",
    element:<Register/>
  },

])

export default function App() {
  return (
    <RouterProvider router={router}/>
  )
}