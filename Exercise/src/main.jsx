import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'
import Home from './pages/home/index.jsx'
import Exercise from './pages/note/index.jsx'


const route = createBrowserRouter([{
  element: <App />, 
  children: [{
    path: '/', 
    element: <Home />
  },
  {
    path: '/note', 
    element: <Exercise />
  },
]
}])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={route} />
  </React.StrictMode>,
)
