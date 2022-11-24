import React from 'react'
import Login from "./components/login_page/Login"
import Home from './components/Home_page/Home'
import Courses from "./components/We_Offer/Courses/Courses_page"
import Notes_page from "./components/We_Offer/Notes/Notes_page"
import Question_paper from "./components/We_Offer/Question_paper/Question_paper"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Buy_sell_books from './components/We_Offer/BuySellBooks/Buy_sell_books'
import Blog from './components/Blog_page/Blog'
import Profile from './components/profile/Profile'

export default function () {
  return (
    <>
    <BrowserRouter>
    <Routes>
        <Route path='/Login' element={  <Login/>}/>
        <Route path='/Home' element={<Home/>} />
        <Route path='/*' element={<Home/>} />
        <Route path='/Courses' element={<Courses/>} />
        <Route path='/Notes' element={<Notes_page/>} />
        <Route path='/QuesPaper' element={<Question_paper/>} />
        <Route path='/BuysellBook' element={<Buy_sell_books/>} />
        <Route path='/Blog' element={<Blog/>} />
        <Route path='/home/profile' element={<Profile/>}/>
    </Routes>
    </BrowserRouter>
      
    </>
  )
}
