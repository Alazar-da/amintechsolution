import { useState } from 'react';
import "../assets/color.css"
import "../assets/border.css";
import Logo from "../img/logo.svg";


function About() {


   const [buttonText, setButtonText] = useState("Read More..."); //same as creating your state variable where "Next" is the default value for buttonText and setButtonText is the setter function for your state variable instead of setState   
      const Readmore=()=>{
      const less ="Read Less...";
      const more ="Read More...";
       document.querySelector('#readmore').classList.toggle('hidden');
       if(buttonText===more){
         setButtonText(less);
       }
       else{
         setButtonText(more);
       }

      }

    return(

       <main className="container relative">
         <div className="mt-2 flex justify-center " >
             {/* <div className='grid content-center justify-items-center'>
               <h1 className="leading-none text-2xl text-grey-darkest">
                  <a className="no-underline text-grey-darkest hover:text-black" href="#">
                     <img src={Logo} alt='logo'></img>
                  </a>
               </h1>
            </div> */}
            <div className='w-2/3 box'>
               <div className="mt-3">
                  <div className='text-center'>
                  <h2 className="font-bold text-center lg:text-4xl text-2xl animate-charcter">About us</h2>

                  </div>
                
               </div>
               <div className="mt-3 text-center special">
                  <p className="font-bold text-emerald-400 text-2xl" > Welcome to our software development company!</p>
               </div>
               <div className="mt-3">
                  <p className="text-black">
                     At MINA TECH, we are passionate about creating innovative solutions that drive digital transformation for businesses around the world. With a team of highly skilled developers, designers, and technology enthusiasts, we strive to deliver exceptional software products and services that exceed our clients' expectations.
                  </p>
                  <p className="text-black md:flex mt-1 hidden">
                     Our mission is to empower businesses by harnessing the power of technology.
                     We believe that software, web, and mobile applications have the potential to revolutionize industries, streamline processes, and enhance user experiences. Therefore, we work closely with our clients to understand their unique challenges and goals, and then leverage our expertise to develop tailored solutions that address their specific needs.
                    
                  </p>
                  <p className="text-black mt-1 hidden" id="readmore">
                  At the core of our company is a commitment to quality and excellence. We adhere to industry best practices and employ the latest development methodologies to ensure that our projects are executed flawlessly. Our team stays up-to-date with the latest trends and technologies, allowing us to deliver cutting-edge solutions that give our clients a competitive edge in the market.
                     Collaboration is key to our success. We believe in building strong partnerships with our clients, working hand-in-hand throughout the development process. We value open communication and transparency, ensuring that our clients are involved at every stage and have full visibility into the progress of their projects. Our goal is to build long-term relationships based on trust, reliability, and mutual success.
                  </p>
                  <button className="text-primary hover:text-green btn-read" style={{"color":"blue"}} id="change" onClick={Readmore}>
                  {buttonText}
                  </button>
               </div>
            </div>
         </div>
      </main>

    );
   }

   export default About;