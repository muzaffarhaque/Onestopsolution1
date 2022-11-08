import React from 'react'
import "./blog.scss"
import {link} from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft,faArrowCircleUp,faPlus,faTrash ,faEdit} from '@fortawesome/free-solid-svg-icons'
// import { useNavigate} from 'react-router-dom';
import img from "../../images/icons/6262752089315739825.webp"
import Bloginput from './Bloginput';
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useEffect,useRef } from 'react'

export default function Blog() {
  const [fetchdata,setFetchdata]=useState([])
  const [show,setshow]=useState(true)
  const [index,setindex]=useState()
  const [addblog,setAddblog]=useState(true)
  
  const [subchouse,setSubchouse]=useState(true)
  
const current=new Date();
// console.log(current.getMinutes(),"date")
let date=`${current.getDate()}/${current.getMonth()}/${current.getFullYear()}`

  // const navigate = useNavigate();

  function ofon(e){
   setshow(!show)
   calldata()
   
    // console.log(show)
}
function addingblogbyuser(){
  ofon()
  setSubchouse(true)
}

async function calldata(){
  const responce=await fetch("http://localhost:3500/blog");
 const info=await responce.json()

 setFetchdata(info)
 
}

useEffect(
  ()=>{
 calldata()
  },[show]
)

function deletartical(i){
// console.log("delete this id",i)

{
  fetch(`http://localhost:3500/blog/${i}`,{
  method:'DELETE',
 
}).then((res)=>res.json().then(
  (result)=>{console.log(result)
    calldata()}
) )
}

}







const childRef = useRef(null);

const editeartical = (i) => {
       setindex(fetchdata[i].id)
      console.log(i)
 setAddblog(true)
 setSubchouse(false)
  childRef.current.childFunction1(fetchdata[i]);

  // childRef.current.childFunction2();
};




  return (
    <section id="blog" className="home-blog-section">
      <a href="#blog"><FontAwesomeIcon  icon={faArrowCircleUp}  className="move-to-up"/></a>
      
      <div className='input-form-blog-main-container-start' style={show?{transform:" scale(0)"}:{transform: "scale(1)"}}>
      <Bloginput  ref={childRef} data={ofon} index={index} bol={subchouse}  addblog={addblog} />
      </div>
     
      <Link to="/Home"> <FontAwesomeIcon  icon={faArrowLeft}  className="back-icon"/></Link><br/>
        <i>
          {" "}
          <span className="sec-home-headding"> Blog Articales </span>
        </i>
    <div className='blog-main-container'>
      <div className="blog-hed-container">
        <div>
          <h3>Welcome!!</h3>
          <p>"If you have Knowledge,let<br/>Others  light their candles in it "<br/>- Margrate Fuller</p>
        </div>
        <div>
          <img src={img} alt="" />
        </div>
        </div>
       <center> <button className='adding-blog-button' onClick={addingblogbyuser}><FontAwesomeIcon  icon={faPlus} />&nbsp; ADD</button></center>
        <div className='home-input-bloge-shows-container'>

                 

{fetchdata.length<1?<h3>Add blog Artical </h3>
  :fetchdata.map(
    (item,i)=>{
      return(
        <div key={item.id} className="input-blog-text">
        <h3>{item.title}</h3>
        <h5>{item.date1}</h5>
        <p>&nbsp;&nbsp;&nbsp;{item.details}</p>
        <h4 >- {item.author}</h4>
        <div><FontAwesomeIcon icon={faTrash} className="blog-icon-trash" onClick={()=>deletartical(item.id)} />
        <FontAwesomeIcon icon={faEdit} className="blog-icon-update" onClick={()=>editeartical(i)} />
        </div>
      </div>
      )
    }
  )
}
{/* 
                  <div className="input-blog-text">
                    <h3>Clue computing</h3>
                    <h5>{date}</h5>
                    <p>&nbsp;&nbsp;&nbsp;Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea delectus voluptatem numquam mollitia eveniet molestiae dignissimos quisquam cumque quod vitae in atque dolores odio aut reprehenderit odit, et fugiat neque.</p>
                    <h4>- Name Of writer</h4>
                  </div>
 */}

              


        </div>
    </div>
    </section>
  )
}
