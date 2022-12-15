import React, { useState } from 'react'
import "./question.scss"
import {useNavigate} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft ,faPlus,faTimes,faSearch,faDownload} from '@fortawesome/free-solid-svg-icons'
import { useEffect } from 'react';
import quepa from "../../../images/icons/6262752089315739826.webp"

export default function Question_pages() {
  const navigate = useNavigate();
  const [papers,setPapers]=useState([])
  const [finddata,setFinddata]=useState([])
  const [bolun,setBolun]=useState(false)
  const [serchdata,setSerchdata]=useState({serchbranch:"",subject:""})
  let {serchbranch,subject}=serchdata;
  function turefalse(){
    setBolun(!bolun)
  }
  useEffect(
    ()=>{
    
     console.log(subject)
    //  setFinddata(papers.filter((item)=> {if(item.name.toUpperCase() === serchdata.subject.toUpperCase()){return item}}))

    // setFinddata(papers.filter((item)=>item.name.toUpperCase().includes(subject.toUpperCase() ) ))
 
     console.table(finddata)
    },[serchdata]
  )
  function getdatachild(data){
    setPapers([...papers,data])
    
  }

  // serch question paper function
  function serchquestionpaperinuts(e){
    setSerchdata({...serchdata,[e.target.name]:e.target.value})
  
  }
 function call(data){
  return data.filter((item)=>{
    return(
      item.name.toUpperCase().includes(subject.toUpperCase()) && item.branch.toUpperCase().includes(serchbranch.toUpperCase())
    )
  } )
 }
  return (
    <div className='main-container-of-QustionPaper'>
      <div className="top-hedder-back-frame">
        <FontAwesomeIcon icon={faArrowLeft}  onClick={() => navigate(-1)} className="notes-page-back-icon back-icon" /> <span>-: Question Papers :-</span>
      </div>
      <div className="serch-frame-questonPapeer">

                  <div className="input-serch-box">
                    <label htmlFor=""><FontAwesomeIcon icon={faSearch}/>
                    <input type="text" name='serchbranch' value={serchbranch} onChange={serchquestionpaperinuts} placeholder='Branch Name' /></label>
                   
                    <label htmlFor=""><FontAwesomeIcon icon={faSearch}/>
                    <input type="text" name='subject' value={subject} onChange={serchquestionpaperinuts} placeholder='Subject'/></label>
                   
                  
                  </div>

      </div>
      {/* Take question paer form user */}
      <section className='add-and-show-question-paper'>

        <button onClick={turefalse} className="submit-button"><FontAwesomeIcon icon={faPlus}/> &nbsp;Add Q/P</button>
        {/* show form to input question paper */}
        {
          bolun?<InputFormQP showhide={turefalse} senddata={getdatachild}/>:null
        }
<div className="question-paper-cards" >

{call(papers).length>0?call(papers).map(
  (item,i)=>{
    return(
      <div key={i} className="card-frame-queston-paper">
      <div className="image-box-question">
        <img src={quepa} alt="" />
      </div>
      <h2>{item.name}</h2>
      <h3>Branch :<span>{item.branch}</span></h3>
      <h3>Univarsity : <span className='univercity-name'>{item.univercity}</span></h3>
      <h3>Year : <span>{item.year}</span></h3>
      <a href={item.paper} download>
        <center>
      <button className="submit-button"><FontAwesomeIcon icon={faDownload}/> &nbsp;Download</button>
      </center>
      </a>
      
    </div>
    )
  }
):<h2>Results Not Found</h2>
  
}






</div>



      </section>

    </div>
  )
}


function InputFormQP(props){
  
  const [queinfo,setQueinfo]=useState({name:"",branch:"",univercity:"",year:"",paper:""})
  let {name,branch,univercity,year,paper}=queinfo;

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
      <fieldset>
        <legend>Upload Question-Paper :</legend>
        <input type="file" accept='.pdf' required title='Upload Q/P in Pdf formate' name='paper'  onChange={(e)=>{console.log(e.target.files[0]); setQueinfo({...queinfo,paper:URL.createObjectURL(e.target.files[0])})}}/>
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