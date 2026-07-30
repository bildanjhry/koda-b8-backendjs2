import { createBrowserRouter, RouterProvider} from "react-router"
import { store, persistor } from "./redux/store"
import { PersistGate } from "redux-persist/integration/react"
import { Provider } from "react-redux"

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
    <PersistGate persistor={persistor}>
      <Provider store={store}>
        <RouterProvider router={router}/>
      </Provider>
    </PersistGate>
  )
}