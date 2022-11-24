import React from 'react'
import "./profile.scss"
import {useState} from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPlus,faEdit,faTimes} from '@fortawesome/free-solid-svg-icons'
import img from "../../images/icons/blank-profile-picture-g377320d6d_1280.png"

export default function Profile() {
    const [image1,
        setImage1] = useState(img)
    const [times,setTimes]=useState(true)
    const [profildata,setProfiledata]=useState([])
    const [datainput,setDatainput]=useState({title:"Sothelast",collage:"",details:"",year:"",btanch:"",currntY:""})
    let {title,collage,details,year,btanch,currntY}=datainput;

    function imagehandler(e) {
        console.log(e.target.files)
        console.log(URL.createObjectURL(e.target.files[0]))
        localStorage.setItem("Profile", JSON.stringify(URL.createObjectURL(e.target.files[0])))
        if (e.target.files && e.target.files[0]) {
            setImage1(URL.createObjectURL(e.target.files[0]));

        }

    }
    function opentab(item){
        console.log(item)
    }
 function formedatachange(e){

setDatainput({...datainput,[e.target.name]:e.target.value})
// console.log(datainput)
 }
 function submithandel(e){
    e.preventDefault()
    setProfiledata(datainput)
    setTimes(!times)
 }
 function closinttiems(){

 }
 console.log(profildata,"arry")
    return (
        <div className='main'>
            <div className="profile-container">
                <div className="proifl-box">
                    <div className="profile-data-contaier">
                        <label htmlFor="impot_img">
                            <FontAwesomeIcon icon={faPlus} className="addImgIcon"/>
                            <input
                                type="file"
                                id="impot_img"
                                style={{
                                "display": "none"
                            }}
                                onChange={imagehandler}
                                name="photo"/>
                        </label>
                        <img src={image1} className="profile-logo" width="100%" height="100%" alt=""/>

                    </div>
                </div>
                <div className="proifl-box">

                    <div className="name-details-contaier">

                        <div className="data">
                            <h3>{datainput.title} , <FontAwesomeIcon icon={faEdit}  onClick={()=>setTimes(!times)} className="Edit-profile-details-icon"/></h3>
                            <p>&nbsp;{datainput.details} </p>

                         
                            <div class="tab-contents" id="education">
                                <ul>
                                    <li>
                                        <span>Collage Name : </span>{datainput.collage}<br />{datainput.year}
                                    </li>
                                    <li>
                                        <span>Branch : </span>{datainput.btanch}
                                    </li>
                                    <li>
                                        <span>{datainput.currntY}</span><br/>
                                    </li>
                                  
                                  
                                </ul>
                            </div>
                       
                           
                         

                        </div>
                        <div className="data">fad</div>
                    </div>

                </div>
            </div>



{/* Form edit profile start */}
            <div className='blog-input-details-container' style={times?{display:"none"}:{display:"block"}}>
        <FontAwesomeIcon onClick={()=>setTimes(!times)} icon={faTimes} className="blog-ingput-close-icon"/>
        <h3 className='blog-input-heading'>Write Your Details </h3>
        <form action="" onSubmit={submithandel}  className='bloag-container-form'>
            <label htmlFor="title">
                <span>Name </span>
                <input type="text" name='title' required placeholder='Title or Headding or Question' onChange={formedatachange} value={title} id='title'  />
            </label>
            <label htmlFor="datails">
                <span>About me</span>
              <textarea  className='blog-details' maxLength={180} required placeholder='Description...' name='details' onChange={formedatachange} value={details}></textarea>
            </label>
            <label htmlFor="autor">
                <span>Collage Name</span>
                <input type="text" name='collage' required placeholder='collage Name' onChange={formedatachange} value={collage} id='autor'  />
            </label>
            <label htmlFor="year">
                <span>Pass Out Year </span>
                <input type="text" name='year' title='(2019-2023)' required placeholder='2019-2023' onChange={formedatachange} value={year} id='year'  />
            </label>
            <label htmlFor="btanch">
                <span>Branch </span>
                <input type="text" name='btanch' required placeholder='Computer Science and Engineering' onChange={formedatachange} value={btanch} id='btanch'  />
            </label>
            <label htmlFor="currntY">
                <span>Year  </span>
                <input type="text" name='currntY' required placeholder='Third Year/3rd Year' onChange={formedatachange} value={currntY} id='currntY'  />
            </label>
          
            <button type='submit' className='blog-button' >Update</button>
            
        </form>
    </div>
    {/* Form edit profile End */}










        </div>
    )
}
