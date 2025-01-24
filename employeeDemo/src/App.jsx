import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Employee } from './components/Employee'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { NavBar } from './components/NavBar'
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<NavBar/>}/>
        <Route path="/employees" element={<Employee />} />
      </Routes>
    </BrowserRouter>

  )
}

export default App
