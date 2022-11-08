import React from "react";
import "./home.scss";
import { NavLink } from "react-router-dom";
import Login from "../login_page/Login";
import Nevbar from "../Nevagation_bar/Nevbar";
import Contact from "./Contact";
import Blog from "../Blog_page/Blog"
import Typewriter from "typewriter-effect";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import img from "../../images/icons/logo-full.jpeg"
import {HashLink as Link } from 'react-router-hash-link'

// import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faInstagram,
  faGithub,
  faTelegram,
  faTwitter,
  faYoutube,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";

export default function Home() {
  const Offer = [
    { name: "Notes", img: "study", link:"/Notes"},
    { name: "Courses", img: "6262752089315739825" ,link:"/Courses" },
    { name: "Question Paper", img: "6262752089315739826", link:"/QuesPaper" },
    { name: "Buy/Sell Books", img: "6262752089315739827" , link:"/BuysellBook"},
  ];

  return (
    <>
      <Nevbar />
      {/* Home First page start */}
      <section className="home-main-section">
        <div className="home-internal-container">
          <h3>ONE STOP SOLUTION</h3>
          <h5>
            {" "}
            <i>One destination for every Solution</i>
          </h5>
          <h4>
            We Offer :{" "}
            <Typewriter
              options={{
                strings: [
                  " Relevant Courses.",
                  " Notes.",
                  " Peer Mentoring.",
                  "Previous Year Q-Paper.",
                  " Resell/Buy  Books.",
                ],
                autoStart: true,
                loop: true,
                delay: 100,
                pauseFor: 1000,
                deleteSpeed: "natural",
                cursorClassName: "Typewriter__cursor",
              }}
            />
          </h4>
          <div className="home-button-container">
          <a href="#offer"> 
            <button className="home-get-started">  Let's Start !</button>
            </a>
          </div>
        </div>
      </section>
      {/* Home First page End */}

      {/* we offer provided start */}
      <section id="offer" className="home-second-section-main-container">
        <i>
          {" "}
          <span className="sec-home-headding"> We Offer : </span>
        </i>

        <div className="sec-home-we-provided">
          {Offer &&
            Offer.map((item, i) => {
              return (
            
                <div key={i} className="solution-box">
                    <NavLink className="ankertolink" to={item.link}>
                  <span>{item.name}</span>
                  <span>
                    <img
                      src={require("../../images/icons/" + item.img + ".webp")}
                      alt="icon"
                    />
                  </span>
                  </NavLink>
                </div>
               
              );
            })}
        </div>
      </section>
      {/* we offer provided End */}

      {/*About page start  */}
      <section id="about" className="about-us-main-container">
        <i>
          {" "}
          <span className="sec-home-headding"> About us </span>
        </i>
        <div className="about-content-container">
          <div>
            <p><i> &nbsp;&nbsp;&nbsp;&nbsp;We at<b> “One Stop Solution”</b> strive to offer all the student requirements like finding relevant and updated notes, courses to enhance skills, past years question papers to effectively prepare for the exams etc at one single destination. The solution provides a platform for students to buy and sell books among the student community. The platform also provides students with latest updates and deadlines about important forms, scholarships, internships and other career enhancing opportunities. "One Stop Solution" is a centralized platform where students can get an easy access of resources and can improve their skill set. Our platform offers reviews and recommendation to other students on notes, books and courses.</i></p>
          </div>
          <div>
            <div className="imgae-frame"><img src={img} alt="" /></div>
          </div>
        </div>
      </section>
      {/*About page End  */}

      {/* Bloag start */}

      
        {/* <Blog/> */}
   

      {/* blog End */}

      {/*Contact page start  */}
        <Contact/>
      {/*Contact page End  */}

      {/* Footer start */}
      <footer className="home-footer">
        <div className="footer-Copyright">
          <span>© Copyright OneStopSolution. All Rights Reserved</span>
          <span>
            <FontAwesomeIcon className="footer-icon" icon={faTelegram} />
            <FontAwesomeIcon className="footer-icon" icon={faFacebook} />
            <FontAwesomeIcon className="footer-icon" icon={faGithub} />
            <FontAwesomeIcon className="footer-icon" icon={faInstagram} />
            <FontAwesomeIcon className="footer-icon" icon={faTwitter} />
            <FontAwesomeIcon className="footer-icon" icon={faYoutube} />
          </span>
        </div>
      </footer>
    </>
  );
}
