import React from 'react'
import "./courses.scss"
import img from "../../../images/icons/6262752089315739825.webp"
import {useNavigate,NavLink,Link, Navigate} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft,faSearch,faPlus,faTimes } from '@fortawesome/free-solid-svg-icons'
// import { faTimes} from '@fortawesome/fontawesome-svg-core'
import { useState } from 'react';

export default function Courses_page() {
  const navigate = useNavigate();
  let [close,setClose]=useState(false)
  let [courceinput,setCourceinput]=useState({name:"",courcename:"",link:""})
  let {name,courcename,link}=courceinput;
  let [serch,setSerch]=useState()
 



function corsesinputdata(e){
  setCourceinput({...courceinput,[e.target.name]:e.target.value})
  console.log(courceinput)
}
function coursadd(e){
  e.preventDefault();
  console.log(courceinput)
  setClose(!close)
}

  return (
    <div className='main-courses-container'>
        <div className="top-hedder-back-frame">
          <FontAwesomeIcon icon={faArrowLeft} title="Back" onClick={() => navigate(-1)} className="notes-page-back-icon back-icon"/> <span>-: Courses :-</span>        
        </div>
         {/* Courses form input box */}
         <div className={close?"courses-input-box":"frame-off"}>
          <FontAwesomeIcon icon={faTimes} onClick={()=>setClose(!close)} className="cancel-icon"/>
      <form onSubmit={coursadd} >
        <label htmlFor="name">Name :<br/>
          <input type="text" required placeholder='Aliex Zender' id='name' name='name' value={name} onChange={corsesinputdata} />
        </label>
        <label htmlFor="courcename"> Cource Name :<br/>
          <input type="text" required placeholder='Artificial Intelligence' name='courcename' id='courcename' value={courcename} onChange={corsesinputdata}/>
        </label>
        <label htmlFor="link"> Cource Link :<br/>
          <input type="text" required id='link' name='link' placeholder='https//wwww.courseslink.com' value={link} onChange={corsesinputdata}/>
        </label>
        <button type='submit'className='cource-button'>Add Courses</button>
      </form>
         </div>
        {/* courses frome input box End */}


        <div className="search-and-addCourses-cantainer">
          <div className="serch-box-frame">
          <span className='serch-frame'>
            <FontAwesomeIcon icon={faSearch} className="serch-icon"/>
            <input type="text" placeholder='Serch Course Name' className='serch-text-input' name='serch'id='serch' value={serch} onChange={(e)=>setSerch(e.target.value)}>
              
            </input>
          </span>
          </div>


         
            <button className="add-courses-button" onClick={()=>setClose(!close)}>
                  <FontAwesomeIcon icon={faPlus} className="add-icon"/>
                  &nbsp; Add <span>&nbsp; Courses</span>
            </button>
      
        </div>

        <div className="show-courses-container">


              <div className="courses-box-link">
                <div className="cource-data">
                  <img src={img} alt="" width="70%" height="80%" />
                
                </div>
                <div className="cource-data">
                  <h3>Web-Development</h3>
                  <a href="https://www.w3schools.com/whatis/" target="_blank">
                  <button className='gotocource'>Go to Course</button>
                  </a>
                <p><i>W3-School</i></p>
                </div>
              </div>
              <div className="courses-box-link">
                <div className="cource-data">
                  <img src={img} alt="" width="70%" height="80%" />
                
                </div>
                <div className="cource-data">
                  <h3>React Cources</h3>
                  <a href="https://www.freecodecamp.org/news/free-react-course-2022/" target="_blank">
                  <button className='gotocource'>Go to Course</button>
                  </a>
                <p><i>Code-camp</i></p>
                </div>
              </div>
              <div className="courses-box-link">
                <div className="cource-data">
                  <img src={img} alt="" width="70%" height="80%" />
                
                </div>
                <div className="cource-data">
                  <h3>Machine Learning</h3>
                  <a href="https://www.udemy.com/topic/machine-learning/free/">
                  <button className='gotocource'>Go to Course</button>
                  </a>
                <p><i>Udemy</i></p>
                </div>
              </div>
              <div className="courses-box-link">
                <div className="cource-data">
                  <img src={img} alt="" width="70%" height="80%" />
                
                </div>
                <div className="cource-data">
                  <h3>Name Cources</h3>
                  <a href="#">
                  <button className='gotocource'>Go to Course</button>
                  </a>
                <p><i>hellot</i></p>
                </div>
              </div>

              <div className="courses-box-link">
                <div className="cource-data"></div>
                <div className="cource-data"></div>
              </div>

              <div className="courses-box-link">
                <div className="cource-data"></div>
                <div className="cource-data"></div>
               
              </div>


        </div>

    </div>
  )
}

