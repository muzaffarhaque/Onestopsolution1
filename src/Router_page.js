import React from 'react'
import Login from "./components/login_page/Login"
import Home from './components/Home_page/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

export default function () {
  return (
    <>
    <BrowserRouter>
    <Routes>
        <Route path='/Login' element={  <Login/>}/>
        <Route path='/Home' element={<Home/>} />
        <Route path='/*' element={<Home/>} />
    </Routes>
    </BrowserRouter>
      
    </>
  )
}
