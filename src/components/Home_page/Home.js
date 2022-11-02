import React from 'react'
import "./home.scss"
import { NavLink } from 'react-router-dom'
import Login from "../login_page/Login"
import Nevbar from '../Nevagation_bar/Nevbar'
import Typewriter from "typewriter-effect";
import img from "../../images/login.jpeg"
export default function Home() {
  return (
    <>
    <Nevbar/>


    <section className='home-main-section'>
        <div className="home-internal-container">
        <h3>ONE SOTOP SOLUTION ONE DESTINATION FOR EVERY SOLUTION</h3>
        <h4>We offer the best   {" "}
           
            
            <Typewriter
  options={{
    strings: [' Cources.', ' Notes.',' Guid.',' Previous year Q-paper.',' 2nd hand Books.'],
    autoStart: true,
    loop: true,
    delay:200,
    pauseFor:1000,
    deleteSpeed:'natural',
    cursorClassName:'Typewriter__cursor'
  }}
/>
            
     
        </h4>

        <button className='home-get-started'>Let's Start !</button>
        </div>

    </section>
    



    </>
  )
}
