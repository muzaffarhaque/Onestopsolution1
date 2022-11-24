import React, { useState } from 'react'
import "./notespages.scss"
import {useNavigate} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

export default function Notes() {

const navigate = useNavigate();
const [year,setYear]=useState(null)
function choicebranch(i){
  // console.log(i,year)
  setYear(i);
}

 
  return (
    <>
      <div className="main-container-notes-page">
        <div className="top-hedder-back-frame">
          <FontAwesomeIcon icon={faArrowLeft}  onClick={() => navigate(-1)} className="notes-page-back-icon back-icon"/> <span>-: Notes (study matarial) :-</span>        
        </div>
        <h4 className='slect-branch-name'>Slect Branch :-</h4>
        <div className="banch-slected-opction">
          <div className={year!==1?"years-branch1":"year-branch2"} onClick={()=>choicebranch(1)} id='first'>Computer and Science</div>
          <div className={year!==2?"years-branch1":"year-branch2"} onClick={()=>choicebranch(2)} id='second'>Mechanical</div>
          <div className={year!==3?"years-branch1":"year-branch2"} onClick={()=>choicebranch(3)} id='third'> Civil</div>
          <div className={year!==4?"years-branch1":"year-branch2"} onClick={()=>choicebranch(4)} id='final'>Electrical</div>
        </div>




<Branches/>



      </div>


    </>
  )
}


export function Branches(){

  const [year,setYear]=useState(null)
  function opensubject(i){
    // console.log(i,year)
    setYear(i);
  }
  return(
    <>
    <div className="branches-main-container">
     
    <div className="all-years-notes-head">
          <div className={year!==1?"years-subjects":"year-sub2"} onClick={()=>opensubject(1)} id='first'>1<sup>st</sup> Year</div>
          <div className={year!==2?"years-subjects":"year-sub2"} onClick={()=>opensubject(2)} id='second'>2<sup>nd</sup>  Year</div>
          <div className={year!==3?"years-subjects":"year-sub2"} onClick={()=>opensubject(3)} id='third'> 3<sup>rd</sup>  Year</div>
          <div className={year!==4?"years-subjects":"year-sub2"} onClick={()=>opensubject(4)} id='final'>4<sup>th</sup>  Years</div>
        </div>
{(
()=>{
  if(year===1){
    return(
      <div className="subject-of-yearas">
   
      <Subjectname year={year}/>
      <p>first</p>
    </div>
    )
  }else if(year===2){
    return(
      <div className="subject-of-yearas">
    
        <Subjectname year={year}/>
      
    <p>second</p>
    </div>)
  }
  else if(year===3){
    return(
      <div className="subject-of-yearas">
      

      <Subjectname year={year}/>
    <p>tgige</p>
    </div>)
    }
    else if(year===4){
      return(
      <div className="subject-of-yearas">
       
      <Subjectname year={year}/>
      <p>happy to instulat</p>
      </div>)
      }
    else{
      return(
        <div className="subject-of-yearas">
      
     <br/>
     <center>Slect Branch and Year</center>
     <br/>
      </div>
      )
    }

}



)()

}
        
        

    </div>
    </>
  )
}



export function Subjectname(props){

 let subject1=[
  {
    id:1,
    name:"Big data"
  },
  {
    id:2,
    name:"Cloude Computing"
  },
  {
    id:3,
    name:"Block Chain"
  },
  {
    id:4,
    name:"Softwar Engineering"
  },
  {
    id:5,
    name:"Humain computer Interaction"
  },
  {
    id:6,
    name:"Development Engineering"
  },
  {
    id:7,
    name:"Computer Network"
  }
 ]
 let subject2=[
  {
    id:1,
    name:"Big data2"
  },
  {
    id:2,
    name:"Cloude Computing2"
  },
  {
    id:3,
    name:"Block Chain2"
  },
  {
    id:4,
    name:"Softwar Engineering2"
  },
  {
    id:5,
    name:"Humain computer Interaction2"
  },
  {
    id:6,
    name:"Development Engineering2"
  },
  {
    id:7,
    name:"Computer Network2"
  }
 ]
 console.log(props.year,"in render")
  return(
    <>
     <h4 className='slect-branch-name'>All Subject :-</h4>
    <div className="subjtect-name-main-container">
      {
        (()=>{
          if(props.year===1){
            console.log(props.year,"1")
            return( subject1)
          }else if(props.year===2){
            console.log(props.year,"2")
            return (subject2)
          }else if(props.year===3){
            return subject1
          }else if(props.year===4){
            return subject2
          }
        })()
        .map(
          (item)=>{
            return(
              <div className="subject-one">{item.name}</div>
            )
          }
        )
      }
     
    </div>
    </>
  )
}