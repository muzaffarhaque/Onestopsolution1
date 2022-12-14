import React, { useState } from 'react'
import "./question.scss"
import {useNavigate} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft ,faPlus,faTimes} from '@fortawesome/free-solid-svg-icons'
import { useEffect } from 'react';

export default function Question_pages() {
  const navigate = useNavigate();
  const [papers,setPapers]=useState([])
  const [bolun,setBolun]=useState(false)
  function turefalse(){
    setBolun(!bolun)
  }
  useEffect(
    ()=>{
     console.log(papers)
    },[papers]
  )
  function getdatachild(data){
    setPapers([...papers,data])
    
  }
  return (
    <div className='main-container-of-QustionPaper'>
      <div className="top-hedder-back-frame">
        <FontAwesomeIcon icon={faArrowLeft}  onClick={() => navigate(-1)} className="notes-page-back-icon back-icon" /> <span>-: Question Papers :-</span>
      </div>
      <div className="serch-frame-questonPapeer">

      </div>
      {/* Take question paer form user */}
      <section className='add-and-show-question-paper'>

        <button onClick={turefalse}><FontAwesomeIcon icon={faPlus}/> &nbsp;Add Q/P</button>
        {/* show form to input question paper */}
        {
          bolun?<InputFormQP showhide={turefalse} senddata={getdatachild}/>:null
        }
       

      </section>

    </div>
  )
}


function InputFormQP(props){
  
  const [queinfo,setQueinfo]=useState({name:"",branch:"",univercity:"",year:""})
  let {name,branch,univercity,year}=queinfo;

  function questionPaperHandler(e){
    setQueinfo({...queinfo,[e.target.name]:e.target.value})
  }
  function addQespapeHandler(e){
    e.preventDefault()
    // setPapers([...papers,queinfo])
    setQueinfo({name:"",branch:"",univercity:"",year:""})
    props.showhide()
    props.senddata(queinfo)
    console.log("submit");
  }
  return(
    <>
    <div className="form-input-question-paper-data">
      <FontAwesomeIcon icon={faTimes} onClick={()=>props.showhide()} className="cancel-qp"/>
      <form action="" onSubmit={addQespapeHandler}>
     <div className="form-frame-qp">
      <fieldset>
        <legend>Question Paper :</legend>
        <input type="text" placeholder='Name of Question Paper' name='name' required value={name} onChange={questionPaperHandler}/>
      </fieldset>

      <fieldset>
        <legend>Branch :</legend>
        <input type="text" placeholder='CSE' name='branch' required value={branch} onChange={questionPaperHandler}/>
      </fieldset>

      <fieldset>
        <legend>Univercity :</legend>
        <input type="text" placeholder='Batu' name='univercity' required value={univercity} onChange={questionPaperHandler}/>
      </fieldset>

      <fieldset>
        <legend>Year :</legend>
        <input type="text" pattern="[0-9]{4}" required title='Enter 4-digit year like (2020)' placeholder='2021' name='year' value={year} onChange={questionPaperHandler}/>
      </fieldset>
      </div>
      <center>
      <button type='submit' className='submit-button'>Add Question Paper</button>
      </center>
      </form>

    </div>
    
    </>
  )
}