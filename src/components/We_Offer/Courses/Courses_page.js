import React from 'react'
import "./courses.scss"
import img from "../../../images/icons/6262752089315739825.webp"
import { useNavigate, NavLink, Link, Navigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faSearch, faPlus, faTimes ,faArrowRight} from '@fortawesome/free-solid-svg-icons'
// import { faTimes} from '@fortawesome/fontawesome-svg-core'
import { useState } from 'react';
import { useEffect } from 'react';

export default function Courses_page() {
  const navigate = useNavigate();
  let [close, setClose] = useState(false)
  const [courcedata, setCourcedata] = useState([
    { name: "W3-school", courcename: "Web-Development", link: "https://www.w3schools.com/whatis/" },
    { name: "Code-Camp", courcename: "React Cource", link: "https://www.freecodecamp.org/news/free-react-course-2022/" },
    { name: "Udemy", courcename: "Machine Learning", link: "https://www.udemy.com/topic/machine-learning/free/" }
  ])
  let [filterinfo,setFilterinfo]=useState([])
  let [courceinput, setCourceinput] = useState({ name: "", courcename: "", link: "" })
  let { name, courcename, link } = courceinput;
  let [serch, setSerch] = useState("")

useEffect(
  ()=>{
    setFilterinfo(courcedata.filter((item)=>{
      return(
        item.courcename.toUpperCase().includes(serch.toUpperCase()) 
      )
    } ));
  },[serch,courcedata]
)


  function corsesinputdata(e) {
    setCourceinput({ ...courceinput, [e.target.name]: e.target.value })
    console.log(courceinput);
  
  }
  function coursadd(e) {
    e.preventDefault();
  
    setClose(!close)
    setCourcedata([...courcedata, { name, courcename, link }])
    setCourceinput({ name: "", courcename: "", link: "" })
  }

  return (
    <div className='main-courses-container'>
      <div className="top-hedder-back-frame">
        <FontAwesomeIcon icon={faArrowLeft} title="Back" onClick={() => navigate(-1)} className="notes-page-back-icon back-icon" /> <span>-: Courses :-</span>
      </div>
      {/* Courses form input box */}
      <div className={close ? "courses-input-box" : "frame-off"}>
        <FontAwesomeIcon icon={faTimes} onClick={() => setClose(!close)} className="cancel-icon" />
        <form onSubmit={coursadd} >
          <label htmlFor="name">Name :<br />
            <input type="text" required placeholder='Aliex Zender' id='name' name='name' value={name} onChange={corsesinputdata} />
          </label>
          <label htmlFor="courcename"> Cource Name :<br />
            <input type="text" required placeholder='Artificial Intelligence' name='courcename' id='courcename' value={courcename} onChange={corsesinputdata} />
          </label>
          <label htmlFor="link"> Cource Link :<br />
            <input type="text" required id='link' name='link' placeholder='https//wwww.courseslink.com' value={link} onChange={corsesinputdata} />
          </label>
          <button type='submit' className='cource-button'>Add Courses</button>
        </form>
      </div>
      {/* courses frome input box End */}


      <div className="search-and-addCourses-cantainer">
        <div className="serch-box-frame">
          <span className='serch-frame'>
            <FontAwesomeIcon icon={faSearch} className="serch-icon" />
            <input type="text" placeholder='Serch Course Name' className='serch-text-input' name='serch' id='serch' value={serch} onChange={(e) =>{  console.log(filterinfo); setSerch(e.target.value)}}>
            </input>
            {/* <FontAwesomeIcon icon={faArrowRight } className="serch-icon right-arrow" onClick={filterdata}/> */}
          </span>
        </div>



        <button className="add-courses-button" onClick={() => setClose(!close)}>
          <FontAwesomeIcon icon={faPlus} className="add-icon" />
          &nbsp; Add <span>&nbsp; Courses</span>
        </button>

      </div>

    < Showcarddata  filterinfo={filterinfo.length>0?filterinfo:courcedata}/>



   

    </div>
  )
}

function Showcarddata(props){
  return(
    <>
     <div  className="show-courses-container">
        {
         props.filterinfo.length > 0 ?props.filterinfo.map(
            (item, i) => {
              return (
                <div key={i} className="courses-box-link">
                  <div className="cource-data">
                    <img src={img} alt="" width="70%" height="80%" />

                  </div>
                  <div className="cource-data">
                    <h3>{item.courcename}</h3>
                    <a href={item.link} target="_blank">
                      <button className='gotocource'>Go to Course</button>
                    </a>
                    <p><i>{item.name}</i></p>
                  </div>
                </div>

              )
            }
          ):<h3>Courde is Note added Yet</h3>
}







      </div>
    
    </>
  )
}