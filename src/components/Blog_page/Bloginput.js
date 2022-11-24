import React from 'react'
import './blog.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes,faTrash } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import { useEffect } from 'react'
import {forwardRef, useImperativeHandle} from 'react';

 function Bloginput(props,ref) {
    const [dataset,setDataset]=useState([])
    const current=new Date();
    let date=`${current.getDate()}/${current.getMonth()}/${current.getFullYear()}`
    let [formdata,setFormdata]=useState({title:"",author:"",details:"",date1:`${date}`})
    let {title,author,details,date1}=formdata;
 
    
  console.log(date1,date)
 
    




  
    useImperativeHandle(ref, () => ({
        childFunction1(dat) {
        //   console.log('child function 1 called',dat);
          console.log(dat,"index of data")
          
          
          let {title,author,details}=dat;
          setFormdata({title,author,details,date1})
        //   setFormdata({title:"",author:"",details:""})
          props.data()
          
        },
        // childFunction2() {
        //   console.log('child function 2 called');
        // },
      }));




    useEffect(()=>{

    //   setGetdata(props.index)
    console.log(props.index,"index of data")
        //
        // let {title,author,details,id}=props.index;
        // setFormdata({title,author,details})
  },[props.index]);


 let formedatachange=(e)=>{
    setFormdata({...formdata,[e.target.name]:e.target.value})
    // console.log(formdata)
 }
 const submithandel=(et)=>{
    et.preventDefault();
    // let url="https://drive.google.com/file/d/1moyk83FX2zBXvd1XSQodx94FI8Xh6ARv/view?usp=sharing"
    console.log("add in json",props.addblog)
    fetch("http://localhost:3500/blog",{
        method:'POST',
        headers:{
            'Accept':'application/json',
            'Content-Type':'application/json'
        },
        body:JSON.stringify(formdata)
    }).then((res)=>res.json().then((r)=>console.log(r)) )
 
    setDataset([...dataset,{title,author,details,date1}])
    setFormdata({title:"",author:"",details:"",date1})
    props.data()
    // console.log(dataset)

 }


 function putdataintojson(e){
    e.preventDefault();
    fetch(`http://localhost:3500/blog/${props.index}`, {
        method: 'PUT',
        headers: {   'Accept':'application/json',
            'Content-Type': 'application/json' 
        },
        body: JSON.stringify({title,author,details,date1})
    })
    .then(response => response.json())
    .then((r) =>{console.log(r)});

    setFormdata({title:"",author:"",details:"",date1})
    props.data()
    
}












  function closinttiems(){
    props.data()
    setFormdata({title:"",author:"",details:"",date1})
  }


  


    
  return (
    <div className='blog-input-details-container'>
        <FontAwesomeIcon onClick={closinttiems} icon={faTimes} className="blog-ingput-close-icon"/>
        <h3 className='blog-input-heading'>Write Your Blog Artical</h3>
        <form action="" onSubmit={props.bol?submithandel:putdataintojson}  className='bloag-container-form'>
            <label htmlFor="title">
                <span>Title</span>
                <input type="text" name='title' required placeholder='Title or Headding or Question' onChange={formedatachange} value={title} id='title'  />
            </label>
            <label htmlFor="autor">
                <span>Author</span>
                <input type="text" name='author' required placeholder='Author Name' onChange={formedatachange} value={author} id='autor'  />
            </label>
            <label htmlFor="datails">
                <span>Details</span>
              <textarea  className='blog-details' required placeholder='Description...' name='details' onChange={formedatachange} value={details}></textarea>
            </label>
            <button type='submit' className='blog-button' >{props.bol?`Add Blog`:`Update`}</button>
            
        </form>
    </div>
  )
}


export default forwardRef(Bloginput);