import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Employee } from './components/Employee'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { NavBar } from './components/NavBar'
import { EmployeeForm } from './components/EmployeeForm'
import { Department } from './components/Department'
function App() {

  return (
    <BrowserRouter>
    <NavBar/>
      <Routes>
        <Route path="/departments" element={<Department/>}/>
        <Route path="/" element={<Employee/>} />
        <Route path="/newEmployee" element={<EmployeeForm/>} />
        <Route path="/employees" element={<Employee />} />
        <Route path="/updateEmployee/:id" element={<EmployeeForm/>} />
      </Routes>
    </BrowserRouter>

  )
}

export default App
