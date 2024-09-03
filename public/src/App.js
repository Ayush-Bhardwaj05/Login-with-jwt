import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './Pages/Login'
import Secret from './Pages/Secret'
import Register from './Pages/Register'
import "react-toastify/ReactToastify.css"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/register" element={<Register/>} />
        <Route exact path="/login" element={<Login/>} />
        <Route exact path="/" element={<Secret/>} />

      </Routes>
    </BrowserRouter>
  );
}
