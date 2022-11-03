
// import React, { useRef } from 'react';
// import emailjs from '@emailjs/browser';
import "./home.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocation,
  faEnvelope,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

export default function Contact() {

    // const form = useRef();

    // const sendEmail = (e) => {
    //   e.preventDefault();
  
    //   emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
    //     .then((result) => {
    //         console.log(result.text);
    //     }, (error) => {
    //         console.log(error.text);
    //     });
    // };
  







  return (
    <>
         <section id="contact" className="about-us-main-container">
        <i>
          {" "}
          <span className="sec-home-headding"> Contact </span>
        </i>
        <div className="home-location-contact-container">
          <div className="contact-us-page-form">
            <form action="https://formspree.io/f/mvoyvybj"
              method="POST">
              <div className="contact-forme-row">
                <div>
                  <label htmlFor="name">Name </label>
                  <br />
                  <input type="text" name="name" required id="name" placeholder="Enter your name" />
                </div>
                <div>
                  <label htmlFor="phone">Phone</label>
                  <br />
                  <input type="text" name="phone" required id="phone" placeholder="123456789" />
                </div>
              </div>

              <div className="contact-forme-row">
                <div>
                  <label htmlFor="email">Email </label>
                  <br />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="onestopsollution@gmail.com"
                  />
                </div>
                <div>
                  <label htmlFor="subj">Subject</label>
                  <br />
                  <input type="text" name="subject" required id="subj" placeholder="..." />
                </div>
              </div>

              <div className="contact-form-massage-row">
                <label htmlFor="emassage">Massage </label>
                <br />
                <textarea
                  placeholder="Your massage"
                  
                  name="massage"
                  required
                  id="massage"
                  rows="7"
                ></textarea>
              </div>
              <input type="submit" value="Send" />
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
    </>
  )
}
