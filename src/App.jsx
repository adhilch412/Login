import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Registration from './componenr/Register'
import Login from './componenr/Login'
import Home from './componenr/Home'

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Registration" element={<Registration/>}/>
        <Route path="/Login" element={<Login/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App