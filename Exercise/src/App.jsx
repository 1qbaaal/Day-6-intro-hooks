import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Outlet } from 'react-router-dom'
import Exercise from './pages/note'

function App() {

  return (
    <>
    <Exercise />
     <Outlet />
    </>
  )
}

export default App
