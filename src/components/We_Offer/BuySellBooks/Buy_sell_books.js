import React from 'react'
import "./buy_sell_book.scss"
import { useState,useMemo } from 'react'
import {useNavigate} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft,faSearch,faPlus,faTimes } from '@fortawesome/free-solid-svg-icons'
import { send } from 'emailjs-com';

export default function Buy_sell_books() {
  const branchName=[
    {branch:"Computer Science Engineering"},
    {branch:"Electronics and Communication Engineering"},
    {branch:"Information Technology"},
    {branch:"Mechanical Engineering"},
    {branch:"Civil Engineering"}
    
  ]




  const navigate = useNavigate();
  const [show,setShow]=useState(false);
  const [bookdata,setBookdata]=useState([]);
  const [filterdataifo,setFilterdataifo]=useState([])
  const [serchdata,setSerchdata]=useState({branch:"",year:"",bookname:""});
  let {branch,year,bookname}=serchdata;
  
 
  let data=JSON.parse( localStorage.getItem("Profile"));

function call(){
  setShow(!show)
}
function bookinformation(data){
  setBookdata([...bookdata,data]);
  console.log(bookdata)
}


function serchbookdata(e){
  setSerchdata({...serchdata,[e.target.name]:e.target.value});
  console.log(serchdata)
}


function serchbooks(){
  setFilterdataifo(bookdata.filter(
    (item)=>{return(
      item.branchname.toUpperCase().includes(branch.toUpperCase()) && item.year.includes(year) && item.bookname.toUpperCase().includes(bookname.toUpperCase())
    )}
   
    )
    )
  
  console.log("serch")
  console.table(bookdata)
  console.log(filterdataifo.length)
}
let answar=useMemo(()=>{
  return(
  !filterdataifo.length>0?<div>
  <center><h2 className='book-is-not-found'>Book is Not Found</h2></center>
</div>:<center><h2 className='found-result'>Results are </h2></center>
)
},[filterdataifo])


  return (
    <div className='main-courses-container'>
      <div className="top-hedder-back-frame">
          <FontAwesomeIcon icon={faArrowLeft} title="Back" onClick={() => navigate(-1)} className="notes-page-back-icon back-icon"/> <span>-: Buy/Sell Books :-</span>        
      </div>
      <h3 className='heading-book-name'>Search Book :-</h3>
      <div className="search-branch-books">
        
            <label htmlFor="branch">
              Branch :- 
              {/* <input type="text" id='branch' className='serchinput' name='branch' placeholder='Computer science' value={branch} onChange={serchbooks} /> */}
                <select name="branch" value={branch} id="branch" onChange={serchbookdata} className='serchinput'>
                  <option value="" selected >Select-Branch</option>
                  {
                    branchName.map(
                      (item,i)=>{
                        return(
                          <option value={item.branch} key={i}>{item.branch}</option>
                        )
                      }
                    )
                  }
                </select>
            </label>
            <label htmlFor="Year">
              Branch :- 
              {/* <input type="text" id='branch' className='serchinput' name='branch' placeholder='Computer science' value={branch} onChange={serchbooks} /> */}
                <select name="year" id="Year" value={year} onChange={serchbookdata} className='serchinput'>
                  <option value="" selected >Select-Year</option>
                  <option value="1">1 Year</option>
                  <option value="2">2 Year</option>
                  <option value="3">3 Year</option>
                  <option value="4">4 Year</option>
               
                </select>
            </label>
            <label htmlFor="bookname">
              Book Name :  
              <input type="text" onChange={serchbookdata} id='bookname' className='serchinput' name='bookname' placeholder='MS Graval' value={bookname}  />
            </label>
            <label htmlFor="bookname">
             <button className='serch-book-button' onClick={serchbooks}><FontAwesomeIcon icon={faSearch}/> &nbsp;Search</button>
             </label>

      </div>
      <section className='all-cards-of-boooks'>
         <div className="add_button_books">
          <button onClick={call}><FontAwesomeIcon icon={faPlus} />&nbsp;&nbsp;
            Add</button>
            {show?<Books_input show={call} branch={branchName} data={bookinformation}/>:null}   
         </div>
{
answar
}
        
        <Filterdata bookdata={filterdataifo.length>0?filterdataifo:bookdata}/>




      </section>
    </div>
  )
}













