import React, { useState } from 'react'
import "./Nevbar.scss"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBars, faPhone,faHome,faBlog,faContactCard,faSign,faCircleInfo,faUserGraduate} from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom'
import {faWhatsapp} from '@fortawesome/free-brands-svg-icons'
import img1 from "../../images/login.jpeg"
import img2 from "../../images/icons/logo.webp"
import img3 from "../../images/login.jpeg"
import {HashLink as Link } from 'react-router-hash-link'






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

    
        
         
                <img className='header-logo' src={img2}  alt=""/>

                <div className="header-right-profile">
                    <FontAwesomeIcon icon={faUserGraduate} className="icon2"/>&nbsp; Profile
                </div>
           

        
    


     <ul className='unorder-list'>
        
        <li> <Link smooth to="#"> <FontAwesomeIcon icon={faHome} className="icon2"/>&nbsp; HOME </Link></li>
        <li> <Link smooth to="#about"> <FontAwesomeIcon icon={faCircleInfo} className="icon2"/>&nbsp; ABOUT</Link></li>
        <li> <Link smooth to="#contact" > <FontAwesomeIcon icon={faContactCard} className="icon2"/>&nbsp; CONTACT</Link></li>
        <li>  <Link smooth to="#blog"><FontAwesomeIcon icon={faBlog} className="icon2"/>&nbsp; BLOG</Link></li>
    
        {/* <li>
            
                    <FontAwesomeIcon icon={faPhone} className="icon2"/>&nbsp; Helpline
                
        </li> */}
        <li>  <NavLink className="list" to="/Login"><FontAwesomeIcon icon={faSign} className="icon2"/>&nbsp;Login</NavLink></li>
    </ul>
    
 </div>:undefined}
   
    </>)
}
