import React, { useEffect } from 'react'
import { useState } from 'react'
const ElementThree = () => {
    
    const [appointments, setappointments] = useState([]);
    
        //appointment details
    const getAppointment = async () =>{
        const response = await fetch("https://619f39821ac52a0017ba467e.mockapi.io/appointment_details",{
            method:"GET",
            headers:{
            "Content-type": "application/json"
            }
        })
        const parseRes = await response.json();
        let arrayAppointments = parseRes.slice(1,10);
        console.log(arrayAppointments, "appointment details");
        setappointments(arrayAppointments);
    }

    useEffect(() =>{
        getAppointment();
    },[]);
      


    return (
    <div className='bgcolor px-5  d-flex flex-row justify-content-between pb-5'>
        <div className='d-flex flex-column px-3  ms-4 rounded  py-2' style={{ width:"930px",  height:"415px", backgroundColor:"white"}}>
            <div className='my-4 bgcolor rounded' style={{ height:"60px"}} >
                <ul  className='d-flex flex-row justify-content-between align-items-center appointment-ul'>
                    <li className='appointment-li px-5 py-2 ' style={{color:"#0044e9"}}>Upcoming Appointments</li>
                    <li className='appointment-li px-5 py-2'>Past Appointments</li>
                    <li className='appointment-li px-5 py-2'>Medical Records</li>
                </ul>
            </div>
            <div   className="bgcolor rounded" >
                <div className='  d-flex flex-row justify-content-between p-3'  >
                    <h5>Root Canal Treatment</h5>
                    <button className='mx-2 rounded' style={{backgroundColor:"white", border:"none", color:"grey"}} ><svg className="mx-1" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1.5em" width="1.5em" xmlns="http://www.w3.org/2000/svg"><path d="M256 217.9L383 345c9.4 9.4 24.6 9.4 33.9 0 9.4-9.4 9.3-24.6 0-34L273 167c-9.1-9.1-23.7-9.3-33.1-.7L95 310.9c-4.7 4.7-7 10.9-7 17s2.3 12.3 7 17c9.4 9.4 24.6 9.4 33.9 0l127.1-127z"></path></svg>Show Previous Treatments</button>
                </div>
                   <div className='bgcolor p-2 px-3 ' style={{borderTop:"1px solid #d8d8d8",height:"200px", overflow:"scroll"}} >
                {appointments.map((ele, key) => {
                    return (<div key={key} className=' my-3 d-flex flex-row rounded justify-content-between align-items-center py-2  px-3 ' style={{ backgroundColor:"white"}} >
                    <div>
                        <h6>{ele.createdAt.slice(0, 10)}</h6>
                        <p style={{color:"grey", margin:"0px"}} >09.00-10.00</p>
                    </div>
                    <div className='mx-3' style={{backgroundColor:"rgb(183, 181, 181)" , width:"0px", height:"50px", border:"0.5px solid rgb(183, 181, 181)"}} ></div>
                    <div>
                        <label style={{color:"grey"}} htmlFor="">Treatment</label>
                        <h6>Open Access</h6>
                    </div>
                    <div className='mx-3' style={{backgroundColor:"rgb(183, 181, 181)" , width:"0px", height:"50px", border:"0.5px solid rgb(183, 181, 181)"}} ></div>
                    <div>
                        <label style={{color:"grey"}} htmlFor="">Dentist</label>
                        <h6>Drg. Adam H.</h6>
                    </div>
                    <div>
                        <label style={{color:"grey"}} htmlFor="">Patient</label>
                        <h6>{ele.name}</h6>
                    </div>
                    <button style={{border:"none" , backgroundColor:"white", height:"40px"}} ><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="#000" strokeWidth="2" d="M6,16 L16,16 L6,16 L6,16 Z M6,12 L18,12 L6,12 L6,12 Z M6,8 L11,8 L6,8 L6,8 Z M14,1 L14,8 L21,8 M3,23 L3,1 L15,1 L21,7 L21,23 L3,23 Z"></path></svg> Note</button>
            </div>)
                })}
                    </div>
            </div>
        </div>
        <div className='d-flex flex-column p-4 mt-3 rounded' style={{width:"400px", height:"400px" , backgroundColor:"white"}}>
            <div className='d-flex flex-row justify-content-between my-2 '>
                <h6>Files / Documents</h6>
                <button style={{color:"#0044e9", border:"none", backgroundColor:"white"}} ><svg stroke="currentColor" fill="#0044e9" strokeWidth="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M480 580H372a8 8 0 0 0-8 8v48a8 8 0 0 0 8 8h108v108a8 8 0 0 0 8 8h48a8 8 0 0 0 8-8V644h108a8 8 0 0 0 8-8v-48a8 8 0 0 0-8-8H544V472a8 8 0 0 0-8-8h-48a8 8 0 0 0-8 8v108zm374.6-291.3c6 6 9.4 14.1 9.4 22.6V928c0 17.7-14.3 32-32 32H192c-17.7 0-32-14.3-32-32V96c0-17.7 14.3-32 32-32h424.7c8.5 0 16.7 3.4 22.7 9.4l215.2 215.3zM790.2 326L602 137.8V326h188.2z"></path></svg> Add Files</button>
            </div>
            <div>
                <div className='card d-flex flex-row justify-content-between p-3 my-1    '>
                    <h6 style={{marginBottom:"0px"}}><svg stroke="currentColor" fill="currentColor" strokeWidth="0" version="1" viewBox="0 0 48 48" enableBackground="new 0 0 48 48" height="1.4em" width="1.4em" xmlns="http://www.w3.org/2000/svg"><polygon fill="#90CAF9" points="40,45 8,45 8,3 30,3 40,13"></polygon><polygon fill="#E1F5FE" points="38.5,14 29,14 29,4.5"></polygon><g fill="#1976D2"><rect x="16" y="21" width="17" height="2"></rect><rect x="16" y="25" width="13" height="2"></rect><rect x="16" y="29" width="17" height="2"></rect><rect x="16" y="33" width="13" height="2"></rect></g></svg> <span> Check Up Result.pdf</span></h6>
                    <p style={{marginBottom:"0px"}}>123kb</p>
                </div>
                <div className='card d-flex flex-row justify-content-between p-3 my-1 ' >
                    <h6><svg stroke="currentColor" fill="currentColor" strokeWidth="0" version="1" viewBox="0 0 48 48" enableBackground="new 0 0 48 48" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><polygon fill="#90CAF9" points="40,45 8,45 8,3 30,3 40,13"></polygon><polygon fill="#E1F5FE" points="38.5,14 29,14 29,4.5"></polygon><g fill="#1976D2"><rect x="16" y="21" width="17" height="2"></rect><rect x="16" y="25" width="13" height="2"></rect><rect x="16" y="29" width="17" height="2"></rect><rect x="16" y="33" width="13" height="2"></rect></g></svg> <span> Check Up Result.pdf</span></h6>
                    <div>
                    <svg className='mx-1' stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1.4em" width="1.4em" xmlns="http://www.w3.org/2000/svg"><g><path fill="none" d="M0 0h24v24H0z"></path><path d="M17 6h5v2h-2v13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V8H2V6h5V3a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v3zm1 2H6v12h12V8zm-9 3h2v6H9v-6zm4 0h2v6h-2v-6zM9 4v2h6V4H9z"></path></g></svg>
                    <svg className='mx-1' stroke="currentColor" fill="none" strokeWidth="0" viewBox="0 0 24 24" height="1.4em" width="1.4em" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
                    </div>
                </div>
                <div className='card d-flex flex-row justify-content-between p-3 my-1 ' >
                    <h6 style={{marginBottom:"0px"}}><svg stroke="currentColor" fill="currentColor" strokeWidth="0" version="1" viewBox="0 0 48 48" enableBackground="new 0 0 48 48" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><polygon fill="#90CAF9" points="40,45 8,45 8,3 30,3 40,13"></polygon><polygon fill="#E1F5FE" points="38.5,14 29,14 29,4.5"></polygon><g fill="#1976D2"><rect x="16" y="21" width="17" height="2"></rect><rect x="16" y="25" width="13" height="2"></rect><rect x="16" y="29" width="17" height="2"></rect><rect x="16" y="33" width="13" height="2"></rect></g></svg> <span> Check Up Result.pdf</span></h6>
                    <p style={{marginBottom:"0px"}} >123kb</p>
                </div>
                <div className='card d-flex flex-row justify-content-between p-3 my-1 ' >
                    <h6><svg stroke="currentColor" fill="currentColor" strokeWidth="0" version="1" viewBox="0 0 48 48" enableBackground="new 0 0 48 48" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><polygon fill="#90CAF9" points="40,45 8,45 8,3 30,3 40,13"></polygon><polygon fill="#E1F5FE" points="38.5,14 29,14 29,4.5"></polygon><g fill="#1976D2"><rect x="16" y="21" width="17" height="2"></rect><rect x="16" y="25" width="13" height="2"></rect><rect x="16" y="29" width="17" height="2"></rect><rect x="16" y="33" width="13" height="2"></rect></g></svg> <span> Check Up Result.pdf</span></h6>
                    <div>
                    <svg className='mx-1' stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1.4em" width="1.4em" xmlns="http://www.w3.org/2000/svg"><g><path fill="none" d="M0 0h24v24H0z"></path><path d="M17 6h5v2h-2v13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V8H2V6h5V3a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v3zm1 2H6v12h12V8zm-9 3h2v6H9v-6zm4 0h2v6h-2v-6zM9 4v2h6V4H9z"></path></g></svg>
                    <svg className='mx-1' stroke="currentColor" fill="#0044e9" strokeWidth="0" viewBox="0 0 24 24" height="1.4em" width="1.4em" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ElementThree