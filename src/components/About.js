import { useState } from 'react';

function About() {

   const [buttonText, setButtonText] = useState("Read More..."); //same as creating your state variable where "Next" is the default value for buttonText and setButtonText is the setter function for your state variable instead of setState   
      const Readmore=()=>{
      const less ="Read Less...";
      const more ="Read More...";
       document.querySelector('#readmore').classList.toggle('hidden');
       if(buttonText==more){
         setButtonText(less);
       }
       else{
         setButtonText(more);
       }

      }
    return(
       <main className="grid grid-cols-6 bg-third px-5 py-5 md:pl-[85px] lg:h-[600px]">
         <div className="col-start-1 lg:col-end-5 col-end-7 mt-5">
            <h2 className="font-bold lg:text-3xl text-2xl">About us</h2>
         </div>
         <div className="col-start-1 lg:col-end-5 col-end-7 mt-5">
            <p className="font-bold text-1xl text-textColor"> Welcome to our software, web, and mobile development company!</p>
         </div>
         <div className="col-start-1 lg:col-end-5 col-end-7 mt-5">
            <p className="text-textColor">
               At AMINTECH, we are passionate about creating innovative solutions that drive digital transformation for businesses around the world. With a team of highly skilled developers, designers, and technology enthusiasts, we strive to deliver exceptional software products and services that exceed our clients' expectations.
            </p>
            <p className="text-textColor md:flex mt-1 hidden" id="readmore">
               Our mission is to empower businesses by harnessing the power of technology.
               We believe that software, web, and mobile applications have the potential to revolutionize industries, streamline processes, and enhance user experiences. Therefore, we work closely with our clients to understand their unique challenges and goals, and then leverage our expertise to develop tailored solutions that address their specific needs.
               At the core of our company is a commitment to quality and excellence. We adhere to industry best practices and employ the latest development methodologies to ensure that our projects are executed flawlessly. Our team stays up-to-date with the latest trends and technologies, allowing us to deliver cutting-edge solutions that give our clients a competitive edge in the market.
            </p>
            <p className="text-textColor mt-1 md:flex hidden" id="readmore">
               Collaboration is key to our success. We believe in building strong partnerships with our clients, working hand-in-hand throughout the development process. We value open communication and transparency, ensuring that our clients are involved at every stage and have full visibility into the progress of their projects. Our goal is to build long-term relationships based on trust, reliability, and mutual success.
            </p>
            <button className="text-black hover:text-orange md:hidden" id="change" onClick={Readmore}>
              {buttonText}
            </button>
         </div>
       </main>
    );
   }

   export default About;