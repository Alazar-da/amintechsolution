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
    const formRef = useRef(null);


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

  const response = await fetch(`${process.env.REACT_APP_API_URL}/message/send`, {
    method: "post",
    body: FormData.toString(),
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
     // "mode":"no-cors"
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
  alert("Successfully Sent message");
  //alert(error)
}

    


      
    }
  };



 return(
    <div className='min-h-screen  py-12' id='contact'>
      <div className='container mx-auto px-4'>
        <div className='text-center mb-12'>
          <h2 className="text-4xl md:text-5xl font-bold text-teal-600 mb-4 animate-fade-in">
            Let's Connect
          </h2>
          <p className="text-lg text-teal-800 max-w-2xl mx-auto">
            Have a project in mind or questions about our services? Drop us a message and we'll get back to you within 24 hours.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row justify-center items-center gap-12">
      

          <form 
            ref={formRef}
            className="w-full lg:w-1/2 bg-white rounded-3xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl"
          >
            <div className="bg-gradient-to-r from-teal-600 to-teal-400 p-6">
              <h2 className="text-3xl font-bold text-white text-center">
                Get In Touch
              </h2>
            </div>

            <div className="p-8 space-y-6">
              <div className="form-group">
                <label className="block text-teal-700 font-medium mb-2">Your Name</label>
          <div className="relative bg-white">
  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-teal-500" viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
    </svg>
  </div>
  <input 
    type="text" 
    className="w-full pl-10 pr-4 py-3 border border-teal-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all bg-white text-gray-800"
    placeholder="John Doe"
    value={formData.name}
    onChange={(e)=>setFromData({...formData,name:e.target.value})}
  />
</div>
                {errors.name && <p className="mt-1 text-sm text-rose-600">{errors.name}</p>}
              </div>

            <div className="form-group">
  <label className="block text-teal-700 font-medium mb-2">Email Address</label>
  <div className="relative">
    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-teal-500" viewBox="0 0 20 20" fill="currentColor">
        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
      </svg>
    </div>
    <input 
      type="text" 
      className="w-full pl-10 pr-4 py-3 border border-teal-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all bg-white text-gray-800"
      placeholder="your@email.com"
      value={formData.email}
      onChange={(e)=>setFromData({...formData,email:e.target.value})}
    />
  </div>
  {errors.email && <p className="mt-1 text-sm text-rose-600">{errors.email}</p>}
</div>

<div className="form-group">
  <label className="block text-teal-700 font-medium mb-2">Phone Number</label>
  <div className="relative">
    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-teal-500" viewBox="0 0 32 32">
        <path d="M27.308,20.649l-2.2-2.2a3.521,3.521,0,0,0-4.938-.021,2.152,2.152,0,0,1-2.729.267A15.026,15.026,0,0,1,13.3,14.562a2.181,2.181,0,0,1,.284-2.739A3.521,3.521,0,0,0,13.553,6.9l-2.2-2.2a3.514,3.514,0,0,0-4.961,0l-.633.634c-3.3,3.3-3.053,10.238,3.813,17.1,4.14,4.141,8.307,5.875,11.686,5.875a7.5,7.5,0,0,0,5.418-2.061l.634-.634A3.513,3.513,0,0,0,27.308,20.649ZM25.894,24.2l-.634.634c-2.6,2.6-8.339,2.125-14.276-3.813S4.571,9.34,7.171,6.74L7.8,6.107a1.511,1.511,0,0,1,2.133,0l2.2,2.2a1.511,1.511,0,0,1,.021,2.11,4.181,4.181,0,0,0-.531,5.239,17.01,17.01,0,0,0,4.713,4.706,4.179,4.179,0,0,0,5.231-.517,1.512,1.512,0,0,1,2.118.013l2.2,2.2A1.51,1.51,0,0,1,25.894,24.2Z" fill="#0d9488"></path>
      </svg>
    </div>
    <input 
      type="text" 
      className="w-full pl-10 pr-4 py-3 border border-teal-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all bg-white text-gray-800"
      placeholder="+1234567890"
      value={formData.phone}
      onChange={(e)=>setFromData({...formData,phone:e.target.value})}
    />
  </div>
  {errors.phone && <p className="mt-1 text-sm text-rose-600">{errors.phone}</p>}
</div>

<div className="form-group">
  <label className="block text-teal-700 font-medium mb-2">Your Message</label>
  <div className="relative">
    <div className="absolute top-3 left-3">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-teal-500" viewBox="0 0 24 24">
        <path d="M5.2 22c-.4 0-.9-.1-1.3-.2s-.6-.3-.8-.5l-.1-.1c-.1-.1-.2-.3-.2-.4 0-.2.1-.3.3-.4.8-.4 1.5-1.1 1.9-1.9 0-.1 0-.2.1-.3C2.3 16.5.7 13.8.7 11 .6 6 5.7 2 12 2c6.3 0 11.4 4 11.4 9s-5.1 9.1-11.4 9.1c-.6 0-1.3 0-1.9-.1-1.5 1.3-3.2 2-4.9 2zm-1-1.1c1.7.4 3.7-.3 5.5-1.8 0-.1.2-.2.3-.1.6.1 1.3.1 2 .1 5.7 0 10.4-3.6 10.4-8.1S17.7 3 12 3 1.6 6.6 1.6 11c0 2.6 1.6 5 4.3 6.5.2.1.3.4.2.6 0 .3-.1.6-.3.9-.4.8-1 1.4-1.6 1.9z"></path>
      </svg>
    </div>
    <textarea 
      className="w-full pl-10 pr-4 py-3 border border-teal-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all min-h-[120px] bg-white text-gray-800"
      placeholder="Tell us about your project..."
      value={formData.message}
      onChange={(e)=>setFromData({...formData,message:e.target.value})}
    />
  </div>
  {errors.message && <p className="mt-1 text-sm text-rose-600">{errors.message}</p>}
</div>
              <div className="pt-4">
                <button 
                  onClick={handleSubmit}
                  className="w-full bg-gradient-to-r from-teal-600 to-teal-400 text-white font-bold py-3 px-6 rounded-lg hover:from-teal-700 hover:to-teal-500 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Send Message
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline-block ml-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
   }

   export default Contactus;