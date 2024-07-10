import "../assets/color.css"
import React, { useEffect, useRef,useCallback } from 'react';
import "./Admin.css"


const Admin = ()=>{

    const [data,setData] = React.useState([])
    const [current,setCurrent]  = React.useState("")
    const [state,setState] = React.useState(false)
    const [message,setMessage] = React.useState("")
 

    React.useEffect(()=>{

        const fetchData = async()=>{

            try {
                const response = await fetch('/message/all')

                const data = await response.json()

                setData(data)
                
            } catch (error) {

                console.log(error.message)
                
            }

           

            


        }


        fetchData()


    },[])

    useEffect(() => {
        const body = document.getElementsByTagName('body')[0];
    
        const toggleForm = (event) => {
          event.preventDefault();
          const isInputField = event.target.tagName.toLowerCase() === 'input';
          const isTextArea = event.target.tagName.toLowerCase() === 'textarea';
  
          if (!isInputField && !isTextArea) {
            body.classList.toggle('form-active');
          }

          if (!isTextArea) {
            setCurrent(event.target.value);
          }

        };

        console.log(current)
    
        document.addEventListener('click', toggleForm);
   
    
        return () => {
          document.removeEventListener('click', toggleForm);
        };

      
      }, []);

      

      const toggleForm = (event)=>{
        event.preventDefault();
        const body = document.getElementsByTagName('body')[0];
    
        const toggleForm = () => {
          body.classList.toggle('form-active');
        };
    
        document.addEventListener('click', toggleForm);
        
     
        

      }


      const handleDelete = async(value) =>{

     // alert(value)

     const result = window.confirm('Are you sure?');
     if (result) {
      try {
        const response = await fetch(`/message/delete/${value}`,{
          method: 'DELETE',
         
         
  
      
  
        })
  
        const data = await response.json()
  
        alert(data.message)

        window.location.reload()
        
       } catch (error) {
  
        console.log(error.message)
        
       }
       
       console.log('Process confirmed');
     } else {
      
       console.log('Process cancelled');
     }

  




      }


      const handleSend =  async(e) =>{

        e.preventDefault()


        //alert("hello")

        const FormData = new URLSearchParams();
        FormData.append("message",  message);
        FormData.append("email", current);
     
        try {
          const response = await fetch('/message/send',{
            method:"Post",
            body: FormData.toString(),
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },

          


         
  
          })

          const data = await response.json()

          alert(data.message)
          
        } catch (error) {

          alert(error.message)
          
        }


       



      }



    return(

        <div className="flex flex-col">
            <div className="text-center mt-5">

            <h1 className='animate-charcter italic text-3xl'>Admin Panel</h1>

            </div>


            <div className="grid grid-cols-6 m-10 gap-4">

                <h2 className=" col-span-2 text-cyan-500">Message</h2>
                <h2 className="col-span-2 text-cyan-500">Sender</h2>
                <h2 className="text-rose-500">Delete</h2>
                <h2 className="text-teal-500">Respond</h2>

            


           

                {
  data.map((message) => (
    <>
      <hr className="col-span-6 border-t-2 border-cyan-300 my-4" />

      <p className="text-cyan-300 col-span-2">{message.message}</p>

      <div className="flex flex-col justify-center col-span-2">
        <p className="text-cyan-300">Name: {message.name}</p>
        <p className="text-cyan-300">Phone: {message.phone}</p>
        <p className="text-cyan-300">Email: {message.email}</p>
      </div>

      <button className="btn btn-outline btn-error" onClick={(event) => { event.stopPropagation(); handleDelete(message._id); }}>Delete</button>

      <button  className="btn btn-outline  btn-success" value={message.email} onclick={toggleForm}>Respond</button>
    </>
  ))
}

            </div>


         
   

 

<form  className="bg-cyan-400 form" style={{borderRadius:"20px",}}>
  <h2 className="text-cyan-700 text-2xl mb-5 ">Response Form</h2>
	<input type="text" name="name" value={current} placeholder={current} disabled className="border-cyan-800 text-cyan-600 name2"/>
	
	<textarea name="notes" value={message} onChange={(e)=>setMessage(e.target.value)} placeholder="Message" className="message2" ></textarea>
	<button className="cancel btn btn-outline btn-error"onclick={toggleForm}>Cancel</button>
	<button className="pay btn btn-outline btn-success text-white" onClick={handleSend}>Send</button>
</form>
         

        </div>


    )


}

export default Admin;