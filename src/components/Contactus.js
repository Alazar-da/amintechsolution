import cImage from '../assets/c3.png';
import "../assets/color.css"

function Contactus() {
    return(
      <div className='ml-10 mr-10 mb-5'>

   
      
      
   
   
       <h1 className="text-4xl text-pretty  text-primary animate-charcter text-center ">Contact Us</h1>

       <div className="flex  mt-5 justify-evenly"> 

       <img src={cImage} style={{borderTopLeftRadius:"40px",borderBottomLeftRadius:"40px"}} alt="Contact us" className="w-1/2" />

       <div>
        
       </div>
     
       <form className="w-1/2" style={{ backgroundColor: "#123957",borderTopRightRadius:"40px",borderBottomRightRadius:"40px" }}>
        <h2 className="text-3xl font-bold text-white italic mb-4 text-center">Get In Touch</h2>
      
        <label className="input input-bordered input-info bg-white flex items-center gap-2 mb-5 m-5">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" /></svg>
  <input type="text" className="grow " placeholder="Name" />
</label>

<label className="input input-bordered input-info flex bg-white items-center gap-2 mb-5 m-5">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
  <input type="text" className="grow" placeholder="Email" />
</label>

<label className="input input-bordered input-info flex bg-white items-center gap-2 mb-10 m-5">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 opacity-70">
  <path d="M12 2C5.373 2 0 6.373 0 12c0 2.77 1.19 5.282 3.086 7.03A11.936 11.936 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm1 17h-2v-2h2v2zm4-4H7v-1h10v1zm0-3H7V8h10v4z" />
</svg>
  <input type="text" className="grow" placeholder="Message" />
</label>

<button className="btn btn-outline btn-accent justify-items-center justify-center ml-10 mb-5 w-20">Send</button>



        </form>

       </div>

       </div>
     
     
   
    );
   }
   
   export default Contactus;