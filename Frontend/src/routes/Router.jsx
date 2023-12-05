import { createBrowserRouter } from "react-router-dom"
import Home from "../pages/Home"
import Login from "../pages/Login"
import { Layout } from "./Layout"

export const Router = createBrowserRouter([
  {
    path:"/",
    element: <Layout/>,
    errorElement : <div>Erreur</div>,
    children: [
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"login",
        element:<Login/>
      }
    ]
  }
])