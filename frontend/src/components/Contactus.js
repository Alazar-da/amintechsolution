//import { json } from 'stream/consumers';
import cImage from '../assets/c5.jpg';
import "../assets/color.css"
import React, { useEffect, useRef } from 'react';

function Contactus() {

  const [formData,setFromData] = React.useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  })

  const [errors,setErrors] = React.useState({});
  const [message,setMessage] = React.useState("");


  const validateForm = () =>{

    let Errors = {}

    if(!formData.name){
      Errors.name = "Name is required"
    }
    else if (!/^[A-Za-z\s]+$/.test(formData.name)) {
      Errors.name = 'Name can only contain alphabets and whitespace';
    }

    if(!formData.email){
      Errors.email = "Email is required"
    }
    else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      Errors.email = 'Email format is invalid';
    }
    if(!formData.phone){
      Errors.phone = "Phone is required"
    }
    else if (!/^\d+$/.test(formData.phone)) {
      Errors.phone = 'Phone can only contain numbers';
    }

    if(!formData.message){
      Errors.message = "Message is required"
    }
    else if (!/^[A-Za-z0-9\s]+$/.test(formData.message)) {
      Errors.message = 'Message can only contain alphabets, numbers, and whitespace';
    }
    setErrors(Errors);
    return Object.keys(Errors).length === 0;

    

  }

  const handleSubmit = async(e) => {
    e.preventDefault();
    const isValid = validateForm();

    if (isValid) {
      // Process the form data (e.g., submit to server)
      //console.log('Form submitted:', formData);

     /*  const FormDat = new FormData();
FormDat.append("name", formData.name);
FormDat.append("email", formData.email);
FormDat.append("phone", formData.phone);
FormDat.append("message", formData.message); */

try {
 const FormData = new URLSearchParams();
  FormData.append("name", formData.name);
  FormData.append("email", formData.email);
  FormData.append("phone", formData.phone);
  FormData.append("message", formData.message);  

  const response = await fetch("/message/send", {
    method: "post",
    body: FormData.toString(),
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  });

  const result = await response.json();

  if (response.ok) {
    alert(result.message);
  } else {
    alert("Sending failed: " + result.message);
  }
} catch (error) {
  console.error(error);
  alert("An error occurred during Sending.");
  alert(error)
}

    


      
    }
  };




    return(
      <div className='container grid grid-cols-1 gap-4' id='contact'>
        <div>
          <h2 className="lg:text-4xl text-2xl font-bold text-pretty text-primary animate-charcter text-center w-full py-4 mt-7">Contact Us</h2>
        </div>
        <div className="flex justify-center">
       {/*    {/* <div className='hidden md:flex'>
            <img src={cImage} className="rounded-l-[30px]" />
          </div> 
          </div> */}
          
          <form className="rounded-xl w-5/6 md:w-3/6 bg-teal-600" style={{ borderRadius:"30px" }} >
            <h2 className="text-3xl font-bold text-teal-200 italic mb-4 text-center py-3 special">Get In Touch</h2>
            <label className="input input-bordered input-info bg-white flex items-center gap-2 mb-5 m-5">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" /></svg>
              <input type="text" className="grow " placeholder="Name" value={formData.name} onChange={(e)=>setFromData({...formData,name:e.target.value})} />  {errors.name && <span className=' text-rose-700 text-xs'>{errors.name}</span>}
            </label>

            <label className="input input-bordered input-info flex bg-white items-center gap-2 mb-5 m-5">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
              <input type="text" className="grow" placeholder="Email" value={formData.email} onChange={(e)=>setFromData({...formData,email:e.target.value})} />  {errors.email && <span className=' text-rose-700 text-xs'>{errors.email}</span>}
            </label>

            <label className="input input-bordered input-info flex bg-white items-center gap-2 mb-5 m-5">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" id="phone" className="w-4 h-4 opacity-70">
  <path d="M27.308,20.649l-2.2-2.2a3.521,3.521,0,0,0-4.938-.021,2.152,2.152,0,0,1-2.729.267A15.026,15.026,0,0,1,13.3,14.562a2.181,2.181,0,0,1,.284-2.739A3.521,3.521,0,0,0,13.553,6.9l-2.2-2.2a3.514,3.514,0,0,0-4.961,0l-.633.634c-3.3,3.3-3.053,10.238,3.813,17.1,4.14,4.141,8.307,5.875,11.686,5.875a7.5,7.5,0,0,0,5.418-2.061l.634-.634A3.513,3.513,0,0,0,27.308,20.649ZM25.894,24.2l-.634.634c-2.6,2.6-8.339,2.125-14.276-3.813S4.571,9.34,7.171,6.74L7.8,6.107a1.511,1.511,0,0,1,2.133,0l2.2,2.2a1.511,1.511,0,0,1,.021,2.11,4.181,4.181,0,0,0-.531,5.239,17.01,17.01,0,0,0,4.713,4.706,4.179,4.179,0,0,0,5.231-.517,1.512,1.512,0,0,1,2.118.013l2.2,2.2A1.51,1.51,0,0,1,25.894,24.2Z" fill="#6B7280"></path>
</svg>
              <input type="text" className="grow" placeholder="Phone" value={formData.phone} onChange={(e)=>setFromData({...formData,phone:e.target.value})} />  {errors.phone && <span className=' text-rose-700 text-xs'>{errors.phone}</span>}
            </label>


            <label className="input input-bordered input-info flex bg-white items-center gap-2 mb-10 m-5">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" id="message"><path d="M5.2 22c-.4 0-.9-.1-1.3-.2s-.6-.3-.8-.5l-.1-.1c-.1-.1-.2-.3-.2-.4 0-.2.1-.3.3-.4.8-.4 1.5-1.1 1.9-1.9 0-.1 0-.2.1-.3C2.3 16.5.7 13.8.7 11 .6 6 5.7 2 12 2c6.3 0 11.4 4 11.4 9s-5.1 9.1-11.4 9.1c-.6 0-1.3 0-1.9-.1-1.5 1.3-3.2 2-4.9 2zm-1-1.1c1.7.4 3.7-.3 5.5-1.8 0-.1.2-.2.3-.1.6.1 1.3.1 2 .1 5.7 0 10.4-3.6 10.4-8.1S17.7 3 12 3 1.6 6.6 1.6 11c0 2.6 1.6 5 4.3 6.5.2.1.3.4.2.6 0 .3-.1.6-.3.9-.4.8-1 1.4-1.6 1.9z"></path></svg>

              <input type="text" className="grow" style={{width:"110px"}} placeholder="Message" value={formData.message} onChange={(e)=>setFromData({...formData,message:e.target.value})} />  {errors.message && <span className=' text-rose-700 text-xs'>{errors.message}</span>}
            </label>

            <div className='text-center'>
            <button onClick={handleSubmit} style={{width:"10rem"}} className="btn btn-outline btn-primary mb-5 w-20">Send</button>

            </div>

           
            <p className="text-center text-sm text-gray-500">{message}</p>
          </form>
        </div>
      </div>
    );
   }

   export default Contactus;