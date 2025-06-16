import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import RootLayout from './RootLayout'
import Home from './pages/Home'
import AllServices from './pages/AllServices'
import BecomeContractor from './pages/BecomeContractor'
import Blog from './pages/Blog'
import Login from './pages/Login'
import Register from './pages/Register'
import RegisterClient from './pages/RegisterClient'

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />, // Layout หลักที่มี Header, Footer
    children: [
      { index: true, element: <Home /> },
      { path: "services", element: <AllServices /> },
      { path: "become-contractor", element: <BecomeContractor /> },
      { path: "blog", element: <Blog /> },
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },
      { path: "register-client", element: <RegisterClient /> },
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)