function Books_input(props){

const [inputBooks,setInputBooks]=useState({name:"",branchname:"",bookname:"",year:"",image:"",phone:"",collage:"",descrip:""})
let {name,branchname,bookname,year,image,phone,collage,descrip}=inputBooks;



function submithandlear(e){
  e.preventDefault()
  props.show()
  props.data(inputBooks)
}

function bookinputdetails(e){
  setInputBooks({...inputBooks,[e.target.name]:e.target.value})
  console.log(inputBooks)
}






  return(
    <>
    <section className='fomr-frame-container'>
    <FontAwesomeIcon icon={faTimes} onClick={()=>props.show()} className="cancel-book-fome"></FontAwesomeIcon>

       <h4>Enter Your Book Details</h4>
    <form onSubmit={submithandlear}>

     <div className='fieldset-container'>

     <fieldset>
      <legend><span> * </span> 
      Name :
      </legend>
      <input type="text"  onChange={bookinputdetails} required id='name'placeholder='Name' value={name} name='name' />
     </fieldset>


      <fieldset>
      <legend><span> * </span> 
      Branch Name :
      </legend>
      <select name="branchname" onChange={bookinputdetails} value={branchname} id="">
        <option value="" selected disabled>Slect-Branch</option>
        {
         props.branch?.map(
            (item,i)=>{
              return(
                <option key={i} value={item.branch}>{item.branch}</option>
              )
            }
          )
        }
      </select>
      {/* <input type="text" required id='book'placeholder='Branch Name' name='bookname' /> */}
     </fieldset>

      <fieldset>
      <legend><span> * </span> 
      Book Name :
      </legend>
      <input type="text"  onChange={bookinputdetails} required id='book'placeholder='book Name' value={bookname} name='bookname' />
     </fieldset>
    
  
     <fieldset>
      <legend>
      <span> * </span> Year :
      </legend>
      <select name="year" id=""  onChange={bookinputdetails} value={year}>
        <option value="" selected disabled>Select Year</option>
        <option value="1">1 Year</option>
        <option value="2">2 Year</option>
        <option value="3">3 Year</option>
        <option value="4">4 Year</option>
      </select>
      {/* <input type="text" required placeholder='Year ( 1-4 )' pattern="[1-4]{1}" name='year' /> */}
     </fieldset>

     <fieldset style={{border:"none"}}>
      <legend>
         Book Image :
      </legend>
      <input type="file"  onChange={(e)=>{
        setInputBooks({...inputBooks,image:URL.createObjectURL(e.target.files[0])});
        console.log(URL.createObjectURL(e.target.files[0]))
    }}  name='image' />
     </fieldset>


     <fieldset>
      <legend>
      <span> * </span> Contact Me :
      </legend>
      <input type="tel"  onChange={bookinputdetails} required value={phone} placeholder='1234567890' pattern="[0-9]{10}" name='phone' />
     </fieldset>


     <fieldset>
      <legend>
     Collage Name :
      </legend>
      <input type="text" title='Write short Name' maxLength="70" onChange={bookinputdetails} placeholder='Diems (Short Name)' value={collage} name='collage' />
     </fieldset>



     <fieldset>
      <legend>
      Short Description :
      </legend>
      <input type="text"   onChange={bookinputdetails} value={descrip} placeholder='....'  name='descrip' />
     </fieldset>
      </div>
     
     
      <div className="add_button_books">
          <button type='submit'>Submit</button>
          
         </div>

    </form>
  
    </section>
    </>
  )
}







function Filterdata(props){
  // console.log(typeof(props.bookdata),props.bookdata)
  return(
    <>
    <div className="display-books-card-downloade">
          {
            props.bookdata.map(
              (item,i)=>{
                return(
                  <div className="book-details-frame">
                  <div className="bok_box">
                    <img src={item.image} alt="Book image"  />
                  </div>
                  <div className="bok_box">
                    <h4>{item.bookname}</h4>
                    <p>{item.descrip}</p>
                    <h5>Seller Name: <span>{item.name}</span></h5>
                    <h5>Branch : <span className='branch-name'> {item.branchname}</span></h5>
                    <h5>Contect No :<span> {item.phone}</span></h5>
                    <h5>Collage :<span className='branch-name'> {item.collage}</span></h5>
                    <h5>Year :<span> {item.year} year</span></h5>
                  </div>
                </div>
                )
              }
            )

          }


        </div>
    </>
  )
}