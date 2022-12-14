import React, { useEffect } from 'react'
import {useNavigate,useParams} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft,faPlus,faTimes } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';
import Notes from './Notes_page';


export default function Subjectnotespage() {
    let [note,setNote]=useState()
    let [bol,setBol]=useState(false)
    let [notesFormInput,setNotesFormInput]=useState([])
    let param=useParams();
    let {branch,year,subject}=param;
    const navigate = useNavigate();
    //let sub1=sub.split(" ").map((w)=>{return(w.charAt(0).toUpperCase() + w.substring(1))})

// console.log(note)
function datacall(){
    let info=JSON.parse(localStorage.getItem("Notes"));
    setNote(info)
    console.log("from child",info,typeof(info))
}
function closebox(){
    setBol(!bol)
}
    
function formNotes(data){
    setNotesFormInput([...notesFormInput,data]);
    console.log(notesFormInput,"form parent",typeof(data.file1),data)
}
  return (
    <div className='main-subject-notes-page-container'>
         <div className='url-linkshows'>
         <FontAwesomeIcon icon={faArrowLeft} title="Back" onClick={() => navigate(-1)} className="notes-page-back-icon back-icon"/>
         <span> Notes/{branch}/{year}/{subject.split(" ").map((w)=>{return(w.charAt(0).toUpperCase() + w.substring(1))})}</span>
          </div>
        <div className="top-hedder-back-frame">
          <span className='subject-heating-name'>-: {subject} :-</span>        
        </div><br></br>
        <button onClick={closebox} className='add-Notes-of-this-subject'><FontAwesomeIcon icon={faPlus} /> &nbsp;Add <span>Notes</span></button>
      {bol?
      <Notes_Input_box formdata={formNotes}  close={closebox}  update={datacall}/>
      :null}
      
        <section className='notes-subject-details-container'>



            {
                notesFormInput && notesFormInput.map((item,i)=>{
                    return(
                <div className="box-of-nodes-provided-by-any">
                    <h3>{item.title}</h3>
                    <p className='box-notes-description'>&nbsp;&nbsp;&nbsp;{item.descrip}</p>
                   <p><a href="#">{item.link}</a></p>
                    <a href={item.file1}  download>
                        <button className="download-Notes-button">Download</button>
                    </a>
                    <p><span>{item.name}</span></p>
                </div>

                    )
                })
            }
               
        </section>
    </div>
  )
}




function Notes_Input_box(props){

   const [notesinput,setNotesinput]=useState({name:"",title:"",descrip:"",link:"",file1:""})
   let {name,title,descrip,link,file1}=notesinput;



function notesinputchangeform(e){
          setNotesinput({...notesinput,[e.target.name]:e.target.value})
          console.log(notesinput)
}


    function uploadefilenotes(e){
        let file=e.target.files[0]
        let url=URL.createObjectURL(file)
        notesinput.file1=URL.createObjectURL(file)
        localStorage.setItem("Notes",JSON.stringify(url))
 console.log(file1,url)
 console.log(notesinput)
props.update()
    }

   
    function notesubmithandler(e){
        e.preventDefault()




        props.formdata(notesinput)
        props.close()
      console.log("submit")
    }
    return(
<>

<div className="add-notes-form-conatiner" >
    <FontAwesomeIcon icon={faTimes} onClick={()=>{props.close()}} className="close-input-notes"/>
    <form action="" className='input-notes-form-data' onSubmit={notesubmithandler}>
        
        <label htmlFor="name">Name :
        <input onChange={notesinputchangeform} type="text" required name='name' value={name}  id='name' placeholder='Name' className='inputfild'/>
        </label>
        <label htmlFor="title">Notes Title :
        <input onChange={notesinputchangeform} type="text" name='title' required id='title' value={title} placeholder='Title of Notes' className='inputfild'/>
        </label>
        <label title="Pleace compleate in 2 to 3 Line" htmlFor="me">Decription of Notes :
        <input onChange={notesinputchangeform} type="text" title="Pleace compleate in 2 to 3 Line" name='descrip' value={descrip} title='Describe about Notes whatever U providing' required id='me' placeholder='Decription ....' className='inputfild'/>
        </label>
        <label htmlFor="Link">Link :
        <input onChange={notesinputchangeform} type="text" name='link' id='Link' value={link} placeholder='Share Drive link or any notes link' />
        </label>
        <label htmlFor="note">Upload Notes :
        <input type="file" name='file' id='note' accept='.ppt,.pptx,.pdf,.doc,.txt' placeholder='Name' onChange={uploadefilenotes}/>
        </label>
        <button type='submit' className='submit-button-notes'>Upload</button>

    </form>
</div>

</>
    )

}