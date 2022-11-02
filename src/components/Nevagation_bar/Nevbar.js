import React, { useState } from 'react'
import "./Nevbar.scss"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBars, faPhone} from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom'
import {faWhatsapp} from '@fortawesome/free-brands-svg-icons'
import img1 from "../../images/login.jpeg"
import img2 from "../../images/login2-removebg-preview.png"
import img3 from "../../images/login.jpeg"






export default function Nevbar() {

const [move,setMove]=useState(true)
let [val,setVal]=useState(0)
    window.onscroll = function() {
        scrollFunction()
    };
    
 

    function scrollFunction() {
        if (window.innerWidth > 700) {
            var scroll_current = window.pageYOffset 
            console.log(scroll_current)
    
            if (scroll_current > val) {
                
                setMove(false)
            } else {
                setMove(true)
    
            }
    
            setVal(scroll_current)
            console.log(val,"after")
        }
    }



    return ( <> 
  
    < input type = "checkbox" id = 'so' />
     <label htmlFor="so">
        <FontAwesomeIcon icon={faBars} className="icon1"/>
    </label> 
    {move?
    < div className = 'header' >

    <div className="mubile-header">
        <div className="mubile-icon">
            <span>
                <img src={img2} width="50px" height="60px" alt=""/>
            </span>
            <span>
            ONE STOP SOLUTION
            </span>
        </div>
        
    </div>


     <ul className='unorder-list'>
        
        <li>HOME </li>
        <li>ABOUT</li>
        <li>CONTACT</li>
        <li>BLOG</li>
    
        <li>
            <ol className='header-hepline-box'>
                <li>
                    <FontAwesomeIcon icon={faPhone} className="icon2"/>&nbsp;&nbsp;  Helpline
                </li>
                <li>786 568 986</li>
            </ol>
        </li>
        <li><NavLink className="list" to="/Login">Login</NavLink></li>
    </ul>
    
 </div>:undefined}
   
    </>)
}
