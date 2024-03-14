import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'
import Home from './pages/home/index.jsx'
import Login from './pages/login/index.jsx'
import Post from './pages/posts/index.jsx'

const router = createBrowserRouter([
  {
    element: <App />,
    children:[
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/post',
        element: <Post />,
      },

    ]

}])



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
