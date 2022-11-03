import React from "react";
import "./home.scss";
import { NavLink } from "react-router-dom";
import Login from "../login_page/Login";
import Nevbar from "../Nevagation_bar/Nevbar";
import Typewriter from "typewriter-effect";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocation,
  faEnvelope,
  faPhone
} from "@fortawesome/free-solid-svg-icons";
// import { library } from '@fortawesome/fontawesome-svg-core'
import {faInstagram,faGithub,faTelegram,faTwitter,faYoutube,faFacebook} from '@fortawesome/free-brands-svg-icons'

export default function Home() {
  const Offer = [
    { name: "Notes", img: "study" },
    { name: "Courses", img: "6262752089315739825" },
    { name: "Question Paper", img: "6262752089315739826" },
    { name: "Buy/Sell Books", img: "6262752089315739827" },
  ];
 
  return (
    <>
      <Nevbar  />
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
                  "Previous Year Question Paper.",
                  " Resell & Buy Used Books.",
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
            <button className="home-get-started">Let's Start !</button>
          </div>
        </div>
      </section>
{/* Home First page End */}



{/* we offer provided start */}
      <section className="home-second-section-main-container">
        <i>
          {" "}
          <span className="sec-home-headding"> We Offer : </span>
        </i>

        <div className="sec-home-we-provided">
          {Offer &&
            Offer.map((item, i) => {
              return (
                <div key={i} className="solution-box">
                  <span>{item.name}</span>
                  <span>
                    <img
                      src={require("../../images/icons/" + item.img + ".webp")}
                      alt="icon"
                    />
                  </span>
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
      </section>
{/*About page End  */}


{/*Contact page start  */}
      <section id="contact" className="about-us-main-container">
        <i>
          {" "}
          <span className="sec-home-headding"> Contact </span>
        </i>
        <div className="home-location-contact-container">


          <div className="contact-us-page-form">

            <form action="">

              <div className="contact-forme-row">
                <div>
              <label htmlFor="name">Name </label><br/>
              <input type="text" id="name" placeholder="Enter your name"/>
              </div>
              <div>
              <label htmlFor="phone">Phone</label><br/>
              <input type="text" id="phone" placeholder="123456789"/>
              </div>
              </div>

              <div className="contact-forme-row">
                <div>
              <label htmlFor="email">Email </label><br/>
              <input type="email" id="email" placeholder="onestopsollution@gmail.com"/>
              </div>
              <div>
              <label htmlFor="subj">Subject</label><br/>
              <input type="text" id="subj" placeholder="..."/>
              </div>
              </div>

              <div className="contact-form-massage-row">
              <label htmlFor="emassage">Massage </label><br/>
                <textarea placeholder="Your massage" name="" id="massage"  rows="7"></textarea>
              </div>

            </form>

          </div>


          <div className="contact-us-location">
            <ul>
              <li>
                <div className="contact-icon-name">
                  <FontAwesomeIcon icon={faPhone} className="contact-icon" />{" "}
                  <span>
                    {" "}
                    Call : <p>12345678</p>
                  </span>
                </div>
              </li>
              <li>
                <div className="contact-icon-name">
                  <FontAwesomeIcon icon={faEnvelope} className="contact-icon" />
                  <span>
                    {" "}
                    Email :<p>onestopsolution@gmail.com</p>
                  </span>
                </div>
              </li>
              <li>
                <div className="contact-icon-name">
                  <FontAwesomeIcon icon={faLocation} className="contact-icon" />
                  <span>
                    {" "}
                    Location :<p>Taj-Reendency,Jalan-nager Aurangabad,431001</p>
                  </span>
                </div>
              </li>
            </ul>
          </div>


        </div>
      </section>
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
