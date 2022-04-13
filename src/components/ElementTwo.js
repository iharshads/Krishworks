import React from 'react'
import avatar from './female.jpg'
import { useState, useEffect } from 'react';
const ElementTwo = () => {

    const [patient, setpatient] = useState({});

    const getPatient = async () =>{
        const response = await fetch("https://619f39821ac52a0017ba467e.mockapi.io/patientDetails", {
            method: "GET",
            headers:{
                "Content-type": "application/json"
            }
        });
        const parseRes = await response.json();
        console.log(parseRes[0], "hello");
        setpatient({
            name:parseRes[0].name,
            gender:parseRes[0].Gender,
            member_status:parseRes[0]["Member Status"],
            phone_number: parseRes[0]["Phone Number"],
            street_address: parseRes[0]["Street Address"],
            zip_code: parseRes[0]["ZIP Code"],
            email: parseRes[0]["e-email"],
            register_date: parseRes[0]["Register Date"],
            past: parseRes[0].Past,
            upcoming: parseRes[0].Upcoming
        });
    }

    useEffect(() =>{
        getPatient();
    },[]);

  return (
    <div>
       
        <div className='  px-5   py-2 d-flex flex-row justify-content-between bgcolor' style={{  height:"370px"}}>
            <div className='mx-3 my-2 d-flex flex-row rounded justify-content-between' style={{width:"950px"}}>
                <div style={{width:"270px", height:"300px", backgroundColor:"white"}} className=' my-2 mx-2 d-flex flex-column text-center justify-content-center align-items-center' >  
                     <div><img className='patient-avatar' src={avatar} alt="" width="100" height="100" /> </div> 
                    <h3 style={{marginBottom:"0px"}} >{patient.name}</h3>
                    <p style={{marginBottom:"0px"}} >{patient.email}</p>
                    <div style={{height:"60px"}} className='d-flex my-3 align-items-center flex-row justify-content-center'  >
                        <div style={{height:"40px"}} className='d-flex flex-column mb-3'>
                            <h3 style={{marginBottom:"0px"}}>15</h3>
                            <p style={{marginBottom:"0px"}}>Past</p>
                        </div>
                        <div className='mx-3' style={{backgroundColor:"rgb(183, 181, 181)" , width:"0px", height:"60px", border:"0.5px solid rgb(183, 181, 181)"}} ></div>
                        <div style={{height:"40px"}} className='d-flex flex-column  mb-3'> 
                            <h3 style={{marginBottom:"0px"}} >2</h3>
                            <p style={{marginBottom:"0px"}} >Upcoming</p>
                        </div>
                    </div>
                    <button style={{backgroundColor:"white", border:"1px solid rgb(183, 181, 181)"}}  className='px-5  py-1'> Send Message</button>
                    </div>
                <div className='d-flex flex-column rounded align-items-start justify-content-around my-2 mx-2 ' style={{ width:"700px", height:"300px", backgroundColor:"white"}} >
                    <div className='d-flex flex-row justify-content-around align-items-center'>
                        <div className='mx-4 pe-4 my-2'>
                            <label style={{color:"rgb(183, 181, 181)"}} htmlFor="">Gender</label>
                            <p className='fw-bold'>{patient.gender}</p>
                        </div>
                       <div className='mx-5 my-2 ms-5 ps-5'>
                            <label style={{color:"rgb(183, 181, 181)"}} htmlFor="">Birthday</label>
                            <p className='fw-bold'>Feb14, 1997</p>
                        </div>
                       <div className='mx-5 my-2 '>
                            <label style={{color:"rgb(183, 181, 181)"}} htmlFor="">Phone number</label>
                            <p className='fw-bold'>{patient.phone_number}</p>
                        </div>
                    </div>
                    <div  className='d-flex flex-row '>
                   <div className='mx-4 my-2 '>
                            <label style={{color:"rgb(183, 181, 181)"}} htmlFor="">Street Address</label>
                            <p className='fw-bold'>{patient.street_address}</p>
                        </div>
                       <div className='mx-4 my-2 ms-5 ps-3 pe-5'>
                            <label style={{color:"rgb(183, 181, 181)"}} htmlFor="">City</label>
                            <p className='fw-bold'>New York</p>
                        </div>
                       <div className='mx-5 my-2 pe-5'>
                            <label style={{color:"rgb(183, 181, 181)"}} htmlFor="">Zip Code</label>
                            <p className='fw-bold'>{patient.zip_code}</p>
                        </div>
                    </div>
                    <div className='d-flex flex-row '>
                    <div className='mx-4 my-2 pe-5'>
                            <label style={{color:"rgb(183, 181, 181)"}} htmlFor="">Membar Status</label>
                            <p className='fw-bold'>{patient.member_status}</p>
                        </div>
                       <div className='mx-4 my-2 pe-5'>
                            <label style={{color:"rgb(183, 181, 181)"}} htmlFor="">Registered Date</label>
                            <p className='fw-bold'>{patient.register_date}</p>
                        </div>
                    </div>
                </div>
                <div></div>
            </div>
            <div style={{  backgroundColor:"white", width:"400px"}} className='rounded d-flex flex-column justify-content-between p-3 mt-3' >
                <div className='d-flex flex-row justify-content-between'>
                    <h3>Notes</h3>
                    <a href="" style={{color:"#0044e9"}}>See all</a>
                </div>
                <div className='bg-light p-2 rounded'  >
                    <p>- This patient is Lorem, ipsum dolor.</p>
                    <p>- Lorem ipsum dolor sit.</p>
                    <p>- Lorem ipsum dolor sit.</p>
                    <button className='text-center py-1 px-2 savenote-btn' style={{}} >save note</button>
                </div>
                <div>
                    <h6>Lorem ipsum dolor sit amet.</h6>
                    <div className='d-flex flex-row justify-content-between'>
                        <p style={{fontSize:"14px", color:"grey"}} ><svg className='mx-1' stroke="currentColor" fill="#0044e9" strokeWidth="0" viewBox="0 0 16 16" height="1.5em" width="1.5em" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd"></path></svg>Drg.Mega Nanade</p>
                        <p style={{fontSize:"14px", color:"grey"}}>20 Nov '19</p>
                    </div>
                </div>
            </div>
        </div>
        <div></div>
    </div>
  )
}

export default ElementTwo