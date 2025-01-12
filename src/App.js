import { createBrowserRouter } from "react-router-dom"
import Home from "./Pages/Home"
import CarDetail from "../src/Pages/CarDetail"
import Dashboard from "../src/Pages/Dashboard"
import New from "../src/Pages/Dashboard/New"
import Login from "../src/Pages/Login"
import Layout from "../src/components/Layout"

export const router = createBrowserRouter([
  {
    element: <Layout />, // Layout das paginas que possuem header.
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/car/:id',
        element: <CarDetail />
      },
      {
        path: '/dashboard',
        element: <Dashboard />
      },
      {
        path: '/new',
        element: <New />
      },
    ]
  },
  {
    path: '/login',
    element: <Login />
  }
])